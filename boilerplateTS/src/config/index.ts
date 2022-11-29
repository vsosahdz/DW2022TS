export const PORT:number = process.env.PORT ? +process.env.PORT:8080;
export const NODE_ENV:string = process.env.NODE_ENV ? process.env.NODE_ENV :'development';
export const DB_NAME:string = process.env.DB_NAME ? process.env.DB_NAME:'prueba';
export const DB_USER:string = process.env.DB_USER ? process.env.DB_USER:'root';
export const DB_PASSWORD:string = process.env.DB_PASSWORD ? process.env.DB_PASSWORD:'root';
export const DB_HOST:string = process.env.DB_HOST ? process.env.DB_HOST:'localhost';
export const PREFIX_NAME = NODE_ENV === 'production' ? '':'-DEV';