export type Category = {
  id: string;
  name: string;
  value: string;
  description: string | null;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
