# Git ve GitHub

Git ve GitHub, yazılım geliştirme ve veri bilimi alanlarında yaygın olarak kullanılan versiyon kontrol sistemleridir.

## Versiyon Kontrol Sistemleri

- **Version Control System (VCS)**: Değişikliklerin izlenmesi ve eski sürümlere geri dönme imkanı sağlar.
- **Örnek**: Bir alışveriş listesi üzerinden işbirliği yapma ve değişiklikleri takip etme.

## Git'in Temel Özellikleri

Git, yazılım geliştirme süreçlerinde versiyon kontrolü sağlamak için kullanılan bir sistemdir.

- **Distributed Version Control System (DVCS)**: Her geliştiricinin tam bir proje geçmişine sahip olduğu sistem. Kullanıcıların projelerinin kopyalarını kendi bilgisayarlarında tutmalarını sağlar.
- **Branching (Dal Oluşturma)**: Farklı geliştirme yolları oluşturma imkanı. Geliştirme sürecinin yönetimi için stratejiler sunar.

## GitHub ve Temel Terimler

### Repository (Depo)

- **Repository (Repo)**: Proje dosyalarının saklandığı alan.
- **Fork**: Bir repository'nin kopyası. Başka bir kullanıcının repository'sinin kopyası.
- **Clone**: Uzak bir Git repository'sinin yerel kopyasını oluşturma.

### İş Akışı ve İşbirliği

- **Commit**: Projenin belirli bir anındaki durumunun kaydedilmesi. Değişikliklerin kaydedilmesi.
- **Merge**: İki dalın birleştirilmesi.
- **Pull Request (PR)**: Değişikliklerin gözden geçirilmesi için talep.

## Branch'lerin Amacı

- Tüm dosyalar GitHub'da bir branch üzerinde saklanır; ana branch (main branch) deploy edilebilir (yayınlanabilir) kodun versiyonunu tutar.
- Yeni bir branch oluşturmak için mevcut branch'in bir kopyasını alır ve değişiklikler bu yeni branch'te saklanır.

### Branch Oluşturma ve Değişiklik Yapma

- Yeni bir branch oluşturmak için "Create Branch" seçeneği kullanılır; bu branch, orijinal branch'in tam bir kopyası olarak başlar.
- Değişiklikler yapıldığında, bu değişiklikler "commits" (taahhütler) olarak kaydedilir ve her commit, yapılan değişiklikleri açıklayan anlamlı bir yorum içerir.

### Pull Request ve Birleştirme

- **Pull Request (Çekme İsteği)**: Önerilen değişikliklerin diğer kullanıcılar tarafından gözden geçirilmesi için kullanılır.
- Onaylanan değişiklikler, ana branch'e "Merge pull request" (birleştir çekme isteği) ile eklenir ve bu işlem tamamlandığında, ilgili branch silinebilir.
