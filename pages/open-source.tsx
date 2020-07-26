/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Link from 'next/link'
import Page from 'components/page'
import { main, text, link } from 'pages'
import { iconSpaceShift } from 'pages/uses'

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
  width: 48%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  text-align: center;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transition-duration: 0.3s;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
`
const iconIllustration = css`
  height: 12rem;
  width: auto;
  max-width: 98%;
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
          <Link href='/blog/easy-implementation'>
            <a css={option}>
              <h2 css={text}>Easy Implementation</h2>
              <img
                src='/images/easy.png'
                css={iconIllustration}
                alt='Easy way illustration'
              />
            </a>
          </Link>
          <Link href='/blog/explained-implementation'>
            <a css={option}>
              <h2 css={text}>Explained Implementation</h2>
              <img
                src='/images/hard.png'
                css={iconIllustration}
                alt='Easy way illustration'
              />
            </a>
          </Link>
        </section>
      </main>
      <img
        src='/images/spaceship.png'
        css={iconSpaceShift}
        alt='SpaceShip icon'
      />
    </Page>
  )
}

export default SourceCode
