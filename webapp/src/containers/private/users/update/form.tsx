import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { Role } from '@/types/model';
import { User, UpdateUserInput } from '@/types/common';
import { UpdateUserFormValues, updateUserFormSchema } from '@/components/user/form-schema';
import { UserForm } from '@/components/user/user-form';
import useUpdateUser from '@/hooks/request/mutation/use-update-user';
import { NETWORK_ERROR_MESSAGE, USER_UPDATED_MESSAGE } from '@/utils/constants';
import { getErrorMessage } from '@/utils/http-client';
import { formatOptions } from '@/utils/forms';

type Props = {
  user: User;
  roles: Role[];
};

const UpdateUser = ({ roles, user }: Props) => {
  const rolesOptions = formatOptions(roles);

  const formMethods = useForm<UpdateUserFormValues>({
    // @ts-ignore
    defaultValues: {
      email: user.email || undefined,
      name: user.name || undefined,
      role: rolesOptions.find((option) => option.value === user.role?.id) || rolesOptions[0],
    },
    resolver: yupResolver(updateUserFormSchema),
  });

  const updateMutation = useUpdateUser(user.id);

  const handleUpdateUser = (data: UpdateUserFormValues) => {
    console.log(data);

    const input: UpdateUserInput = {
      email: data.email,
      name: data.name,
      password: data.password,
      roleId: data.role?.value,
    };

    updateMutation.mutate(input, {
      onError: (error) => {
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: () => {
        toast.success(USER_UPDATED_MESSAGE);
      },
    });
  };

  return (
    <div className="py-5 container px-6 mx-auto grid">
      <h1 className="text-2xl font-bold">View User</h1>

      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleUpdateUser)}>
          <UserForm
            isEditMode
            isSubmitting={formMethods.formState.isSubmitting || updateMutation.isLoading}
            roleOptions={rolesOptions}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default UpdateUser;
