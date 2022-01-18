import { useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { Category, Resource } from '@/types/model';
import { formatOptions } from '@/utils/forms';
import { NETWORK_ERROR_MESSAGE, RESOURCE_TYPE_OPTIONS, RESOURCE_UPDATED_MESSAGE } from '@/utils/constants';
import { getErrorMessage } from '@/utils/http-client';
import { ResourceFormValues, resourceFormSchema } from '@/components/resource/form-schema';
import ResourceForm from '@/components/resource/resource-form';
import useUpdateResource from '@/hooks/request/mutation/use-update-resource';

type Props = {
  resource: Resource;
  categories: Category[];
};

const UpdateResource = ({ categories, resource }: Props) => {
  const categoryOptions = useMemo(() => formatOptions(categories), [categories]);

  const initialValues: Partial<unknown> = {
    name: resource.name,
    description: resource.description,
    link: resource.link,
    type: RESOURCE_TYPE_OPTIONS.find((option) => option.value === resource.type) || RESOURCE_TYPE_OPTIONS[0],
    category: categoryOptions.find((option) => option.value === resource.categoryId) || categoryOptions[0],
  };

  const formMethods = useForm<ResourceFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(resourceFormSchema),
  });

  const updateResourceMutation = useUpdateResource();

  const handleUpdateResource = (data: ResourceFormValues) => {
    updateResourceMutation.mutate(
      {
        id: resource.id,
        link: data.link,
        name: data.name,
        type: data.type.value,
        categoryId: data.category.value,
        description: data.description || null,
        picture: null,
        extra: undefined,
      },
      {
        onError: (error) => {
          toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
        },
        onSuccess: async () => {
          toast.success(RESOURCE_UPDATED_MESSAGE);
        },
      },
    );
  };

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold mb-10">Update resource</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleUpdateResource)}>
          <ResourceForm
            categoryOptions={categoryOptions}
            isSubmitting={formMethods.formState.isSubmitting || updateResourceMutation.isLoading}
            isEditMode
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default UpdateResource;
