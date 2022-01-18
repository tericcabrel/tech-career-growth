import { useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { Category } from '@/types/model';
import { formatOptions } from '@/utils/forms';
import { NETWORK_ERROR_MESSAGE, RESOURCE_CREATED_MESSAGE, RESOURCE_TYPE_OPTIONS } from '@/utils/constants';
import { getErrorMessage } from '@/utils/http-client';
import { ResourceFormValues, resourceFormSchema } from '@/components/resource/form-schema';
import ResourceForm from '@/components/resource/resource-form';
import useCreateResource from '@/hooks/request/mutation/use-create-resource';

type Props = {
  categories: Category[];
};

const NewResource = ({ categories }: Props) => {
  const categoryOptions = useMemo(() => formatOptions(categories), [categories]);

  const initialValues: Partial<unknown> = {
    name: '',
    description: '',
    link: '',
    type: RESOURCE_TYPE_OPTIONS[0],
    category: categoryOptions[0],
  };

  const formMethods = useForm<ResourceFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(resourceFormSchema),
  });

  const createResourceMutation = useCreateResource();

  const handleCreateResource = (data: ResourceFormValues) => {
    createResourceMutation.mutate(
      {
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
          toast.success(RESOURCE_CREATED_MESSAGE);
          formMethods.reset();
        },
      },
    );
  };

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold mb-10">Add new resource</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleCreateResource)}>
          <ResourceForm
            categoryOptions={categoryOptions}
            isSubmitting={formMethods.formState.isSubmitting || createResourceMutation.isLoading}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default NewResource;
