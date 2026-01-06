# Detaylı Redux

Tabii Erhan, Redux'ta kullanılan terimleri en TEMELDEN ve EN BASİT mantıkla, örneklerle, hayat benzetmeleriyle ve çok anlaşılır şekilde anlatayım.

Şu an amacımız: Redux'u öğrenmeden önce bilmen gereken "alfabe"yi oturtmak.

Hazırsan başlıyoruz. Sıfırdan → taş gibi bir temel kuruyoruz.

## Öğrenmen Gereken Temel Redux Terimleri

Redux için bilmen gereken 8 temel terim var:

1. State
2. Action
3. Dispatch
4. Reducer
5. Store
6. Initial State
7. Slice (Redux Toolkit)
8. Provider

Bunları tek tek çocuk bile anlar gibi açıklayacağım. Sonra gerçek projeden örnek vererek oturtacağız.

## State — Durum (Verinin şu anki hali)

Redux'ta state, uygulamanın o anki verisidir.

- Telefonun ekran parlaklığı
- Sepetteki ürün sayısı
- Kullanıcının adı
- Tema (dark/light)

Hepsi state.

**Örnek state:**

```javascript
{
  cartItems: [],
  user: { name: 'Erhan' },
  theme: 'light'
}
```

**State = Uygulamanın kalbi.**

## Action — Bir olay bildirimi

Action, sadece bir nesnedir. Ve "ne yapacağını" söyler, "nasıl yapacağını" söylemez.

**Örnek action:**

```javascript
{
  type: 'cart/add',
  payload: { id: 1, name: 'Product A', price: 60 }
}
```

Bunu Türkçeye çevir: "Sepete bu ürünü eklemek istiyorum."

Action yalnızca istek bildirir, işin kendisini yapmaz.

**Action = Emirdir. "Bunu yap!" demek.**

## Dispatch — Action'ı store'a göndermek

Dispatch etmek: Bir action'ı Redux'a göndermek demektir.

**Mesela:**

```javascript
dispatch(addToCart(product));
```

**Türkçesi:** "Redux, bu ürünü sepete ekle!" diye haber gönder.

**Dispatch = Komutu göndermek.**

## Reducer — State'i değiştiren tek yer

(Reducer bölümü henüz tamamlanmamış)
