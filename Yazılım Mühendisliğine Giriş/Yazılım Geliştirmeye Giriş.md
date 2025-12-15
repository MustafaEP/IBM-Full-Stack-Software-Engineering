# Web ve Bulut Geliştirmeye Genel Bakış

## Web Tarayıcıları ve İletişim

- İnternet tarayıcıları (ör. Google Chrome, Mozilla Firefox) URL'ler aracılığıyla sunucularla iletişim kurar.
- Sunucu, HTML, CSS ve JavaScript gibi dosyaları göndererek web sayfasını oluşturur.

## Web Siteleri ve Dinamik İçerik

- Web siteleri statik (önceden depolanmış) ve dinamik (her istekte oluşturulan) içerik barındırır.
- Dinamik içerik, genellikle veritabanları gibi diğer sistemlerden alınan bilgileri içerebilir.

## Geliştirme Alanları

- **Ön uç (front-end) geliştirme:** Kullanıcı arayüzü ve etkileşimlerle ilgilenir.
- **Arka uç (back-end) geliştirme:** Sunucu tarafı iş mantığı ve veri güvenliği ile ilgilenir.
- **Tam yığın (full-stack) geliştiriciler:** Her iki alanda da bilgiye sahiptir.

## Geliştirici Araçları

- Kod editörleri ve Entegre Geliştirme Ortamları (IDE) süreçleri kolaylaştırır.
- Popüler IDE'ler: Visual Studio Code, Eclipse, NetBeans.

---

## Statik ve Dinamik İçerik Arasındaki Temel Farklar

### Statik İçerik

- **Tanım:** Sunucuda önceden depolanmış ve sabittir, kullanıcının her ziyaretinde aynıdır.
- **Örnekler:** HTML dosyaları, resimler, metin belgeleri.
- **Performans:** Daha hızlı yüklenir; içerik her istekte yeniden oluşturulmaz.
- **Kullanım:** Basit siteler, değişmeyen bilgiler (ör. portföy).

### Dinamik İçerik

- **Tanım:** Kullanıcı talebine veya etkileşimine göre değişir.
- **Örnekler:** Kullanıcı profilleri, veritabanı sorguları ile oluşturulan sayfalar, sosyal medya akışları.
- **Performans:** Daha yavaş yüklenebilir; sunucu içerik oluşturmak için veritabanı gibi kaynaklarla etkileşimde bulunur.
- **Kullanım:** E-ticaret, sosyal medya, kullanıcı etkileşimli uygulamalar.

> Bu farklar, web geliştirme sürecinde içerik türüne karar vermede önemlidir.

---

## Web Sitesinin Yapısı

- **HTML:** Web sitelerinin içeriğini ve yapısını belirler (metin, bağlantı, resim, buton).
- **CSS:** Stil ve görünümü düzenler (renk, yazı tipi, düzen).
- **JavaScript:** Etkileşim ve dinamik işlevler ekler (ör. giriş butonu işlevselliği).
- **SASS / LESS:** CSS'in işlevselliğini artıran stillendirme dilleri.

---

## Responsive ve Adaptive Tasarım

- **Responsive Tasarım:** Web siteleri her cihaza otomatik olarak uyum sağlar.
- **Adaptive Tasarım:** Belirli ekran boyutları için optimize edilmiş farklı sürümler sunar.

---

## JavaScript Framework ve Kütüphaneleri

### React

- Facebook tarafından geliştirilmiş JavaScript kütüphanesi.
- Web sayfalarında bileşenler oluşturmak ve göstermek için.
- Yönlendirme gibi ek işlevler için üçüncü parti entegrasyon gerekir.

### Angular

- Google tarafından sürdürülen açık kaynaklı framework.
- HTML sayfalarını hızlı ve verimli bir şekilde işler.
- Yönlendirme ve form doğrulama gibi yerleşik araçlarla gelir.

### Vue

- Topluluk tabanlı bir framework.
- Kullanıcı arayüzüne ve görsel bileşenlere odaklanır.
- Esnek, ölçeklenebilir, başka framework'lerle entegre olabilir.

---

## Arka Uç (Back-end) Geliştirme

- Kullanıcıdan gelen istekleri işlemek için gerekli kaynakları oluşturur ve yönetir.
- Kullanıcı bilgileri, ürün aramaları, ödeme bilgilerinin güvenli işlenmesi arka uç geliştiricilerin sorumluluğundadır.

### Arka Uç Geliştirme Araçları ve Dilleri

- Sık kullanılan diller: JavaScript, Python.
- Sık kullanılan çerçeveler: Node.js, Express, Django, Flask.
- Veritabanları ile entegrasyon için SQL ve ORM (Nesne İlişkisel Haritalama) bilgisi önemlidir.

---

## Ön Uç ve Arka Uç İşbirliği

- Ön uç ve arka uç geliştiriciler gereksinimleri anlamak ve entegre çalışmak için yakın işbirliği içindedir.
- Web ve bulut uygulamalarında tüm yaşam döngüsü boyunca işbirliği gerekir.

---

# Takım Çalışması

## Tanım

- Takım, farklı beceri ve deneyimlere sahip bireylerin ortak bir hedef için bir araya gelmesidir.
- İşbirliği, yaratıcılığı artırır ve bireylerin gelişimine katkı sağlar.

## Başarılı Takım Çalışmasının Temelleri

- **Güven ve Saygı:** Takım üyeleri arasında güven oluşturmak önemlidir.
- **Ortak Hedefler:** Tüm takım, odaklanması gereken hedefleri net olarak bilmelidir.
- **Etkili İletişim:** Doğru iletişim yöntemlerinin seçilmesi ile bilgi paylaşımı artar.

### Yazılım Mühendisliğinde Takım Çalışması

- Proje başlangıcında kick-off toplantıları yapılır, görevler atanır.
- Proje boyunca düzenli toplantılar, tasarım ve kod incelemeleri gerçekleştirilir.
- Proje sonunda süreç retrospektifi ile değerlendirme yapılır.

## Takım Çalışmasının Faydaları

- Yaratıcılığı teşvik eder, bireylerin güçlü yönlerinden faydalanılır.
- Daha kaliteli ve sürdürülebilir kod üretimini destekler.
- Stres azalır, sorunlar hızlı çözülür.

> Agile organizasyonlarda küçük takımlara "squad" denir, genellikle 10 kişiye kadar geliştiriciden oluşur.

---

## Pair Programming (Çiftli Programlama)

- İki geliştirici aynı bilgisayarda veya sanal ortamda birlikte çalışır.
- Agile geliştirme yönteminin önemli bir parçasıdır.

### Stil Türleri

- **Driver/Navigator:** Bir geliştirici kod yazar, diğeri gözden geçirir ve yönlendirir. Rollerin sıkça değişmesi gerekir.
- **Ping-Pong:** Bir geliştirici test yazar, diğeri o testi geçecek kodu yazar. Roller sürekli değişir.
- **Strong Style:** Deneyimli geliştirici, diğerine rehberlik eder; fikirler uygulama bitene kadar tartışılmaz.

### Avantajları

- Bilgi, beceri ve deneyim paylaşımı artar.
- Kod kalitesi ve güvenlik artar, hata oranı düşer.
- İletişim ve problem çözme yetenekleri gelişir.

### Karşılaşılan Zorluklar

- Uzun süre odaklanmak yorucu olabilir.
- Kişilik uyumsuzlukları verimi düşürebilir.
- Ortamda gürültü oluşabilir.

---

# Versiyon Kontrolü

- Kod değişikliklerini izleyen ve çoklu geliştiricilerle çalışmayı kolaylaştıran sistemlerdir.
- Örnek araçlar: **Git** ve **GitHub**.

#### Avantajları

- Kod değişiklikleri ve geçmişi takip edilebilir.
- Kod dalları (branch) ile odaklı geliştirme yapılabilir.
- Çakışmalar kolayca çözülür, yedekleme ve geri dönüş mümkündür.

### Temel İşlevler

- **Değişiklik Takibi:** Hangi değişiklik, ne zaman ve kim tarafından yapılmış izlenir.
- **Versiyon Yönetimi:** Farklı versiyonlar arasında geçiş yapılır.
- **Çatışma Çözümü:** Çoklu değişikliklerde uyumsuzluklar yönetilir.
- **Dallandırma (Branch):** Kodun farklı sürümlerinin paralel geliştirilmesi sağlanır.
- **Birleştirme (Merge):** Dallardaki değişiklikler ana koda entegre edilir.
- **Yedekleme:** Geri yükleme için proje dosyaları saklanır.

---

## Kütüphane ve Çerçeveler

### Kütüphaneler

- Belirli işlev veya özellikler eklenebilen kod koleksiyonlarıdır.
    - Örneğin: jQuery, DOM manipülasyonu için kullanılır.
- Kod tekrarını azaltır, uygulama geliştirmeyi hızlandırır.

### Çerçeveler

- Uygulamayı oluşturmak için bir yapı ve iskelet sunar.
    - Örneğin: AngularJS, Django.
- Standartlaşmayı ve verimli kod yazımını teşvik eder.

---

# CI/CD ve Build Araçları

- **CI/CD**: Sürekli entegrasyon (Continuous Integration) ve sürekli teslimat/dağıtım (Continuous Delivery/Deployment) süreçleridir.
    - Değişikliklerin hızlı ve güvenli şekilde yayılmasını sağlar.
- **Build araçları:** Kaynak kodunu derler ve bağımlılıkları yönetir.

## Paketler ve Paket Yöneticileri

- **Paketler:** Uygulama dosyaları, kurulum adımları ve meta verileri içeren arşivlerdir.
- **Paket yöneticileri:** Paketleri bulur, kurar, günceller ve kaldırır.

### Kullanım Örnekleri

- Popüler build araçları: Webpack, Babel, Web Assembly.
- Yaygın paket yöneticileri:  
    - **Linux:** DPKG  
    - **Windows:** Chocolatey  
    - **MacOS:** Homebrew

#### CI / CD Süreçleri

- **Sürekli Entegrasyon (CI):**
    - Kod deposu: Geliştiricilerin kodlarını paylaştığı merkezi alan
    - Otomatik testler: Değişiklik sonrası çalışan testler
    - Build süreci: Kodun derlenmesi ve çalıştırılması
- **Sürekli Teslimat (CD):**
    - Otomatik dağıtım: Test/staging ortamına aktarma
    - Kullanıcı geri bildirimi: Test ortamında uygulamanın sunulması
- **Sürekli Dağıtım (CD):**
    - Üretim ortamına otomatik dağıtım
    - Performans ve hata izleme

---

# Yazılım Yığınları (Stacks)

- **Tanım:** Bir uygulama geliştirmek için kullanılan yazılım, çerçeve ve dillerin kombinasyonudur.
- Katmanlar, üstte kullanıcıya hizmet eder, altta donanımla iletişim kurar.

## Yaygın Yığın Türleri

- **Python-Django, Ruby on Rails, ASP.NET**
- **LAMP, MEAN, MEVN, MERN** gibi yığınlar, farklı teknolojilerle çeşitli ihtiyaçları karşılar.

### Avantajlar ve Dezavantajlar

- **MEAN:** Tüm bileşenler JavaScript olduğundan tek dil avantajı; büyük uygulamalar için sınırlı olabilir.
- **LAMP:** İlişkisel veriler için iyi; esneklik açısından MEAN/MEVN’ye göre daha sınırlı.

---

## 1. MEAN Yığını

- JavaScript tabanlıdır.
- Bileşenleri:
    - **MongoDB:** NoSQL veritabanı, esnek ve ölçeklenebilir.
    - **Express.js:** Node.js üzerinde çalışan web uygulama çatısı; HTTP isteklerini yönetir, API oluşturur.
    - **Angular.js:** Kullanıcı arayüzü geliştirme; tek sayfa uygulamalar (SPA) için idealdir.
    - **Node.js:** Sunucu tarafı JavaScript platformu.

**Avantajları:**  
Tüm bileşenlerde tek dil (JavaScript) kullanılır; açık kaynaklı olduğu için maliyet avantajı sunar.

---

## 2. LAMP Yığını

- Klasik web uygulama yığınıdır.
- Bileşenleri:
    - **Linux:** İşletim sistemi; güvenli ve açık kaynak
    - **Apache:** HTTP sunucusu; web sayfalarını sunar
    - **MySQL:** İlişkisel veritabanı yönetimi
    - **PHP:** Sunucu tarafı programlama dili

**Avantajları:**  
Açık kaynak ve geniş topluluk desteği; ilişkisel verilerle iyi çalışır.

---

## 3. MERN Yığını

- MEAN yığınına benzer, ancak Angular yerine React kullanılır.
- Bileşenleri:
    - **MongoDB:** Esnek veritabanı
    - **Express.js:** Sunucu tarafı çerçeve
    - **React:** Bileşen tabanlı, hızlı kullanıcı arayüzü geliştirme
    - **Node.js:** Sunucu tarafı çalışma platformu

**Avantajları:**  
React ile yüksek performans ve esneklik; tekrar kullanılabilir bileşenler yaratmak kolaydır.

---

> Bu yığınlar, farklı uygulama geliştirme ihtiyaçlarına göre çeşitli avantajlar sunar.