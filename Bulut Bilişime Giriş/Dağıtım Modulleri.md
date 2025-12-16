# Dağıtım Modelleri

## Kamu Bulut (Public Cloud)

Bu içerik, kamu bulut (Public Cloud) dağıtım modelini detaylı bir şekilde ele almaktadır.

### Kamu Bulut Dağıtım Modeli

- Kamu bulut, kullanıcıların sunucular (servers), depolama (storage), ağ (network), güvenlik (security) ve uygulamalar (applications) gibi hizmetlere internet üzerinden erişim sağlamasını mümkün kılar.
- Bulut sağlayıcısı (cloud provider), altyapıyı (infrastructure) sahiplenir, yönetir ve bakımını yapar; kullanıcılar ise bu kaynakları abonelik ücreti (subscription charge) veya kullanım bazlı ücret (usage-based fee) ile kiralar.

### Kamu Bulutun Özellikleri

- Kamu bulut, sanallaştırılmış çoklu kiracı mimarisi (virtualized multi-tenant architecture) sunar; bu, kullanıcıların kaynakları paylaşmasına olanak tanır.
- Kaynaklar, ihtiyaç duyulduğunda dağıtılır ve çeşitli abonelik ve kullanım bazlı modellerle sunulur.

### Kamu Bulutun Avantajları ve Endişeleri

- Kamu bulut, talep dalgalanmalarına (fluctuations in demand) hızlı yanıt verebilen geniş talep üzerine kaynaklar (on-demand resources) sunar.
- Güvenlik (security) ve veri egemenliği (data sovereignty) gibi endişeler, kullanıcıların kamu bulutunu kullanırken dikkate alması gereken önemli konulardır.

## Özel Bulut (Private Cloud)

Özel bulut (Private Cloud) kavramı, bir organizasyonun tek başına kullanımı için sağlanan bulut altyapısını ifade eder. Bu altyapı, organizasyon içindeki birden fazla tüketici (consumers) tarafından kullanılabilir.

### Özel Bulutun Özellikleri

- **Sahiplik ve Yönetim (Ownership and Management)**: Özel bulut, organizasyon tarafından, üçüncü bir taraf tarafından veya bunların bir kombinasyonu tarafından sahip olunabilir ve yönetilebilir.
- **Sanallaştırma (Virtualization)**: Özel bulut, organizasyonun iç altyapısı üzerinde çalıştığında, yerinde (on-premises) bulunur ve organizasyon tarafından yönetilir.

### Sanal Özel Bulut (Virtual Private Cloud - VPC)

- **Tanım (Definition)**: VPC, bir organizasyonun kendi özel ve güvenli bulut benzeri bilişim ortamını oluşturmasına olanak tanır.
- **Avantajlar (Advantages)**: VPC, kamu bulutunun dinamik ölçeklenebilirliğinden (dynamic scalability) ve düşük sahiplik maliyetlerinden (lower cost of ownership) yararlanırken, organizasyonun özel ihtiyaçlarına göre yapılandırılmış altyapı ve güvenlik sağlar.

### Özel Bulutun Faydaları

- **Maliyet Tasarrufu (Cost Savings)**: Organizasyonun mevcut donanım ve yazılım yatırımlarını daha iyi kullanarak maliyetleri azaltma imkanı sunar.
- **Güvenlik (Security)**: Özel bulut, organizasyonun özel güvenlik ve uyum gereksinimlerine göre özelleştirilmiş erişim kontrolü sağlar.

### Kullanım Senaryoları (Use Cases)

- **Uygulama Modernizasyonu (Application Modernization)**: Özel bulut, organizasyonların mevcut uygulamalarını buluta taşıyarak modernize etmelerine olanak tanır.
- **Veri Entegrasyonu (Data Integration)**: Özel bulut, mevcut uygulamalardan veri ve hizmetlerin entegrasyonunu sağlar, böylece kamu bulut hizmetlerinden yararlanabilir.

## Hibrit Bulut (Hybrid Cloud)

Hibrit Bulut (Hybrid Cloud), bir organizasyonun kendi veri merkezindeki özel bulut (private cloud) ile üçüncü taraf kamu bulutunu (public cloud) birleştiren esnek bir altyapıdır. Bu yapı, uygulamaların (applications) ve iş yüklerinin (workloads) yönetiminde esneklik sağlar.

### Hibrit Bulutun Temel Özellikleri

- **İnteroperabilite (Interoperability)**: Kamu ve özel bulut hizmetleri, API'ler (APIs), yapılandırmalar (configurations) ve veri formatları (data formats) açısından birbirlerini anlayabilir.
- **Ölçeklenebilirlik (Scalability)**: Talep artışı olduğunda, özel bulut üzerindeki bir iş yükü, ek kamu bulut kapasitesinden yararlanabilir.

### Hibrit Bulut Türleri

- **Hibrit Mono Bulut (Hybrid Mono Cloud)**: Tek bir bulut sağlayıcısı ile oluşturulan hibrit bulut.
- **Hibrit Çoklu Bulut (Hybrid Multi-Cloud)**: Açık standartlara dayalı bir yapı ile birden fazla bulut sağlayıcısında dağıtılabilen hibrit bulut.

### Hibrit Bulutun Faydaları

- **Güvenlik (Security)**: Hassas iş yükleri özel bulutta, daha az hassas olanlar kamu bulutunda çalıştırılabilir.
- **Maliyet Tasarrufu (Cost Saving)**: Altyapı bütçesinin en verimli şekilde kullanılması sağlanır.

### Hibrit Bulut Kullanım Senaryoları

- **Yazılım olarak Hizmet Entegrasyonu (Software-as-a-Service Integration)**: Kamu bulutundaki uygulamalar, özel bulut ve geleneksel IT uygulamaları ile entegre edilir.
- **Veri ve AI Entegrasyonu (Data and AI Integration)**: Kamu bulutundaki yeni veri kaynakları, mevcut veri ve analizlerle birleştirilir.

## Topluluk Bulutu (Community Cloud)

Bu okuma materyali, topluluk bulutunun (community cloud) ne olduğunu ve Google Cloud örneği üzerinden nasıl uygulandığını açıklamaktadır.

### Topluluk Bulutu Nedir?

- Topluluk bulutu, belirli bir tüketici topluluğu için özel olarak sağlanan bulut altyapısıdır (cloud infrastructure).
- Bu bulut, topluluk içindeki bir veya daha fazla kuruluş tarafından sahip olunabilir, yönetilebilir ve işletilebilir.

### Topluluk Bulutunun Avantajları

- Üyeler, aynı güvenlik kontrolleri (security controls) altında çalışır.
- Veri yerelleştirmesi (data localization) ve veri egemenliği (data sovereignty) gereksinimlerini destekler.

### Yazılım Tanımlı Topluluk Bulutu

- Geleneksel topluluk bulutları, fiziksel ayrım (physical separation) ile güvenlik perimetrini (security perimeter) oluşturur.
- Google Cloud, yazılım tanımlı bir yaklaşım (software-defined approach) sunarak, fiziksel altyapı kısıtlamaları olmadan güvenlik ve uyumluluk (compliance) garantileri sağlar.

### Yazılım Tanımlı Topluluk Bulutunun Faydaları

- Güvenlik ve uyumluluk gereksinimlerini karşılarken, yeni hizmetlere daha hızlı erişim sağlar.
- Altyapı ölçeği sayesinde verimlilik (efficiency) artar ve performans (performance) iyileşir.
