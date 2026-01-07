# Architecture

Bu doküman `user-management-service` için yüksek seviye mimariyi ve akışları anlatır.

## Modüller

- **Auth (`src/modules/auth`)**
  - Kayıt ve giriş akışları
  - JWT erişim token’ı üretimi
  - Auth uçları için daha sıkı rate limit

- **Users (`src/modules/users`)**
  - Kullanıcının kendi profilini okuması/güncellemesi
  - Parola değiştirme
  - Admin uçları (örn. kullanıcı listeleme)

## Katmanlar

- **Routes**
  - HTTP endpoint tanımları + request/response şemaları (Zod)
- **Controller**
  - İnce “HTTP adapter”: request → service çağrısı → response
- **Service**
  - İş kuralları + veri erişimi
- **Infrastructure**
  - DB bağlantısı, JWT, parola hash doğrulama, error handler

## İstek akışları

### Register

1) `POST /v1/auth/register` → email/displayName/password doğrulanır
2) Email benzersizliği kontrol edilir
3) Parola `argon2id` ile hashlenir
4) Kullanıcı kaydedilir
5) JWT access token üretilir ve döndürülür

### Login

1) `POST /v1/auth/login` → email/password doğrulanır
2) Kullanıcı bulunur
3) Hash doğrulaması yapılır
4) `lastLoginAt` güncellenir
5) JWT access token üretilir ve döndürülür

### /me endpoints

- `GET /v1/users/me`: JWT doğrulanır, kullanıcı bulunur, public profil döner.
- `PATCH /v1/users/me`: sadece `displayName` güncellenir.
- `POST /v1/users/me/change-password`: eski parola doğrulanır, yeni hash yazılır.

## Gözlemlenebilirlik

- Fastify’nin Pino logger’ı ile JSON log
- `/healthz` liveness, `/readyz` readiness (Mongo bağlantı state’i)


