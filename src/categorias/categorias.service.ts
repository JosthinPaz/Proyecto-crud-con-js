import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  // datos de categoria
  private categorias: Categoria[] = [
    new Categoria(1, 'Producto A', true),
    new Categoria(2, 'Producto B', false),
    new Categoria(3, 'Producto C', true),
  ];

  create(newCategoria) {
    this.categorias.push(newCategoria);
    return newCategoria;
  }

  findAll() {
    return this.categorias;
  }

  findOne(id: number) {
    return this.categorias.find(c => c.id === id);
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    // Aquí puedes implementar la lógica de actualización real
    return `Esta acción actualiza la categoría #${id}`;
  }

  remove(id: number) {
    this.categorias = this.categorias.filter(c => c.id !== id);
    return `Categoría con id: ${id} eliminada`;
  }
}
