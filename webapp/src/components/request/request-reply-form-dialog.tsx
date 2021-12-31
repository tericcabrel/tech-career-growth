import { Fragment } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog, Transition } from '@headlessui/react';
import { Request } from '@/types/model';
import { FORM_ERRORS, NETWORK_ERROR_MESSAGE, REQUEST_STATUS_OPTIONS, REQUEST_UPDATED_MESSAGE } from '@/utils/constants';
import TextAreaInput from '@/components/common/textarea-input';
import Button from '@/components/common/button';
import SelectInput from '@/components/common/select-input';
import { useRequestReply } from '@/hooks/request/mutation/use-request-reply';
import { toast } from 'react-toastify';
import { getErrorMessage } from '@/utils/http-client';

type Props = {
  closeDialog: () => void;
  request: Request;
};

const requestReplyFormSchema = yup.object().shape({
  message: yup.string(),
  status: yup.object().required(FORM_ERRORS.fieldRequired),
});

type RequestReplyFormValues = yup.InferType<typeof requestReplyFormSchema>;

const RequestReplyFormDialog = ({ request, closeDialog }: Props) => {
  const requestReplyMutation = useRequestReply();

  const formMethods = useForm<any>({
    defaultValues: {
      status: REQUEST_STATUS_OPTIONS.find((option) => option.value === request.status) || REQUEST_STATUS_OPTIONS[0],
    },
    resolver: yupResolver(requestReplyFormSchema),
  });

  const replies = request.replies ?? [];

  const handleSubmitRequest = (values: RequestReplyFormValues) => {
    requestReplyMutation.mutate(
      {
        id: request.id,
        message: values.message || null,
        status: values.status.value,
      },
      {
        onError: (error) => {
          closeDialog();
          toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
        },
        onSuccess: async () => {
          closeDialog();
          toast.success(REQUEST_UPDATED_MESSAGE);
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
                      Edit a request
                    </Dialog.Title>
                    <div className="my-6">
                      <div className="w-full mb-6 space-y-2 text-sm">
                        <div>
                          <span className="font-bold text-gray-700">User name:</span> {request.userName}
                        </div>
                        <div>
                          <span className="font-bold text-gray-700">User email:</span> {request.userEmail}
                        </div>
                        <div>
                          <span className="font-bold text-gray-700">Message:</span>
                          <p>{request.description || 'No message'}</p>
                        </div>
                      </div>
                      <div className="w-full">
                        <label className="block text-sm mb-6">
                          <span className="font-bold text-gray-700">Request status:</span>
                          <Controller
                            name="status"
                            control={formMethods.control}
                            render={({ field }) => (
                              <SelectInput className="w-full" options={REQUEST_STATUS_OPTIONS} {...field} />
                            )}
                          />
                        </label>
                      </div>

                      <div className="w-full">
                        {replies.length > 0 ? (
                          <div className="text-sm">
                            <div className="font-bold text-gray-700 flex justify-between">
                              Your reply: <div>{replies[0].createdAt}</div>
                            </div>
                            <p className="mt-3">{replies[0].message || 'No message'}</p>
                          </div>
                        ) : (
                          <TextAreaInput
                            label="Reply to the user"
                            name="message"
                            placeholder={`Hi! ${request.userName} here is the link that will help you to improve...`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 justify-between sm:px-6 sm:flex sm:flex-row-reverse">
                    <Button
                      bgColor="primary"
                      className="sm:ml-3 sm:w-auto sm:text-sm"
                      type="submit"
                      text="Save"
                      loading={formMethods.formState.isSubmitting || requestReplyMutation.isLoading}
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

export default RequestReplyFormDialog;
