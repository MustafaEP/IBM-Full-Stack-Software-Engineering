# SQL ve Veritabanları

## Veritabanları ve Yönetim Sistemleri

- Veritabanı, verilerin giriş, saklama, arama, geri alma ve değiştirme işlemleri için tasarlanmış bir bilgi koleksiyonudur.
- Veritabanı yönetim sistemi (DBMS), veritabanını oluşturmak ve sürdürmek için kullanılan programlar setidir ve sorgulama işlevi ile verileri yönetir.

## Veritabanı Türleri

- İki ana veritabanı türü vardır: ilişkisel (RDBMS) ve ilişkisel olmayan (NoSQL) veritabanları.
- İlişkisel veritabanları, verileri satır ve sütunlar halinde düzenlerken, ilişkisel olmayan veritabanları daha esnek bir yapı sunar ve büyük veri işleme için yaygın olarak kullanılır.

## Sorgulama Dili

- İlişkisel veritabanları için standart sorgulama dili SQL'dir.
- NoSQL veritabanları, veri çeşitliliği ve hızına yanıt olarak ortaya çıkmış ve veri saklama işlemlerini daha hızlı ve esnek bir şekilde gerçekleştirmeyi mümkün kılmıştır.

## İlişkisel Veritabanları

- İlişkisel veritabanları, verilerin tablo yapısında düzenlendiği ve tabloların ortak verilere dayalı olarak birbirine bağlanabildiği bir veri koleksiyonudur.
- Örneğin, bir Müşteri Tablosu, her müşteri hakkında bilgileri (Müşteri ID, İsim, Adres, Telefon) saklarken, işlem tabloları da her müşteriyle ilgili işlemleri (İşlem Tarihi, Müşteri ID, Tutar, Ödeme Yöntemi) içerir.

## SQL ve Veri İlişkileri

- SQL, verileri sorgulamak için kullanılan bir dildir ve ilişkisel veritabanları, verilerin depolanması, alınması ve işlenmesi için optimize edilmiştir.
- Tablolar arasındaki ilişkiler, verilerin daha anlamlı hale gelmesini sağlar ve veri bütünlüğünü artırır.

## Avantajlar ve Kullanım Alanları

- İlişkisel veritabanları, veri yedekliliğini azaltır, yedekleme ve felaket kurtarma süreçlerini kolaylaştırır ve ACID uyumluluğu ile veri tutarlılığını sağlar.
- Kullanım alanları arasında Çevrimiçi İşlem İşleme (OLTP) uygulamaları, veri ambarları ve IoT çözümleri bulunmaktadır.

## NoSQL Veritabanlarının Temel Özellikleri

- **Esneklik**: NoSQL veritabanları, yapılandırılmış, yarı yapılandırılmış ve yapılandırılmamış verilerin serbest formda depolanmasına olanak tanır.
- **Ölçeklenebilirlik**: Dağıtık sistemler olarak çalışabilirler ve bulut bilişim altyapısından yararlanabilirler.

## NoSQL Veritabanı Türleri

- **Anahtar-Değer Depoları**: Veriler, anahtar-değer çiftleri olarak saklanır. Kullanıcı oturum verileri ve tercihleri için idealdir. Örnekler: Redis, DynamoDB.
- **Belge Tabanlı Veritabanları**: Her kayıt, tek bir belgede saklanır ve esnek indeksleme ile güçlü sorgular sunar. Örnekler: MongoDB, CouchDB.
- **Sütun Tabanlı Veritabanları**: Veriler, sütunlar halinde gruplandırılır ve hızlı erişim sağlar. Örnekler: Cassandra, HBase.
- **Graf Tabanlı Veritabanları**: Veriler, grafiksel bir modelle temsil edilir ve bağlantılı veriler için idealdir. Örnekler: Neo4J, CosmosDB.

NoSQL veritabanları, geleneksel ilişkisel veritabanlarının sınırlamalarına yanıt olarak geliştirilmiştir ve günümüzde kritik uygulamalarda yaygın olarak kullanılmaktadır.

## ✅ İlişkisel Veritabanları (RDBMS)
