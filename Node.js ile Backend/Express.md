# Express

## Node.js ile Genişletme

- Node.js, HTTP sunucusu oluşturmak için kullanılabilir, ancak varsayılan çerçeve sınırlıdır. Geliştiriciler, web sunucusu oluşturma sürecinde yönlendirme, dosya ayrıştırma, kimlik doğrulama ve veritabanına bağlanma gibi işlevler için harici kütüphanelere ve paketlere başvururlar.
- Örneğin, hava durumu verilerini almak için bir HTTP isteği gönderilebilir ve alınan veriler manuel olarak ayrıştırılabilir.

### XML Verilerinin İşlenmesi

- XML verilerini bir dize olarak işlemek, yapıyı göz ardı eder ve hatalı XML verileri içerebilir. Dize eşleştirme, XML verilerinin yapısına karşı daha az toleranslıdır.
- `xml2js` Node.js paketi, XML öğelerini JavaScript nesnesine dönüştürmek için kullanılabilir. Bu paket, başka bir dilde yazılmış bir XML ayrıştırma kütüphanesi gerektirmeden yalnızca JavaScript kullanır.

### Paket Yönetimi

- Node.js paketlerini yönetmek için npm uygulaması kullanılır. Örneğin, `npm install xml2js` komutu ile xml2js modülü ve gerekli bağımlılıkları indirilir.
- `parseString` fonksiyonu, XML ağacını işledikten sonra geri çağırma fonksiyonunu çağırır ve sonuç JavaScript değişkeni, XML parçasının içeriğini temsil eder.

## Node.js ve Web Çerçeveleri

- Node.js, JavaScript'i sunucuda çalıştıran bir çalışma ortamıdır; bir çerçeve değildir. Çerçeveler, belirli bir ortamda uygulama geliştirmek için kullanılan yapısal bir iskelet gibidir.
- Node.js ile çalışmak için bir web çerçevesine ihtiyaç vardır. Node.js ile çalışan çerçeveler "node web framework" veya "node framework" olarak adlandırılır.

## MVC ve REST API Yaklaşımları

### MVC (Model-View-Controller)

Uygulamayı üç bileşene ayıran bir mimari modeldir:

- **Model**: Uygulamanın verilerini yönetir ve veritabanı ile etkileşimde bulunur.
- **View**: Modelden aldığı verileri sunar.
- **Controller**: Kullanıcıdan gelen verileri işler ve model ile etkileşimde bulunur.

### REST API

- Farklı web hizmetlerinin birbirleriyle iletişim kurmasını sağlar. RESTful API'ler, istemci ve sunucu kodlarının bağımsız olmasını ve iletişimin durumsuz olmasını gerektirir.

## Popüler Node Web Çerçeveleri

- **Express.js**: Yönlendirme ve ara yazılım için kullanılan popüler bir Node web çerçevesidir. Kolay bir öğrenme eğrisi vardır ve MVC mimarisini uygulamak için uygundur.
- **Koa**: Express'in tasarımcıları tarafından oluşturulmuş daha yeni bir çerçevedir. Daha küçük ve daha ifade edici bir yapı sunar.
- **Socket.io**: Gerçek zamanlı veri alışverişi için idealdir ve WebSocket kullanarak istemci ve sunucu arasında iki yönlü iletişim sağlar.
- **Hapi.js**: Güvenlik özellikleri ile bilinen bir açık kaynak Node web çerçevesidir. API sunucuları ve HTTP-proxy uygulamaları geliştirmek için kullanılır.
- **NestJS**: Dinamik ve ölçeklenebilir kurumsal uygulamalar geliştirmek için uygundur ve TypeScript ile uyumludur.

## Express Nedir?

- **Express**: Node.js çalışma zamanı ortamına dayanan bir web uygulama çerçevesidir. Düşük seviyeli detayları soyutlayarak uygulamanızı daha iyi organize etmenize ve daha hızlı geliştirmenize yardımcı olur.
- Express, API oluşturmak ve sunucu tarafı render'ı (SSR) için yaygın olarak kullanılır.

### API ve Sunucu Tarafı Render'ı (SSR)

- **API kullanımı**: Veritabanı katmanıyla etkileşim kurmak için bir HTTP arayüzü kurmayı içerir. Veriler, istemciye JSON formatında gönderilir.
- **SSR (Server-Side Rendering)**: Express, istemciden gelen verileri kullanarak dinamik olarak HTML, CSS ve/veya JavaScript oluşturur. Bu işlem, `res.render` metodu ile gerçekleştirilir.

## Express ile Çalışma Adımları

1. Express'i bir bağımlılık olarak tanımlayın (`package.json` dosyasında).
2. Gerekli modülleri indirmek için `npm install` komutunu çalıştırın.
3. Express modülünü içe aktarın ve bir Express uygulaması oluşturun.
4. Yeni bir rota işleyici oluşturun.
5. Belirli bir port numarasına HTTP sunucusunu başlatın.

## package.json Dosyası

- `package.json` dosyası, bir Node.js modülünün içeriği hakkında bilgi depolar. İçinde modül adı, versiyonu, açıklaması, ana dosyası ve bağımlılıkları gibi bilgiler bulunur.
- Express'i bağımlılık olarak tanımlamak için, `dependencies` kısmında Express modülünü ve versiyonunu listeleyin.

## Yönlendirme (Routing)

- Yönlendirme, sunucu tarafı betimlemesinde önemli bir unsurdur. Sunucuya gelen farklı yollar (routes) için istekler (GET, POST, PUT, DELETE) işlenmelidir.
- Uygulama düzeyinde veya yönlendirici düzeyinde yönlendirme yapılabilir. Uygulama düzeyinde, her yol için ayrı yöntemler kullanarak istekleri işlemek daha basittir.

## Ara Yazılım (Middleware)

Ara yazılım, Express uygulamalarında istek ve yanıt döngüsünde çalışan fonksiyonlardır. İstekleri işlemeden önce veya sonra çeşitli işlemler yapılmasını sağlar.
