export const errorMessages = {
    required: "This field is required",
    email: "Invalid email",
    minlength: (params: number) => `At least ${params} digits`,
} as const