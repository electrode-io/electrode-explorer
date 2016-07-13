/* @flow */
/* global SyntheticEvent:false */

type BaseFieldProps = {
  'data-automation-id'?: string;
  // Redux Form properties
  // http://erikras.github.io/redux-form/#/api/props?_k=j5oc9d
  active: boolean;
  checked: boolean;
  className: string;
  dirty: boolean;
  error: string;
  invalid: boolean;
  name: string;
  onBlur(eventOrValue:any): void;
  onChange(eventOrValue:any): void;
  onDragStart(): void;
  onDrop(): void;
  onFocus(): void;
  onUpdate: Function;
  pristine: boolean;
  touched: boolean;
  valid: boolean;
  value: boolean|string;
  visited: boolean;
};

export type Props = {
  icon?: any;
  label?: any;
  instructions?: string;
  placeholder?: string;
  defaultValue?: any;
  defaultChecked?: any;
  shouldDisplayError: (props:Object) => bool;
  shouldDisplayValid: (props:Object) => bool;
} & BaseFieldProps;

// https://github.com/insin/react-maskedinput
export type MaskedProps = {
  icon?: any;
  mask: string;
  onChange?: (event: SyntheticEvent) => any;
  label?: string;
  instructions?: string;
  placeholder?: string;
  shouldDisplayError: (props:Object) => bool;
  shouldDisplayValid: (props:Object) => bool;
  formatCharacters?: {
    [key:string]: ?{
      validate(char:string): boolean;
      format?: (char:string) => string;
    };
  };
  placeholderChar?: string;
  size?: number|string;
} & BaseFieldProps;

