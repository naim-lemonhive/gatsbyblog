import React from 'react';
import { SearchModalContextProvider } from '../context/searchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <SearchModalContextProvider>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </SearchModalContextProvider>
);
