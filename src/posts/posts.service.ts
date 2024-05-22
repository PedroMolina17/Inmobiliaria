import { Injectable } from '@nestjs/common';
import { CreatePost } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts = [];

  getPosts() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.find((post) => post.id === id);
  }

  createPosts(post: CreatePost) {
    this.posts.push(post);
  }

  updatePosts() {
    return 'update posts';
  }

  deletePosts() {
    return 'delete posts';
  }
}
