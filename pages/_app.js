import React from 'react';
import { AnimatedDiv } from "../components";

import '../styles/globals.scss';
import '../styles/animate.css';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <AnimatedDiv />
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp;
