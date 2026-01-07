# Security Notes

Bu doküman, serviste alınan temel güvenlik kararlarını ve genişletme önerilerini özetler.

## Kimlik doğrulama (AuthN)

- **JWT (HS256)**: `JWT_SECRET` ile imzalanır.
- Token içinde minimum iddia (claims): `sub` (user id), `email`, `roles`.
- Token süresi: `JWT_EXPIRES_IN_SECONDS` (kısa tutmak önerilir).

## Yetkilendirme (AuthZ)

- Basit RBAC: `rbac` plugin’i ile `requireRoles(["admin"])` tarzı koruma.
- B2B/multi-tenant senaryolarında **ABAC/policy engine** (OPA) önerilir.

## Parolalar

- Hash algoritması: **argon2id**
- Hash hiçbir şekilde API response’larında dönülmez.
- Parola değişikliğinde `passwordChangedAt` yazılır (revocation mekanizması için temel sinyal).

## Rate limiting

- Genel limit: `plugins/security.ts`
- Auth uçları için daha sıkı limit: `auth.routes.ts`

## CORS

- Varsayılan olarak kapalı (`origin: false`), sadece `CORS_ORIGINS` tanımlıysa açılır.

## İyileştirme önerileri (roadmap)

- **Email verification**: doğrulama token’ı + `emailVerified` güncelleme
- **Password reset**: tek kullanımlık token + kısa TTL + audit log
- **Account lockout**: ardışık başarısız login denemelerinde geçici kilit
- **Refresh token**: kısa ömürlü access token + uzun ömürlü refresh token (rotasyon)
- **Audit log**: kritik aksiyonlar (login, password change, role change) ayrı audit store’a


