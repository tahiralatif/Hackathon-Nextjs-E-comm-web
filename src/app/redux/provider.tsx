'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
