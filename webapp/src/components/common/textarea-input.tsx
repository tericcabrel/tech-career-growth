import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { getInputErrorMessage } from '@/utils/forms';

type Props = {
  label: string;
  isRequired?: boolean;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextAreaInput = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, className, isRequired, ...inputProps } = props;
  const errorMessage = getInputErrorMessage(errors, inputProps.name);

  const inputClasses = classNames(
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50',
    className,
  );

  return (
    <label className="block text-sm mb-6">
      <span className="font-bold text-gray-700 dark:text-gray-400">
        {label}
        {isRequired ? '*' : ''}
      </span>
      <textarea
        className={inputClasses}
        rows={4}
        spellCheck={false}
        {...inputProps}
        {...(inputProps.name ? register(inputProps.name) : {})}
      />
      {errorMessage && <span className="text-xs text-red-600 dark:text-red-400">{errorMessage}</span>}
    </label>
  );
};

export default TextAreaInput;
