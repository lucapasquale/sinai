import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { Config } from './common/config'
import { Logger } from './common/logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new Logger() })

  const configService = app.get<ConfigService<Config>>(ConfigService)
  await app.listen(configService.get('port'))
}
bootstrap()
