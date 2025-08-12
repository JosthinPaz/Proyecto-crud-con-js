import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {

  //datos de customer

  private clientes: Customer[] = [
    new Customer(1, 'John', 'Doe', new Date('1990-01-01'), true, 'Regular customer'),
    new Customer(2, 'Jane', 'Smith', new Date('1985-05-15'), false, 'VIP customer'),
    new Customer(3, 'Alice', 'Johnson', new Date('2000-10-30'), true, 'New customer')
  ];


  create( newCliente) {
    this.clientes.push(newCliente);
      return newCliente;  
  }

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
  let CustomerBuscar = this.clientes.find(function(c: Customer) {
    return c.id === id;
    });
    return CustomerBuscar;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    this.clientes = this.clientes.filter(function(Cliente) {
      return Cliente.id !== id;
    });
    return `Cliente con id : ${id} eliminado`;
  }
}
