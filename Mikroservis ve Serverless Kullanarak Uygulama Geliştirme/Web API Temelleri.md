# Web API Temelleri

## REST API'lerin Temel Özellikleri

**REST** (Representational State Transfer - Temsili Durum Transferi), uygulamaların ağ içinde nasıl iletişim kuracağını tanımlayan bir mimari stildir.

RESTful API'ler:
- HTTP üzerinden tüm istekleri yönetir
- Durumsuz istemci-sunucu iletişimi sağlar
- Bileşenler arasında standart bir arayüz sunar

### REST API'lerin İşleyişi

- REST API'ler, kaynaklar üzerinde **CRUD** (Create, Read, Update, Delete) işlemleri gerçekleştirmek için HTTP isteklerini kullanır.
- Her istek, işlenmesi için gerekli tüm bilgileri içerir ve sunucuda herhangi bir depolanmış bağlamdan yararlanamaz.

### REST API'lerin Avantajları

- REST API'lerin en büyük avantajı, isteklerin kaynağından bağımsız olarak aynı arayüzü sunmasıdır.
- Örnek: CEX.IO gibi bir kripto para borsası, REST API aracılığıyla geliştiricilere piyasa verileri sunmaktadır.

## API Gateway Nedir?

**API Gateway**, bir istemci ile arka uç hizmetleri arasında yer alan bir API yönetim aracıdır. Farklı hizmetleri bir araya getirerek istemcinin ihtiyaç duyduğu sonuçları döndürür.

### API Gateway'in Avantajları

- İstemcileri mikro hizmetlerin nasıl bölündüğünden izole eder, böylece istemci tarafını basitleştirir.
- Birden fazla hizmetten veri almak için tek bir gidiş dönüş ile istek sayısını azaltır.

### API Gateway'in Dezavantajları

- Geliştirilmesi ve bakımının yapılması gereken ek bir bileşendir.
- Yanlış tasarlandığında uygulamada tek bir arıza noktası haline gelebilir.

## GraphQL Nedir?

**GraphQL**, API'ler için bir sorgu dilidir ve istemcilerin yalnızca ihtiyaç duydukları verileri talep etmelerine olanak tanır. Dil bağımsızdır, yani herhangi bir programlama dili ile geliştirilebilir.

### GraphQL'in Avantajları

- Tek bir uç nokta üzerinden tüm verileri almanıza olanak tanır, bu da RESTful API'lere göre daha verimlidir.
- İstemciler yalnızca ihtiyaç duydukları verileri alır, gereksiz veri alımını önler.

### GraphQL Kullanım Örnekleri

- **Netflix**: Mikro hizmet mimarisi ile GraphQL kullanarak veri ve ilişkileri birleştiren bir "Studio API" geliştirmiştir.
- GraphQL, yeni alanlar ekleyerek mevcut istemcileri etkilemeden API'yi genişletmeyi kolaylaştırır.
