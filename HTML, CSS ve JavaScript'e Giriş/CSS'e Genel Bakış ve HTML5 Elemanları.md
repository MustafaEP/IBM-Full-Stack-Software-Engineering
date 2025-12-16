# CSS'e Genel Bakış ve HTML5 Elemanları

## HTML5 Elements

### HTML5 Elementleri

- HTML5'e özgü elementler arasında `section`, `article`, `header`, `footer`, `figure` ve `figcaption` bulunmaktadır.
- HTML5 element tag'leri, örneğin `audio` ve `canvas` gibi, içeriği tanımlayan sezgisel isimlere sahiptir.

### Structural Elements (Yapısal Elementler)

- **`div` tag'i**: Sayfanın farklı bölümlerini ayırmak için kullanılır ve diğer HTML5 yapısal elementleri içinde barındırabilir.
- **`article`**: Sayfanın geri kalanından ayırt edilebilen bir kod bloğunu tanımlar.
- **`section`**: Belgede mantıksal bir ayrım sağlar.

### Navigation and Grouping (Navigasyon ve Gruplama)

- **`nav` tag'i**: Web sayfasındaki navigasyon linklerini gruplamak için kullanılır.
- **`aside` tag'i**: Ana tartışmaya zarar vermeden ek bilgi sağlamak için kullanılır.

## HTML5 Input Element – Attributes

HTML5 input elementlerinin attributes'larını açıklamayı amaçlamaktadır.

### Input Types

- **`input type="color"`**: Kullanıcının bir renk seçmesine olanak tanır; desteklenmeyen tarayıcılarda metin girişi olarak görünür.
- **`input type="date"`**: Tarih girişi sağlar; tarayıcıya göre farklılık gösterir.

### Validation and Fallback (Doğrulama ve Yedekleme)

- **`input type="email"`**: Email formatına uygunluk kontrolü yapar; yanlış formatta geri bildirim verir.
- **`input type="tel"`**: Telefon numarası girişi için kullanılır; yalnızca metin girişi sağlar, özel bir pattern gerektirir.

### Additional Attributes (Ek Özellikler)

- **`placeholder`**: Giriş alanında örnek değerler gösterir; form gönderildiğinde bu değer gönderilmez.
- **`required`**: Giriş yapılması zorunlu alanı belirtir; placeholder olsa bile geçerlidir.

## CSS Nedir?

### CSS'in Tanımı

- **CSS**: HTML öğelerinin nasıl görüntüleneceğini tanımlayan bir stil sayfası dilidir.
- CSS, web sayfalarında tutarlı bir görünüm oluşturmak için kullanılır; çocuk ve torun öğeleri genellikle ebeveyn öğelerinden stiller miras alır.

### Veri ve Tasarım Ayrımı

- HTML, veriyi tarayıcıya gönderirken, CSS bu veriye tasarım uygular.
- Bu ayrım, erişilebilirlik gereksinimlerini karşılamaya yardımcı olur ve arama motorlarının web sitelerini dizine almasını kolaylaştırır.

### CSS Uygulama Yöntemleri

- **Inline CSS**: Tek bir HTML öğesi için kullanılır, ancak karmaşık hale gelebilir.
- **Internal CSS**: Tek bir sayfa için kullanılır, ancak sayfayı karıştırabilir.
- **External CSS**: Tüm web sitesini stillendirmek için kullanılır ve temiz bir HTML sağlar.

### Tasarım Türleri

- **Fluid Layout**: Elemanların yüksekliği ve genişliği esnektir ve tarayıcı penceresine göre değişir.
- **Fixed Layout**: Elemanların yüksekliği ve genişliği sabittir ve değişmez.

### CSS'nin Önemi

- CSS, web sayfalarının görünümünü kontrol eder ve kullanıcı deneyimini artırır.
- Tasarım, veriden ayrı tutulduğunda, erişilebilirlik ve arama motoru optimizasyonu için avantaj sağlar.

## CSS Frameworks

### CSS Frameworks'ün Türleri

- **Utility Frameworks**: Tekil CSS özelliklerine odaklanan "utility" sınıflar sunar. HTML kodunda doğrudan CSS özelliklerini uygulamayı kolaylaştırır.
- **Component Frameworks**: Önceden stil verilmiş bileşenler ve şablonlar sağlar. Kullanıcıların CSS bilgisi az olsa bile hızlı bir şekilde web sayfaları oluşturmasına olanak tanır.

### Utility-First Frameworks

- **Tailwind CSS**: Sınıflar kullanarak tasarımları doğrudan HTML'de oluşturmayı sağlar. Örneğin, "text-center" gibi sınıflar kullanarak stil uygulamak mümkündür.
- **Responsive Design**: Tailwind CSS, ekran boyutuna göre stilleri uygulamak için "md:" gibi ön ekler kullanır, bu da geliştiricilere zaman kazandırır.

### Component Frameworks

- **Bootstrap**: Hızlı ve duyarlı web siteleri oluşturmak için kapsamlı bir ön uç araç seti sunar. Önceden tanımlanmış bileşenler ile tutarlı stiller sağlar.
- **Kolay Kullanım**: Bootstrap, CSS bilgisi az olan kullanıcılar için bileşenleri kolayca eklemeyi sağlar, ancak sınırlı özelleştirme imkanı sunar.

> Sonuç olarak, CSS Frameworks, kullanıcı arayüzü (UI) öğelerini uygulamayı ve mobil uyumlu web sayfaları oluşturmayı kolaylaştırır.
