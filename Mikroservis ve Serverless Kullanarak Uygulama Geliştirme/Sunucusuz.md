# Sunucusuz Bilişim

## Sunucusuz Bilişim Nedir?

Sunucusuz bilişim, uygulamaların sunucu yönetimi gerektirmeden inşa edilip çalıştırılmasını ifade eder. Geliştiriciler, uygulama iş mantığına odaklanarak altyapı yönetimini bulut sağlayıcılarına devreder.

## Sunucusuz Bilişimin Tarihçesi

- **Geleneksel bilişim**: Fiziksel makinelerle başlar ve uzun kurulum süreleri ile sınırlıdır.
- **Sanallaştırma teknolojisi**: Bulut bilişimde daha hızlı dağıtım ve ölçeklenebilirlik sağlar.
- **Sunucusuz uygulamalar**: Yalnızca sunucusuz mimari gerektirir ve milisaniyeler içinde dağıtılabilir.

## Sunucusuz Bilişimin Özellikleri

- Sunucusuz, sunucu yönetimi gerektirmeyen bir yapıdır.
- **Otomatik ölçeklenebilirlik**: Talep arttıkça otomatik olarak ölçeklenir.
- **Olay odaklı çalışma**: İşlemler olaylara göre tetiklenir.
- **Kullanım bazlı faturalama**: Yalnızca kullanılan kaynaklar için ödeme yapılır.

## Sunucusuz Bilişimin Avantajları

- Altyapı kurulum ve bakım gereksinimleri yoktur; bulut sağlayıcıları bu işlemleri yönetir, bu da maliyetleri düşürür.
- Geliştiriciler, uygulamalara odaklanarak daha hızlı geliştirme yapabilir ve kaynak israfını önleyebilir.

## Sunucusuz Bilişimin Kısıtlamaları

- Uzun süreli işlemler için maliyet etkinliği azalır; geleneksel ortamlar daha uygun olabilir.
- **Soğuk başlangıç (Cold Start)** sorunları: İlk çalıştırmada gecikme yaşanabilir.
- Güvenlik endişeleri: Üçüncü taraf sağlayıcılara bağımlılık.

## Sunucusuz ve Konteynerlerin Karşılaştırılması

### Sunucusuz

- Yalnızca kullanıldığında ödeme yapma imkanı sunar.
- Ölçeklenebilirlik bulut sağlayıcıları tarafından yönetilir.
- Sunucu yönetimi gerekmez.

### Konteynerler

- Yerel ortamda test yapmayı kolaylaştırır.
- Zaman kritik uygulamalar için daha düşük gecikme süresine sahiptir.
- Daha fazla kontrol ve esneklik sunar.

## FaaS (Function as a Service) Nedir?

**FaaS**, olaylara yanıt olarak kod çalıştırmanıza olanak tanıyan bir bulut bilişim hizmetidir ve karmaşık altyapı gerektirmez. Sunucusuz bilişimin bir alt kümesi olan FaaS, uygulamaları birden fazla işlev şeklinde oluşturur ve bu işlevler herhangi bir programlama dilinde yazılabilir.

### FaaS'ın Avantajları

- Yalnızca işlevlerin çalıştığı süre için ücretlendirilir, bu da maliyetleri düşürür.
- İşlevler, talep düştüğünde otomatik olarak ölçeklenebilir ve yüksek kullanılabilirlik sunar.

## Sunucusuz Yığın Bileşenleri

Sunucusuz yığın, aşağıdaki bileşenlerden oluşur:

- **FaaS (Function as a Service)**: Sunucusuz işlevleri çalıştırır.
- **Backend-as-a-Service (BaaS)**: Arka uç servisleri sağlar.
- **API Gateway**: İstekleri yönetir ve yönlendirir.

Olay talepleri, API Gateway üzerinden ilgili işlevlere yönlendirilir ve sonuçlar istemciye geri gönderilir.

## Serverless Framework Nedir?

- Ücretsiz ve açık kaynaklı bir web çerçevesidir, Node.js ile yazılmıştır.
- AWS, Microsoft Azure, Google Cloud Platform gibi çeşitli sağlayıcılarla çalışabilir.

### Fonksiyonlar ve Olaylar

- **Fonksiyonlar**: Bulutta dağıtılan ve genellikle tek bir görevi yerine getiren kod parçalarıdır.
- **Olaylar**: Fonksiyonları tetikleyen durumlar olup, örneğin bir HTTP isteği veya S3'e yüklenen yeni bir dosya olabilir.

### Hizmet ve Yapılandırma

- **Hizmet**: Bir proje dosyası gibi düşünülebilir ve `serverless.yml` dosyası ile yapılandırılır.
- `serverless.yml` dosyasında fonksiyonlar, olaylar ve kaynaklar tanımlanır ve dağıtım sırasında hepsi bir arada yüklenir.

## Sunucusuz Platformlar

### AWS Lambda

- Amazon'un sunucusuz, olay odaklı bir hesaplama hizmetidir; sunucu yönetimi gerektirmeden kod çalıştırmanıza olanak tanır.
- Kullanım başına ödeme modeli ile çalışır ve çeşitli kullanım senaryoları için uygundur.

### Google Cloud Functions

- Geliştiricilere basit bir deneyim sunar; kodunuzu yazarsınız ve Google Cloud, altyapıyı otomatik olarak yönetir.
- Firebase ile gerçek zamanlı veri senkronizasyonu sağlar ve asenkron iş yüklerini destekler.

### Microsoft Azure Functions

- Daha az kod yazma ve altyapı yönetimini azaltma imkanı sunar; çeşitli programlama dillerini destekler.
- Tüketim planı ile yalnızca işlevler çalıştığında ödeme yaparsınız ve çeşitli kullanım senaryoları için uygundur.

### IBM Cloud Functions

- Diğer hizmetlerle kolay entegrasyon sağlar ve yalnızca kullanılan süre için ödeme alır.
- Yüksek kullanılabilirlik sunar ve IBM Watson gibi güçlü hizmetlerle entegre çalışır.

### Knative

- Kubernetes üzerinde çalışan açık kaynaklı bir platformdur; satıcı bağımlılığını önler.
- Herhangi bir bulut ortamında dağıtım yapılabilir ve trafik kaydırma stratejileri uygulanabilir.
