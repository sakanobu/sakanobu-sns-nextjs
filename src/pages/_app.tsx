import { AppProps } from 'next/app';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/jsx-sort-props */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
