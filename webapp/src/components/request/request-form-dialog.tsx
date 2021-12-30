import { Fragment } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { SelectOption } from '@/types/common';
import { FORM_ERRORS, NETWORK_ERROR_MESSAGE, REQUEST_CREATED_MESSAGE } from '@/utils/constants';
import FormInput from '@/components/common/form-input';
import TextAreaInput from '@/components/common/textarea-input';
import Button from '@/components/common/button';
import SelectInput from '@/components/common/select-input';
import InfoIcon from '@/components/icons/info';
import useCreateRequest from '@/hooks/request/mutation/use-create-request';
import { getErrorMessage } from '@/utils/axios';

type Props = {
  closeDialog: () => void;
  categoryOptions: SelectOption[];
};

const requestFormSchema = yup.object().shape({
  userName: yup.string().required(FORM_ERRORS.fieldRequired),
  userEmail: yup.string().required(FORM_ERRORS.fieldRequired).email(FORM_ERRORS.emailInvalid),
  description: yup.string(),
  category: yup.object().required(FORM_ERRORS.fieldRequired),
});

type CategoryFormValues = yup.InferType<typeof requestFormSchema>;

const RequestFormDialog = ({ categoryOptions, closeDialog }: Props) => {
  const createRequestMutation = useCreateRequest();

  const formMethods = useForm<any>({
    defaultValues: {
      category: categoryOptions[0],
    },
    resolver: yupResolver(requestFormSchema),
  });

  const handleSubmitRequest = (values: CategoryFormValues) => {
    console.log(values);

    createRequestMutation.mutate(
      {
        userName: values.userName,
        userEmail: values.userEmail,
        description: values.description,
        categoryId: values.category.value,
      },
      {
        onError: (error) => {
          toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
        },
        onSuccess: async () => {
          toast.success(REQUEST_CREATED_MESSAGE);
          formMethods.reset();
          closeDialog();
        },
      },
    );
  };

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
                <form onSubmit={formMethods.handleSubmit(handleSubmitRequest)}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 mb-3">
                      Ask a resource
                    </Dialog.Title>
                    <div className="my-6">
                      <div className="flex pb-3 items-center text-green-700 text-sm">
                        <InfoIcon className="mr-1" /> You will receive an email with a link when the resource will be
                        available.
                      </div>
                      <FormInput
                        label="What is your last name?"
                        name="userName"
                        type="text"
                        placeholder="Eg.: John"
                        isRequired
                      />
                      <FormInput
                        label="Email address"
                        name="userEmail"
                        type="text"
                        placeholder="Eg.: john.doe@email.com"
                        isRequired
                      />
                      <div className="w-full">
                        <label className="block text-sm mb-6">
                          <span className="font-bold text-gray-700">Select a category:</span>
                          <Controller
                            name="category"
                            control={formMethods.control}
                            render={({ field }) => (
                              <SelectInput className="w-full" options={categoryOptions} {...field} />
                            )}
                          />
                        </label>
                      </div>
                      <div className="w-full">
                        <TextAreaInput
                          label="Description"
                          name="description"
                          placeholder="Hi! I need a resource on how improving my resume but, I'm looking for a more detailed resource please"
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
                      loading={formMethods.formState.isSubmitting}
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

export default RequestFormDialog;
