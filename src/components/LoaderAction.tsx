import { HashLoader } from 'react-spinners';

const LoaderAction = () => {
  return (
    <HashLoader
      color={`var(--color-action)`}
      cssOverride={{ margin: '0 auto' }}
      size="30px"
    />
  );
};

export default LoaderAction;
