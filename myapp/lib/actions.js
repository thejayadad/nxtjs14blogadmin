'use server'
import bcrypt from "bcryptjs";
import  db from "@/lib/db"
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { signOut } from "@/auth";
import { SettingsSchema } from "./schemas";
import { getUserById } from "./user";
import { useCurrentUser } from "./useCurrentUser";
import { getSession } from "next-auth/react";


export const login = async (values) => {
    try {

        const {email, password} = values;
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
        return { success: "Email Sent" };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
              case "CredentialsSignin":
                return { error: "Invalid credentials!" }
              default:
                return { error: "Something went wrong!" }
            }
          }
      
          throw error;
        }
      
    
}
export const registerUser = async (values) => {
    try {
        const { email, name, password } = values;
        
        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = await db.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        // Return success response
        return { success: "User registered successfully" };
    } catch (error) {
        // Return error response if any error occurs
        return { error: "An error occurred while processing your request." };
    }
}


export const logout = async () => {
    await signOut();
  };

//SETTINGS PAGE

export const settings = async (userId, values) => {
    try {
      const dbUser = await getUserById(userId);
      if (!dbUser) {
        return { error: "Unauthorized" };
      }
      const updatedUser = await db.user.update({
        where: { id: userId },
        data: {
          ...values,
        },
      });
      return { success: "User information updated successfully", updatedUser };
    } catch (error) {
      return { error: "An error occurred while processing your request." };
    }
  };

