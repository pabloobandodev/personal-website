/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Page from 'components/page'
import Footer from 'components/footer'
import { useTheme } from 'emotion-theming'
import { Post, Theme } from 'lib/types'
import { main, text } from 'pages'
import { getAllPosts, getPost } from 'lib/datocms'
import { SITE_URL, SITE_TITLE } from 'lib/constants'

const title = css`
  line-height: 1.25;
  font-size: 2.3em;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`
const img = css`
  width: auto;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const article = (theme: Theme) => css`
  ${text};
  & img {
    ${img}
  }
  word-wrap: break-word;
  a {
    text-decoration: none;
    color: ${theme.primary};
  }
`

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <Head>
        <title key='title'>
          {post?.title} — {SITE_TITLE}
        </title>
        <meta property='og:title' content={post?.title} />
        <meta property='og:url' content={`${SITE_URL}${post?.slug}`} />
        <link rel='canonical' href={`${SITE_URL}/blog/${post?.slug}`} />
        <meta property='og:description' content={post?.excerpt} />
        <meta name='description' content={post?.excerpt} />
      </Head>
      <main css={main}>
        <article css={article(theme)}>
          <h1 css={title}>{post?.title}</h1>
          {post?.coverImage?.responsiveImage?.src && (
            <img
              src={post?.coverImage.responsiveImage.src}
              alt={`Post Image of ${title}`}
              css={css`
                ${img};
                max-height: 300px;
              `}
            />
          )}
          <div css={text} dangerouslySetInnerHTML={{ __html: post?.content }} />
        </article>
      </main>
      <Footer />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts?.map((post) => `/blog/${post?.slug}`),
    fallback: true,
  }
}

export default PostPage
