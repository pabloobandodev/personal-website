/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'
import Link from 'next/link'
import Page from 'components/page'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { author } from 'lib/constants'

export const text = css`
  line-height: 1.7;
  letter-spacing: 1.2;
  margin: 0 0 1rem 0;
  padding: 0;
`
export const main = css`
  flex-grow: 1;
  padding: 3rem 2rem;
`
export const list = css`
  ${text};
  list-style-type: none;
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
  margin-top: 2rem;
  text-align: center;
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
  height: 6rem;
  width: auto;
  &:hover {
    cursor: pointer;
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }
`
const authorImage = css`
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  box-shadow: white 0px 0px 0px 3px, rgb(0, 0, 0, 0.2) 0px 3px 8px 3px;
  border-radius: 50%;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`

const Home: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main
        css={css`
          ${main};
          text-align: center;
        `}
      >
        <section>
          <img
            src='/images/profile.png'
            css={authorImage}
            alt='Profile image'
          />
          <h1 css={text}>Hi there, I'm {author?.name} 👋</h1>
          <p css={text}>{author?.description}</p>
          <p>I make applications web and mobiles 👨‍💻</p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={list}>
            {author?.hobbies?.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
          <p css={text}>
            <Link href='/uses'>
              <a css={link(theme)}>Here</a>
            </Link>{' '}
            are some of things I use daily.
          </p>
          <p css={text}>
            You can check out my blog ✍️ , or contact me to talk about your
            projects in{' '}
            <a
              css={link(theme)}
              href={author.socialMedia[2].url}
              target='_blank'
            >
              {author.socialMedia[2].name}
            </a>
          </p>
        </section>
        <section css={containerGift}>
          <Link href='/open-source'>
            <a css={link(theme)}>
              <img src='/images/gift.png' css={iconGift} alt='Gift icon' />
            </a>
          </Link>
        </section>
      </main>
    </Page>
  )
}

export default Home
