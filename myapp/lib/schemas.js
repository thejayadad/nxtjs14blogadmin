import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email Required"
    }),
    password: z.string().min(4,{
        message: "Password Required"
    })
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email Required"
    }),
    password: z.string().min(4,{
        message: "Password Minium 4 Characters"
    }),
    name: z.string().min(4,{
        message: "Name Required"
    }),
})

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    // role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
})