Se mettre sous app
ng generate module assistants/caveavin --route caveavin --module app



'http://localhost:8000', // URL du backend FastAPI local

app.routes.ts ne contient que la déclaration des routes.

main.ts importe ces routes et les fournit au bootstrap standalone via provideRouter.

AppComponent reste pur (juste le menu + <router-outlet>).
