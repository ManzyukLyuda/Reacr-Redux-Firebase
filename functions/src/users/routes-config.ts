import { Application } from "express";
import { create, all} from "./controller";

export function routesConfig(app: Application) {
    app.post('/users',
        create
    );
    app.get('/users', [
        all
    ]);
 }