import { PostsService } from './posts.service';
export declare class PostsController {
    postsService: PostsService;
    constructor(postsService: PostsService);
    getAllPosts(): string[];
}
