'use server'

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
