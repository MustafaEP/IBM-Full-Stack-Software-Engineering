# Bulut Bilişime Genel Bakış

Bu doküman, bulut bilişimin temel özelliklerini, avantajlarını, tarihsel gelişimini ve bulut benimseme stratejilerini özetlemektedir. İçerik, `Bulut Bilişime Genel Bakış` kaynağından derlenmiştir (`file:///c%3A/Users/porta/OneDrive/Belgeler/_IBM/IBM-Full-Stack-Software-Engineering/Bulut%20Bili%C5%9Fime%20Giri%C5%9F/Bulut%20Bili%C5%9Fime%20Genel%20Bak%C4%B1%C5%9F.pdf`).

## Bulut Bilişimin Temel Özellikleri

Bulut bilişimin temel özellikleri şunlardır:

1. **Talep Üzerine Kendine Hizmet (On-Demand Self-Service)**  
   Kullanıcılar, ihtiyaç duyduklarında bulut kaynaklarına erişebilirler.

2. **Geniş Ağ Erişimi (Broad Network Access)**  
   Bulut kaynakları, internet bağlantısı olan her cihazdan erişilebilir.

3. **Kaynak Havuzu (Resource Pooling)**  
   Müşteriler, maliyetleri düşürmek için paylaşımlı bir model kullanarak bulut hizmetlerinden yararlanabilirler.

4. **Hızlı Esneklik (Rapid Elasticity)**  
   Talebe göre kaynaklar hızla artırılabilir veya azaltılabilir.

5. **Ölçümlü Hizmet (Measured Service)**  
   Kullanıcılar, kullandıkları kaynaklar için yalnızca ihtiyaç duydukları kadar ödeme yaparlar.

## Bulut Bilişimin Avantajları (Advantages of Cloud Computing)

- Bulut bilişim, işletmelere yerel sunucularda (Local Server) barındırmaya göre daha fazla **esneklik (Flexibility)** ve **ölçeklenebilirlik (Scalability)** sunar.
- Kullanıcılar, internet bağlantısı (Internet Connection) olan her yerden bulut hizmetlerini (Cloud Services) özelleştirebilir.

## Bulut Bilişimin Ekonomik Yönleri (Economic Aspects of Cloud Computing)

- **Kaynak Havuzu (Resource Pooling)**: Müşteriler, maliyetleri (Costs) düşürmek için paylaşımlı bir model kullanarak bulut hizmetlerinden yararlanabilirler.
- **Hızlı Esneklik (Rapid Elasticity)**: Talebe göre kaynaklar hızla artırılabilir veya azaltılabilir, bu da çevik bir yanıt (Agile Response) sağlar.

> “Bulut bilişimi, kurumsal bilgi işlem için bilgi işlem ağı kaynaklarının tüm yönlerini yönetmek için API odaklı hizmetler paketi olarak özetleyebilirim.”

## Bulut Bilişimin Tarihi ve Evrimi

Bu bölüm, bulut bilişimin (Cloud Computing) tarihini ve evrimini ele alarak teknolojinin zaman içindeki gelişimini açıklar.

### Erken Dönem Gelişmeler

- 1950'lerde büyük ölçekli ana bilgisayarların (mainframes) ortaya çıkmasıyla bulut bilişimin temelleri atıldı.
- Zaman paylaşımı (time sharing) uygulamaları, birden fazla kullanıcının aynı veri depolama katmanına ve CPU gücüne erişimini sağladı.

### Sanal Makineler ve Sanallaştırma

- 1970'lerde **Sanal Makine (Virtual Machine - VM)** işletim sistemi ile ana bilgisayarlar üzerinde birden fazla sanal sistem oluşturulmaya başlandı.
- **Sanallaştırma (virtualization)**, fiziksel donanımın (physical hardware) daha verimli kullanılmasını sağladı ve bulut bilişimin gelişiminde önemli bir rol oynadı.

### Bulut Bilişimin Yükselişi

- Kullanıcılar, fiziksel sunuculara (physical servers) ihtiyaç duymadan bulut kaynaklarını (cloud resources) talep edebilir hale geldi.
- **Kullanım başına ödeme (pay-as-you-go)** modeli, bulut bilişimin yaygınlaşmasında önemli bir etken oldu ve şirketlerin donanım maliyetlerini azaltmalarına yardımcı oldu.

## Hypervisor ve Sanallaştırma Mantığı

- **Hypervisor**, bir fiziksel sunucu üzerinde birden fazla sanal makineyi (virtual machines) çalıştırmak için kullanılan bir yazılım katmanıdır.  
  Bunu, bir otobüs şoförüne benzetebiliriz: Otobüs (fiziksel sunucu) üzerinde birden fazla yolcu (sanal makineler) taşır. Her yolcu, kendi koltuğunda oturur ve diğer yolcularla etkileşime girmeden seyahat eder.
- Hypervisor, sanal makinelerin (VM'ler) birbirleriyle çakışmadan çalışmasını sağlar. Bu, her sanal makinenin kendi bellek, CPU ve depolama kaynaklarına sahip olduğu hissini verir; oysa aslında bu kaynaklar fiziksel sunucu tarafından paylaşılıyor.
- Eğer bir sanal makine bir sorun yaşarsa, diğerleri etkilenmez ve çalışmaya devam edebilir. Bu durum, sistemin güvenilirliğini artırır ve kaynakların daha verimli kullanılmasını sağlar.

## CapEx ve OpEx: Harcama Modelleri

- **CapEx (Capital Expenditure)**: Bir şirketin uzun vadeli varlıklar (örneğin binalar, makineler veya donanım) satın almak için yaptığı büyük yatırımları ifade eder.  
  Bu tür harcamalar genellikle yüksek maliyetli olup, uzun süreli bir fayda sağlar. Örneğin, bir şirket yeni bir sunucu satın aldığında bu bir CapEx harcamasıdır.
- **OpEx (Operational Expenditure)**: Günlük işletme giderlerini kapsar. Bir şirketin faaliyetlerini sürdürmek için yaptığı düzenli harcamaları içerir.  
  Örneğin, bulut hizmetleri için aylık abonelik ödemeleri veya enerji faturaları gibi harcamalar OpEx olarak kabul edilir.

Bulut bilişimle birlikte, şirketler **CapEx'ten OpEx'e** geçiş yaparak, donanım satın almak yerine bulut kaynaklarını ihtiyaç duydukları kadar kullanıp sadece kullandıkları kadar ödeme yapma imkanı bulurlar.  
Bu, şirketlerin maliyetlerini daha esnek bir şekilde yönetmelerine ve nakit akışlarını daha iyi kontrol etmelerine yardımcı olur.

## Bulut Benimseme ve Stratejiler

Bu bölüm, bulut benimseme stratejilerinin ve önemli hususların organizasyonlar için nasıl benzersiz olduğunu vurgular.

### Altyapı ve Yükler (Infrastructure and Workloads)

- Veri merkezlerinin (data centers) inşa ve işletme maliyetleri yüksek olabilir; bulut bilişim (cloud computing) ise düşük başlangıç maliyetleri ve **kullanım başına ödeme (pay-as-you-go)** avantajları sunar.
- Tüm iş yüklerinin (workloads) buluta hazır olmayabileceği göz önünde bulundurulmalıdır.

### SaaS ve Geliştirme Platformları (SaaS and Development Platforms)

- Uygulama erişimi için ödeme yapmanın (paying for application access), geleneksel yazılımları satın almaktan daha uygun olup olmadığını değerlendirmek önemlidir.
- Bulut üzerinde yeni bir uygulamanın (application) hızlı bir şekilde devreye alınması, geleneksel platformlara göre önemli bir avantajdır.

### Bulut Benimsemenin Faydaları (Benefits of Cloud Adoption)

- Bulut, **esneklik (flexibility)** sağlar; kullanıcılar ihtiyaçlarına göre hizmetleri ölçeklendirebilir ve uygulamaları özelleştirebilir.
- **Verimlilik (efficiency)** artırılır; bulut tabanlı uygulamalar, altyapı maliyetleri ve bakımı hakkında endişe duymadan hızlı bir şekilde pazara sunulabilir.

Bu kapsamda, bulut benimseme hem fırsatlar hem de **veri güvenliği (data security)**, **yönetim (governance)** ve **uyumluluk (compliance)** gibi zorluklar içerir.

## Hız (Speed) ve Verimlilik (Productivity)

Hız ve verimlilik kavramları, bulut bilişimde önemli bir rol oynamaktadır ve organizasyonların iş süreçlerini doğrudan etkiler.

### Hız (Speed)

- Bulut bilişim, yeni uygulamaların (applications) hızlı bir şekilde devreye alınmasını sağlar.  
  Örneğin, bir uygulamanın bulut üzerinde birkaç saat içinde çalışır hale gelmesi, geleneksel platformlarda bu sürecin haftalar veya aylar almasıyla kıyaslandığında büyük bir avantajdır.
- Bu hız, organizasyonların pazara daha çabuk yanıt vermesine ve rekabet avantajı elde etmesine yardımcı olur.

### Verimlilik (Productivity)

- Bulut hizmetleri, kullanıcıların işlerini daha verimli bir şekilde yapmalarını sağlar.
- Bulut tabanlı paneller (dashboards) ve gerçek zamanlı istatistikler (real-time statistics) sayesinde çalışanlar, daha az zaman harcayarak daha fazla iş üretebilir.


