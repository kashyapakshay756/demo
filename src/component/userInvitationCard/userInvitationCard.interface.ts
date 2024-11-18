export interface UserInvitationCardControllerProps {}

export interface UserInvitationCardProps {
  item: ItemProps;
}

export interface ItemProps {
  email: string;
  fullName: string;
  type: string;
  _id: string;
}
