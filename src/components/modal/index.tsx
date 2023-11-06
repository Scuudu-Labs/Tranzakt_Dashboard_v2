import { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  show: boolean;
  close: () => void;
};

function ModalWraper({ children, show, close }: Props) {
  // close the modal when clicking outside the modal.
  const modalRef = useRef<HTMLElement>();
  const modalClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalRef.current) {
      close();
    }
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);
  return (
    <div
      className={`container2 w-full`}
      ref={modalRef as React.RefObject<HTMLDivElement>}
      onClick={modalClose}
    >
      <main className="modal">{children}</main>
    </div>
  );
}

export default ModalWraper;
