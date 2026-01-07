export const Roles = ["user", "admin"] as const;
export type Role = (typeof Roles)[number];

export const UserStatuses = ["active", "disabled"] as const;
export type UserStatus = (typeof UserStatuses)[number];


