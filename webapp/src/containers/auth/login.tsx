import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FORM_ERRORS } from '@/utils/constants';
import FormInput from '@/components/common/form-input';
import Button from '@/components/common/button';
import withPublicLayout from '@/components/hof/with-public-layout';

const loginSchema = yup.object().shape({
  email: yup.string().required(FORM_ERRORS.fieldRequired).email(FORM_ERRORS.emailInvalid),
  password: yup.string().required(FORM_ERRORS.fieldRequired),
});

type LoginFormValues = yup.InferType<typeof loginSchema>;

const Login = () => {
  const formMethods = useForm<LoginFormValues>({
    defaultValues: {},
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-3 p-6">
      <div className="col-start-2 bg-gray-50 rounded-lg shadow-xl mt-12">
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-full">
          <div className="w-full">
            <h1 className="mb-8 text-xl font-semibold text-gray-700 dark:text-gray-200">Log into Admin area</h1>
            <FormProvider {...formMethods}>
              <form onSubmit={formMethods.handleSubmit(handleLogin)}>
                <FormInput
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="jane.doe@email.com"
                  data-testid="input-email"
                  isRequired
                />
                <FormInput label="Password" name="password" type="password" data-testid="input-password" isRequired />
                <Button
                  text="Log in"
                  className="w-full justify-center mt-12"
                  loading={false}
                  data-testid="btn-submit"
                />
              </form>
            </FormProvider>

            <hr className="my-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(Login, { title: 'Login' });
