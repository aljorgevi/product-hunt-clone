import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider
      Value={{
        firebase,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
