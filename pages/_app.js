import { Children } from 'react';
import Layout from '../comps/Layout';
import Navbar from '../comps/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<Layout> 
  <Component {...pageProps} />
</Layout> 
); 
}

export default MyApp
