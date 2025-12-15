ReplicaSet'in temel işlevlerini ve avantajlarını anlamak için bu video içeriği önemli bilgiler sunmaktadır.

ReplicaSet Nedir?

ReplicaSet, belirli sayıda pod'un her zaman çalışır durumda olmasını sağlar.
Pod'ların sayısını artırmak veya azaltmak için ekleme veya silme işlemleri yaparak yüksek kullanılabilirlik sağlar.
ReplicaSet'in Çalışma Prensibi

ReplicaSet, mevcut durumu istenen durumla eşleştirmeye çalışır.
Pod'lar arası yük dengelemesi ve arızaların yönetimi için tek bir hata noktasını ortadan kaldırır.
Kullanım ve Yönetim

ReplicaSet, bir dağıtım oluşturulduğunda otomatik olarak oluşturulur ve dağıtımlar tarafından yönetilir.
CLI veya YAML dosyası kullanarak ReplicaSet oluşturmak mümkündür; ancak doğrudan bir dağıtım kullanmak en iyi uygulamadır.
Coach
Bu içerik, Kubernetes'te otomatik ölçeklendirme kavramını ve türlerini açıklamaktadır.

Otomatik Ölçeklendirme Nedir?

Otomatik ölçeklendirme, Kubernetes'in kaynak kullanımını ve maliyetleri optimize etmek için bir kümenin talebe göre otomatik olarak ölçeklenmesini sağlar.
İki farklı katmanda otomatik ölçeklendirme yapılabilir: küme veya düğüm seviyesi ve pod seviyesi.
Otomatik Ölçeklendirme Türleri

Yatay Pod Otomatik Ölçeklendirici (HPA): Uygulamanın kopyalarının sayısını artırarak veya azaltarak pod sayısını ayarlar.
Dikey Pod Otomatik Ölçeklendirici (VPA): Bir konteynerin kaynak taleplerini ve sınırlarını artırarak veya azaltarak pod'un kaynak boyutunu ayarlar.
Küme Otomatik Ölçeklendirici (CA): Pod'ların planlanamadığı veya talebin düştüğü durumlarda kümedeki düğüm sayısını ayarlar.
Otomatik Ölçeklendirme Uygulamaları

HPA, CPU veya bellek kullanımı gibi metrikler için hedefler belirleyerek otomatik olarak yük dengelemesi yapar.
VPA, mevcut pod'un kaynak kullanımına göre kaynakları artırır veya azaltır.
CA, düğümlerin aşırı yüklenmesi durumunda yeni düğümler ekleyerek veya mevcut düğümleri kaldırarak küme kaynaklarını yönetir.

Kubernetes dağıtım stratejileri, bir uygulamanın yaşam döngüsünü tanımlayarak nesnelerin ve uygulamaların yapılandırılmış durumunu otomatik bir şekilde elde etmeyi ve sürdürmeyi amaçlar. Etkili dağıtım stratejileri, riskleri en aza indirir.

Dağıtım Stratejileri

Recreate Stratejisi: Mevcut uygulama sürümü (v1) kapatılır ve yeni sürüm (v2) yeni Pod'lar üzerinde dağıtılır. Kısa bir kesinti süresi vardır.
Rolling Stratejisi: Her Pod birer birer güncellenir. Kullanıcılar, güncellemeler sırasında mevcut sürümle yeni sürüm arasında yönlendirilir, bu sayede kesinti süresi minimumda tutulur.
Gelişmiş Stratejiler

Blue/Green Stratejisi: Mevcut uygulamanın bir kopyası (yeşil ortam) oluşturulur ve test edilir. Sorunlar giderildikten sonra kullanıcı trafiği yeni sürüme yönlendirilir.
Canary Stratejisi: Yeni sürüm, mevcut sürümle birlikte küçük bir kullanıcı grubuna sunulur. Başarılı testlerden sonra tüm kullanıcılara dağıtılır.
Test ve Geri Alma Stratejileri

A/B Testi Stratejisi: İki farklı uygulama sürümü (A ve B) kullanıcı gruplarına sunulur. Hangi sürümün daha iyi performans gösterdiği belirlenir.
Shadow Stratejisi: Yeni sürüm, mevcut sürümle birlikte çalışır ancak kullanıcıya yanıt vermez. Bu, gerçek kullanıcı verileri ile performans testleri yapmayı sağlar.
Her stratejinin avantajları ve dezavantajları vardır ve uygulamanın türüne göre en uygun strateji seçilmelidir.

"Rolling Updates" (Sürekli Güncellemeler) kavramını ve nasıl çalıştığını açıklamaktadır.

Sürekli Güncellemeler

Sürekli güncellemeler, otomatik ve kontrollü uygulama değişikliklerini belirli bir zaman diliminde gerçekleştiren güncellemelerdir.
Uygulamanızı sürekli güncellemeye hazırlamak için, dağıtımlara canlılık ve hazır olma prob'ları eklemeniz gerekmektedir.
Güncelleme Stratejileri

Güncellemeler, "max surge" ve "max unavailable" ayarları ile yönetilir; bu ayarlar, güncellemelerin ne kadar hızlı veya yavaş gerçekleşeceğini belirler.
"All-at-once" ve "one-at-a-time" gibi iki ana güncelleme stratejisi vardır; birincisi tüm pod'ları aynı anda güncellerken, ikincisi her bir pod'u sırayla günceller.
Geri Alma İşlemleri

Hatalı bir güncelleme durumunda, Kubernetes'te geri alma işlemleri kolayca uygulanabilir.
Geri alma işlemi, önceki sürüm pod'larının yeniden aktif hale getirilmesi ile gerçekleştirilir ve kullanıcı erişimi kesintiye uğramaz.
Config Maps

Config map, anahtar-değer çiftlerinde gizli olmayan verileri depolayan bir API nesnesidir ve uygulama kodunda sabit kodlama yapılmasını önler.
Config map, birden fazla dağıtım için yeniden kullanılabilir ve yapılandırma verilerini pod'lara ve dağıtımlara sağlar.
Secrets

Secret, hassas bilgileri uygulamaya sağlamak için kullanılır ve string literal, ortam değişkenleri veya dosya montajları ile oluşturulabilir.
Secret'lar, uygulama kodunda gizli bilgilerin güvenli bir şekilde kullanılmasını sağlar ve bu bilgilerin görüntülenmesini engeller.

Hizmet Bağlama Nedir?

Hizmet bağlama, uygulamalarımızda REST API'leri, veritabanları ve olay bus'ları gibi dış hizmetleri tüketmek için gereken süreçtir.
Bu süreç, arka uç hizmetlerinin yapılandırmasını ve kimlik bilgilerini yönetirken hassas verileri korur.
Hizmet Bağlama Adımları

IBM Cloud hizmeti örneği kullanarak, hizmet kimlik bilgilerini oluşturmak için IBM'in Kamu Bulut hizmeti uç noktasını kullanarak bir hizmet örneği oluşturulur.
Oluşturulan kimlik bilgileri, Kubernetes sırrında saklanır ve uygulama, bu kimlik bilgilerine erişim sağlar.
Kubernetes Sırrı ve Kullanımı

Hizmet bağlandığında, kimlik bilgileri otomatik olarak bir sırrın içinde saklanır ve bu sırrı kullanarak uygulama kodu hizmete erişim sağlar.
Sırrı kullanmanın iki yolu vardır: Sırrı bir Pod'a hacim olarak bağlamak veya çevresel değişkenler aracılığıyla referans vermek.


Özet ve Öne Çıkanlar 

Bir ReplicaSet, podlar oluşturarak veya silerek ölçeklendirmeyi sağlar.

Bir ReplicaSet her zaman gerçek durumu istenen durumla eşleştirmeye çalışır.

Otomatik ölçeklendirme, küme veya düğüm düzeyinde ve pod düzeyinde gerektiği gibi ölçeklendirmeyi sağlar.

Otomatik ölçekleyici türleri arasında yatay pod (HPA), dikey pod (VPA) ve küme (CA) bulunur.

Rolling güncellemeleri, uygulama değişikliklerini kontrollü ve otomatik bir şekilde kullanıma sunar.

Rolling güncellemeleri ve geri alma, hepsi bir arada ve bir kerede stratejileri kullanılarak gerçekleştirilebilir.

ConfigMaps, uygulamanız için değişkenler sağlamak için kullanılır.

Sırlar, uygulamanıza hassas bilgiler sağlamak için kullanılır.

Harici bir Hizmeti dağıtımınıza bağlamak, Hizmeti kod içinde kullanmak için kimlik bilgilerini otomatik olarak sağlar.

Bağlama, hassas verileri korurken arka uç Hizmetleri için yapılandırmayı ve kimlik bilgilerini yönetir.
