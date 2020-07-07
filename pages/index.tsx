/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import Link from 'next/link'
import { FaGift } from 'react-icons/fa'
import Page from 'components/page'
import Footer from 'components/footer'
import { author } from 'lib/constants'

export const text = css`
  line-height: 1.7;
  letter-spacing: 1.2;
  font-size: 1.1em;
`

export const main = css`
  flex-grow: 1;
  padding: 3.5rem 2rem;
`

const list = css`
  ${text};
  padding: 0 1rem 2rem;
`

const link = css`
  ${text};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const containerGift = css`
  text-align: center;
  margin-top: 4rem;
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const iconGift = css`
  font-size: 5rem;
  &:hover {
    cursor: pointer;
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }
`

const Home: React.FC = () => {
  return (
    <Page>
      <main css={main}>
        <section>
          <h2 css={text}>Hey ✌️</h2>
          <p css={text}>
            My name is <strong>{author?.name}</strong>, {author?.description}
          </p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={list}>
            {author?.hobbies?.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
          <p css={text}>
            This site has it a part of the blog with all my thoughts, and my
            articles of software
          </p>
          <p css={text}>
            If you wanna talk about your{' '}
            <i>
              <small>(open/closed)</small>
            </i>{' '}
            projects or business, you can{' '}
            <Link href='/contact'>
              <a css={link}>
                <span>contact me!</span>
              </a>
            </Link>
          </p>
        </section>
        <section css={containerGift}>
          <Link href='/open-source'>
            <a css={link}>
              <FaGift css={iconGift} />
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default Home
