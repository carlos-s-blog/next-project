export interface PlaceholderPosts {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostCardProps {
    post: PlaceholderPosts;
}

export interface PostUserResponse {
    id: number;
    name: string;
    username: string;
}

export interface SimpleBlogProps {
    params: {
        slug: string;
    };
}
