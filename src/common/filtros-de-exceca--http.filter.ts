import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { exception } from "console";

@Catch()
export class FiltroDeExcecaoHttp implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const requisicao = contexto.getRequest();
    const resposta = contexto.getResponse();
  }
}
