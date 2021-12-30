import { SelectOption } from '@/types/common';

export const FORM_ERRORS = {
  emailInvalid: 'The email address is invalid.',
  fieldRequired: 'This field is required.',
};

export const BAD_LOGIN_MESSAGE = 'The credential is invalid.';
export const NETWORK_ERROR_MESSAGE = 'Failed to processed the request.';
export const METHOD_NOT_ALLOWED_MESSAGE = 'Method not allowed for this route.';
export const RESOURCE_NOT_FOUND_MESSAGE = 'The resource not found.';

export const CATEGORY_CREATED_MESSAGE = 'The category created successfully.';
export const CATEGORY_DELETED_MESSAGE = 'The category deleted successfully.';
export const CATEGORY_UPDATED_MESSAGE = 'The category updated successfully.';

export const RESOURCE_CREATED_MESSAGE = 'The resource created successfully.';
export const RESOURCE_DELETED_MESSAGE = 'The resource deleted successfully.';
export const RESOURCE_UPDATED_MESSAGE = 'The resource updated successfully.';

export const CATEGORY_CHOICE_NOT_SELECTED = 'Please select a category to search into.';

export const REQUEST_CREATED_MESSAGE = 'The request created successfully.';
export const REQUEST_DELETED_MESSAGE = 'The request deleted successfully.';

export const QUERY_KEYS = {
  getCategories: 'getCategories',
  getResources: 'getResources',
  lookupResources: 'lookupResources',
  getRequests: 'getRequests',
};

export const DEFAULT_RESOURCE = { label: 'All', value: '' };

export const RESOURCE_TYPE_OPTIONS: SelectOption[] = [
  {
    label: 'Web page',
    value: 'WEBPAGE',
  },
  {
    label: 'Video',
    value: 'VIDEO',
  },
  {
    label: 'Picture',
    value: 'PICTURE',
  },
  {
    label: 'Plain Text',
    value: 'TEXT',
  },
  {
    label: 'Other',
    value: 'OTHER',
  },
];

export const REQUEST_STATUS_OPTIONS: SelectOption[] = [
  {
    label: 'None',
    value: '',
  },
  {
    label: 'Pending',
    value: 'PENDING',
  },
  {
    label: 'In progress',
    value: 'IN_PROGRESS',
  },
  {
    label: 'Done',
    value: 'DONE',
  },
  {
    label: 'Archived',
    value: 'ARCHIVED',
  },
];
