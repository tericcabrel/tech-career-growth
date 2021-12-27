export type Category = {
  id: string;
  name: string;
  value: string;
  description: string | null;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Resource = {
  id: string;
  name: string;
  type: ResourceType;
  link: string;
  description: string;
  picture: string;
  categoryId: string;
  extra: Prisma.JsonValue;
  clickCount: number;
  createdAt: Date;
  updatedAt: Date;
};
