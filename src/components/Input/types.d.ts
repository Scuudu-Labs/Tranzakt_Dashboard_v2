import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  label: string;
  touched?: boolean;
}
