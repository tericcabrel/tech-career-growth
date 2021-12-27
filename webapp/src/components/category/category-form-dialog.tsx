import { Fragment } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, Transition } from '@headlessui/react';
import { FORM_ERRORS } from '@/utils/constants';
import FormInput from '@/components/common/form-input';
import TextAreaInput from '@/components/common/textarea-input';
import Button from '@/components/common/button';

type Props = {
  closeDialog: () => void;
  handleSubmit: (values: any) => void;
  isEditing: boolean;
  defaultValues: {
    name?: string;
    description?: string;
  };
};

const categoryFormSchema = yup.object().shape({
  name: yup.string().required(FORM_ERRORS.fieldRequired),
  description: yup.string(),
});

type CategoryFormValues = yup.InferType<typeof categoryFormSchema>;

const CategoryFormDialog = ({ closeDialog, defaultValues, handleSubmit, isEditing }: Props) => {
  const formMethods = useForm<CategoryFormValues>({
    // @ts-ignore
    defaultValues,
    resolver: yupResolver(categoryFormSchema),
  });

  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open onClose={closeDialog}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-1/3">
              <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {isEditing ? 'Edit' : 'Add'} a category
                    </Dialog.Title>
                    <div className="my-6">
                      <FormInput label="Name" name="name" type="text" placeholder="Eg.: Improve resume" isRequired />
                      <div className="w-full">
                        <TextAreaInput
                          label="Description"
                          name="description"
                          placeholder="Give more details about the category here"
                          isRequired
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 justify-between sm:px-6 sm:flex sm:flex-row-reverse">
                    <Button
                      bgColor="primary"
                      className="sm:ml-3 sm:w-auto sm:text-sm"
                      type="submit"
                      text="Save"
                      loading={false}
                    />
                    <Button
                      bgColor="whiteGray"
                      type="button"
                      className="shadow-sm !text-gray-500"
                      onClick={closeDialog}
                      text="Cancel"
                    />
                  </div>
                </form>
              </FormProvider>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CategoryFormDialog;
