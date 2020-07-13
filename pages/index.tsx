/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import Link from 'next/link'
import { FaGift } from 'react-icons/fa'
import Page from 'components/page'
import Footer from 'components/footer'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
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

export const list = css`
  ${text};
  padding: 0 1rem 2rem;
`

export const link = (theme: Theme) => css`
  ${text};
  text-decoration: none;
  color: ${theme.primary};
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
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main css={main}>
        <section>
          <h1 css={text}>
            Hey ✌, my name is <strong>{author?.name}</strong>
          </h1>
          <p css={text}>{author?.description}</p>
          <p css={text}>
            I make web and mobile applications, both the front end and the back
            end,{' '}
            <Link href='/uses'>
              <a css={link(theme)}>here</a>
            </Link>{' '}
            are some of things I use daily.
          </p>
          <p css={text}></p>
          <h3>Companies i have worked with</h3>
          <ul css={list}>
            {author?.companies?.map((company) => (
              <li key={company.label}>
                <a css={link(theme)} href={company.url} target='_blank'>
                  {company.label}
                </a>
              </li>
            ))}
          </ul>
          <h3>Cool things that I enjoy</h3>
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
              <a css={link(theme)}>contact me!</a>
            </Link>
          </p>
        </section>
        <section css={containerGift}>
          <Link href='/open-source'>
            <a css={link(theme)}>
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
