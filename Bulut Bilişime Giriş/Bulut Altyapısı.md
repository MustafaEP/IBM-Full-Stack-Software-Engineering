# Bulut Altyapısı

Bulut hizmet modeli ve bulut türü seçildikten sonra, müşterilerin altyapı mimarisini planlaması gerekmektedir. Altyapı katmanı, bulutun temelini oluşturur ve fiziksel kaynaklardan oluşur.

## Altyapı Katmanı

- Bulut sağlayıcısının IT ortamı, dünya genelinde birçok Bölge (Region) ve Alan (Zone) içinde dağıtılmıştır.
- Her Bulut Bölgesi, doğal afetler gibi durumlarda diğer bölgelerin çalışmaya devam etmesini sağlamak için birbirinden izole edilmiştir.

## Veri Merkezleri (Data Centers)

- Bulut veri merkezleri, sunucular, depolama ve ağ ekipmanları gibi fiziksel IT ortamının tüm bileşenlerini içeren büyük odalardır.
- Veri merkezleri, yüksek bant genişliğine sahip ağ bağlantıları ile diğer AZ'ler ve bölgelerle bağlantılıdır.

## Hesaplama Kaynakları (Computing Resources)

- Bulut sağlayıcıları, sanal sunucular (Virtual Servers), fiziksel sunucular (Bare Metal Servers) ve sunucusuz (Serverless) hesaplama kaynakları sunar.
- Kullanıcılar, ihtiyaç duyduklarında sanal makineleri (VMs) ve fiziksel sunucuları (Bare Metal) sağlayabilirler.

> Bu özet, bulut altyapısının temel bileşenlerini ve işleyişini anlamanıza yardımcı olacaktır.

## Sanallaştırma (Virtualization)

Sanallaştırma teknolojisi, bulut bilişim (Cloud Computing) stratejilerinin temelini oluşturur.

### Sanallaştırma Nedir?

- Sanallaştırma, fiziksel sunucular (Physical Servers), depolama (Storage), ağ (Networking) ve uygulamalar (Applications) gibi kaynakların yazılım tabanlı sanal versiyonlarını oluşturma sürecidir.
- Bu sürecin temel bileşeni, kaynakları sanal ortamlara tahsis eden yazılım olan hipervizördür (Hypervisor).

### Hipervizör Türleri

- **Tip 1 Hipervizör (Type 1 Hypervisor)**: Fiziksel sunucunun üzerine doğrudan kurulan ve genellikle daha güvenli olan bare-metal hipervizörlerdir. Örnekler: VMware ESXi, Microsoft Hyper-V.
- **Tip 2 Hipervizör (Type 2 Hypervisor)**: Fiziksel sunucu ile hipervizör arasında bir ana işletim sistemi (Host OS) katmanı bulunan, genellikle son kullanıcı sanallaştırması için kullanılan hipervizörlerdir. Örnekler: Oracle VirtualBox, VMware Workstation.

### Sanal Makineler (Virtual Machines - VMs)

- Sanal makineler, bağımsız işletim sistemleri ve uygulamaları olan yazılım tabanlı bilgisayarlardır.
- Farklı işletim sistemleri (Windows, Linux, UNIX) aynı hipervizör üzerinde çalışabilir ve taşınabilirlikleri yüksektir.

### Sanallaştırmanın Faydaları

- **Maliyet Tasarrufu (Cost Savings)**: Birden fazla sanal ortamın tek bir fiziksel altyapıdan çalıştırılması, fiziksel sunucu sayısını azaltarak maliyetleri düşürür.
- **Hız ve Çeviklik (Agility and Speed)**: Sanal makinelerin hızlı bir şekilde oluşturulması, geliştiricilerin yeni ortamlar kurmasını kolaylaştırır.
- **Kesinti Süresinin Azalması (Lower Downtime)**: Sunucu arızası durumunda sanal makinelerin başka bir hipervizöre hızlıca taşınabilmesi, iş sürekliliği sağlar.

## Sanal Makineler (Virtual Machines)

- Sanal makineler, bulut sağlayıcılarına göre farklı adlarla anılabilir ve çeşitli yapılandırmalarla sunulabilir.
- Kullanıcılar, sanal sunucular (virtual servers) oluştururken bölge (Region) ve veri merkezi (Data Center) seçebilirler.

### Sanal Makine Türleri

- **Paylaşımlı veya Kamu Bulut (Shared or Public Cloud) VMs**: Çoklu kiracı (multi-tenant) yapıda olup, önceden tanımlanmış boyutlarla talep üzerine sağlanır.
- **Geçici veya Spot VMs (Transient or Spot VMs)**: Kullanılmayan kapasiteyi düşük maliyetle sunar, ancak her an devre dışı bırakılabilir.

### Rezerve Edilmiş Sanal Sunucular (Reserved Virtual Server Instances)

- Kullanıcılar, belirli bir süre için kapasite rezerve edebilir ve bu kapasiteyi ihtiyaç duyduklarında kullanabilirler.
- Uzun süreli taahhütler, maliyetleri düşürebilir.

### Özel Sunucular (Dedicated Hosts)

- Tek kiracı (single-tenant) izolasyonu sağlar ve yalnızca belirli bir kullanıcının sanal makineleri üzerinde çalışır.
- Genellikle uyum ve düzenleyici gereklilikleri karşılamak için kullanılır.

## Bare Metal Server

Bare metal server (fiziksel sunucu) kavramını ve özelliklerini açıklamaktadır.

### Bare Metal Server Tanımı

- Bare metal server, tek bir müşteri için ayrılmış, özel bir fiziksel sunucudur.
- Bulut sağlayıcısı, bu sunucuyu bir veri merkezinde (data center) bir rafa yerleştirir ve işletim sistemine (operating system) kadar yönetimini üstlenir.

### Yönetim ve Özelleştirme
