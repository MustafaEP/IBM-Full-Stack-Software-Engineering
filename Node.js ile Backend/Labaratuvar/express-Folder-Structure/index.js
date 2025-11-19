//Uygulama için ana yapılandırma dosyası
//Genelde app.js veya server.js olarak adlandırılır.


/*

    HTTP durum kodları :
    200s: Başarılı, Kodun başarılı bir şekilde işlendiğini belirtir.
    201: Oluşturuldu, Yeni bir kaynağın başarıyla oluşturulduğunu belirtir.
    204: İçerik Yok, İstek başarıyla işlendi ancak döndürülecek içerik olmadığını belirtir.
    300s: Yönlendirme, Kodun başarılı bir şekilde işlendiğini ancak istemcinin başka bir kaynağa yönlendirilmesi gerektiğini belirtir.
    301: Kalıcı Olarak Taşındı, İstenen kaynağın kalıcı olarak yeni bir URL'ye taşındığını belirtir.
    302: Geçici Olarak Taşındı, İstenen kaynağın geçici olarak yeni bir URL'ye taşındığını belirtir.
    400s ve 500s: Hata, İstek işlenirken bir hata oluştuğunu belirtir.
    400s: İstemci Hatası
    500s: Sunucu Hatası

*/

/*
    
    Testing Rest API:
    Blackbox testing: Kodun iç yapısını bilmeden yapılan testlerdir. API'nin dış davranışını test eder.

*/

/*

    API'nizin kimlik doğrulaması gerektiğinde, JSON Web Token veya JWT tabanlı kimlik doğrulama yaygın olarak kullanılır. JWT, istemci ve sunucu arasında güvenli bilgi alışverişi için kompakt, URL güvenli bir yöntem sağlar.
    Rest API'ler vatandaşsızdır, yani her istek bağımsızdır ve önceki isteklerin durumuna bağlı değildir. Bu, ölçeklenebilirlik ve performans açısından avantaj sağlar.
    Durumsuz kimlik doğrulama yöntemleri, her istekle birlikte kimlik doğrulama bilgilerini göndermeyi içerir. Bu, sunucunun her isteği bağımsız olarak doğrulamasını sağlar.

    API Blueprint: API'nin yapısını, işlevselliğini ve kullanımını tanımlayan bir belgedir. API'nin nasıl çalıştığını, hangi uç noktaların mevcut olduğunu ve bu uç noktaların nasıl kullanılacağını açıklar.
    Swagger (OpenAPI): API'lerin tasarımı, oluşturulması, belgelenmesi ve tüketilmesi için kullanılan popüler bir araçtır. Swagger, API'lerin yapısını tanımlamak için YAML veya JSON formatında bir belge kullanır ve bu belgeyi kullanarak otomatik olarak API belgeleri oluşturabilir.

    npm init kullanmak, yeni bir Node.js projesi başlatmak için kullanılan bir komuttur. Bu komut, proje için gerekli olan package.json dosyasını oluşturur ve proje hakkında temel bilgileri toplar.
    --save veya --save-dev bayrakları, npm paketlerini yüklerken kullanılır. --save bayrağı, paketi proje bağımlılıklarına eklerken, --save-dev bayrağı ise paketi geliştirme bağımlılıklarına ekler.

*/

/*

    Dosya adları için küçük harfleri kullanmak, dosya sistemlerinde tutarlılık sağlar ve büyük/küçük harf duyarlılığı sorunlarını önler. Ayrıca, küçük harfler genellikle URL'lerde ve web adreslerinde daha yaygın olarak kullanılır, bu da web tabanlı projelerde uyumluluğu artırır.
    Değişken adlarında camelCase kullanmak, okunabilirliği artırır ve JavaScript topluluğunda yaygın olarak kabul edilen bir konvansiyondur. CamelCase, birden fazla kelimeden oluşan değişken adlarını daha anlaşılır hale getirir ve kodun bakımını kolaylaştırır.
        CamelCase örneği: userName, totalAmount, isActive
    npm modulleri küçük harflerle adlandırılır ve kısa çizgiler (-) kullanılarak ayrılır. Bu, modül adlarının okunabilirliğini artırır ve modül adlarının benzersiz olmasını sağlar.
        npm modullerinde require yöntemi kullanırken CamelCase kullanın. require('myModule')
    
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from simple Node.js project!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
