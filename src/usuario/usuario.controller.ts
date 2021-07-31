import { NestResponseBiulder } from './../core/http/nest-responsebiulder';
import { NestResponse } from './../core/http/nest.response';
import { HttpStatus, NotFoundException } from '@nestjs/common';
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
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
      const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

      if (!usuarioEncontrado) {
          throw new NotFoundException({
              statusCode: HttpStatus.NOT_FOUND,
              message: 'Usuário não encontrado.'
          });
      }
      return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario, NestResponse) {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return new NestResponseBiulder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        'Location': `/users/${usuarioCriado.nomeDeUsuario}`
      })
      .comBody(usuarioCriado)
      .build();
  }
}
