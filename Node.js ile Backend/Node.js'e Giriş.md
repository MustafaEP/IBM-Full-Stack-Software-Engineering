# Node.js'e Giriş

## Node.js'in Rolü

- **Node.js**: Sunucu tarafı betikleme için kullanılan açık kaynaklı bir dildir ve V8 motoru üzerinde çalışır.
- JavaScript, istemci tarafı işlevselliği için yaygın olarak kullanılırken, Node.js sunucu bileşeni olarak aynı dili kullanır.

## Express.js Hakkında

- **Express.js**: Node.js uygulamaları geliştirmek için yüksek derecede yapılandırılabilir bir çerçevedir ve alt düzey API'leri HTTP yardımcı yöntemleri ve middleware kullanarak soyutlar.
- Express.js, uygulama geliştirmeyi hızlandıran özellikler sunar, örneğin, kamuya açık varlıklar, şablonlar/görünümler ve yönlendirme.

## Node.js Uygulama Geliştirme Süreci

- Kullanıcı arayüzünde bir seçenek seçildiğinde, bu işlem JavaScript kodunu tetikler ve istemci tarafında iş mantığını uygular.
- JavaScript uygulaması, HTTP üzerinden bir web hizmeti çağrısı yapar ve REST web hizmeti, HTTP isteğini alarak yanıt verir.

## Modül Nedir?

- **Modüller**: Belirli bir amaca hizmet eden, ilişkili ve kapsüllenmiş JavaScript kodunu içeren dosyalardır.
- Modüller, tek bir dosya veya birden fazla dosya ve klasörün bir koleksiyonu olabilir.

## Modül Spesifikasyonları

- **Modül spesifikasyonları**: JavaScript kodunda paketler oluşturmak için kullanılan standartlar ve kurallardır.
- Node.js uygulamaları için en yaygın modül spesifikasyonları **CommonJS** ve **ES modülleri**dir.

### Import ve Require İfadeleri

- **CommonJS modülleri**: Modülleri içe aktarmak için `require()` ifadesini kullanırken, ES modülleri `import()` fonksiyonunu kullanır.
- `require` ifadesi dosyanın herhangi bir yerinde çağrılabilirken, `import` ifadesi yalnızca dosyanın başında çağrılabilir.

### Senkron ve Asenkron Yükleme

- `require` ifadeleri senkron, yani modüller sırayla yüklenir; `import` ifadeleri ise asenkron, yani modüller aynı anda işlenebilir.
- Büyük ölçekli uygulamalarda `import` ifadeleri daha hızlı çalışır.

## Node.js ve Sunucu Tarafı JavaScript

- **Node.js**: JavaScript'i sunucu tarafında çalıştırmak için kullanılan bir programlama çerçevesidir.
- Sunucu tarafı JavaScript, istemciden gelen web hizmeti isteklerini işleyip yönlendirmek için kullanılır.

## JavaScript'in Temel Özellikleri

- **JavaScript**: Dinamik web uygulamaları oluşturmak için kullanılan bir yorumlanmış dildir.
- Modern web tarayıcıları JavaScript'i destekler ve bu dil, HTML ve CSS ile birlikte etkileşimli web uygulamaları geliştirmek için kullanılır.

## İstemci Tarafı ve Sunucu Tarafı JavaScript Arasındaki Farklar

- **İstemci tarafı JavaScript**: Kullanıcı arayüzünü HTML ve CSS ile oluşturur ve tarayıcıda çalışır.
- **Sunucu tarafı JavaScript**: Node.js ile çalışır ve istemciden gelen istekleri sunucu üzerinde işler.

## Node.js'in Temel Özellikleri

- Node.js, JavaScript kullanan bir sunucu tarafı programlama çerçevesidir.
- Tek iş parçacıklı bir uygulama ortamıdır ve girdi/çıktı (I/O) işlemlerini olaylar aracılığıyla yönetir.

### Asenkron I/O İşlemleri

- Node.js, asenkron I/O işlemleri için geri çağırma (callback) fonksiyonları kullanır. Bu, işlemlerin bloklanmadan tamamlanmasını sağlar.
- Geri çağırma fonksiyonları, işlemler tamamlandığında sonuçları işlemek için yazılır.

## HTTP Modülü ile Web Sunucusu Oluşturma

- HTTP modülü kullanarak, HTTP isteklerini dinleyen ve yanıt mesajları döndüren bir uygulama geliştirebilirsiniz.
- `HTTP.createServer` fonksiyonu ile bir web sunucusu örneği oluşturulur ve bu sunucu bir değişkende saklanır.
- Sunucunun belirli bir portta dinlemesi için `HTTP.listen` fonksiyonu kullanılır; örneğin, 8080 portunu dinlemek için bu fonksiyon çağrılır.

## Node.js Paketleri

- **Node.js paketleri**: Bir veya daha fazla modülden oluşur ve her paketin bir `package.json` dosyası bulunur. Bu dosya, modül hakkında detayları tanımlar.
- Eğer bir modülün `package.json` dosyası yoksa, Node.js varsayılan olarak ana sınıfın `index.js` adında olduğunu varsayar.

## Modül İçe Aktarma ve Dışa Aktarma

- Modülleri içe aktarmak için `require()` veya `import()` kullanılır.
- Modülleri dışa aktarmak için `module.exports` (CommonJS) veya `export` (ES modülleri) kullanılır.
