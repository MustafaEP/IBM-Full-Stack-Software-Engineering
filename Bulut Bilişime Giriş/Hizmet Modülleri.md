# Hizmet Modülleri

Bu içerik, bulut bilişimin (cloud computing) üç ana hizmet modelini (service models) tanıtmaktadır: **Altyapı Hizmeti (Infrastructure as a Service - IaaS)**, **Platform Hizmeti (Platform as a Service - PaaS)** ve **Yazılım Hizmeti (Software as a Service - SaaS)**.

## Altyapı Hizmeti (Infrastructure as a Service - IaaS)

### IaaS Nedir?

- IaaS, sanallaştırılmış (virtualized) hesaplama (computing), ağ (networking) ve depolama (storage) kaynakları sunar.
- Kullanıcı, sistem yöneticisi (system admin) olarak tanımlanır ve kaynakları istediği gibi yapılandırabilir.

### IaaS Modeli

- IaaS, temel hesaplama (compute), ağ (network) ve depolama (storage) kaynaklarını talep üzerine (on-demand) sunan bir bulut bilişim (cloud computing) modelidir.
- Kullanıcılar, sanal makineler (virtual machines - VMs) oluşturabilir ve bunları kendi tercih ettikleri işletim sistemi (operating system) ile kullanabilirler.

### Bulut Altyapısının Temel Bileşenleri

- **Fiziksel Veri Merkezleri (Physical Data Centers)**: IaaS sağlayıcıları, büyük veri merkezlerini yönetir ve bu merkezler, çeşitli hizmet katmanlarını destekleyen fiziksel makineleri içerir.
- **Hesaplama (Compute)**: Kullanıcılar, istenen hesaplama, bellek (memory) ve depolama kaynakları ile sanal örnekler (instances) oluşturabilirler.

### IaaS Kullanım Senaryoları

- **Hızlı Uygulama Geliştirme**: Ekipler, test ve geliştirme ortamlarını daha hızlı kurarak yeni uygulamalar (applications) geliştirebilirler.
- **İş Sürekliliği ve Felaket Kurtarma (Disaster Recovery)**: IaaS, uygulamaların ve verilerin felaket durumlarında erişilebilir olmasını sağlar.
- **Yüksek Performanslı Hesaplama (High-Performance Computing)**: Karmaşık problemleri çözmek için gereken yüksek hesaplama gücünü sağlar.

> Bu model, bulut bilişimde en hızlı büyüyen modeldir ve birçok organizasyon için önemli avantajlar sunmaktadır.

## Platform Hizmeti (Platform as a Service - PaaS)

### PaaS Nedir?

- PaaS, IaaS'tan yararlanarak sanallaştırılmış kaynakları (virtualized resources) soyutlar, böylece kullanıcı bu kaynakları yönetmek zorunda kalmaz.
- Kullanıcı, genellikle geliştirici (developer) olarak tanımlanır.

Platform as a Service (PaaS), bulut bilişim (cloud computing) modelidir ve kullanıcılara uygulama geliştirme, dağıtma, yönetme ve çalıştırma için tam bir platform sunar. PaaS sağlayıcısı, sunucular (servers), ağlar (networks), depolama (storage), işletim sistemleri (operating systems) ve diğer araçları kendi veri merkezinde barındırır.

### PaaS'in Temel Özellikleri

- Yüksek soyutlama (high level of abstraction) sağlar, böylece kullanıcılar uygulama dağıtımını ve altyapı yapılandırmasını kolaylaştırır.
- Geliştiricilerin (developers) elastik olarak ölçeklenebilir (scalable) ve yüksek kullanılabilir (highly available) bulut uygulamaları sunmalarına yardımcı olan API'ler (APIs) ve hizmetler (services) sunar.

### PaaS Kullanım Alanları

- **API geliştirme ve yönetimi (API development and management)**: PaaS, API'lerin ve mikro hizmetlerin (microservices) geliştirilmesi ve yönetilmesi için kullanılır.
- **İş zekası (business intelligence)**: PaaS araçları, verileri analiz ederek daha bilinçli iş kararları alınmasına yardımcı olur.

### PaaS'in Avantajları

- **Ölçeklenebilirlik (scalability)**: Kaynakların hızlı bir şekilde tahsis edilmesi ve iptal edilmesi ile sağlanır.
- **Daha fazla çeviklik (agility) ve yenilik (innovation)**: Farklı işletim sistemleri, diller ve araçlarla deneme yapma imkanı sunar.

### PaaS'in Riskleri

- Bilgi güvenliği tehditleri (information security threats) ve hizmet sağlayıcısının altyapısına bağımlılık (dependency on service provider's infrastructure) gibi riskler içerir.

> PaaS, güçlü bir büyüme göstermekte ve gelecekte baskın bir platform teslim modeli (platform delivery model) olması beklenmektedir.

## Yazılım Hizmeti (Software as a Service - SaaS)

### SaaS Nedir?

- SaaS, kullanıcıların yazılımı (software) kendi makinelerine yüklemesine gerek kalmadan erişim sağladığı bir modeldir.
- Kullanıcı, herhangi biri olabilir ve genellikle abonelik (subscription) modeli ile ücretlendirilir.

Software-as-a-Service (SaaS), kullanıcıların bir hizmet sağlayıcının bulut tabanlı yazılımına erişim sağladığı bir bulut hizmetidir.

### SaaS'in Temel Özellikleri

- **Multitenant Architecture (Çoklu Kiracı Mimarisi)**: Altyapı ve kod merkezi olarak yönetilir ve tüm kullanıcılar tarafından erişilir.
- **Güvenlik (Security)**: SaaS, güvenlik, uyumluluk ve bakım gibi unsurları içerir.

### SaaS'in Faydaları

- **Hızlı Erişim (Rapid Access)**: İşletmeler, çözümleri hızlı bir şekilde temin edebilir, bu da karar verme süresini günlere indirir.
- **Verimlilik (Efficiency)**: Kullanıcılar, temel iş uygulamalarına her yerden erişebilir ve uygulamaları dakikalar içinde satın alıp dağıtabilir.

### SaaS Kullanım Alanları

- **Müşteri İlişkileri Yönetimi (Customer Relationship Management - CRM)**: Salesforce ve NetSuite gibi hizmetler.
- **İnsan Kaynakları Yönetimi (Human Resource Management - HRM)**: Workday ve SAP SuccessFactors gibi hizmetler.

### SaaS'in Zorlukları

- **Veri Sahipliği (Data Ownership)**: Üçüncü tarafların iş kritik verileri yönetmesi güvenlik endişeleri doğurabilir.
- **Ağ Bağlantısı (Network Connection)**: Uygulama erişimi iyi bir ağ bağlantısına bağlıdır.

> Bu özellikler ve faydalar, SaaS'in bulut pazarındaki en büyük segment olmasını sağlamaktadır.

> Bu hizmet modellerinin her biri, bulut bilişimdeki (cloud computing) karmaşıklığı ve kullanım kolaylığını artıran bir yapı sunar.
