# User Management Service (Node.js + MongoDB)

Öğrenme platformu için kullanıcı yönetimi mikroservisi.

## Amaç ve kapsam

Bu servis aşağıdakilerden sorumludur:

- Kullanıcı **kayıt** ve **giriş** (JWT erişim token’ı üretimi)
- Kullanıcının kendi profilini okuması/güncellemesi (`/me`)
- Parola değişikliği
- Basit RBAC ile admin yetkisi gerektiren uçlar (örn. kullanıcı listeleme)

Bu servis şunları **bilerek içermez** (diğer servislere bırakılır):

- Oturum (session) temelli auth
- E-posta doğrulama iş akışı / şifre sıfırlama (eklenebilir)
- Multi-tenant kurumsal yetkilendirme (ABAC/OPA) (eklenebilir)

## Özellikler

- **Fastify** tabanlı HTTP API
- **MongoDB (Mongoose)** ile kalıcı veri
- **JWT** (Bearer) ile kimlik doğrulama
- **Güvenlik**: Helmet, rate limit, CORS (kontrollü)
- **Config yönetimi**: `.env` + `envalid` ile doğrulama
- **Observability**: yapılandırılabilir JSON log (Pino)
- **Test**: Vitest + Fastify `inject`
- **Docker**: servis + MongoDB için `docker-compose`

## Mimari (kısa)

- `src/server.ts`: süreç başlatma + DB bağlantısı + graceful shutdown
- `src/app.ts`: Fastify app + plugin/route kaydı
- `src/modules/*`: domain modülleri (auth/users)
- `src/infrastructure/*`: DB, security (JWT/hash), error handler gibi “altyapı” parçaları
- `src/plugins/*`: Fastify plugin’leri (security, auth, rbac, swagger)

## Gereksinimler

- Node.js **>= 20**
- MongoDB **>= 6**

## Kurulum

1) Ortam değişkenleri:

- `env.example` → `.env` kopyala ve düzenle

2) Bağımlılıklar:

```bash
npm install
```

3) MongoDB (Docker ile):

```bash
docker compose up -d
```

4) Geliştirme:

```bash
npm run dev
```

## Faydalı komutlar

- `npm run lint`
- `npm run format`
- `npm test`

## API

- `GET /healthz`
- `GET /readyz`
- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `GET /v1/users/me` (Authorization: Bearer <token>)
- `PATCH /v1/users/me` (Authorization: Bearer <token>)
- `POST /v1/users/me/change-password` (Authorization: Bearer <token>)
- `GET /v1/admin/users` (Authorization: Bearer <token>, role: admin)

## Güvenlik notları (özet)

- **JWT_SECRET**: production’da mutlaka secrets manager ile yönetilmeli.
- **Rate limit**: auth uçlarında daha sıkı limit uygulanır (brute-force azaltır).
- **Parola hash**: `argon2id` kullanılır; hash hiçbir API çıktısında dönülmez.
- **Least privilege**: admin uçları `rbac` ile korunur.

## Docker (tek konteynerde app + MongoDB)

Üretimde **önerilmez** (MongoDB’yi ayrı container/managed DB kullanmak daha sağlıklı), ama lab/demo için:

```bash
docker build -f Dockerfile.allinone -t user-management-allinone .
docker run --rm -p 3001:3001 -e JWT_SECRET=change-me user-management-allinone
```


