/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ActiveLink from './active-link'

export default function Header() {
  return (
    <header>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <ActiveLink href='/'>
          <div
            css={css`
              width: 120px;
              height: 120px;
              background-color: #30303070;
              border-radius: 60px;
              &:hover {
                cursor: pointer;
              }
            `}
          />
        </ActiveLink>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/posts'>posts</ActiveLink>
          <div
            css={css`
              width: 30px;
              height: 30px;
              background-color: #30303070;
              border-radius: 15px;
            `}
          />
        </div>
      </nav>
    </header>
  )
}
