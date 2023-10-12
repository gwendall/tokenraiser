import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import Layout from '~/components/Layout';
import '~/styles/globals.css';
 
const queryClient = new QueryClient();

export default function SaveXApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <Layout host={ pageProps.host }>
        {/* @ts-ignore */}
        <Component { ...pageProps } />
      </Layout>
    </QueryClientProvider>
  );
}