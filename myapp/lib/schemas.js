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