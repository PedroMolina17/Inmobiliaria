import { Module } from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { ImageCoverController } from './image-cover.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  controllers: [ImageCoverController],
  providers: [ImageCoverService],
  imports: [
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist'),
      serveRoot: '/dist',
    }),
  ],
})
export class ImageCoverModule {}
