# Git Komutları ve GitHub Projeleri

## Git İş Akışının Temelleri

- **Cloning**: Takımın GitHub'da barındırdığı bir depoyu (repository) klonlamak, projenin kodunun ve sürüm geçmişinin yerel bilgisayarınıza kopyasını oluşturur.
- **Branching**: Ana dal (main branch) üzerinden yeni bir dal (branch) oluşturmak, ana kod tabanını etkilemeden değişiklik yapmanıza olanak tanır.

### Değişikliklerin Yönetimi

- **Staging Area**: Değişiklikleri kaydetmeden önce dosyaları geçici olarak topladığınız alan.
- **Committing**: Dosyaları dalınıza kaydetmek, değişikliklerinizi kaydeder ve yeni özelliğinizi dalın bir parçası haline getirir.

### Kodun Paylaşımı ve İnceleme

- **Pull Request**: Dalınızdaki değişiklikleri ana dal ile birleştirmek için yöneticiden (maintainer) inceleme ve onay talep etme süreci.
- **Merging**: Yöneticinin pull request'i onaylamasıyla dalınızdaki değişikliklerin ana dalda görünür hale gelmesi.

## Temel Git Komutları

### Depo Oluşturma

- **`git init`**: Yeni bir Git deposu (repository) oluşturur ve gerekli dosya yapısını ayarlar.

### Değişiklikleri Staging Area'ya Ekleme

- **`git add`**: Çalışma dizinindeki (working directory) değişiklikleri geçici alana (staging area) taşır.
  - `git add <filename.txt>` - Belirli bir dosyayı eklemek için
  - `git add .` - Geçerli dizindeki yeni veya değiştirilmiş tüm dosyaları eklemek için
  - `git add -A` - Dizinin yapısında nerede olursanız olun, depo kökünden itibaren tüm değişiklikleri eklemek için

### Değişikliklerin Kaydedilmesi

- **`git commit`**: Geçici alandaki değişiklikleri kaydeder ve bir açıklama mesajı ile birlikte projeye ekler.
- **`git log`**: Projeye yapılan önceki değişiklikleri gözden geçirmenizi sağlar.

### Dal Yönetimi

- **`git branch`**: Yeni bir dal (branch) oluşturur veya mevcut dalları listeler.
  - `git branch` - Dalları listelemek için
  - `git branch <new-branch>` - Yeni bir dal oluşturmak için
  - `git branch -d <branch-name>` - Bir dalı silmek için
- **`git checkout`**: Mevcut dallar arasında geçiş yapmanızı sağlar.

### Birleştirme İşlemleri

- **`git merge`**: Özellik dalını (feature branch) ana dal ile birleştirir.
- **`git status`**: Çalışma dizinindeki dosyaların durumunu gösterir.

### Repository Kopyalama

- **`git clone`**: Bir depoyu uzaktan kaynaklardan yerel makinenize kopyalar. Bu, geçerli çalışma dizininizde bir depo kopyası oluşturur.
  - **Sözdizimi**: `git clone <repository URL>`

## Git Branching Workflow

Git branching workflow (dal akışı), yazılım geliştirme projelerinde sürüm kontrolü ve işbirliği için kritik öneme sahiptir.

### Branching Workflow

- **Branches (Dallar)**: Özellikler, deneyler veya düzeltmeler üzerinde bağımsız çalışmayı sağlar.
- **Git clone komutu**: Bir repository (depo) kopyalanarak yerel makinede bir kopya oluşturulur.

### Creating and Managing Branches

- Yeni bir branch oluşturmak için `git branch [branch_name]` komutu kullanılır.
- Branch'e geçmek için `git checkout [branch_name]` komutu ile geçiş yapılır.

### Committing and Merging Changes

- Değişiklikleri kaydetmek için `git add [file_name]` ve `git commit -m "[message]"` komutları kullanılır.
- Branch'i ana branch ile birleştirmek için önce ana branch'e geçilir (`git checkout main`) ve ardından `git merge [branch_name]` komutu ile birleştirilir.

## Cloning Repositories

- **Cloning**: Bir repository'yi (depo) yerel makinenize kopyalamak için kullanılır. Bu işlem, değişikliklerinizi senkronize etmenizi sağlar.
- **`git clone` komutu**: Repository URL'si kullanılarak yerel bir kopya oluşturulur.

## Forking Projects

- **Forking**: Mevcut bir projeyi alıp yeni bir proje için temel oluşturmak amacıyla kullanılır. Bu, orijinal projeyi etkilemeden değişiklik yapmanıza olanak tanır.
- Fork oluşturmak için GitHub'da "Fork" butonuna tıklanır.

## Syncing Changes

### Değişiklikleri Gönderme

- Değişiklikleri GitHub'a geri göndermek için `git add`, `git commit`, ve `git push` komutları kullanılır.

### Değişiklikleri Çekme

- **`git fetch`** ve **`git pull`** komutları, uzak repository'den (remote repository) değişiklikleri yerel repository'ye almak için kullanılır.
- **`git pull`**: Değişiklikleri alıp birleştirir.

## Collaboration and Pull Requests

- **Pull Request**: Değişikliklerinizi orijinal projeye göndermek için kullanılır. Proje sahibi, değişikliklerinizi gözden geçirip kabul edebilir.
- **Upstream ve origin terimleri**: Uzak repository'ler arasında ilişkiyi tanımlar; `origin` genellikle fork'unuzu, `upstream` ise orijinal projeyi ifade eder.
