import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';

type IProps = { children: React.ReactNode };

export function Providers({ children }: IProps) {
  return <Provider store={store}>
       <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    {children}</Provider>;
}
