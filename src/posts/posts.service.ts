import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  getPosts() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.find((post) => post.id === id);
  }

  createPosts(post) {
    this.posts.push(post);
    return 'aaaaaaaa';
  }

  updatePosts() {
    return 'update posts';
  }

  deletePosts() {
    return 'delete posts';
  }
}
