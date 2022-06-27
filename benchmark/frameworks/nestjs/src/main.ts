import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = Number(process.env.LISTEN_PORT) || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap();
