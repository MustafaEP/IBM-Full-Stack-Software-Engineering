# Bulut Depolama

## Bulut Depolama Türleri

### Doğrudan Bağlı Depolama (Direct Attached Storage)

- Bulut tabanlı sunucuya doğrudan sunulan depolama.
- Genellikle işletim sistemi (operating system) için kullanılır ve geçici (ephemeral) bir yapıya sahiptir.

### Dosya Depolama (File Storage)

- Standart ethernet ağı üzerinden sunucu düğümlerine (compute nodes) bağlanan depolama.
- NFS (Network File System) kullanır ve birden fazla sunucu tarafından erişilebilir.

### Blok Depolama (Block Storage)

- Yüksek hızlı fiber bağlantılarla sunucu düğümlerine sunulan depolama.
- Veritabanları (databases) gibi yüksek hız gerektiren uygulamalar için uygundur.
- Genellikle "volumes" (hacimler) olarak sağlanır ve yalnızca bir sunucuya bağlanabilir.

### Nesne Depolama (Object Storage)

- Bir API (Application Programming Interface) üzerinden erişilen depolama türüdür.
- En ucuz ve en yavaş depolama türüdür, ancak sınırsız (infinite) boyut sunar.
- Belge (documents), video, yedekleme (backups) gibi yapılandırılmamış veri türleri için idealdir.

### Veri Yedekleme (Data Backup)

- Dosya ve blok depolama için anlık görüntü (snapshot) alma yöntemi.
- Anlık görüntüler, depolamanın belirli bir anındaki görüntüsünü alır ve veri kaybını önlemek için kullanılabilir.

## File Storage (Dosya Depolama)

### File Storage Nedir?

- File Storage, bir compute node (hesap düğümü) ile bağlantılı olarak erişilebilen ve veri depolamak için kullanılan bir depolama türüdür.
- Direct attached storage (doğrudan bağlı depolama) ile karşılaştırıldığında, genellikle daha az maliyetli, daha dayanıklı ve daha az disk yönetimi gerektirir.

### Depolama Yapısı ve Güvenlik

- File Storage, fiziksel disklerin ayrı bir donanımda bulunduğu storage appliances (depolama cihazları) üzerinden bağlanır.
- Bu cihazlar, veri güvenliğini sağlamak için encryption in transit (iletim sırasında şifreleme) gibi hizmetler sunar.

### Ağ ve Performans

- File Storage, bir ethernet network (ethernet ağı) üzerinden bağlanır ve bu ağ, e-posta almak veya interneti gezmek için kullanılan aynı türdendir.
- Ancak, ethernet ağlarının hızı değişkenlik gösterebilir; bu nedenle, File Storage genellikle yüksek hız gerektirmeyen iş yükleri için kullanılır.

### Uygulama Alanları

- File Storage, birden fazla compute node (hesap düğümü) ile aynı anda bağlanabilir, bu da onu ortak depolama gereksinimleri için ideal hale getirir.
- Örnek uygulamalar arasında departmental file share (departman dosya paylaşımı) ve landing zone (geliş alanı) yer alır.

### IOPS Kapasitesi

- **IOPS (Input/Output Operations Per Second)**: Disklerin veri okuma ve yazma hızını ifade eder.
- Uygulamanız için yeterli IOPS değeri sağlanmazsa, depolama bir darboğaz oluşturabilir ve uygulamanızın yavaş çalışmasına neden olabilir.

## Block Storage (Blok Depolama)

### Block Storage Nedir?

- Block Storage, verileri chunks (parçalar) halinde depolar ve her bir parçayı benzersiz bir adres altında saklar.
- Compute node (hesap düğümü) ile bağlantı gerektirir ve genellikle yüksek hızlı fiber optic networks (fiber optik ağlar) üzerinden bağlanır.

### Performans ve Güvenlik

- Block Storage, düşük gecikme (low latency) gerektiren uygulamalar için idealdir, bu nedenle databases (veritabanları) ve mail servers (posta sunucuları) gibi yüksek performans gerektiren iş yükleri için tercih edilir.
- Encryption at rest (dinlenme sırasında şifreleme) ve encryption in transit (iletim sırasında şifreleme) gibi güvenlik özellikleri sunar.

### File Storage ile Karşılaştırma

- File Storage, birden fazla compute node (hesap düğümü) ile aynı anda bağlanabilirken, Block Storage yalnızca bir compute node ile bağlanabilir.
- File Storage, daha düşük maliyetli ve daha esnek bir çözüm sunar, ancak hız değişkenliği gösterebilir.

### IOPS Kapasitesi

- Her iki depolama türü için de IOPS (Input/Output Operations Per Second) kapasitesinin dikkate alınması önemlidir.
- Bulut sağlayıcıları, depolama sağlarken IOPS özelliklerini belirlemenize ve gerektiğinde ayarlamanıza olanak tanır.

## Object Storage (Nesne Depolama)

### Object Storage Nedir?

- Object Storage, belirli bir compute node (hesap düğümü) ile bağlantı gerektirmeden veri depolamak için kullanılan bir hizmettir.
- Veriler, bir API (Uygulama Programlama Arayüzü) aracılığıyla yüklenir ve yönetilir.
- Maliyet açısından, genellikle diğer bulut depolama seçeneklerinden daha ucuzdur; gigabayt başına maliyet genellikle birkaç ABD sentidir.

### Sınırsız Depolama Kapasitesi

- Object Storage, sınırsız bir depolama kapasitesine sahiptir. Kullanıcılar, ihtiyaç duydukları kadar veri yükleyebilir ve yalnızca kullandıkları gigabayt için ödeme yaparlar.
- **Buckets (kova)**: Veriler, buckets adı verilen yapılar içinde depolanır. Her kova, anlamlı isimler alabilir ve farklı nesne türleri için farklı kovalar oluşturulabilir.

### Metadata ve Erişim

- Her nesne, bir metadata (veri hakkında veri) ile birlikte depolanır. Bu, nesnenin konumunu bulmak ve erişmek için yardımcı olur.
- Kovalar, belirli bir boyut tanımlamadan oluşturulabilir ve depolama sağlayıcısı yeterli kapasiteyi garanti eder.

### Dayanıklılık ve Erişilebilirlik

- Bulut sağlayıcıları, farklı dayanıklılık seviyelerine sahip kovalar sunar.
- Bazıları yalnızca bir veri merkezinde depolama yaparken, diğerleri verileri birden fazla veri merkezinde saklar.
- Yüksek erişilebilirlik ve dayanıklılık sunan seçenekler genellikle daha maliyetlidir.

### Uygulama Alanları

- Object Storage, büyük miktarda yapılandırılmamış veriyi depolamak için idealdir.
- Statik veriler (örneğin, metin dosyaları, ses ve video dosyaları) için uygundur.
- Ancak, işletim sistemleri veya veritabanları gibi dinamik içeriklerin depolanması için uygun değildir.

## Depolama Katmanları (Data Tiers)

Bu video, Object Storage (Nesne Depolama), Data Tiers (Veri Katmanları) ve Object Storage APIs (Nesne Depolama API'leri) üzerine odaklanmaktadır.

### Depolama Katmanları

- **Standart Katman (Standard Tier)**: Sık erişilen nesnelerin depolandığı yerdir ve genellikle en yüksek gigabayt başına maliyete sahiptir.
- **Arşiv Katmanı (Archive Tier)**: Ayda bir veya iki kez erişilen belgelerin depolandığı, daha düşük maliyetli bir depolama seçeneğidir.
- **Soğuk Arşiv Katmanı (Cold Vault Tier)**: Yılda sadece bir veya iki kez erişilen verilerin depolandığı, çok düşük maliyetli bir seçenektir.

### Erişim ve Maliyet

- Farklı katmanlar, farklı erişim sıklıklarına göre optimize edilmiştir.
- Daha az sıklıkla erişilen veriler için daha düşük maliyetli katmanlar tercih edilebilir.
