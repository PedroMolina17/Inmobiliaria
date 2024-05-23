import { PostsService } from './posts.service';
import { CreatePost } from './dto/create-post.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAllPosts(): any[];
    getPostByID(id: string): any;
    createPost(post: CreatePost): void;
    updatePosts(): string;
    deletePosts(): string;
}
