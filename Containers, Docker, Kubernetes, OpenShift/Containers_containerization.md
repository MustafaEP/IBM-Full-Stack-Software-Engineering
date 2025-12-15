# Konteyner Tanımı ve Özellikleri

Konteyner, uygulama kodu, çalışma zamanı, sistem araçları ve ayarları gibi gerekli bileşenleri kapsayan standart bir yazılım birimidir. Konteynerler, işletim sistemi bağımsızdır ve farklı platformlarda çalışabilir, bu da uygulamaların taşınabilirliğini artırır.

## Geleneksel Hesaplama Sorunları

Geleneksel ortamlarda uygulamalar izole edilemez ve kaynak yönetimi zordur, bu da kötü kaynak kullanımı ve yüksek maliyetlere yol açar. Fiziksel sunucuların sınırlamaları, uygulama performansını etkileyebilir ve otomasyonu zorlaştırır.

## Konteynerlerin Avantajları ve Zorlukları

Konteynerler, hızlı uygulama dağıtımı, kaynak kullanımını iyileştirme ve otomasyonu destekleme gibi avantajlar sunar. Ancak, güvenlik sorunları, yönetim karmaşıklığı ve eski uygulamaların dönüştürülmesi gibi zorluklar da vardır.

# Docker Nedir?

Docker, uygulamaları konteynerler olarak geliştirmek, göndermek ve çalıştırmak için açık bir platformdur. Basit mimarisi, büyük ölçeklenebilirliği ve çoklu platformlarda taşınabilirliği ile geliştiriciler arasında popülerlik kazanmıştır.

## Docker'ın Faydaları

Docker, tutarlı ve izole ortamlar sunarak uygulama dağıtımlarını stabil hale getirir ve bu süreç saniyeler içinde gerçekleşir. Küçük ve yeniden kullanılabilir Docker görüntüleri, geliştirme sürecini hızlandırır ve otomasyon yetenekleri hataları azaltarak bakım döngüsünü basitleştirir.

## Docker'ın Sınırlamaları

Docker, yüksek performans veya güvenlik gerektiren, monolitik mimariye dayanan veya zengin GUI özellikleri kullanan uygulamalar için uygun değildir. Standart masaüstü veya sınırlı işlevsellik sunan uygulamalar için de ideal bir çözüm değildir.

## Konteyner Oluşturma Süreci

Dockerfile kullanarak bir konteyner imajı oluşturma adımları:

1. Dockerfile oluştur
2. İmajı oluştur
3. Çalıştırılabilir bir konteyner oluştur

Örnek bir Dockerfile, temel imajı tanımlayan `FROM` ve terminalde "hello world" yazdıran `CMD` komutlarını içerir.

## Ana Docker Komutları

- `docker build` komutu, Dockerfile kullanarak bir konteyner imajı oluşturur ve imajın başarıyla oluşturulduğunu onaylayan mesajlar verir.
- `docker images` komutu, mevcut imajları listeleyerek imajın detaylarını gösterir.

## Konteyner Çalıştırma

- `docker run` komutu, bir imajdan çalıştırılabilir bir konteyner oluşturur ve "hello world" mesajını yazdırır.
- `docker ps` komutu, oluşturulan konteynerin detaylarını gösterir.

# Docker Nesneleri

Docker, Docker dosyası, görüntüler, konteynerler, ağlar, depolama hacimleri ve eklentiler gibi nesneleri içerir. Docker dosyası, bir görüntü oluşturmak için gereken talimatları içeren bir metin dosyasıdır.

## Docker Dosyası Komutları

Docker dosyası, her zaman bir `FROM` talimatı ile başlamalıdır; bu, bir temel görüntüyü tanımlar. `RUN` talimatı komutları çalıştırırken, `CMD` talimatı varsayılan bir komut tanımlar; yalnızca son `CMD` talimatı geçerlidir.

## Docker Görüntüleri ve Konteynerleri

Docker görüntüsü, bir Docker konteyneri oluşturmak için talimatlar içeren salt okunur bir şablondur. Bir Docker konteyneri, bir görüntünün çalıştırılabilir bir örneğidir ve veri kalıcılığı için hacimler ve bağlama montajları kullanılır.

# Docker Mimarisi

Docker mimarisi, Docker istemcisi, Docker sunucusu (host) ve kayıt defterinden (registry) oluşur. Docker istemcisi, komutlar ve REST API'leri aracılığıyla Docker sunucusuna talimatlar gönderir.

## Docker Sunucusu

Docker sunucusu, `dockerd` olarak bilinen bir daemon içerir ve bu daemon, Docker API isteklerini dinler ve işler. Sunucu, görüntüleri, konteynerleri, ağları ve eklentileri yönetir.

## Kayıt Defteri ve Konteynerleştirme Süreci

Docker, görüntüleri genel (örneğin, Docker Hub) veya özel kayıt defterlerinde depolar. Geliştiriciler, görüntüleri oluşturur ve kayıt defterine gönderir; ardından bu görüntüler yerel veya bulut sistemlerinden çekilebilir.
