type Props = {
  inputType?: React.HTMLInputTypeAttribute;
  type: 'email' | 'password' | 'name' | 'newsletter';
  placeholder?: string;
};

const Input = ({ inputType = 'text', placeholder = '' }: Props) => {
  // determine correct icon for input type

  return <input type={inputType} placeholder={placeholder}></input>;
};

export default Input;
