import { InputHTMLAttributes } from 'react';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  error: string | undefined;
  label: string;
  touched?: boolean;
  isForget?: boolean;
}
