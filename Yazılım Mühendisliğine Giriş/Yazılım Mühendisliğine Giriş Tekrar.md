# SDLC: Yazılım Geliştirme Yaşam Döngüsü

Yazılım Geliştirme Yaşam Döngüsü (SDLC), yazılım projelerinin planlanması, geliştirilmesi, test edilmesi ve dağıtılması için izlenen sistematik bir süreçtir. SDLC, yazılım mühendislerinin projeleri daha verimli bir şekilde yönetmelerine ve yazılım kalitesini artırmalarına yardımcı olur. Bu süreç genellikle aşağıdaki aşamalardan oluşur:

## SDLC Aşamaları

1. **Gereksinim Analizi (Requirements Gathering)**  
   Projenin başlangıcında, yazılımın ne yapması gerektiği belirlenir. Bu aşamada, paydaşlarla (stakeholder) görüşmeler yapılır, hedefler ve gereksinimler toplanır. Gereksinimler, yazılımın işlevselliğini ve kullanıcı ihtiyaçlarını tanımlar.

2. **Tasarım (Design)**  
   Gereksinimler belirlendikten sonra, yazılımın mimarisi ve tasarımı oluşturulur. Sistem nasıl çalışacak, kullanıcı arayüzü tasarımı ve veri akışları nasıl olacak gibi unsurlar planlanır. Tasarım belgeleri, geliştiricilere yol gösterir.

3. **Kodlama (Coding)**  
   Tasarım aşamasında belirlenen planlar doğrultusunda yazılım geliştirilir. Geliştiriciler, programlama dillerini kullanarak kod yazarlar. Bu aşama, yazılımın gerçek işlevselliğini oluşturur.

4. **Test (Testing)**  
   Yazılım tamamlandıktan sonra, hataların ve eksikliklerin tespit edilmesi için test edilir. Farklı test türleri (fonksiyonel test, performans testi, güvenlik testi vb.) uygulanarak yazılımın kalitesi kontrol edilir. Bu aşama, yazılımın güvenilirliğini sağlamak için kritiktir.

5. **Dağıtım (Deployment)**  
   Test aşamasından geçen yazılım, gerçek kullanıcılar için dağıtılır. Yazılımın kurulum süreçleri ve kullanıcı eğitimleri de bu aşamaya dahildir. Kullanıcıların yazılıma erişimi sağlanır.

6. **Bakım (Maintenance)**  
   Yazılım dağıtıldıktan sonra, kullanıcı geri bildirimleri alınır ve yazılımın güncellenmesi, hataların düzeltilmesi ve yeni özelliklerin eklenmesi gibi bakım işlemleri yapılır. Bu aşama, yazılımın uzun ömürlü olmasını sağlar.

**Sonuç:**  
SDLC, yazılım geliştirme sürecini düzenli ve sistematik bir şekilde yönetmeyi sağlar. Her aşama, yazılımın kalitesini artırmak ve projelerin zamanında tamamlanmasını sağlamak için önemlidir. SDLC'yi takip etmek, yazılım mühendislerinin daha etkili ve verimli çalışmalarına yardımcı olur.

---

# URS ve SRS: Kullanıcı Gereksinimlerinin Anlaşılması

- **SRS** (Software Requirements Specification - Yazılım Gereksinimleri Spesifikasyonu): Bir yazılım sisteminin ne yapması gerektiğini tanımlayan kapsamlı bir belgedir. Yazılımın işlevselliği, performansı, güvenliği ve diğer önemli özellikleri hakkında detaylı bilgiler sunar. SRS, yazılım geliştirme sürecinin temel taşlarından biridir ve tüm paydaşların aynı hedefe odaklanmasını sağlar.

- **URS** (User Requirements Specification - Kullanıcı Gereksinimleri Spesifikasyonu): SRS'nin bir alt kümesidir ve özellikle kullanıcıların ihtiyaçlarını ve beklentilerini detaylandırır. URS, kullanıcıların yazılımdan ne beklediğini, hangi işlevlerin kritik olduğunu ve kullanıcı deneyimini nasıl geliştirebileceğini açıklar.

## URS'nin SRS'ye Katkıları

- **Kullanıcı Odaklılık:** URS, yazılımın kullanıcıların ihtiyaçlarına göre şekillenmesini sağlar.
- **Detaylandırma:** URS, SRS'deki genel gereksinimleri daha spesifik hale getirir.
- **İletişim Aracı:** URS, geliştiriciler ile kullanıcılar arasında bir iletişim aracıdır.

**Örnek:**  
SRS: "Kullanıcılar ürünleri arayabilmeli ve sepete ekleyebilmelidir."  
URS: "Kullanıcılar, ürünleri kategoriye göre filtreleyebilmeli, fiyat aralığına göre sıralayabilmeli ve ürün resimlerini büyütüp inceleyebilmelidir."

**Sonuç:**  
URS, SRS'nin önemli bir parçasıdır ve yazılım geliştirme sürecinde kullanıcıların ihtiyaçlarını net bir şekilde tanımlamak için kritik bir rol oynar.

---

# Yazılım Geliştirme Metodolojileri

Yazılım geliştirme sürecinde farklı metodolojiler, projelerin ihtiyaçlarına ve hedeflerine göre seçilir. En yaygın olanlar:

## 1. Şelale Modeli (Waterfall Model)

- **Tanım:** Yazılım geliştirme sürecinin aşamalarını sıralı ve lineer şekilde tanımlar.
- **Aşamalar:** Gereksinim Analizi, Tasarım, Kodlama, Test, Dağıtım, Bakım.
- **Avantajları:** Basit ve anlaşılır yapı, aşamalar izlenebilir.
- **Dezavantajları:** Değişiklik yapmak zordur, kullanıcı geri bildirimi sürecin sonunda alınır.

## 2. V-Şekil Modeli (V-Model)

- **Tanım:** Şelale modelinin bir uzantısıdır ve geliştirme ile test aşamalarını paralel gösterir.
- **Avantajları:** Hataların erken tespiti, net geliştirme-test ilişkisi.
- **Dezavantajları:** Gereksinimlerin baştan net olması gerekir, esneklik azdır.

## 3. Çevik (Agile) Yaklaşım

- **Tanım:** Esneklik ve hızlı yanıt verme odaklıdır. Projeler sprintlere bölünür, her sprintte geri bildirim alınır.
- **Avantajları:** Sürekli kullanıcı geri bildirimi, değişikliklere hızlı yanıt, ekip içi işbirliği.
- **Dezavantajları:** Proje yönetimi karmaşıklaşabilir, sabit zaman/bütçe belirlemek zor.

**Sonuç:**  
Her metodoloji, farklı projeler için avantajlar ve dezavantajlar sunar. Projenin gereksinimlerine göre uygun olan yöntem seçilmelidir.

---

# Yazılım Geliştirme Sürecinde CI/CD Araçları, Derleme Araçları ve Paket Yönetimi

## 1. CI/CD Araçları (Continuous Integration / Continuous Deployment)

- **CI (Sürekli Entegrasyon):** Kodun sık sık birleştirilmesi, otomatik test ve erken hata tespiti sağlar.
- **CD (Sürekli Dağıtım):** Testten geçen kodun otomatik olarak üretim ortamına dağıtılmasını sağlar.
- **Avantajlar:** Hatalar hızlıca yakalanır, her zaman dağıtıma hazır kod, hızlı geliştirme süreci.

## 2. Derleme Araçları

- **Tanım:** Kaynak kodu derleyip çalışabilir hale getirir (ör. Java projelerinde Maven/Gradle).
- **Avantajlar:** Derleme ve test otomatikleşir, güvenilir yazılım.

## 3. Paketler ve Paket Yöneticileri

- **Tanım:** Projede kullanılan kütüphaneler ve bağımlılıklardır (ör. npm, pip).
- **Avantajlar:** Bağımlılık yönetimi kolaylaşır, projeler taşınabilir olur.

**Sonuç:**  
Bu araçlar, yazılım geliştirme sürecini verimli ve güvenli hale getirir, zamandan ve kaynaklardan tasarruf sağlar.

---

# Programlama Dilleri: Yorumlanan ve Derlenen Diller

## 1. Yorumlanan Programlama Dilleri (Interpreted Languages)

- **Tanım:** Kod, bir yorumlayıcı tarafından satır satır okunur ve anında çalıştırılır.
- **Örnekler:** Python, JavaScript
- **Avantajlar:** Hızlı geliştirme, taşınabilirlik, anında geri bildirim.
- **Dezavantajlar:** Genellikle daha düşük performans, hatalar kod tam çalışmadan görülmez.

## 2. Derlenmiş Programlama Dilleri (Compiled Languages)

- **Tanım:** Kaynak kodu bir derleyiciyle makine diline çevrilir ve yürütülebilir dosyalar üretilir.
- **Örnekler:** C, Java (bytecode olarak JVM tarafından çalıştırılır)
- **Avantajlar:** Yüksek performans, hata tespiti derleme aşamasında.
- **Dezavantajlar:** Geliştirme süreci daha uzundur, taşınabilirlik kısıtlı olabilir.

**Sonuç:**  
Yorumlanan diller esneklik ve hızlı geliştirme, derlenen diller ise performans ve güvenilirlik sunar.

---

# Nesne Yönelimli Programlama (OOP): Temel Kavramlar

Nesne yönelimli programlama, verileri ve bunlara ait davranışları nesneler içinde bir araya getiren bir yaklaşımdır. Yazılımın daha düzenli, esnek ve sürdürülebilir olmasını sağlar.

## OOP'nin Temel Özellikleri

1. **Nesneler (Objects):**  
   - Veri (attributes) ve davranış (methods) içerir.
   - Örnek:
     ```python
     class Araba:
         def __init__(self, renk, hız):
             self.renk = renk
             self.hız = hız
         def hızlan(self, artış):
             self.hız += artış
             print(f"Yeni hız: {self.hız} km/s")
     benim_arabam = Araba("Kırmızı", 0)
     benim_arabam.hızlan(50)  # Yeni hız: 50 km/s
     ```

2. **Nitelikler (Attributes) ve Yöntemler (Methods):**  
   - Nitelikler nesnenin özellikleri, yöntemler ise davranışlarıdır.

3. **Kapsülleme (Encapsulation):**  
   - Nesnelerin iç yapısı gizlenir, verilere erişim kontrol edilir.

4. **Kalıtım (Inheritance):**  
   - Bir sınıf başka bir sınıftan özellik ve yöntemleri miras alır.
   - Örnek:
     ```python
     class ElektrikliAraba(Araba):
         def __init__(self, renk, hız, batarya_kapasitesi):
             super().__init__(renk, hız)
             self.batarya_kapasitesi = batarya_kapasitesi
     benim_elektrikli_arabam = ElektrikliAraba("Mavi", 0, 100)
     ```

5. **Polimorfizm (Polymorphism):**  
   - Farklı nesneler aynı yöntem adını kullanarak farklı davranışlar sergileyebilir.

6. **Abstraksiyon (Abstraction):**  
   - Karmaşık yapılar sadeleştirilir, sadece gerekli bilgiler gösterilir.

**Sonuç:**  
OOP, yazılım geliştirme süreçlerinde kod organizasyonu, esneklik ve yeniden kullanılabilirliği teşvik eder.

---

# Yapısal Tasarım (Structured Design)

Yapısal tasarım, karmaşık problemleri daha küçük ve yönetilebilir parçalara ayırmak için kullanılan bir yöntemdir. Yazılımın işlevselliğini artırır, kodun okunabilirliğini sağlar.

**Örnek:**  
Bir e-ticaret uygulaması modüllere ayrılabilir:
- Ürün Yönetimi Modülü: Ürün ekleme, silme, güncelleme
- Sepet Modülü: Sepete ürün ekleme/çıkarma
- Ödeme Modülü: Ödeme işlemleri

Bu modüller sayesinde yazılımın her parçası bağımsız olarak geliştirilebilir.

---

# Davranış Modelleri (Behavioral Models)

Davranış modelleri, bir sistemin nasıl çalıştığını ve kullanıcı etkileşimlerini tanımlar; sistemin işlevini açıklar fakat arka plandaki uygulama detayına girmez.

**Örnek:**  
Bir sosyal medya uygulamasında:
- Kullanıcı gönderi paylaşır ("Paylaş" butonu)
- Kullanıcı gönderi beğenir ("Beğen" butonu)

Bu tür modeller, sistem ile kullanıcı etkileşimini yüksek seviyede özetler.

---

# UML Nedir?

**UML (Unified Modeling Language)**: Yazılım sistemlerini görsel olarak modellemek için kullanılan, çeşitli diyagramlar sunan bir dildir.

## Neden UML Diyagramları Kullanılır?

1. **Hızlı Başlangıç:** Projeye hızlıca başlamak ve ortak anlayış geliştirmek.
2. **Özellik Planlaması:** Koddan önce özellik ve işlev planlaması yapabilmek.
3. **Kaynak Kodunda Gezinme:** Kodun yapısını ve ilişkilerini görsel olarak anlamak.

## UML Diyagram Türleri

- **Durum Geçişi Diyagramları (State Transition Diagrams):**  
  Nesnelerin durumları ve durumlar arası geçişleri görselleştirir.  
- **Etkileşim Diyagramları (Interaction Diagrams):**  
  Nesneler arası mesaj ve etkileşimleri gösterir.
- **Sınıf Diyagramları (Class Diagrams):**  
  Sınıflar, nitelikler ve yöntemler ile aralarındaki ilişkileri gösterir.

**Sonuç:**  
UML diyagramları, yazılım geliştirme sürecinde zaman ve kaynak tasarrufu sağlar, sistemin daha iyi anlaşılmasını ve yönetilmesini mümkün kılar.

---

# Mimari Modeller ve Kalıplar

## Mimari Model Nedir?

Mimari modeller, yazılım geliştirme sürecinde karşılaşılan belirli mimari sorunlara tekrarlanabilir çözümler sunar. Yazılımın yapısal organizasyonunu ve bileşenlerin etkileşimini belirler.

## Mimari Kalıp Türleri

1. **2 Katmanlı Mimari (2-Tier Architecture)**
   - İstemci (client) ve sunucu (server).
   - Basit uygulamalar için.

2. **3 Katmanlı Mimari (3-Tier Architecture)**
   - Sunum (presentation), iş (business), veri (data) katmanları.
   - Web uygulamaları ve karmaşık sistemler.

3. **Olay Güdümlü Mimari (Event-Driven Architecture)**
   - Sistem; olaylara ve tetiklemelere göre kurgulanır.
   - Gerçek zamanlı ve etkileşimli uygulamalar.

4. **Eşler Arası Mimari (Peer-to-Peer Architecture)**
   - Tüm düğümler hem istemci hem sunucu olabilir.
   - Dosya paylaşımında ve dağıtık sistemlerde yaygın.

5. **Mikro Hizmetler (Microservices)**
   - Uygulama; bağımsız, küçük hizmetlere bölünür.
   - Büyük ve ölçeklenebilir uygulamalarda kullanılır.

**Kalıpların Birleştirilmesi:**  
Birden fazla mimari kalıp bir projede birleşebilir; örneğin 3 katmanlı bir yapı mikro hizmetlerle entegre edilebilir.

**Sonuç:**  
Doğru mimari kalıbın seçilmesi ve uygulanması, yazılım projelerinin başarısında kritik rol oynar.

---

# Uygulama Ortamları Nedir?

Yazılım geliştirme sürecinde farklı aşamalar (ortamlar) kullanılır. Her biri, yazılımın bir adımında test, geliştirme ya da dağıtım için tasarlanmıştır.

## Uygulama Ortamı Türleri

1. **Geliştirme Ortamı (Development)**  
   - Yazılımın geliştirildiği ortam.
   - Yerel makinelerde/sanal makinelerde çalışılır, hızlı geri bildirim alınır.

2. **Test/QA Ortamı (Quality Assurance)**  
   - Yazılımın kalite kontrolünün yapıldığı ortam.
   - Birim/entegrasyon/sistem testleri yapılır.

3. **Hazırlama Ortamı (Staging Environment)**  
   - Üretim ortamına son derece benzeyen test ortamı.
   - Gerçek verilerle ve gerçekçi koşullarda yazılım sınanır.

4. **Üretim Ortamı (Production Environment)**  
   - Yazılımın son kullanıcıya sunulduğu, gerçek hizmet verdiği ortam.
   - En yüksek güvenlik, performans ve güvenilirlik gerektirir.

## Üretim Ortamının Karmaşıklığı

- **Yük (Load):** Gerçek kullanıcı trafiği altında çalışır, yük yönetimi gerekir.
- **Güvenlik (Security):** Kullanıcı ve sistem verileri korunur, şifreleme ve erişim kontrolü uygulanır.
- **Güvenilirlik (Reliability):** Sürekli erişilebilirlik sağlanır, kesintiler kullanıcıyı olumsuz etkiler.
- **Ölçeklenebilirlik (Scalability):** Kullanıcı sayısı arttıkça sisteme yeni kaynak eklenebilir.

**Sonuç:**  
Uygulama ortamlarının doğru ve amaca uygun şekilde yönetilmesi, yazılım kalitesi ve kullanıcı deneyimi için kritik önem taşır.

