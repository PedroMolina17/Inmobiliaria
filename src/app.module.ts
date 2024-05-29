import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { PropertyModule } from './property/property.module';
import { TypepropertyModule } from './typeproperty/typeproperty.module';
import { UsersModule } from './users/users.module';
import { TypeUsersModule } from './type-users/type-users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ImageCoverModule } from './image-cover/image-cover.module';
import { ImageDescriptionModule } from './image-description/image-description.module';

@Module({
  imports: [
    AuthModule,
    PostsModule,
    PropertyModule,
    TypepropertyModule,
    UsersModule,
    TypeUsersModule,
    PrismaModule,
    ImageCoverModule,
    ImageDescriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
