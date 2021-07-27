/* eslint-disable prettier/prettier */
import { Usuario } from './usuario.entity';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  // O nest por debaixo realiza a instancia com base na injeção de dependencias
  //Injeta a dependencia que o controller precisa para funcionar
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string){
    const usuarioEncontrado = this.usuarioService.buscaPorNomeUsuario(nomeDeUsuario);
    return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    //estou atribuindo a variavel usuarioCriado chamando o método cria da minha classe e retornand ela
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }
}
