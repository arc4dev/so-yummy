import { PulseLoader } from 'react-spinners';

const Loader = () => {
  return (
    <PulseLoader
      color={`var(--color-action)`}
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
      speedMultiplier={0.8}
    />
  );
};

export default Loader;
