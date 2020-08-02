import { Injectable, Get } from '@nestjs/common';
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose";
import { Usuario } from "../../Interfaces/usuario.interface";
import { UsuarioDto } from "../../dto/usuario.dto";
import { from, async } from 'rxjs';
import { promises } from 'dns';
@Injectable()
export class UsuarioService {
    //creado y desarrollado por carlos fernando ventura marin
    constructor(@InjectModel('Usuario') readonly usuarioModel:Model<Usuario> ){}
     

       async getUsuarios(): Promise <Usuario[]>{
            const usuarios = await this.usuarioModel.find();
            return usuarios;
       }

       async getUsuario(usuarioID: string,req,res):Promise <Usuario[]> {
            const usuario = await this.usuarioModel.findById(req.params.id);
            console.log(usuario);
            return res.json(usuario);
        }

        async usuarioCreatet (UsuarioDto):Promise<Usuario[]>{
            const {nombre,apellido,email,password ,password_conf,img,role,telefono,sexo,edad}=(UsuarioDto);
            console.log({nombre,apellido,email,password ,password_conf,img,role,telefono,sexo,edad});
            const errors = [];
            const guardado = [];
            if(password != password_conf){
                errors.push({ text: ' la contraseña no coinide'});
            }
            if(!password_conf){
                errors.push({ text: 'El campo password no puede estar vacio'});
            }
            if(password_conf.length<4){
                errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
            }
            if(password.length<4){
                errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos'});        
            }
            if (!password ) {
                errors.push({ text: 'El campo password no puede estar vacio'});
            } 
            if (!nombre) {
                errors.push({ text: 'El campo Nombre no puede estar vacio' });
            }
            if (!apellido) {
                errors.push({ text: 'El campo apellido no puede estar vacio'});
            }
            if (!email) {
                errors.push({ text: 'El campo email no puede estar vacio'});
            } 
            if (!telefono) {
                errors.push({ text: 'El campo telefono no puede estar vacio' });
            }
            if (errors.length > 0) {
                console.log({
                    errors,
                });
            }

            else {
                const emailUsuario =await this.usuarioModel.findOne({email:email});
                if(emailUsuario) {
                    console.log("usuario ya registrado");
                }
                else {
                    const usuario =new this.usuarioModel(UsuarioDto);
                    const usuarionew = await usuario.save(); 
                    return [usuarionew];   
                }
            }
        }
        
        async usuarioDelete(usuarioID:string):Promise<Usuario[]>{
            const usuariodelete =await this.usuarioModel.findByIdAndDelete(usuarioID);
            return [usuariodelete];
        }
        async updateUsuario(usuarioID:string,UsuarioDto,res):Promise<Usuario[]>{
            const usuariomod =await this.usuarioModel.findByIdAndUpdate(usuarioID,UsuarioDto,{new:true});
            return res.json(usuariomod);
        }
}
