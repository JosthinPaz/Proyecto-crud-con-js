import { HttpException , Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class BrandsService {

  constructor(private prisma: PrismaService) {}






  async create(createCategoriaDto: CreateBrandDto) {
  // 🔎 Validamos si la categoría ya existe
  const categoriaExistente = await this.prisma.categoria.findFirst({
    where: { name: createCategoriaDto.name },
  });

  if (categoriaExistente) {
    throw new HttpException(
      {
        success: false,
        error: 'La categoría ya existe',
      },
      400,
    );
  }

  // ✅ Crear la categoría en BD
  const categoriaCreada = await this.prisma.categoria.create({
    data: createCategoriaDto,
  });

  // 📤 Retornar respuesta personalizada con los datos creados
  return {
    success: true,
    message: 'Categoría creada con éxito',
    categoria: categoriaCreada,
  };
}





  async findAll() {
  const resultadosBrands = await this.prisma.categoria.findMany({
    orderBy: { 'name': 'desc' }
  });
  if(resultadosBrands.length === 0) {
    throw new HttpException(
      {
        success: false,
        error: 'No se encontraron categoría registradas',
      },
      404,
    );
  }else{
  return {
    success: true,
    categorias: resultadosBrands,
  }};
}





  async findOne(id: number) {
    let categorias =  await this.prisma.categoria.findFirst({
      where: { id: id }
    });
    if(!categorias){
      throw new HttpException(
        {
          success: false,
          error: 'categoria Not Found'
          
        }, 404
      );
    }
    return categorias;
  }





  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const categoriaExistente = await this.findOne(id);
    if (!categoriaExistente) {
      throw new HttpException(
        {
          success: false,
          error: 'categoria a actualizar no encontrada',
        },
        404,
      );
    }

    const categoriaActualizada = await this.prisma.categoria.update({
      where: { id: id },
      data: updateBrandDto,
    });

    return {
      success: true,
      message: 'Categoría actualizada con éxito',
      categoria: categoriaActualizada,
    };
  }






  async remove(id: number) {
    const categoriaEliminada = await this.findOne(id);
    if (!categoriaEliminada) {
      throw new HttpException(
        {
          success: false,
          error: 'categoria a borrar no encontrada',
        },
        404,
      );
    } else {
      await this.prisma.categoria.delete({
        where: { id: id }
      });
      return {
        success: true,
        message: `Categoría con ID ${id} eliminada correctamente`,
      };
    }
  }
}
