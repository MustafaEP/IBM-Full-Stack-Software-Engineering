import { useEffect, useRef } from "react";

export function useEventSource<T>(input: {
  url: string | null;
  enabled: boolean;
  withCredentials?: boolean;
  onEvent: (event: T) => void;
  onError?: () => void;
}) {
  const onEventRef = useRef(input.onEvent);
  onEventRef.current = input.onEvent;

  const onErrorRef = useRef(input.onError);
  onErrorRef.current = input.onError;

  useEffect(() => {
    if (!input.enabled || !input.url) return;

    const es = new EventSource(input.url, { withCredentials: input.withCredentials ?? false });

    es.onmessage = (msg) => {
      try {
        const parsed = JSON.parse(msg.data) as T;
        onEventRef.current(parsed);
      } catch {
        // ignore malformed event
      }
    };

    es.onerror = () => {
      onErrorRef.current?.();
      es.close();
    };

    return () => {
      es.close();
    };
  }, [input.enabled, input.url, input.withCredentials]);
}


