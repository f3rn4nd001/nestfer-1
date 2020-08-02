import { Controller, Get, Post, Put, Delete, Body, Res, HttpStatus, Req } from '@nestjs/common';
import { UsuarioDto } from "../../dto/usuario.dto";
import { from } from 'rxjs';
import { UsuarioService } from "../../service/usuario/usuario.service";
@Controller('usuario')
export class UsuarioController {

   constructor( private usuarioService: UsuarioService){}
   
   @Get()
    async geUsuario(@Res() res){
      const usuario =await this.usuarioService.getUsuarios();
      res.status(HttpStatus.OK).json({
        usuario
      });
    }

    @Post()
      async postUsuario(@Body() UsuarioDto:UsuarioDto,@Req() req, @Res() res) {
        const usuario =await this.usuarioService.usuarioCreatet(UsuarioDto);
        return res.status(HttpStatus.OK).json({
          message:'REsss',
          usuario
      });
       
      }
    
    @Put()
      putUsuario(): string {
        return 'usuariopu';
      }
    
    @Delete()
      gdeleteUsuario(): string {
        return 'usuariod';
      }
}
