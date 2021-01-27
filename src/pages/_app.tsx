import '../styles/globals.css';
import {AppProps} from 'next/app';
import 'normalize.css';
import Navbar from '../components/Navbar';
import * as React from 'react';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
