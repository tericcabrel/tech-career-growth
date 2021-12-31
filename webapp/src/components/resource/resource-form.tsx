import { Controller, useFormContext } from 'react-hook-form';

import SelectInput from '@/components/common/select-input';
import FormInput from '@/components/common/form-input';
import Button from '@/components/common/button';
import TextAreaInput from '@/components/common/textarea-input';
import { SelectOption } from '@/types/common';
import { RESOURCE_TYPE_OPTIONS } from '@/utils/constants';

type Props = {
  isSubmitting?: boolean;
  isEditMode?: boolean;
  categoryOptions: SelectOption[];
};

const ResourceForm = ({ categoryOptions, isSubmitting, isEditMode = false }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="px-8 py-8 w-1/2 mx-auto bg-white rounded-lg shadow-md">
      <div className="w-full flex justify-between">
        <div>
          <label className="block text-sm mb-6">
            <span className="font-bold text-gray-700">Category*</span>
            <Controller
              name="category"
              control={control}
              render={({ field }) => <SelectInput className="w-72" options={categoryOptions} {...field} />}
            />
          </label>
        </div>
        <div>
          <label className="block text-sm mb-6">
            <span className="font-bold text-gray-700">Resource type*</span>
            <Controller
              name="type"
              control={control}
              render={({ field }) => <SelectInput className="w-44" options={RESOURCE_TYPE_OPTIONS} {...field} />}
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <FormInput label="Name" type="text" placeholder="A summary of the article" name="name" isRequired />
      </div>

      <div className="w-full">
        <FormInput
          label="Link to resource"
          type="url"
          placeholder="https://medium.com/article-title"
          name="link"
          isRequired
        />
      </div>

      <div className="w-full">
        <TextAreaInput
          label="Description"
          name="description"
          placeholder="Add any additional information related to this resource here"
          isRequired={false}
        />
      </div>

      <div className="w-full mt-8 flex justify-end">
        <Button text={isEditMode ? 'Update' : 'Create'} loading={isSubmitting} />
      </div>
    </div>
  );
};

export default ResourceForm;
