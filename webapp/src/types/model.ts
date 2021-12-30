export type Category = {
  id: string;
  name: string;
  value: string;
  description: string | null;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ResourceType = 'WEBPAGE' | 'VIDEO' | 'PICTURE' | 'TEXT' | 'OTHER';

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

export type RequestStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE' | 'ARCHIVED';

export type Request = {
  id: string;
  userName: string;
  userEmail: string;
  status: RequestStatus;
  description: string | null;
  categoryId: string | null;
  createdAt: Date;
  updatedAt: Date;
  category: {
    id: string;
    name: string;
  } | null;
};

export type Reply = {
  id: string;
  message: string;
  requestId: string;
  createdAt: Date;
  updatedAt: Date;
};
