import '../styles/globals.css';
import {AppProps} from 'next/app';
import 'normalize.css';
import Navbar from '../components/Navbar';
import * as React from 'react';
import {MemberProvider} from "../contexts/MemberContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <MemberProvider>
      <Navbar />
      <Component {...pageProps} />
    </MemberProvider>
  );
}

export default MyApp;
