# MikroServislere Giriş

## On İki Faktörlü Uygulama Metodolojisi

Bu metodoloji, bulut tabanlı ve mikroservis mimarisiyle geliştirilen modern uygulamaların daha taşınabilir, yönetilebilir ve ölçeklenebilir olmasına yardımcı olmayı amaçlar. Her bir faktör, uygulamanın farklı bir yönünü düzenler ve geliştirme, dağıtım ve işletim süreçlerini optimize etmeyi hedefler.

### Faktör 1: Kod Tabanı

Her bir uygulama (veya mikroservis), kendine ait tek bir kod tabanına sahip olmalı ve bu kod tabanı genellikle bir kaynak kontrol sisteminde (örneğin Git) tutulmalıdır. Birden fazla uygulama aynı kod tabanını paylaşmamalı, aynı uygulamanın birden fazla dağıtımı (ör. farklı ortamlar için) ise bu tek kod tabanından çıkarılmalıdır.

### Faktör 2: Bağımlılıklar

Tüm harici bağımlılıklar (kütüphaneler, frameworkler, araçlar) doğrudan projede açıkça belirtilmeli ve kod tabanından ayrı tutulmalıdır. Paket yönetim sistemleri (ör. npm, pip) kullanılarak her ortamda bağımlı olunan bileşenlerin tutarlı şekilde kurulması sağlanmalıdır. Bu, dağıtımdan önce eksik veya farklı sürümde bağımlılıkların oluşmasını engeller.

## Dağıtım Aşaması

### Faktör 3: Konfigürasyon

Konfigürasyon, uygulamanın farklı dağıtımlarında değişebilecek tüm ayarları (ör. veritabanı adresi, API anahtarları) kapsar. Bu tür konfigürasyonlar koddan ayrılmalı ve çevre değişkenleri (environment variables) üzerinden dışarıdan yönetilmelidir. Böylece, aynı kod tabanıyla ama farklı konfigürasyonlarla test, üretim veya geliştirme ortamlarına dağıtım kolaylaşır.

### Faktör 4: Arka Uç Hizmetleri

Uygulamanın kullandığı arka uç servisler (ör. veri tabanları, message queue’lar, üçüncü parti API’ler) her zaman ek hizmetler olarak görülmeli ve yerel ya da harici olup olmaması fark etmeksizin aynı şekilde erişilmelidir. Hizmetlerin adresleri ve bağlantı bilgileri konfigürasyon ile belirlenir; böylece hizmet değişimi kolaylaşır.

## İşletim (Runtime/Operation) Aşaması

### Faktör 8: Eşzamanlılık

Uygulama, artan iş yükünü karşılayabilmek için stateless (durumsuz) süreçler halinde ve gerektiğinde çoğaltılarak çalışabilecek şekilde tasarlanmalıdır. Her bir işlem bağımsız çalışır; böylece yük dengeleme, otomatik ölçeklendirme ve hızlı failover (arıza sırasında başka bir sürece geçiş) mümkün olur.

### Faktör 12: Yönetim Süreçleri

Yönetim süreçleri, uygulamanın ana işlevinden bağımsız olarak, sistemin bakımı ya da veri migrasyonu gibi tek seferlik veya periyodik olarak çalışan komutları içerir. Bu işlemler uygulamanın çalışma anında geçici olarak başlatılır, uygulama ile tam olarak entegre edilmez, böylece ana uygulamanın akışını bozmazlar. Yönetim süreçlerine örnek olarak veritabanı migrasyonu veya toplu veri güncellemeleri verilebilir.

## Mikro Hizmet Mimarisi

Mikro hizmetler, tek bir uygulamanın birçok bağımsız ve gevşek bağlı küçük hizmetlerden oluştuğu bir yaklaşımdır. Her hizmet, kendi teknoloji yığınına ve veri yönetim modeline sahip olabilir; bu, ekiplerin farklı programlama dilleri kullanmasına olanak tanır.

### Mikro Hizmetlerin Avantajları

- Hizmetler arasında bağımlılık olmadığı için, yeni özellikler eklemek daha kolaydır; bu, tüm uygulamayı etkilemeden güncellemeler yapmayı sağlar.
- Bireysel bileşenler, talebe göre bağımsız olarak ölçeklenebilir; bu da maliyetleri ve kaynak israfını azaltır.

### Ölçeklenebilirlik ve İletişim

- Mikro hizmetler, REST API'leri, olay akışı ve mesaj aracıları aracılığıyla birbirleriyle iletişim kurar.
- Yatay ölçekleme, yalnızca ihtiyaç duyulan bileşenlerin ölçeklendirilmesini sağlar, bu da daha az altyapı gerektirir.

## Monolitik Tasarım

- Monolitik uygulama, tüm işlevselliği tek bir süreç içinde barındırır ve iç katmanlar veya kütüphanelerle yönetilir.
- Zamanla karmaşıklaşan bu tasarım, yeni teknolojilere uyum sağlamayı zorlaştırabilir.

## Servis Yönelimli Mimari (SOA)

- SOA, hizmet sağlayıcı ve tüketici yaklaşımıyla tasarlanır ve her hizmet, belirli bir işlevselliği temsil eder.
- SOA'nın üç bileşeni vardır: arayüz, sözleşme ve uygulama; bu bileşenler, güvenilirliği artırır ancak karmaşıklığı da beraberinde getirebilir.

## Mikroservis Mimarisi

- Mikroservisler, bağımsız olarak çalışabilen ve genellikle birbirleriyle veri paylaşmayan bileşenlerden oluşur.
- Bu mimari, geliştirme kolaylığı ve ölçeklenebilirlik sunar, ancak güvenlik ve hata ayıklama gibi zorluklar da içerir.

## Mikro Hizmetler ve Desenler

Mikro hizmetler, büyük uygulamaları daha küçük, bağımsız olarak yönetilebilen parçalara ayırarak geliştirilir.

### Örnek Desenler

- **Tek Sayfa Uygulama (SPA)**: Kullanıcıların tek bir arayüz üzerinden etkileşimde bulunmasını sağlar ve sayfa yenilemesi olmadan dinamik hizmet çağrıları ile çalışır. Ancak, farklı kanallarda (mobil ve web) kullanıcı deneyimi açısından zayıf sonuçlar verebilir.
- **Backend for Frontend (BFF)**: Kullanıcı deneyimi ile kaynaklar arasında bir katman ekleyerek, her bir kullanıcı arayüzü için özelleştirilmiş arka uçlar oluşturur. Bu desen, mobil ve web uygulamaları için ayrı arka uçlar geliştirilmesine olanak tanır.
- **Strangler Deseni**: Monolitik bir uygulamanın aşamalı olarak yeniden yapılandırılmasını sağlar. Uygulama, yeni mikro hizmet tabanlı uygulamalar ile yan yana var olur ve zamanla eski uygulama devre dışı bırakılır.

## Özet

Mikro hizmetler, büyük uygulamaları daha küçük, bağımsız olarak yönetilebilen parçalara ayırarak daha iyi ölçeklenebilirlik ve bakım sağlar. Örnek desenler arasında SPA, BFF, Strangler ve hizmet keşif desenleri bulunmaktadır.