import { Injectable } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
/* eslint-disable prettier/prettier */
import {registerDecorator,ValidationOptions,ValidatorConstraint,ValidatorConstraintInterface,ValidationArguments} from 'class-validator';

@Injectable()
@ValidatorConstraint()
export class eNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

  constructor(private usuarioService: UsuarioService) {} //faz com que o nest injete o usuarioService
  validate(nomeDeUsuario: string, _validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }
};


export function eNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: eNomeDeUsuarioUnicoConstraint, //usa o nome da classe
    });
  };
}
