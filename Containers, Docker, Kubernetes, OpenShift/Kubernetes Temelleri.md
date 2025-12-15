# Kubernetes Temelleri

## Konteyner Orkestrasyonu

Konteyner orkestrasyonu, büyük ölçekli konteyner yönetimi için otomatikleştirilmiş bir süreçtir. Bu süreç, konteyner tabanlı uygulamaların yaşam döngüsünü yönetir ve birçok avantaj sunar.

### Konteyner Yönetimi Zorlukları

Başlangıçta tek bir konteynerle başlamak kolaydır, ancak zamanla bu sayı artar ve yönetimi zorlaşır. Yüzlerce veya binlerce konteynerin yönetimi, bağlantı, ölçekleme ve yönetim açısından karmaşık hale gelir.

### Konteyner Orkestrasyonunun Faydaları

- Otomatikleştirilmiş yaşam döngüsü yönetimi ile daha hızlı dağıtım ve daha az hata sağlar
- CI/CD iş akışlarıyla entegrasyon, kaynakların daha verimli kullanılmasını sağlar
- Güvenlik, ölçeklenebilirlik ve hata kurtarma gibi alanlarda iyileştirmeler sunar

### Popüler Konteyner Orkestrasyon Araçları

- **Kubernetes**: Geniş işlevselliği ve destekleyici araçları ile en yaygın kullanılan platformdur
- **Docker Swarm**: Docker ortamları için özel olarak tasarlanmış bir otomasyon aracıdır
- **Marathon ve HachiCorps Nomad**: Farklı altyapılarda konteyner yönetimi ve zamanlama için kullanılır

Konteyner orkestrasyonu, işletmelerin hedeflerine ulaşmasına ve kârlılığı artırmasına yardımcı olur.

---

## Kubernetes Nedir?

Kubernetes'in temel kavramlarını ve yeteneklerini anlamak için bu içerik, Kubernetes'in ne olduğunu ve ne olmadığını açıklamaktadır.

Kubernetes, konteynerleştirilmiş uygulamaların otomatik dağıtımını, ölçeklenmesini ve yönetimini sağlayan açık kaynaklı bir sistemdir. Google tarafından geliştirilen ve Cloud Native Computing Foundation tarafından sürdürülen Kubernetes, bulutlar arasında kolayca taşınabilir.

### Kubernetes Kavramları

- **Podlar**: En küçük dağıtılabilir hesaplama nesneleridir ve iş yüklerini çalıştırmak için yüksek düzeyde soyutlamalar sağlar
- **Servisler**: Belirli bir grup podda çalışan uygulamaları açığa çıkarır ve her pod'a benzersiz bir IP adresi atanır

### Kubernetes Yetenekleri

- Uygulama veya yapılandırma değişikliklerinin otomatik dağıtımı ve sağlık izleme gibi özellikler sunar
- Depolama orkestrasyonu, yatay ölçekleme ve gizli bilgi yönetimi gibi ek yetenekler içerir

---

## Kubernetes Mimarisi

Kubernetes kümesi, konteynerleştirilmiş uygulamaları çalıştıran bir dizi düğümden oluşur. Her küme bir ana düğüm (kontrol düzlemi) ve bir veya daha fazla işçi düğümüne sahiptir.

Kontrol düzlemi, kümenin istenen durumunu korur ve küme içindeki olaylara yanıt verir. Örneğin, iş yüklerinin planlanması ve yeni kaynakların oluşturulması gibi kararlar alır.

### Kontrol Düzlemi Bileşenleri

- **Kubernetes API Sunucusu**: Kontrol düzleminin ön yüzüdür ve küme içindeki tüm iletişim bu API üzerinden gerçekleşir
- **Etcd**: Küme verilerini saklayan dağıtık bir anahtar-değer deposudur ve istenen durumu tanımlar
- **Kubernetes Zamanlayıcısı**: Yeni oluşturulan pod'ları düğümlere atar ve en uygun düğümü seçer

### İşçi Düzlemi Bileşenleri

- **Düğüm**: Kullanıcı uygulamalarının çalıştığı işçi makineleridir ve her düğüm, uygulamaları çalıştırmak için gerekli hizmetleri içerir
- **Kubelet**: Bir işçi düğümündeki en önemli bileşendir ve pod'ların sağlığını kontrol eder
- **Kube-proxy**: Her düğümde çalışan bir ağ proxy'sidir ve pod'lar arasındaki iletişimi sağlar

---

## Kubernetes Nesneleri

Kubernetes nesneleri, kimlik, durum ve davranışa sahip kalıcı varlıklardır. Örnekler arasında podlar, ad alanları, replikasyon setleri ve dağıtımlar bulunur.

Her nesne, kullanıcı tarafından sağlanan bir nesne spesifikasyonu (desired state) ve Kubernetes tarafından sağlanan bir durum (current state) içerir.

### Ad Alanları ve Etiketler

- **Ad Alanları**: Bir küme içindeki kaynak gruplarını izole etmek için kullanılır ve büyük kullanıcı grupları için idealdir
- **Etiketler**: Nesneleri tanımlamak için kullanılan anahtar-değer çiftleridir ve etiket seçicileri, nesneleri gruplamak için temel bir yöntemdir

### Podlar ve Dağıtımlar

- **Pod**: Kubernetes'teki en basit birimdir ve bir uygulamanın tek bir örneğini temsil eder. Podlar genellikle bir veya daha fazla konteyner içerir
- **Dağıtımlar**: Replikasyon setlerini yönetir ve uygulama güncellemeleri için ek yönetim yetenekleri sunar. Rolling update özelliği ile yeni sürümler sorunsuz bir şekilde dağıtılabilir

---

## Hizmetler (Services)

### Hizmetin Tanımı

Hizmet, bir kümedeki Pod'lar için erişim politikaları sağlayan bir REST nesnesidir. Her hizmet, uygulamalara erişim için benzersiz bir IP adresi atanır ve Pod değişikliklerini takip eder.

### Hizmet Türleri

- **Cluster IP**: Varsayılan hizmet türüdür ve yalnızca küme içinde erişilebilir
- **NodePort**: Her düğümün IP adresinde sabit bir port üzerinden hizmeti dışarıya açar
- **LoadBalancer**: NodePort ve Cluster IP hizmetlerini otomatik olarak oluşturur ve dışarıdan erişim sağlar
- **External Name**: Bir DNS adına haritalama yapar ve dış depolama ile iletişim sağlar

### Diğer Kubernetes Nesneleri

- **Ingress**: Dış kullanıcıların birden fazla hizmete erişimini yönetir
- **DaemonSet**: Her düğümde bir Pod kopyası çalıştırır
- **StatefulSet**: Durumlu uygulamaları yönetir ve Pod'ların sırasını garanti eder
- **Job**: Pod'ları oluşturur ve tamamlanma süreçlerini takip eder; gerektiğinde yeniden dener

Bu içerik, Kubernetes'teki hizmetlerin ve nesnelerin temel işlevlerini anlamanızı sağlar.

---

## Kubectl

### Kubectl Nedir?

Kubectl, Kubernetes için komut satırı arayüzüdür ve uygulamaların dağıtımını, küme kaynaklarının yönetimini ve günlüklerin görüntülenmesini sağlar.

Kubectl komut yapısı, komut, tür, ad ve bayraklardan oluşur.

### Kubectl Komut Türleri

1. **İmperatif Komutlar**: Canlı nesneleri doğrudan oluşturma, güncelleme ve silme işlemleri için kullanılır. Kolay öğrenilir ancak esneklik sunmaz
2. **İmperatif Nesne Yapılandırması**: YAML veya JSON formatında yapılandırma dosyaları kullanarak nesneleri tanımlar. Şablonlar ile birlikte kullanıldığında daha tutarlıdır
3. **Deklaratif Nesne Yapılandırması**: Kullanıcı müdahalesi olmadan, Kubernetes'in gerekli işlemleri otomatik olarak gerçekleştirmesini sağlar. Üretim sistemleri için idealdir

### Yaygın Kubectl Komutları

- **get**: Kaynakları listelemek için kullanılır
- **delete**: Kaynakları silmek için kullanılır
- **apply**: YAML veya JSON dosyalarından kaynaklar oluşturmak için kullanılır
