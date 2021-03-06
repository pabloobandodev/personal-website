/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Theme } from 'lib/types'
import { useTheme } from 'emotion-theming'
import Meta from 'components/meta'
import Header from 'components/header'
import Footer from 'components/footer'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  *::selection {
    color: ${theme.white};
    background-color: ${theme.primary};
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${theme.body};
    background-color: ${theme.background};
  }
`

const innerContainer = css`
  max-width: 57rem;
  padding: 1rem 1rem;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme<Theme>()
  return (
    <div>
      <Meta />
      <Global styles={globalStyles(theme)} />
      <div css={innerContainer}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Page
