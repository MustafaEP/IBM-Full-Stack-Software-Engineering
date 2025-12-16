# Web Uygulamaları için JavaScript Programlama

JavaScript, web development'da kullanıcı deneyimini artıran önemli bir programlama dilidir.

## JavaScript'in Temel Özellikleri

- **DOM Manipulation**: JavaScript, web sayfasının içeriğini ve yapısını değiştirebilir, bu da etkileşimli ve dinamik web siteleri oluşturmayı sağlar.
- **Event Handling**: Kullanıcı etkileşimlerine (örneğin, buton tıklamaları) yanıt vererek web sitelerini daha ilgi çekici hale getirir.

## JavaScript'in Kullanım Alanları

- **User Experience**: Form verilerini doğrulama, etkileşimli formlar oluşturma ve kullanıcıya gerçek zamanlı geri bildirim sağlama gibi işlevler sunar.
- **Dynamic Content**: Sayfanın tamamını yenilemeden yeni içerik yükleyebilir, örneğin sosyal medya akışları gibi.
- **Animations and Visual Effects**: Web sitelerinin estetiğini artırmak için animasyonlar ve görsel efektler oluşturabilir.

## JavaScript Kodunu HTML'de Kullanma

- **Inline JavaScript**: JavaScript kodunu doğrudan HTML dosyasında `<script>` etiketi ile ekleyebilirsiniz.
- **External JavaScript File**: Daha büyük projeler için, JavaScript kodunu ayrı bir dosyada tutmak ve HTML dosyasına bağlamak önerilir.

## JavaScript ile Bilgi Gösterimi

- **`console.log`**: Değerleri kontrol etmek ve hata ayıklamak için kullanılır.
- **DOM Alteration**: Web sayfasının içeriğini dinamik olarak değiştirmek için kullanılabilir.
- **Pop-up Dialogues**: Kullanıcıya mesaj göstermek veya girdi almak için `alert`, `confirm`, ve `prompt` gibi yöntemler sunar.

## Değişkenler ve Veri Türleri

JavaScript, web development'da veri yönetimi ve değişkenlerin kullanımı üzerine odaklanan bir programlama dilidir.

### Değişkenlerin Tanımı

- **Variables**: JavaScript'te verileri saklamak ve yönetmek için kullanılır. Değişkenler, belirli bir name ile tanımlanan veri saklama alanlarıdır.
- **Declaration**: Değişken oluşturmak için `var`, `let` veya `const` anahtar kelimeleri kullanılır. Bu, JavaScript'e bellek alanı ayırdığınızı bildirir.

### Değişken Türleri

- **`var`**: Fonksiyon seviyesinde kapsam sağlar. Yani, `var` ile tanımlanan bir değişken, tanımlandığı fonksiyon içinde her yerden erişilebilir.
- **`let`**: ES6 ile tanıtılmıştır ve blok seviyesinde kapsam sağlar. Yani, `let` ile tanımlanan bir değişken, yalnızca tanımlandığı blok içinde geçerlidir.
- **`const`**: Değişmez değerler için kullanılır. Bir kez değer atandıktan sonra, `const` ile tanımlanan bir değişkenin değeri değiştirilemez.

### Veri Türleri

- **Primitive Data Types**: JavaScript'te temel veri türleri arasında `String`, `Number`, `Boolean`, `Undefined`, ve `Null` bulunur.
- **Composite Data Types**: Birden fazla değeri tek bir birim olarak saklayabilen veri türleridir. Örneğin, `Array` ve `Object`.

### Dinamik Tip Belirleme

- JavaScript, dinamik olarak tip belirleyen bir dildir. Yani, bir değişkenin veri türü, atanan değere göre çalışma zamanında belirlenir.

## Fonksiyonlar

JavaScript'te functions (fonksiyonlar) ve types of functions (fonksiyon türleri) üzerine odaklanan bu bölüm, temel kavramları açıklamaktadır.

### Fonksiyonların Tanımı

- **Function**: JavaScript'te, belirli bir görevi yerine getiren ve tekrar kullanılabilen bir block of code (kod bloğu) olarak tanımlanır.
- **Reusable**: Fonksiyonlar, kodun daha düzenli ve okunabilir olmasını sağlar, bu da karmaşık uygulamaların geliştirilmesinde önemlidir.

### Fonksiyon Türleri

- **Non-parameterized functions**: Parametre almayan ve belirli bir girdi gerektirmeyen fonksiyonlardır. Genellikle içsel mantık veya dışsal faktörlere dayanarak çalışır.
- **Parameterized functions**: Bir veya daha fazla parameter (parametre) alarak çalışan fonksiyonlardır. Bu parametreler, fonksiyonun tanımında belirtilir ve çağrıldığında belirli değerler ile geçilir.

### Fonksiyon Yazım Yöntemleri

- **Function declaration**: Geleneksel bir yöntemdir. `function` anahtar kelimesi ile başlar, ardından fonksiyon adı ve parametreler gelir.
- **Function expression**: Fonksiyonu bir değişken ile tanımlayarak kullanılır. Bu yöntem, fonksiyonun bir değer olarak saklanmasını sağlar.

### Özel Fonksiyon Türleri

- **Named function**: Belirli bir isme sahip olan ve bu isimle çağrılabilen fonksiyonlardır. Hata ayıklama için faydalıdır.
- **Immediately Invoked Function Expression (IIFE)**: Tanımlandıktan hemen sonra çalışan bir fonksiyondur. Genellikle değişkenleri kapsüllemek için kullanılır.
