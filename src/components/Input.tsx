type Props = {
  inputType?: React.HTMLInputTypeAttribute;
  type: 'Email' | 'Password' | 'Name' | 'Newsletter';
};

const Input = ({ inputType = 'text', type }: Props) => {
  let placeholder = '';
  if (type === 'Newsletter') placeholder = 'Enter your email address';
  else placeholder = type;

  return <input type={inputType} placeholder={placeholder}></input>;
};

export default Input;
