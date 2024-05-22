import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { PropertyModule } from './property/property.module';
import { TypepropertyModule } from './typeproperty/typeproperty.module';

@Module({
  imports: [AuthModule, PostsModule, PropertyModule, TypepropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
