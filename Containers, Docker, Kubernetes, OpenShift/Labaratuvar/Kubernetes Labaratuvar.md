# Kubernetes Laboratuvarı

## 1. Deployment Oluşturma

### Deployment Oluştur

Nginx görüntüsünü kullanarak `my-deployment1` adında bir Deployment oluşturun:

```bash
kubectl create deployment my-deployment1 --image=nginx
```

**Komut Açıklaması:**

- `kubectl`: Kubernetes API'si ile etkileşimde bulunmak için kullanılan komut satırı aracı
- `create deployment`: Kubernetes'e yeni bir Deployment oluşturmak istediğinizi bildirir. Deployment, belirli sayıda kopyanın çalışmasını ve güncellenmesini sağlayan bir Kubernetes nesnesidir
- `my-deployment1`: Oluşturulan Deployment'ın adıdır
- `--image=nginx`: Bu Deployment tarafından yönetilen Pod'lar için kullanılan konteyner görüntüsünü belirtir. Nginx görüntüsü, popüler bir web sunucusu ve ters proxy sunucusudur

## 2. Deployment Güncelleme

### Gerekli Ayarları Uygulamak için Deployment'ı Yamanlama

Deployment yapılandırmasını güncellemek için aşağıdaki komutu çalıştırın:

```bash
kubectl patch deployment my-deployment1 --type=json -p='[
  {
    "op": "replace",
    "path": "/spec/template/spec/containers/0/image",
    "value": "nginxinc/nginx-unprivileged:latest"
  },
  {
    "op": "add",
    "path": "/spec/template/spec/containers/0/ports",
    "value": [{"containerPort": 8080}]
  },
  {
    "op": "add",
    "path": "/spec/template/spec/securityContext",
    "value": {
      "runAsNonRoot": true,
      "runAsUser": 101,
      "seccompProfile": {"type": "RuntimeDefault"}
    }
  },
  {
    "op": "add",
    "path": "/spec/template/spec/containers/0/securityContext",
    "value": {
      "allowPrivilegeEscalation": false,
      "capabilities": {"drop": ["ALL"]}
    }
  }
]'
```

Bu komut, gerekli yapılandırma ile Deployment'ı günceller.

## 3. Service Oluşturma

### Deployment'ı Bir Hizmet Olarak Yayınlama

Deployment'ı NodePort tipinde bir service olarak expose edin:

```bash
kubectl expose deployment my-deployment1 --port=80 --type=NodePort --name=my-service1
```

### Hizmetleri Listeleme

Varsayılan ad alanındaki tüm hizmetleri listeleyin. Hizmetler, bir dizi pod'a erişim için sabit bir IP adresi ve DNS adı sağlar:

```bash
kubectl get services
```

## 4. Pod İşlemleri

### Pod'ların Listesini Alma

```bash
kubectl get pods
```

### Etiketleri Gösterme

`<pod-name>` kısmını gerçek pod adı ile değiştirin:

```bash
kubectl get pod <pod-name> --show-labels
```

**Örnek:**

```bash
kubectl get pod my-deployment1-794bb78455-x8t9z --show-labels
```

### Pod'u Etiketleme

`<pod-name>` kısmını gerçek pod adı ile değiştirin:

```bash
kubectl label pods <pod-name> environment=deployment
```

**Örnek:**

```bash
kubectl label pods my-deployment1-794bb78455-x8t9z environment=deployment
```

Bu komut, Kubernetes'te belirli bir pod'u `environment=deployment` anahtar-değer çifti ile etiketlemek için kullanılır. Bu etiket, pod'ları dağıtım ortamlarına göre kategorize etmeye ve yönetmeye yardımcı olur, böylece küme içindeki Kubernetes nesnelerini organize etmek ve seçmek daha kolay hale gelir.

### Etiketleri Tekrar Gösterme

```bash
kubectl get pod <pod-name> --show-labels
```

**Örnek:**

```bash
kubectl get pod my-deployment1-794bb78455-x8t9z --show-labels
```

## 5. Test Pod Oluşturma

### Nginx İmajını Kullanarak Bir Test Pod'u Çalıştırma

```bash
kubectl run my-test-pod --image=nginxinc/nginx-unprivileged:latest --restart=Never --dry-run=client -o yaml | kubectl patch -f - --dry-run=client -o yaml --type=json -p='[
  {
    "op": "add",
    "path": "/spec/securityContext",
    "value": {
      "runAsNonRoot": true,
      "runAsUser": 101,
      "seccompProfile": {"type": "RuntimeDefault"}
    }
  },
  {
    "op": "add",
    "path": "/spec/containers/0/securityContext",
    "value": {
      "allowPrivilegeEscalation": false,
      "capabilities": {"drop": ["ALL"]}
    }
  }
]' | kubectl apply -f -
```

Bu komut, Kubernetes'e `my-test-pod` adında bir pod oluşturmasını söyler ve nginx imajını kullanır. `--restart=Never` parametresi, pod'un herhangi bir nedenle durursa otomatik olarak yeniden başlamayacağını belirtir.

### Logları Gösterme

```bash
kubectl logs my-deployment1-794bb78455-x8t9z
```

**Not:** `<pod-name>` kısmını gerçek pod adı ile değiştirin.

## 6. StatefulSet Oluşturma

### StatefulSet YAML Dosyası

`statefulset.yaml` dosyasını açın, aşağıdaki kodu ekleyin ve dosyayı kaydedin:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-statefulset
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 101
        fsGroup: 101
        seccompProfile:
          type: RuntimeDefault
      containers:
      - name: nginx
        image: nginxinc/nginx-unprivileged:latest
        ports:
        - containerPort: 8080
          name: web
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```

### YAML Dosyası Açıklaması

- **`apiVersion: apps/v1` ve `kind: StatefulSet`**: Kaynağı StatefulSet olarak, stable apps/v1 API'sini kullanarak tanımlar

- **`metadata.name: my-statefulset`**: StatefulSet'e bir isim verir

- **`spec.serviceName: "nginx"`**: StatefulSet'i nginx adında bir başsız Servis ile ilişkilendirir

- **`spec.replicas: 3`**: Üç pod kopyası oluşturur

- **`spec.selector.matchLabels`**: StatefulSet'in `app: nginx` etiketiyle işaretlenmiş pod'ları yönetmesini sağlar

- **`spec.template`**: Pod yapısını tanımlar:
  - **`metadata.labels`**: Tüm pod'lara `app: nginx` etiketini atar
  - **`spec.securityContext`**: Gerekli çalışma zamanı kullanıcı, grup ve profil ayarlarını belirler
  - **`containers`**: Nginx konteynerini, imajını ve 8080 portundaki port eşlemesini yapılandırır ve konteyner düzeyinde güvenlik ayarlarını uygular

- **`volumeClaimTemplates`**: Her bir kopya için `www` adında bir PersistentVolumeClaim oluşturur, her biri 1 Gi depolama isteğinde bulunur ve ReadWriteOnce erişim moduna sahiptir

### StatefulSet Yapılandırmasını Uygulama

```bash
kubectl apply -f statefulset.yaml
```

Bu komut, Kubernetes'e YAML dosyasında tanımlanan kaynakları oluşturmasını söyler.

### StatefulSet Doğrulama

StatefulSet'in oluşturulduğunu doğrulayın:

```bash
kubectl get statefulsets
```
