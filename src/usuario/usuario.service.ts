import { Usuario } from './usuario.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  buscaPorNomeUsuario(_nomeDeUsuario: string) {
    throw new Error('Method not implemented.');
  }
  private usuarios: Array<Usuario> = [];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }

  //Percorre o array do usuario e retorna se o usario passado for igual
  buscaPorNomeDeUsuario(nomeDeUsuario: string) {
    // eslint-disable-next-line prettier/prettier
    return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario,
    );
  }
}
