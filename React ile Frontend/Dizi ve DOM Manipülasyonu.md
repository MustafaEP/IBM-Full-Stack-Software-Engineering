# Dizi ve DOM Manipülasyonu

## Function Components ile Props ve Event Handling

React'te Function Components ile Props ve Event Handling konularını ele alıyor. Aşağıda önemli noktaları bulabilirsiniz:

### Props Nedir?

- Props (özellikler), bir bileşenden diğerine veri geçişini sağlar. Bir bileşenin özelliklerini saklar ve bu özellikleri bir üst bileşenden alt bileşene geçirir.
- Props'lar immutable (değiştirilemez) olup, alt bileşende değiştirilemezler.

### Props Kullanımı

- Örnek olarak, bir App bileşeni, `EmployeeData` adlı bir alt bileşene veri geçirir. `name` özelliği "John" olarak atanır.
- Props nesnesi, bileşene geçirilen tüm özellikleri içerir ve bu özelliklere dot operator (nokta operatörü) ile erişilir.

### Varsayılan Props Değerleri

- Bileşenin `DefaultProps` nesnesinde varsayılan değerler tanımlanabilir. Eğer üst bileşen belirli bir prop değeri sağlamazsa, alt bileşen varsayılan değeri kullanır.

### Props İlkeleri

- **Reusability (yeniden kullanılabilirlik):** Farklı props'lar geçirerek aynı bileşenin varyasyonlarını oluşturabilirsiniz.
- **Unidirectional Data Flow (tek yönlü veri akışı):** Verilerin nasıl geçtiğini ve güncellendiğini görmek kolaydır.

### Event Handling ile Props Kullanımı

- `useState` hook'u, bileşenin durumunu yönetir. Örneğin, bir butona tıklandığında bir durumu güncelleyerek UI'da belirli bilgileri gösterir.

## Component Composition (Bileşen Bileşimi)

Component composition (bileşen bileşimi) kavramını açıklamaktadır ve bu kavramın nasıl kullanılacağını anlamanıza yardımcı olacaktır.

### Component Composition

- **Purpose:** Bileşen bileşimi, birden fazla bileşeni bir araya getirerek karmaşık işlevsellik oluşturmanıza olanak tanır.
- **Function Components:** Küçük bileşenleri birleştirerek daha büyük bir kullanıcı arayüzü (UI) yapısı oluşturabilirsiniz.

### Principles of Function Component Composition

- **Abstraction:** Yeniden kullanılabilir bileşenler oluşturmanıza olanak tanır ve büyük bir UI'yi daha küçük parçalara ayırır. Bu, kodunuzu düzenli ve sürdürülebilir hale getirir.
- **Hierarchy:** Bileşenleri hiyerarşik bir yapıda düzenlemenizi sağlar. Ebeveyn ve çocuk bileşenleri arasında veri geçişini kolaylaştırır.

### Higher-Order Components (HOCs)

- **Props:** Ebeveyn bileşenden çocuk bileşene veri geçişi sağlar. Bileşenleri diğer bileşenlere geçirebilirsiniz.
- **HOCs:** Bileşenleri girdi olarak kabul eden veya geliştirilmiş işlevsellik ile dönen fonksiyonlardır. Bu, bileşenlerin özelliklerini eklemenizi sağlar.

## State Management ve useState Hook

Bu video, React'te state management (durum yönetimi) kavramını ve `useState` hook (kancası) kullanımını açıklamaktadır. İşte önemli noktalar:

### State Management

- **State:** Bir bileşenin belirli bir zamandaki durumunu temsil eder ve zamanla değişebilen verileri yönetmek için kullanılır.
- **Local State:** Sadece bir bileşen içinde geçerlidir ve diğer bileşenler tarafından erişilemez.

### useState Hook

- **useState:** Fonksiyon bileşenlerine durum yönetimi işlevselliği ekler. Bu kanca, bir durum değeri ve bu değeri güncellemek için bir fonksiyon döndürür.
- **Array Destructuring:** `useState`'den dönen dizi, iki değeri ayırmak için kullanılır: `stateName` (durum adı) ve `setStateName` (durum güncelleme fonksiyonu).

### Örnek Kullanım

- Bir bileşen oluşturulurken, `useState` fonksiyonu ile başlangıç durumu belirlenir. Örneğin, bir isim durumu "John" olarak ayarlanabilir.
- `setStateName` fonksiyonu, durumu güncellemek için kullanılır. Örneğin, bir butona tıklandığında ismi "John Doe" olarak değiştirebiliriz.

## Fonksiyonel Bileşenlerin Yaşam Döngüsü

### Mounting Phase (Montaj Aşaması)

- React, fonksiyonel bileşeni başlatır ve DOM'da render etmeye hazırlar. Bu aşamada, bileşenin işlevselliği ve başlangıç durumu ayarlanır.
- **State Initialization (Durum Başlatma):** `useState` hook'u kullanılarak bileşen içinde durum değişkenleri tanımlanır. Örneğin, `const [count, setCount] = useState(0);` ile `count` durumu 0 olarak başlatılır.

### Güncelleme Aşaması (Updating Phase)

- React, bileşenin durumu veya props'larındaki değişikliklere yanıt verir ve bileşenin işlevini yeniden çağırır. Bu, kullanıcı etkileşimleriyle bileşenin güncellenmesini sağlar.
- Örneğin, bir butona tıklanması durumunda `setCount(count + 1);` ile `count` değeri artırılır.

### Unmounting Phase (Kaldırma Aşaması)

- Bileşen DOM'dan kaldırıldığında, React temizlik işlemleri gerçekleştirir. Bu, olay dinleyicileri ve zamanlayıcılar gibi kaynakların serbest bırakılmasını içerir.
