import { ConnectionStates, Date } from 'mongoose';

export interface MongoConnection {
    isConnection: ConnectionStates;
}

export interface MongoUser {
    id: string;
    username: string;
    email: string;
    password: string;
    img: string;
    isAdmin: boolean;
    createdAt: Date;
}

export interface MongoPost {
    id: string;
    title: string;
    desc: string;
    img: string;
    userId: string;
    slug: string;
    createdAt: Date;
}
