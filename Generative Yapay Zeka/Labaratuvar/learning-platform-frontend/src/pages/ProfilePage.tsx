import { useMemo, useState } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { userService } from "../api/userService";

export function ProfilePage() {
  const auth = useAuth();
  const [displayName, setDisplayName] = useState(auth.user?.displayName ?? "");
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileSuccess, setProfileSuccess] = useState<string | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  const progressSummary = useMemo(() => {
    // Placeholder: real summary is expected to come from Progress/Analytics service.
    return { completedCount: 0, inProgressCount: 0, mastery: "medium" as const };
  }, []);

  return (
    <div className="grid gap-6">
      <Card title="Profile">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">Email</div>
            <div className="mt-1 text-sm text-slate-200">{auth.user?.email}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">Progress</div>
            <div className="mt-1 text-sm text-slate-200">
              {progressSummary.completedCount} completed • {progressSummary.inProgressCount} in
              progress • mastery {progressSummary.mastery}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Update display name">
        <form
          className="grid gap-4 md:max-w-md"
          onSubmit={async (e) => {
            e.preventDefault();
            setSavingProfile(true);
            setProfileError(null);
            setProfileSuccess(null);
            try {
              await userService.updateMe({ displayName });
              await auth.refreshMe();
              setProfileSuccess("Updated.");
            } catch {
              setProfileError("Could not update profile.");
            } finally {
              setSavingProfile(false);
            }
          }}
        >
          <Input
            label="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          {profileError ? <div className="text-sm text-rose-300">{profileError}</div> : null}
          {profileSuccess ? <div className="text-sm text-emerald-300">{profileSuccess}</div> : null}
          <Button type="submit" disabled={savingProfile}>
            {savingProfile ? "Saving..." : "Save"}
          </Button>
        </form>
      </Card>

      <Card title="Change password">
        <form
          className="grid gap-4 md:max-w-md"
          onSubmit={async (e) => {
            e.preventDefault();
            setSavingPassword(true);
            setPasswordError(null);
            setPasswordSuccess(null);
            try {
              await userService.changePassword({ currentPassword, newPassword });
              setCurrentPassword("");
              setNewPassword("");
              setPasswordSuccess("Password updated.");
            } catch {
              setPasswordError("Could not change password. Check your current password.");
            } finally {
              setSavingPassword(false);
            }
          }}
        >
          <Input
            label="Current password"
            type="password"
            autoComplete="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <Input
            label="New password"
            type="password"
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            hint="10+ characters recommended."
            required
          />
          {passwordError ? <div className="text-sm text-rose-300">{passwordError}</div> : null}
          {passwordSuccess ? (
            <div className="text-sm text-emerald-300">{passwordSuccess}</div>
          ) : null}
          <Button type="submit" disabled={savingPassword}>
            {savingPassword ? "Saving..." : "Change password"}
          </Button>
        </form>
      </Card>
    </div>
  );
}


