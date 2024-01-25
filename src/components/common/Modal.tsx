import ReactModal from 'react-modal';

type Props = {
  children: React.ReactNode;
} & ReactModal.Props;

const Modal = ({ children, ...props }: Props) => {
  return (
    <ReactModal
      appElement={document.getElementById('root')!}
      style={{
        overlay: {
          position: 'fixed',
          inset: 0,
          zIndex: 10,
          width: '100dvw',
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'none',
        },
      }}
      {...props}>
      {children}
    </ReactModal>
  );
};

export default Modal;
