export interface IPost {
  id: number;
  img?: string;
  profileImg: string;
  accountName: string;
  createdAt: string;
  text: string;
  isRepostedPost?: boolean;
}
