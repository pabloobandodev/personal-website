/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Page from 'components/page'
import Footer from 'components/footer'
import { main, text, link } from 'pages'

const Uses: React.FC = () => {
  return (
    <Page>
      <main css={main}>
        <section>
          <h3>Editor & Console</h3>
          <ul>
            <li>
              My favorite editor these days is{' '}
              <a href='https://code.visualstudio.com/'>VS Code</a> with the{' '}
              <a href='https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme'>
                Palenight Theme
              </a>
              . I do nearly all my coding in it.
            </li>
            <li>
              My Terminal is the great
              <a href='https://hyper.is/'>Hyper</a>. I use it together with zsh
              and the <b>hyper-whimsy</b> theme.
            </li>
            <li>
              I have a lot of custom stuff and aliases in{' '}
              <a href='https://github.com/pabloobandodev/.dotfiles'>
                my dotfiles
              </a>
              .
            </li>
          </ul>
        </section>
        <section>
          <h3>Programming</h3>
          <ul>
            <li>💛 JavaScript</li>
            <li>💙 React Js | Native</li>
            <li>💚 Node Js</li>
            <li>❤️ GraphQL</li>
            <li>🖤 Next Js</li>
            <li>💜 Gatsby</li>
          </ul>
        </section>
        <section>
          <h3>Apps & Productivity</h3>
          <ul>
            <li>
              I use <a href='https://todoist.com/app'>Todoist</a> to keep track
              of my tasks and daily chores.
            </li>
            <li>
              For my writing and taking quick notes I use{' '}
              <a href='https://ia.net/writer'>iA Writer</a>.
            </li>
            <li>
              <a href='https://notion.so'>Notion</a> is another note-taking and
              journaling tool I don't want to live without.
            </li>
            <li>
              I use <a href='https://www.spectacleapp.com/'>Spectacle</a> as my
              window manager.
            </li>
            <li>
              <a href='https://www.macbartender.com/'>Bartender</a> keeps my OSX
              menu bar clean and organized.
            </li>
            <li>
              <a href='https://www.dropbox.com'>Dropbox</a> helps me to sync and
              backup all my important files across devices.
            </li>
            <li>
              I love{' '}
              <a href='https://docs.docker.com/docker-for-mac/'>Docker</a>{' '}
              because it helps me to keep my dev machine clean.
            </li>
            <li>
              Sometimes I use <a href='https://brew.sh/'>Homebrew</a> to install
              missing packages on OSX.
            </li>
          </ul>
        </section>
        <section>
          <h3>Desk Setup</h3>
          <ul>
            <li>
              My main desk is a{' '}
              <a href='https://www.inwerk-bueromoebel.de/buerotische/hoehenverstellbare-schreibtische/steh-sitz-schreibtisch-masterlift2-sw-chrom-bm56947.html'>
                Masterlift 2
              </a>{' '}
              adjustable standing desk.
            </li>
            <li>
              My office chair is a used{' '}
              <a href='https://www.designcabinet.de/herman-miller-aeron-chair-groesse-b-655'>
                Hermann Miller Aeron
              </a>{' '}
              in size B.
            </li>
            <li>
              Since this year I am using a Macbook pro 16". It is the best
              computer I ever owned.
            </li>
            <li>
              My monitor is the{' '}
              <a href='hhttps://www.amazon.com/LG-32UD59-B-32-Inch-LED-Lit-FreeSync/dp/B0748KJY4Q'>
                LG 32UD59-B
              </a>{' '}
              with a 2560 x 1440 resolution.
            </li>
            <li>
              I use the{' '}
              <a href='https://www.therooststand.com/'>roost laptop stand</a>{' '}
              for my Laptop at home and when I travel.
            </li>
            <li>I use the Apple magic mouse and magic keyboard.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default Uses
