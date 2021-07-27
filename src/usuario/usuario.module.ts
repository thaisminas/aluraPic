import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Module, Controller } from '@nestjs/common';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
