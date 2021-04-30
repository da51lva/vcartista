import React from 'react'
import Nav from '@organisms/Nav'
import Welcome from '@sections/Welcome/index'
import Summary from '@sections/Summary'
import Footer from '@organisms/Footer'
import { ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Welcome />
      <Summary />
      <Footer />
    </Layout>
  )

  function Layout({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}
