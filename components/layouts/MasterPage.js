import React, { Fragment } from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const MasterPage = (props) => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossorigin="anonymous"
        />
        <title>Product Hunt firebase y next</title>
      </Head>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default MasterPage;
