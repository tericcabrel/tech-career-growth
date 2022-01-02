import { Controller, useFormContext } from 'react-hook-form';

import SelectInput from '@/components/common/select-input';
import FormInput from '@/components/common/form-input';
import Button from '@/components/common/button';
import { USER_ROLE_OPTION } from '@/utils/constants';

type Props = {
  isSubmitting?: boolean;
  isEditMode?: boolean;
};

const UserForm = ({ isSubmitting, isEditMode = false }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="px-8 py-8 mt-12 w-1/2 mx-auto bg-white rounded-lg shadow-md">
      <div className="w-full">
        <label className="block text-sm mb-6">
          <span className="font-bold text-gray-700 dark:text-gray-400">Role*</span>
          <Controller
            name="role"
            control={control}
            render={({ field }) => <SelectInput className="wp-45" options={USER_ROLE_OPTION} {...field} />}
          />
        </label>
      </div>

      <div className="w-full grid grid-cols-2 gap-6 mt-14">
        <FormInput label="Name" type="text" placeholder="Jane" name="name" isRequired />
        <FormInput label="Email address" type="email" placeholder="user@email.com" name="email" isRequired />
      </div>

      <div className="w-full grid grid-cols-2 gap-6 mt-8">
        <FormInput label="Password" type="password" name="password" isRequired />
        <FormInput label="Confirm password" type="password" name="confirmPassword" isRequired />
      </div>

      <div className="w-full mt-8 flex justify-end">
        <Button text={isEditMode ? 'Update' : 'Create'} loading={isSubmitting} />
      </div>
    </div>
  );
};

export { UserForm };
