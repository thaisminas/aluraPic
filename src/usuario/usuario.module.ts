import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Module, Controller } from '@nestjs/common';
import { eNomeDeUsuarioUnicoConstraint } from './nome-usario-validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, eNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule {}
