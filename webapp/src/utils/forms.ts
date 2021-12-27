import { SelectOption } from '@/types/common';
import { Category } from '@/types/model';
import { DEFAULT_RESOURCE } from '@/utils/constants';

export const getInputErrorMessage = (formErrors: Record<string, any>, inputName?: string) => {
  if (!inputName) {
    return;
  }

  if (inputName in formErrors) {
    return formErrors[inputName].message;
  }
};

export const formatCategoryOption = (resources: Category[]) => {
  const resourceOptions = resources.map((resource): SelectOption => ({ label: resource.name, value: resource.name }));

  return [DEFAULT_RESOURCE].concat(resourceOptions);
};

export const formatOptions = <T extends { id: string; name: string }>(data: T[]) => {
  return data.map((item): SelectOption => ({ label: item.name, value: item.id }));
};
