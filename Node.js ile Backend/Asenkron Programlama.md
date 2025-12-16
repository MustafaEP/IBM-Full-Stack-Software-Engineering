# Asenkron Programlama

## Asenkron Callback Fonksiyonları

- Asenkron callback fonksiyonları, bir sunucu kaynağı için gelen HTTP yöntem çağrılarını yönetmek için kullanılır.
- Node.js, tüm ağ işlemlerini bloklamadan gerçekleştirir; bu, uygulamanın ağ işleminin tamamlanmasını beklerken zaman kaybetmemesini sağlar.

### HTTP İsteği ve Callback Fonksiyonu

- Uygulama, `HTTP.request` fonksiyonunu çağırarak uzak bir web sunucusuna istek gönderir. Node.js, HTTP yanıtını almadan önce hemen bir sonuç döner.
- HTTP yanıtı alındığında, Node.js, tanımladığınız callback fonksiyonunu çağırarak yanıt mesajını işler.

### Örnek Senaryo

- Uygulama, özel bir Node.js modülünü çağırır ve bu modül de `HTTP.request` fonksiyonunu kullanarak uzak sunucuya istek gönderir.
- Uzak sunucu yanıtını döndüğünde, Node.js modülündeki callback fonksiyonu, yanıt mesajını konsola yazdırır.

## Callback Fonksiyonları

- Node.js, asenkron bir çerçeve olduğu için callback fonksiyonları kullanarak sonuçları geri döndürür.
- Callback fonksiyonları, hata nesnesini ilk parametre olarak alır. Eğer hata tanımlıysa, bu hata işlenir ve açık bağlantılar kapatılır.

### Hata Yönetimi

- Callback fonksiyonu, ilk parametre olarak bir hata nesnesi alıyorsa, hata mesajı konsola yazdırılır.
- Eğer hata yoksa, sonuç kontrol edilir ve başarılı bir şekilde tamamlanan bir işlem sonucu konsola yazdırılır.

### HTTP İstekleri

- Uygulama, bir Node.js modülüne HTTP isteği gönderir. İstek başarılı bir şekilde gönderildiğinde, kontrol Node.js modülüne geri döner.
- Uzak sunucu bir HTTP yanıtı gönderdiğinde, Node.js çerçevesi, tanımlanan callback fonksiyonunu çağırır.

## Callback Fonksiyonları ve Nesting (İç İçe Geçme)

### Callback Nedir?

- **Callback**: Bir fonksiyonun, başka bir fonksiyona argüman olarak geçirilmesiyle oluşturulan ve belirli bir sonuç alındığında çalıştırılan fonksiyonlardır. Asenkron JavaScript kodu geliştirmemize yardımcı olurlar.

### Nesting (İç İçe Geçme)

- **Nesting**: Birden fazla callback fonksiyonunun birbirinin içine yerleştirilmesi, yani iç içe geçmesi durumudur. Bu, kodun okunabilirliğini ve bakımını zorlaştırır ve "Callback Hell" (Callback Cehennemi) olarak adlandırılır.

## Inversion of Control (IoC)

- **Inversion of Control**: Kontrol akışının, kodunuzun dışındaki bir üçüncü tarafa devredilmesi durumudur. Bu, genellikle callback'lerin üçüncü taraf koduna güvenmeyi gerektirir, bu da hata ayıklamayı zorlaştırır.
- Örneğin, bir butona birden fazla kez tıklanması durumunda, üçüncü taraf kodunun hatalı çalışması gibi sorunlar ortaya çıkabilir.

## Çözüm Yöntemleri

Callback hell ve IoC sorunlarını azaltmak için bazı yöntemler vardır:

1. **Yorumlar yazmak**: Kodunuzu daha anlaşılır hale getirmek için.
2. **Fonksiyonları küçük parçalara ayırmak**: Daha yönetilebilir hale getirmek için.
3. **Promises**: Asenkron işlemleri daha iyi yönetmek için kullanılabilir.
4. **Async/Await**: Daha okunabilir asenkron kod yazmak için bir başka yöntemdir.

## Promise Nedir?

- **Promise**: Asenkron bir yöntem tarafından döndürülen bir nesnedir.
- Üç durumu vardır: `pending` (beklemede), `resolved` (tamamlandı) ve `rejected` (reddedildi).

### Promise Durumları

- Başlangıçta, promise durumu "pending" (beklemede) olarak başlar. İşlem tamamlandığında "resolved" (tamamlandı) olur; bir hata oluşursa "rejected" (reddedildi) olur.
- Örneğin, bir dosya okuma işlemi başarılıysa promise "resolved" olur, başarısızsa "rejected" olur.

## Asenkron İşlemler ve Axios

- HTTP istekleri senkron olarak çağrıldığında bloklayıcı olabilir. Node.js ekosisteminde, HTTP isteklerini yönetmek için promise kullanan birçok paket vardır; bunlardan biri "axios" paketidir.
- Axios, bir promise nesnesi döndürür ve istek tamamlanana kadar durumu "pending" (beklemede) olarak kalır.

## Promise Kullanımı

- Promise nesnesinin `then` metodu, promise tamamlandığında çağrılır. Eğer promise reddedilirse, `catch` bloğu çalıştırılır.
