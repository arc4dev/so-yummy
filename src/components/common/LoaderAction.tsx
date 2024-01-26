import { HashLoader } from 'react-spinners';

const LoaderAction = () => {
  return (
    <HashLoader
      color={`var(--color-white-2)`}
      cssOverride={{ margin: '0 auto' }}
      size="16px"
    />
  );
};

export default LoaderAction;
