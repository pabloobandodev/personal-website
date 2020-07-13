/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Page from 'components/page'
import Footer from 'components/footer'
import { main, text, list, link } from 'pages'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { author } from 'lib/constants'

const Contact: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main css={main}>
        <section>
          <h1>
            Let's talk with me about coding, open-closed projects and business
          </h1>
          <p css={text}>
            It will be a pleasure to meet you, and talk more about your projects
            and ideas more deeply and in a personal way, send me a message and I
            will answer you as soon as possible.
          </p>
        </section>
        <section>
          <ul css={list}>
            {author?.socialMedia?.map((media) => (
              <li key={media.name}>
                <a css={link(theme)} href={media.url} target='_blank'>
                  {media.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default Contact
