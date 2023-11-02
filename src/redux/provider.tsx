import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { antdTheme } from '../theme/antd.theme';

type IProps = { children: React.ReactNode };

export function Providers({ children }: IProps) {
  return (
    <Provider store={store}>
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
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </Provider>
  );
}
