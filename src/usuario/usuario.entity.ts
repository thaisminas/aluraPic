import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { eNomeDeUsuarioUnico } from './nome-usario-validator';
import { Exclude, Expose } from 'class-transformer';

export class Usuario {
  id: number;

  @Expose({
    name: 'username',
  })
  @eNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser unico',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;

  @Expose({
    name: 'email',
  })
  // eslint-disable-next-line prettier/prettier
  @IsEmail({}, {
      message: 'email precisa ser um endereço de email válido.'
    },
  )
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  senha: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório.',
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
