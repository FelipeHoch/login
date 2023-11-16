import { FormControl } from "@angular/forms";

export interface LoginForm {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}
