import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAllPosts(): any[];
    getPostByID(id: string): any;
    createPost(post: any): string;
    updatePosts(): string;
    deletePosts(): string;
}
