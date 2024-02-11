'use server'
import bcrypt from "bcryptjs";
import  db from "@/lib/db"

export const login = async (values) => {
    try {
        // Here, you can directly use the values without validation
        // For example, you might perform authentication logic here
        console.log("values " + values)
        // After performing authentication logic, return success response
        return { success: "Email Sent" };
    } catch (error) {
        // If any error occurs during authentication, return error response
        return { error: "An error occurred while processing your request." };
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
