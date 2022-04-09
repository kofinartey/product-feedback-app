import { StringMappingType } from "typescript";

export interface UserInterface {
  image: string;
  name: string;
  username: string;
}

export interface CommentInterface {
  id: string | number;
  content: string;
  user: UserInterface;
  replies?: ReplyInterface[] | [];
}
export interface SuggestionInterface {
  id: string | number;
  title: string;
  category: string;
  upvotes: number;
  status: "planned"|"in-progress"| "live" | string;
  description: string;
  comments: CommentInterface[] | [];
}

export interface ReplyInterface {
  content: string;
  replyingTo: string;
  user: UserInterface;
}
