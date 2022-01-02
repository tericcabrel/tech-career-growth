import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { userFormSchema, UserFormValues } from '@/components/user/form-schema';
import useCreateUser from '@/hooks/request/mutation/use-create-user';
import { NETWORK_ERROR_MESSAGE, USER_CREATED_MESSAGE, USER_ROLE_OPTION } from '@/utils/constants';
import { getErrorMessage } from '@/utils/http-client';
import { UserRole } from '@/types/common';
import { UserForm } from '@/components/user/user-form';
import withPrivateLayout from '@/components/hof/with-private-layout';

const NewUser = () => {
  const formMethods = useForm<UserFormValues>({
    // @ts-ignore
    defaultValues: {
      role: USER_ROLE_OPTION[0],
    },
    resolver: yupResolver(userFormSchema),
  });

  const createUserMutation = useCreateUser();

  const handleCreateUser = (data: UserFormValues) => {
    createUserMutation.mutate(
      {
        email: data.email,
        name: data.name,
        password: data.password,
        role: data.role?.value as UserRole,
      },
      {
        onError: (error) => {
          toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
        },
        onSuccess: async () => {
          toast.success(USER_CREATED_MESSAGE);
          formMethods.reset();
        },
      },
    );
  };

  return (
    <div className="py-5 container px-6 mx-auto grid">
      <h1 className="text-2xl font-bold">New user</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleCreateUser)}>
          <UserForm isSubmitting={formMethods.formState.isSubmitting || createUserMutation.isLoading} />
        </form>
      </FormProvider>
    </div>
  );
};

export default withPrivateLayout(NewUser, { title: 'New user' });
