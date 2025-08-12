import { Controller, Get , Post, Patch, Delete ,Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("cars")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post() 
  crearCarro(): string{
    return "Aqui se van a registrar los carros"
  }
  @Patch(":id")
  actualizarCarro(@Param ("id") id:string): string{
    return `Se actualizara el carro: ${id}`
  }
  @Delete(":id")
  eliminarCarro(@Param ("id") id:string): string{
    return `Aqui Se eliminara el carro: ${id}`
  }
}
