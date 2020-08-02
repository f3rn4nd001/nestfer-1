import { Document } from "mongoose";


export interface Usuario extends Document {
    readonly nombre:string;
    readonly apellido:string;
    readonly email:string;
    readonly password:string;
    readonly password_conf:string
    readonly img:string;
    readonly role:string;
    readonly telefono:number;
    readonly sexo:string;
    readonly edad:number;
}