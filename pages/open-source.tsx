/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Link from 'next/link'
import Page from 'components/page'
import Footer from 'components/footer'
import { main, text, link } from 'pages'

const containerOptions = css`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

const option = css`
  width: 20rem;
  height: 14rem;
  margin-top: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  text-align: center;
  padding: 2rem;
  &:hover {
    cursor: pointer;
    transition-duration: 0.3s;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
  }
`

const SourceCode: React.FC = () => {
  return (
    <Page>
      <main css={main}>
        <section>
          <h1 css={text}>Do you like my website? ❣️</h1>
          <p css={text}>
            I decided to make this project open source, therefore if you need a
            personal website you can use it 💚{' '}
            <a
              href='https://github.com/pabloobandodev/personal-website'
              css={link}
            >
              This is the repository! 👀
            </a>
          </p>
          <p css={text}>
            I did two ways explaining how to use the project, and do a deploy
            with your data.
          </p>
          <p css={text}>
            At the end of this tutorial, you will have done a deploy, you will
            have your website with its information online and the possibility of
            creating new posts for the blog area
          </p>
          <p css={text}>So get to work 🚀</p>
        </section>
        <section css={containerOptions}>
          <Link href='/posts/easy-implementation'>
            <a css={option}>
              <h2 css={text}>Easy Implementation</h2>
            </a>
          </Link>
          <Link href='/posts/explained-implementation'>
            <a css={option}>
              <h2 css={text}>Explained Implementation</h2>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default SourceCode
