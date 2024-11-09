import { Request } from "express";

export interface ExtendRequest extends Request{
    user? :user;
}
export interface IArticles{
    id: string;
    userId: string;
    title: string;
    description: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}