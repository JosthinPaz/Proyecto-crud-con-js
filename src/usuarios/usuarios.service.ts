import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  // datos de usuario
  private usuarios: Usuario[] = [
    new Usuario(1, 'Juan Pérez', 'juan.perez@email.com', '123456', true, new Date('2025-08-12T10:00:00.000Z'), 2),
    new Usuario(2, 'Ana Gómez', 'ana.gomez@email.com', 'abcdef', false, new Date('2025-08-10T09:00:00.000Z'), 1)
  ];

  create(newUsuario) {
    this.usuarios.push(newUsuario);
    return newUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(u => u.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    // Aquí puedes implementar la lógica de actualización real
    return `Esta acción actualiza el usuario #${id}`;
  }

  remove(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    return `Usuario con id: ${id} eliminado`;
  }
}
