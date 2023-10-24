import { store } from './store';
import { Provider } from 'react-redux';

type IProps = { children: React.ReactNode };

export function Providers({ children }: IProps) {
  return <Provider store={store}>{children}</Provider>;
}
