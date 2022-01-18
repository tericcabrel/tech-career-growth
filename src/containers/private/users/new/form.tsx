import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Role } from '@/types/model';
import { getErrorMessage } from '@/utils/http-client';
import { formatOptions } from '@/utils/forms';
import { NETWORK_ERROR_MESSAGE, USER_CREATED_MESSAGE } from '@/utils/constants';
import useCreateUser from '@/hooks/request/mutation/use-create-user';
import { userFormSchema, UserFormValues } from '@/components/user/form-schema';
import { UserForm } from '@/components/user/user-form';

type Props = {
  roles: Role[];
};

const NewUser = ({ roles }: Props) => {
  const rolesOptions = formatOptions(roles);

  const formMethods = useForm<UserFormValues>({
    // @ts-ignore
    defaultValues: {
      role: rolesOptions[0],
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
        roleId: data.role?.value,
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
          <UserForm
            isSubmitting={formMethods.formState.isSubmitting || createUserMutation.isLoading}
            roleOptions={rolesOptions}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default NewUser;
