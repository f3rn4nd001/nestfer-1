import { Module } from '@nestjs/common';
import {UsuarioService} from "../../service/usuario/usuario.service";
import { UsuarioController } from 'src/controller/usuario/usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioShema } from 'src/Schema/Usuario.Schema';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:'Usuario', schema:usuarioShema
        }
    ])],
    controllers:[UsuarioController],
    providers:[UsuarioService]
})
export class UsuarioModule {
}