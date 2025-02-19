import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { modules } from './modules/modules.export';

import ormconfig from './configs/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ormconfig,
    }),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { };
