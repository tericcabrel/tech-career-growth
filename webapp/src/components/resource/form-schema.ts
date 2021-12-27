import * as yup from 'yup';

import { FORM_ERRORS } from '@/utils/constants';

export const resourceFormSchema = yup.object().shape({
  link: yup.string().required(FORM_ERRORS.fieldRequired),
  name: yup.string().required(FORM_ERRORS.fieldRequired),
  type: yup.object().required(FORM_ERRORS.fieldRequired),
  category: yup.object().required(FORM_ERRORS.fieldRequired),
  description: yup.string().nullable(),
});

export type ResourceFormValues = yup.InferType<typeof resourceFormSchema>;
