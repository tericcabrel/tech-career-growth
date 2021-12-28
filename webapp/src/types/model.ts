import { ResourceType } from '@/types/common';

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
  description: string | null;
  picture: string | null;
  categoryId: string;
  extra: any;
  clickCount: number;
  createdAt: Date;
  updatedAt: Date;
  category: {
    id: string;
    name: string;
  };
};
