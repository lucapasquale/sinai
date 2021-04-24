import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { HousingModule } from './housing/housing.module'
import { CommonModule } from './common/common.module'
import { Config } from './common/config'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<Config>) => ({
        debug: config.get('env') === 'dev',
        playground: ['dev', 'staging'].includes(config.get('env')),
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
      }),
    }),

    CommonModule,
    HousingModule,
  ],
})
export class AppModule {}
