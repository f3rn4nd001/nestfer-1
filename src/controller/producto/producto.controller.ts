import { Controller, Get } from '@nestjs/common';

@Controller('producto')
export class ProductoController {

    @Get()
    getproducto(): string {
        return 'producto';
      }
}
