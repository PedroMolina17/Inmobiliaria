import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  postsService: PostsService;
  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  @Get()
  getAllPosts() {
    return this.postsService.getPosts();
  }
}
