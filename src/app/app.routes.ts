import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.routes'),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];