import { CreatePost } from './DTO/create-post.dto';
export declare class PostsService {
    private posts;
    getPosts(): any[];
    getPostById(id: any): any;
    createPosts(post: CreatePost): void;
    updatePosts(): string;
    deletePosts(): string;
}
