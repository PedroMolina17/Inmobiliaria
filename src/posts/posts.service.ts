import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return ['post1', 'post2', 'post3', 'post4', 'post5'];
  }
}
