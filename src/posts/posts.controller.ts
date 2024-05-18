import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePost } from './DTO/create-post.dto';

@Controller('/posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getPosts();
  }
  @Get('/:id')
  getPostByID(@Param('id') id: string) {
    console.log(id);
    const taskFound = this.postsService.getPostById(parseInt(id));
    if (!taskFound) {
      return new NotFoundException(`Post ${id} not found`);
    }
    return taskFound;
  }

  @Post()
  createPost(@Body() post: CreatePost) {
    return this.postsService.createPosts(post);
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
