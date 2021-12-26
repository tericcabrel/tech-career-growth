export type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export type BgColorVariants = 'primary' | 'red' | 'whiteGray';

export type CategoryFormInput = {
  name: string;
  description?: string;
  parentId: string | null;
};
