import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { GraphqlLoggingPlugin } from './logger/graphql-logger.plugin'
import { config } from './config'
import { Logger } from './logger'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: getEnvFilePath(),
    }),
  ],
  providers: [Logger, GraphqlLoggingPlugin],
  exports: [],
})
export class CommonModule {}

function getEnvFilePath() {
  switch (process.env.NODE_ENV) {
    case 'test':
      return 'env/.test.env'

    case 'dev':
      return 'env/.dev.env'

    default:
      return null
  }
}
