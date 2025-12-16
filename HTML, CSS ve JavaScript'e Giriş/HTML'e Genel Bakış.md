# HTML'e Genel Bakış

## HTML Nedir?

- **HTML**: "Hypertext Markup Language" anlamına gelir ve internet üzerindeki belgelerin görüntülenmesini sağlayan bir markup dilidir.
- HTML, başlangıçta bilimsel belgeleri paylaşmak için tasarlanmış, zamanla web sayfalarını tanımlamak için uyarlanmıştır.

## HTML ve HTML5'in Gelişimi

- HTML, 1990'ların başında CERN tarafından tanıtılmıştır ve sürekli olarak evrim geçirmiştir.
- W3C ve WHATWG, HTML5 standardının geliştirilmesi için birlikte çalışmıştır.

## HTML5'in Amaçları

- HTML5, HTML veya XML sözdiziminde yazılabilen tek bir dil tanımlar.
- HTML5, önceki HTML sürümleriyle birlikte çalışabilen bir işleme modeli sunar ve web depolama, video ve ses içeriği için markup ve API'ler içerir.

## HTML5 Özellikleri

- HTML5, web sayfalarını farklı sections'a ayırma ve etkili data management araçları sunma imkanı sağlar.
- Cross-browser applications geliştirmeyi kolaylaştırır ve daha etkileşimli web siteleri oluşturulmasına olanak tanır.

## Document Object Model (DOM)

### DOM Nedir?

- **DOM**: Bir belgenin in-memory representation'ıdır ve nodes içerir; bu nodes, başlıklar, paragraflar ve metin gibi öğeleri tanımlar.
- HTML belgeleri, web tarayıcıları tarafından parsed edilir ve DOM ağacına dönüştürülür.

### DOM'un Temel Özellikleri

- **Ağaç Yapısı**: DOM, bir belgenin her bir öğesini (element) bir node olarak temsil eder. Bu, bir ağaç yapısı gibi düşünülür; kök (root) öğe en üstte yer alır ve altındaki öğeler dallar gibi birbirine bağlıdır. Örneğin, bir HTML belgesinde `<html>`, `<head>`, ve `<body>` gibi etiketler, bu ağaç yapısının düğümleridir.
- **Dinamik Manipülasyon**: DOM, JavaScript gibi dillerle etkileşimde bulunarak, web sayfalarının dinamik olarak güncellenmesini sağlar. Örneğin, bir kullanıcı bir butona tıkladığında, sayfadaki içerik anında değiştirilebilir.
- **Erişim ve Değiştirme**: Geliştiriciler, DOM aracılığıyla belgedeki öğelere erişebilir, bunları değiştirebilir veya yeni öğeler ekleyebilir. Bu, kullanıcı etkileşimlerine yanıt vermek için oldukça önemlidir.

## HTML ve XML Kullanımı

### HTML ve XML Arasındaki Farklar

- HTML ve XML arasında seçim yaparken, uygulamanın nasıl kullanılacağı önemlidir; örneğin, XSLT kullanımı.

### XHTML

- **XHTML**: HTML'e göre daha katı kurallara sahiptir; tüm etiketler küçük harfle yazılmalı ve her öğenin bir end tag'i olmalıdır.
- **Sözdizimi Kuralları**: XHTML, daha katı kurallara sahiptir. Tüm etiketler küçük harfle yazılmalı, her öğenin bir end tag'i olmalı ve tüm attribute değerleri tırnak içinde belirtilmelidir. Eğer bu kurallara uyum sağlamak istiyorsanız, XHTML kullanmalısınız.
- **Tarayıcı Uyumluluğu**: HTML, daha esnek bir sözdizimine sahiptir ve tarayıcılar tarafından daha geniş bir şekilde desteklenir. Eğer daha geniş bir tarayıcı uyumluluğu istiyorsanız, HTML tercih edilebilir.

## XSLT (Extensible Stylesheet Language Transformations)

- **XSLT**: "Extensible Stylesheet Language Transformations" anlamına gelir ve XML belgelerini dönüştürmek için kullanılan bir dildir.
- Temel olarak, XML verilerini farklı formatlara dönüştürmek için kullanılır. Bu, verilerin daha okunabilir hale getirilmesi veya başka bir uygulama veya sistemle uyumlu hale getirilmesi için oldukça faydalıdır.

## HTML5'in Temel Özellikleri

- HTML5, syntax'ı HTML4 ve XHTML1 ile uyumlu olacak şekilde tasarlanmıştır.
- Yeni elements ve APIs (Application Programming Interfaces) içerir; örneğin, video ve audio öğeleri ile offline uygulamalar oluşturma desteği sunar.

## Web Uygulamaları için HTML5'in Avantajları

- HTML5, çeşitli devices üzerinde yerleşik tarayıcılar tarafından desteklenir, bu da geniş bir erişilebilirlik sağlar.
- APIs sayesinde kullanıcı deneyimini artıran özellikler sunar; örneğin, gelişmiş animations, drawings, ve medya öğeleri.

## Performans ve SEO

- HTML ve CSS'in verimli kullanımı, daha hızlı load times sağlar.
- Meta tags, arama motoru optimizasyonu için önemlidir ve web sitelerinin görünürlüğünü artırır.
