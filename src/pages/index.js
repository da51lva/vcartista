import React from 'react'
import Nav from '@organisms/Nav'
import Welcome from '@sections/Welcome/index'
import Summary from '@sections/Summary'
import Contact from '@sections/Contact'
import Footer from '@organisms/Footer'
import { css, ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Welcome />
      <Summary />
      <Contact />
      <Footer />
    </Layout>
  )

  function Layout({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}
