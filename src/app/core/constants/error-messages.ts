export const errorMessages = {
    required: "Esse campo é obrigatório",
    email: "Email inválido",
    minlength: (params: number) => `Ao minímo ${params} digitos`,
} as const