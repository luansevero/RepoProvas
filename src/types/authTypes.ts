import { User } from "@prisma/client";


interface AuthData extends User { confirmPassword: string };

export type TCreateAuthData = Omit<AuthData, "id" | "createAt">;

export type TAuthData = Omit<TCreateAuthData, "confirmPassword">;