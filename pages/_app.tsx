import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { Amplify } from 'aws-amplify';
// import outputs from '@/amplify_outputs.json';
// import '@aws-amplify/ui-react/styles.css';
// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';

// // configure the Amplify client library with the configuration generated by `ampx sandbox`
// Amplify.configure(outputs);

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default withAuthenticator(App);