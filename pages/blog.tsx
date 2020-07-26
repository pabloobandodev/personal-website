/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useTheme } from 'emotion-theming'
import Page from 'components/page'
import Date from 'components/date'
import { main, text } from 'pages'
import { Post, Theme } from 'lib/types'
import { getAllPosts } from 'lib/datocms'

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`
const listElement = css`
  margin: 0 0 4rem;
  .separator {
    height: 5px;
    width: 100%;
    margin-top: 2rem;
    background-image: linear-gradient(
      to right,
      #73dbc4 0%,
      #c40876 80%,
      #73dbc4 100%
    );
  }
`
const titleElement = (theme: Theme) => css`
  line-height: 1.25;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${theme.primary};
  }
`

const Blog: React.FC<{ allPosts: Post[] }> = ({ allPosts }) => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main css={main}>
        <section>
          <ul css={list}>
            {allPosts?.map(({ title, excerpt, date, slug, coverImage }) => (
              <li css={listElement} key={slug}>
                <Link href='/blog/[slug]' as={`/blog/${slug}`}>
                  <a css={titleElement(theme)}>
                    <h2>{title}</h2>
                  </a>
                </Link>
                <p css={text}>{excerpt}</p>
                <small>
                  <Date dateString={date} />
                </small>
                <div className='separator' />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}

export default Blog
