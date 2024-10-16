import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
});

export const LoginSchema = z
  .object({
    identifier: z.string().min(1, { message: "Email or Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    code: z.string().optional(),
  })
  .refine(
    (data) => {
      // Custom validation to check if identifier is an email or username
      // Adjust the email regex based on your needs
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmail = emailRegex.test(data.identifier);
      return isEmail || /^[a-zA-Z0-9_]+$/.test(data.identifier); // Add additional checks if needed
    },
    {
      message: "Identifier must be a valid email or username",
      path: ["identifier"], // Specify the field to highlight the error
    },
  );

export const RegisterSchema = z.object({
  name: z.string({ message: "Name is required" }),
  username: z
    .string({ message: "Username is required" })
    .min(3, "Username must be at least 3 characters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username can only contain letters, numbers"),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});
