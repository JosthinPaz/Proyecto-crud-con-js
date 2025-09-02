import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CustomersModule, CategoriasModule, UsuariosModule, PrismaModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
