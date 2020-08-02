import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modulo/usuario/usuario.module';
import { ProductoModule } from './modulo/producto/producto.module';
import { UsuarioController } from './controller/usuario/usuario.controller';
import { ProductoController } from './controller/producto/producto.controller';
import { UsuarioService } from './service/usuario/usuario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioShema } from './Schema/Usuario.Schema';

@Module({
  imports: [UsuarioModule, ProductoModule, MongooseModule.forRoot('mongodb://localhost/Tienda-nest',{useNewUrlParser:true}),MongooseModule.forFeature([{name:'Usuario', schema:usuarioShema}])],
  controllers: [AppController, UsuarioController, ProductoController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
