import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;

  // eslint-disable-next-line prettier/prettier
  @IsEmail({}, {
      message: 'email precisa ser um endereço de email válido.'
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório.',
  })
  nomeCompleto: string;

  dataDeEntrada: Date;
}
