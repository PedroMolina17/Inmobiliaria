import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Post()
  createPost() {
    return this.postsService.createPosts();
  }

  @Put()
  updatePosts() {
    return this.postsService.updatePosts();
  }

  @Delete()
  deletePosts() {
    return this.postsService.deletePosts();
  }
}
