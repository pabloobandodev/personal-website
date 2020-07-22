/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Page from 'components/page'
import Footer from 'components/footer'
import { main, text, link } from 'pages'

const Uses: React.FC = () => {
  return (
    <Page>
      <main
        css={css`
          ${main}
        `}
      >
        <section css={text}>
          <h3 css={text}>Programming 👨‍💻</h3>
          <ul>
            <li>💛 JavaScript</li>
            <li>💙 React Js | Native</li>
            <li>💚 Node Js</li>
            <li>❤️ GraphQL</li>
            <li>🖤 Next Js</li>
            <li>💜 Gatsby</li>
            <li>🧡 Git</li>
          </ul>
        </section>
        <section css={text}>
          <h3>Editor & Console 🔨</h3>
          <ul>
            <li>
              My favorite editor these days is{' '}
              <a
                href='https://code.visualstudio.com/'
                target='_blank'
                css={link}
              >
                VS Code
              </a>{' '}
              with the{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme'
                target='_blank'
                css={link}
              >
                Palenight Theme
              </a>
              . I do all my coding in it.
            </li>
            <li>
              My Terminal is the great{' '}
              <a href='https://hyper.is/' target='_blank' css={link}>
                Hyper
              </a>
              . I use it together with zsh and the <b>hyper-whimsy</b> theme.
            </li>
            <li>
              I have a lot of custom stuff and aliases in{' '}
              <a
                href='https://github.com/pabloobandodev/.dotfiles'
                target='_blank'
                css={link}
              >
                my dotfiles
              </a>
            </li>
          </ul>
        </section>
        <section css={text}>
          <h3>Apps & Productivity 📊</h3>
          <ul>
            <li>
              I use{' '}
              <a href='https://todoist.com/app' target='_blank' css={link}>
                Todoist
              </a>{' '}
              to keep track of my tasks and daily chores.
            </li>
            <li>
              I use{' '}
              <a href='https://slack.com/' target='_blank' css={link}>
                slack
              </a>{' '}
              always to communicate with my colleagues
            </li>
            <li>
              <a href='https://notion.so' target='_blank' css={link}>
                Notion
              </a>{' '}
              is another note-taking and journaling tool
            </li>
            <li>
              <a href='https://www.icloud.com/' target='_blank' css={link}>
                iCloud
              </a>{' '}
              helps me to sync and backup all my important files across devices
              I don't want to live without.
            </li>
            <li>
              I love{' '}
              <a
                href='https://macpaw.com/es/cleanmymac'
                target='_blank'
                css={link}
              >
                CleanMyMac X
              </a>{' '}
              because it helps me to keep my machine clean.
            </li>
            <li>
              Sometimes I use{' '}
              <a href='https://yarnpkg.com/' target='_blank' css={link}>
                Homebrew
              </a>{' '}
              to install missing packages on OSX.
            </li>
            <li>
              I use{' '}
              <a href='https://brew.sh/' target='_blank' css={link}>
                yarn
              </a>{' '}
              as my package manager.
            </li>
          </ul>
        </section>
        <section css={text}>
          <h3>Desk Setup 🖥️</h3>
          <ul>
            <li>
              My laptop is a{' '}
              <a
                href='https://www.amazon.com/Apple-MacBook-16-Inch-Storage-2-6GHz/dp/B081FZV45H/'
                target='_blank'
                css={link}
              >
                Macbook pro 16"
              </a>
            </li>
            <li>
              My monitor is the{' '}
              <a
                href='https://www.amazon.com/Dell-U2717D-UltraSharp-InfinityEdge-Widescreen/dp/B01D402Z28'
                target='_blank'
                css={link}
              >
                Dell U2717D IPS 27" UltraSharp
              </a>{' '}
              with a 2560 x 1440 at 60 Hz
            </li>
            <li>
              I use the{' '}
              <a
                href='https://www.amazon.com/Nulaxy-ergon%C3%B3mico-ordenador-port%C3%A1til-plateado/dp/B077B9W343'
                target='_blank'
                css={link}
              >
                nulaxy laptop stand
              </a>{' '}
              for my Laptop
            </li>
            <li>
              I use the{' '}
              <a
                href='https://www.amazon.com/Apple-Magic-Mouse-Wireless-Rechargable/dp/B07BR94PPD/'
                target='_blank'
                css={link}
              >
                apple magic mouse 2
              </a>
            </li>
            <li>
              I use the{' '}
              <a
                href='https://www.amazon.com/Keychron-Bluetooth-Mechanical-Keyboard-Wireless-Keyboard/dp/B07QBPCW4J/'
                target='_blank'
                css={link}
              >
                keychron K2
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default Uses
