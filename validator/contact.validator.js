const { z } = require("zod");


exports.contactZodSchema = z.object({

    fullName: z
        .string()
        .min(3, {
            message: "Full name must contain minimum 3 letters"
        }),


    email: z
        .string({
            required_error: "Email is required"
        })
        .email({
            message: "Please enter a valid email"
        }),

    message: z
        .string()
        .min(3, {
            message: "Full name must contain minimum 3 letters"
        }),
});