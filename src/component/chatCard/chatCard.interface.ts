export interface ChatCardProps {
  item: ItemsProps;
  onLike?: (id: string) => void;
  onDelete?: (id: string) => void;
  onReply?: (id: string, username: string) => void;
  type?: string;
  onMoreImages?: () => void;
}

export interface ItemsProps {
  id: string;
  parentId: string;
  image: string;
  message: string;
  name: string;
  likes: number;
  replies: ReplyProps[];
  userId: string;
  time: string;
  images: string[];
}
export interface ReplyProps {
  id: string;
  parentId: string;
  image: string;
  message: string;
  name: string;
  likes: number;
  userId: string;
  time: string;
}

export interface RenderReplyProps {
  item: ReplyProps;
  index: number;
}
