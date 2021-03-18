import React from "react";
import Layout from "@common/Layout/index";
import Navbar from "@common/Navbar/index";
import Welcome from "@sections/Welcome/index";
import Summary from "@sections/Summary/index";
import Footer from "@common/Footer/index";

export default function Home() {
  return (
   <Layout>
     <Navbar/>
     <Welcome/>
     <Summary/>
     <Footer/>
   </Layout>
  );
  
}
