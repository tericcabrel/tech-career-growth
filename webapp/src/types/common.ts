import { Category, Resource, ResourceType, Request, RequestStatus } from '@/types/model';

export type SelectOption = {
  label: string;
  value: string;
};

export type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export type UserRole = 'admin' | 'user';

export type BgColorVariants = 'primary' | 'red' | 'whiteGray';

export type CreateCategoryInput = {
  name: string;
  description?: string;
  parentId: string | null;
};

export type UpdateCategoryInput = {
  id: string;
  name: string;
  description?: string;
};

type HttpResponse<T> = {
  data: T;
};

export type CommonResponseData = { message: string };
export type CategoryResponseData = HttpResponse<Category>;
export type CategoryResponseListData = HttpResponse<Category[]>;

export type PaginationChangeEventData = {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  totalRecords: number;
};

export type ResourceSearchParams = {
  category?: string;
  page: number;
  search?: string;
};

type PaginatedList = {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

export type ResourceList = PaginatedList & {
  items: Resource[];
};
export type ResourceResponseData = HttpResponse<Resource>;
export type ResourceListResponseData = HttpResponse<ResourceList>;
export type ResourcesResponseData = HttpResponse<Resource[]>;

export type CreateResourceInput = {
  name: string;
  link: string;
  categoryId: string;
  type: ResourceType;
  description: string | null;
  picture: string | null;
  extra?: any;
};

export type PartialCategory = {
  id: string;
  name: string;
  value: string;
  description: string | null;
  parentId: string | null;
};

export type CategoryTree = PartialCategory & {
  children: CategoryTree[];
  isChecked: boolean;
};

export type CreateRequestInput = {
  userName: string;
  userEmail: string;
  description?: string;
  categoryId: string | null;
};

export type RequestResponseData = HttpResponse<Request>;
export type RequestResponseListData = HttpResponse<Request[]>;
export type RequestListParams = {
  status?: RequestStatus;
  page: number;
};
export type RequestList = PaginatedList & {
  items: Request[];
};
export type RequestListResponseData = HttpResponse<RequestList>;

export type RequestReplyInput = {
  id: string;
  status: RequestStatus;
  message: string | null;
};

export type UpdateResourceInput = {
  id: string;
  name: string;
  link: string;
  categoryId: string;
  type: ResourceType;
  description: string | null;
  picture: string | null;
  extra?: any;
};

export type DashboardSummary = {
  resource: number;
  category: number;
  pendingRequest: number;
  totalRequest: number;
};

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  password: string | null;
  isEnabled: boolean;
  emailVerified: Date | null;
  image: string | null;
  roleId: string;
  role: {
    id: string;
    name: string;
    level: number;
  };
  createdAt: Date;
  updatedAt: Date;
};

type SessionData = {
  expires: Date;
  user: {
    name: string;
    email: string;
    id: string;
  };
  role: 'user' | 'admin';
};

export type UserResponseData = HttpResponse<User>;

export type UserResponseListData = HttpResponse<User[]>;

export type DashboardSummaryData = HttpResponse<DashboardSummary>;
