import React from "react";
import Navbar from "@common/Navbar/index";
import Welcome from "@sections/Welcome/index";
import Summary from "@sections/Summary/index";
import Footer from "@common/Footer/index";
import { ThemeProvider } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui/index';

export default function Home() {
  return (
   <Layout>
     <Navbar/>
     <Welcome/>
     <Summary/>
     <Footer/>
   </Layout>
  );


 function Layout( {children} ){
   return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
   );
 }



}
