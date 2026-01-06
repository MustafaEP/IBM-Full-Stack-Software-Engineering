# Python Programlamanın Temelleri

## Koşullar ve Dallanmalar

"Koşullar ve Dallanmalar" (Conditions and Branching) konusunu basit bir şekilde açıklayalım.

Koşullar, belirli bir durumu kontrol etmek için kullanılır. Örneğin, bir sayının başka bir sayı ile karşılaştırılması durumunda, bu karşılaştırma bir Boolean (doğru veya yanlış) değeri üretir. Örneğin, eğer bir değişkenin (variable) değeri 6 ise ve biz bu değeri 7 ile karşılaştırırsak, sonuç false (yanlış) olur çünkü 6, 7'ye eşit değildir. Ancak, eğer değişkenin değeri 6 ise ve biz bunu 6 ile karşılaştırırsak, sonuç true (doğru) olur çünkü 6, 6'ya eşittir.

Dallanmalar (Branching) ise, belirli bir koşulun doğru veya yanlış olmasına göre farklı kod bloklarının çalıştırılmasını sağlar. Bunu bir if statement (if ifadesi) ile düşünelim. Eğer koşul doğruysa, belirli bir kod çalışır; eğer yanlışsa, o kod atlanır. Örneğin, bir kişinin yaşı 18 veya daha büyükse bir konsere girebilir. Eğer yaşı 17 ise, konsere giremez. Bu durumda, yaş 17 olduğunda "move on" (devam et) yazdırılır, ancak yaş 19 olduğunda "you will enter" (gireceksin) yazdırılır.

## Döngüler (Loops)

Python'da loops (döngüler) hakkında konuşuyoruz, özellikle de for loops (for döngüleri) ve while loops (while döngüleri) üzerinde duruyoruz. Döngüler, belirli bir işlemi tekrar tekrar yapmamıza olanak tanır. Örneğin, bir grup renkli kareyi düşünelim. Her bir kareyi beyaz bir kare ile değiştirmek istiyoruz. Bunun için her kareye bir numara veriyoruz ve bu kareleri bir liste olarak temsil ediyoruz.

For loop kullanarak, her bir kareyi beyaz yapabiliriz. Örneğin, `for square in squares:` ifadesi ile her bir kareyi sırayla alıp, `square = "white"` şeklinde değiştirebiliriz. Bu işlem, listedeki her bir eleman için tekrarlanır. Ayrıca, while loop kullanarak belirli bir koşul sağlandığı sürece işlemi devam ettirebiliriz. Örneğin, bir liste içindeki tüm turuncu kareleri yeni bir listeye kopyalamak istiyorsak, `while square == "orange":` koşulunu kullanarak, koşul sağlandığı sürece kopyalama işlemini gerçekleştirebiliriz.

## Fonksiyonlar

Fonksiyonlar, belirli bir işlevi yerine getiren kod parçalarıdır. Bir fonksiyon, belirli bir input (girdi) alır ve bu girdiye göre bir output (çıktı) üretir. Fonksiyonlar, kodunuzu daha düzenli ve tekrar kullanılabilir hale getirir. Örneğin, bir fonksiyon tanımladığınızda, bu fonksiyonu istediğiniz kadar çağırabilir ve aynı işlemi tekrar tekrar yazmak zorunda kalmazsınız. Bu, kodunuzu daha kısa ve anlaşılır hale getirir.

Bir örnek üzerinden düşünelim: Diyelim ki bir fonksiyon tanımladınız ve bu fonksiyon bir sayıyı alıp ona 1 ekliyor. Fonksiyonu çağırdığınızda, örneğin `add_one(5)` yazarsanız, bu fonksiyon 5 sayısını alır ve 6 olarak geri döner. İşte bu, fonksiyonların nasıl çalıştığını gösteren basit bir örnektir.

## Hata Yönetimi (Exception Handling)

Exception handling (hata yönetimi) ile ilgili. Hata yönetimi, programlarımızda beklenmedik hatalar meydana geldiğinde bu hataları nasıl ele alacağımızı belirler. Örneğin, bir kullanıcıdan metin girmesini istediğimizde, yanlışlıkla bir sayı girdiğinde programımız hata verir. İşte burada hata yönetimi devreye girer.

`try...except` ifadesi, programın belirli bir kod bloğunu denemesi için kullanılır. Eğer bu kod bloğunda bir hata oluşursa, program hata mesajını gösterir ve çalışmaya devam eder. Örneğin, bir dosyayı açmaya çalıştığımızda ve dosya okunamazsa, program hata mesajı verir. Bu durumda, hata türünü belirlemek için bir except ifadesi eklememiz gerekir. Eğer hata türünü belirtmezsek, programımız daha büyük bir hata ile karşılaşabilir ve bu da zaman kaybına neden olabilir. Bu nedenle, her hata türü için uygun bir except ifadesi tanımlamak en iyi uygulamadır.

## Sınıflar ve Nesneler

Python'da bir class, belirli bir türdeki nesneleri tanımlamak için bir şablondur. Örneğin, bir Circle (daire) sınıfı oluşturduğumuzda, bu sınıfın içinde dairenin özelliklerini (örneğin, radius (yarıçap) ve color (renk)) tanımlayabiliriz. Her bir daire nesnesi, bu sınıfın bir örneği (instance) olacaktır. Yani, bir daire oluşturduğumuzda, bu daire bir object'tir ve Circle sınıfının bir örneğidir.

Örneğin, bir Circle sınıfı oluşturduğumuzda, bu sınıfın içinde yarıçap ve renk gibi özellikler tanımlayabiliriz. Sonra, bu sınıftan farklı daire nesneleri oluşturabiliriz. Her bir nesne, kendi özelliklerine sahip olacaktır. Örneğin:

```python
class Circle:
    def __init__(self, radius, color):
        self.radius = radius
        self.color = color

my_circle = Circle(5, "red")
```

Burada, `my_circle` adında bir daire nesnesi oluşturduk. Bu nesne, radius'u 5 ve color'u "red" olan bir dairedir.

Bu şekilde, sınıflar ve nesneler, Python'da verileri düzenlemek ve yönetmek için güçlü bir yol sunar.
