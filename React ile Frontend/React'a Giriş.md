# React'a Giriş

## React Hakkında Temel Bilgiler

### Kütüphaneler ve Framework'ler

- **Library (Kütüphane):** Önceden yazılmış kod parçalarını içeren bir depo. Örnekler: jQuery, Lodash, D3.js, React.
- **Framework (Framework):** Uygulama geliştirmek için yapı ve araçlar sağlayan kapsamlı bir platform. Örnekler: AngularJS, Ember JS, Svelte, Vue.js.

### Ön Uç Framework'leri

- **Front-end Framework (Ön Uç Framework):** Web uygulamalarının kullanıcı arayüzünü (UI) oluşturmak için kullanılan framework'ler. Örnekler: React, AngularJS, Vue.js.

### React'ın Öne Çıkan Özellikleri

- **Component-based Architecture (Bileşen Tabanlı Mimari):** Tekrar kullanılabilir UI bileşenleri oluşturma imkanı sunar.
- **Declarative Syntax (Açıklayıcı Söz Dizimi):** UI davranışını tanımlamaya odaklanır, React arka planda DOM'u yönetir.
- **Virtual DOM (Sanal DOM):** Değişiklikler olduğunda gerçek DOM ile karşılaştırma yaparak yalnızca gerekli kısımları günceller.
- **One-way Data Binding (Tek Yönlü Veri Bağlama):** Veri akışının yalnızca üstten alta doğru olmasını sağlar.
- **JSX (JavaScript XML):** HTML benzeri kod yazmayı kolaylaştıran bir JavaScript sözdizimi uzantısıdır.
- **Hooks:** React 16.8 ile tanıtılan, durum ve diğer React özelliklerini yönetmeyi kolaylaştıran bir özellik.

## Vite Build Tool

### Vite

- **Vite:** Modern web geliştirme için geliştirilmiş bir build tool'dur. React, Angular veya düz JavaScript ile kullanılabilir.
- **Speed (Hız):** Vite, JavaScript modüllerini yalnızca gerektiğinde birleştirerek geliştirme sürecini hızlandırır.

## React Projesi Oluşturma

### React Projesi Oluşturma Adımları

1. **npm create command:** Terminalde bu komutu yazarak yeni bir proje oluşturabilirsiniz.
2. **Project Name (Proje Adı):** Projeniz için bir isim verin.
3. **Framework Selection (Framework Seçimi):** Açılan listeden React'ı seçin.
4. **Scripting Language (Betik Dili):** JavaScript olarak seçin.
5. **Project Structure (Proje Yapısı):** Proje oluşturulduktan sonra, gerekli dosyalar ve dizinler otomatik olarak oluşturulur.

### React Klasör Yapısı

- **node_modules:** Tüm bağımlılıkların bulunduğu dizin.
- **public:** Statik varlıkların (HTML, resimler, fontlar) bulunduğu dizin.
- **src:** Uygulamanın kaynak kodunun bulunduğu dizin. İçinde:
  - `main.jsx`: Uygulamanın giriş noktası.
  - `App.jsx`: Uygulamanın ana bileşeni.
- **package.json:** Proje hakkında meta veriler ve bağımlılıkları içerir.
- **vite.config.js:** Vite yapılandırma ayarlarını içerir.

## ECMAScript 6 (ES6)

### ES6 Nedir?

- ES6, JavaScript'in 2015 yılında çıkan bir sürümüdür ve önemli değişiklikler içermektedir.
- ES.next, gelecekteki ECMAScript sürümlerini ifade eden dinamik bir isimdir.

### Yeni Özellikler

- **let ve const:** Değişken tanımlamak için kullanılır. `let`, değişkenin kapsamını (scope) sınırlarken, `const` sabit değerler tanımlar.
- **Arrow Functions:** Fonksiyonları daha kısa ve temiz bir şekilde tanımlamak için kullanılır. Örneğin, `() => {}` şeklinde yazılabilir.
- **Promises:** Asenkron işlemlerin tamamlanmasını temsil eder. Bir promise, "pending" (beklemede), "fulfilled" (tamamlanmış) veya "rejected" (reddedilmiş) durumlarında olabilir.
- **Class:** JavaScript'te nesne yönelimli programlamayı (object-oriented programming) mümkün kılar. Sınıflar, nesne oluşturmak için bir şablon (template) görevi görür.

### Örnek Kullanımlar

- `let` ve `const` ile değişken tanımlarken, `let` yerel kapsamda (local scope) geçerlidir.
- Arrow functions, normal fonksiyonlar gibi çağrılabilir ve parametre alabilir.
- Class yapısı, nesne oluşturmak için `new` anahtar kelimesi ile kullanılır ve miras alma (inheritance) özelliği vardır.

## JSX

### JSX'in Temel Özellikleri

- JSX, HTML benzeri bir sözdizimi kullanır ve açılış ve kapanış etiketleri ile öğeleri tanımlar.
- JSX, JavaScript ifadelerini destekler ve bu sayede dinamik içerik oluşturulabilir.

### JSX'in Derlenmesi

- Tarayıcılar JSX'i anlamaz, bu nedenle JSX kodunun standart JavaScript nesnelerine dönüştürülmesi için Babel gibi bir derleyici (compiler) kullanmak gerekir.
- `create react app` komutu, JSX'in derlenmesini otomatikleştirir.

### JSX'in Avantajları

(JSX'in Avantajları bölümü henüz tamamlanmamış)
