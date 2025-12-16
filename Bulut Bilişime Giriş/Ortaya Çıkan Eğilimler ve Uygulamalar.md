# Ortaya Çıkan Eğilimler ve Uygulamalar

## Hibrit Bulut (Hybrid Cloud) ve Çoklu Bulut (Multi-Cloud)

### Tanımlar

- **Hibrit bulut**: Bir organizasyonun kendi özel bulutunu (private cloud) ve üçüncü taraf kamu bulutunu (public cloud) birleştirerek tek bir altyapı (infrastructure) oluşturmasını sağlar.
- **Çoklu bulut**: Farklı hizmet sağlayıcılarından (service providers) çeşitli bulut modellerini (cloud models) benimseyen bir stratejidir.

### Kullanım Senaryoları (Use Cases)

- **Bulut Ölçeklendirme (Cloud Scaling)**: Örneğin, bir çiçek teslimat hizmeti, belirli tatillerde artan kullanıcı yükünü (user load) karşılamak için bulut kaynaklarını (cloud resources) kullanarak ölçeklenebilir.
- **Bileşik Bulut (Composite Cloud)**: Uygulamalar (applications) farklı bulut ortamları (cloud environments) arasında dağıtılarak, örneğin, Avrupa'daki kullanıcılar için bazı bileşenler (components) yerel sunucularda (on-premise) kalırken, Kuzey Amerika'daki kullanıcılar için diğer bileşenler bulut platformuna (cloud platform) taşınabilir.

### Havayolu ve Seyahat Endüstrisi Örneği

- **Modernizasyon (Modernization)**: Havayolu şirketleri, mobil uygulamalar (mobile applications) geliştirerek kullanıcı deneyimlerini (user experiences) iyileştirmektedir.
- **Veri ve Yapay Zeka (Data and AI)**: Tarihsel veriler (historical data) kullanılarak, makine öğrenimi (machine learning) ile bakım (maintenance) sorunları önceden tahmin edilebilir.

> Hibrit çoklu bulut stratejisi, belirli bir bulut platformuna (cloud platform) bağımlılığı önlemek ve iş yüklerini (workloads) esnek bir şekilde yönetmek için benimsenmektedir.

## Mikroservis Mimarisi (Microservices Architecture)

Mikroservis mimarisi, uygulama geliştirme üzerindeki etkilerini ve bu yaklaşımın nasıl çalıştığını açıklamaktadır.

### Mikroservis Mimarisi Nedir?

- Mikroservis mimarisi, tek bir uygulamanın (application) birçok bağımsız ve dağıtılabilir küçük bileşen (components) veya hizmet (services) ile oluşturulmasıdır.
- Bu hizmetler, kendi yığınları (stacks) üzerinde çalışır ve API'ler (APIs), olay akışı (event streaming) ve mesaj aracıları (message brokers) aracılığıyla birbirleriyle iletişim kurar.

### Geliştirici Çalışma Şekli

- **Geçmişte**: Yazılımlar büyük monolitik uygulamalar (monolithic applications) olarak inşa edilirdi; bu, geliştiricilerin (developers) uzun süreler boyunca tek bir kod tabanı (code base) üzerinde çalışmasını gerektiriyordu.
- **Günümüzde**: Geliştiriciler bağımsız küçük ekipler (independent teams) halinde çalışarak, mikroservisler (microservices) adı verilen daha küçük kod parçaları (code snippets) yazmaktadır.

### Mikroservis Örneği: Dream Game

- Dream Game, kullanıcıların içerik (content) aramasını kolaylaştırmak için mikroservisler kullanmaktadır.
- İçerik kataloğu (Content Catalog), arama fonksiyonu (Search Function) ve öneri (Recommendations) mikroservisleri birlikte çalışarak kullanıcı deneyimini (user experience) geliştirmektedir.
- Bu mikroservisler, hizmet keşfi (Service Discovery) ile birbirlerini bulur ve API'ler aracılığıyla iletişim kurar.

> Mikroservis yaklaşımı, geliştiricilerin uygulamaları (applications) hızlı bir şekilde yenilikçi hale getirmesine olanak tanır ve kullanıcıların (users) ilgi alanlarına odaklanmalarını sağlar.

## Sunucusuz Bilişim (Serverless Computing)

### Sunucusuz Bilişim Nedir?

- Sunucusuz, geliştiricilerin (developers) uygulama yığınlarını (application stacks) yönetme sorumluluğunu bulut sağlayıcılarına (cloud providers) devrettiği bir yaklaşımdır.
- Bu, geliştiricilerin kod (code) ve iş mantığı (business logic) üzerinde daha fazla odaklanmasını sağlar.
- Sunucusuz, fiziksel veya sanal sunucuların (servers) olmadığını değil, altyapının (infrastructure) yönetiminin kullanıcıdan alındığını ifade eder.

### Kaynak Yönetimi

- Sunucusuz ortam, uygulamalar için ihtiyaç duyulan kaynakları (resources) talep üzerine tahsis eder.
- Bu model, sunucuların (servers) önceden yapılandırılmasını veya yazılım yüklenmesini gerektirmez.
- Kod, yalnızca talep üzerine çalıştırılır ve gelen istek sayısına göre otomatik olarak ölçeklenir (scales).

### Maliyet Avantajları

- Kullanıcılar, yalnızca kullandıkları kaynaklar için ödeme yapar (pay only for resources used), bu da sanal sunucularda (virtual servers) olduğu gibi boşta kalan kapasite (idle capacity) için ödeme yapmamalarını sağlar.

### Uygulama Senaryoları

- Sunucusuz mimari, kısa süreli (short-running) ve durumsuz (stateless) işlevler (functions) için uygundur.
- Örnek: Metin dosyalarını çeviren ve bulut tabanlı depolama hizmetine (cloud storage) kaydeden bir uygulama senaryosu (application scenario).
- Sunucusuz mimari, veri işleme (data processing), IoT (Internet of Things), mikro hizmetler (microservices) ve mobil arka uçlar (mobile backends) gibi kullanım durumları (use cases) için idealdir.

### Zorluklar

- Uzun süreli işlemler (long-running processes) için sunucusuz mimari, geleneksel sunucu ortamlarını (traditional server environments) yönetmekten daha karmaşık ve maliyetli olabilir.
- Sunucusuz mimariler, belirli bir bulut sağlayıcısına (cloud provider) bağımlı olabilir ve bu da potansiyel olarak tedarikçi kilitlenmesine (vendor lock-in) yol açabilir.

## Bulut Yerel Uygulamalar (Cloud Native Applications)

Bulut yerel uygulamalar, başlangıçtan itibaren yalnızca bulut ortamında (cloud environment) çalışacak şekilde geliştirilmiş uygulamalardır. Mevcut bir uygulama, bulut yerel ilkeler (cloud native principles) ile yeniden yapılandırılabilir.

### Bulut Yerel Uygulamaların Özellikleri

- Bu uygulamalar, bağımsız olarak ölçeklenebilen (scalable) ve otomasyon (automation) süreçleriyle güncellenebilen mikro hizmetlerden (microservices) oluşur.

### Mikro Hizmetler

- Her mikro hizmet, uygulamanın (application) bir parçasını temsil eder ve bağımsız olarak geliştirilip dağıtılabilir.
- Örnek: Bir seyahat web sitesinde (travel website) uçuşlar, oteller ve araçlar gibi her konu kendi mikro hizmeti olarak ele alınabilir.
- Bu bağımsızlık, kullanıcı deneyimini (user experience) etkilemeden sık sık güncellemeler (updates) yapılmasına olanak tanır.

### Geliştirme İlkeleri

Geliştiriciler, bulut yerel uygulamalar oluştururken belirli geliştirme ilkelerine (development principles) uymalıdır:

1. **Mikro hizmet mimarisi (microservices architecture)**: Uygulamalar tek işlevli mikro hizmetlere (single-function microservices) bölünmelidir.
2. **Konteynerler (containers)**: Maksimum esneklik (flexibility), ölçeklenebilirlik (scalability) ve taşınabilirlik (portability) için konteynerler kullanılmalıdır.
3. **Agile yöntemler (Agile methods)**: Kullanıcı geri bildirimine (user feedback) dayalı hızlı, yinelemeli güncellemeler (iterative updates) için Agile yöntemler benimsenmelidir.
