import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:
        process.env.NODE_ENV === 'production'
          ? join(__dirname, '../../', 'client', 'dist')
          : join(__dirname, '../../', 'client'),
      exclude: ['/server/*splat'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
