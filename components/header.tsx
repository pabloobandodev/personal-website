/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useThemeMode } from 'context/theme-context'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import ActiveLink from 'components/active-link'

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const options = css`
  display: flex;
  align-items: center;
`
const logo = css`
  width: 8rem;
  height: 8rem;
  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`
const button = css`
  background-color: transparent;
  border: none;
  outline: none;
`
const themeIcon = css`
  width: 2rem;
  height: 2rem;
  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`

const Header: React.FC = () => {
  const [isDark, toggle] = useThemeMode()
  const theme = useTheme<Theme>()
  return (
    <header>
      <nav css={container}>
        <ActiveLink href='/'>
          <img src='/images/logo.png' css={logo} alt='Profile image' />
        </ActiveLink>
        <div css={options}>
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/blog'>blog</ActiveLink>
          <button onClick={toggle} aria-label='Switch mode' css={button}>
            {isDark ? (
              <img src='/images/sun.png' alt='Sun icon' css={themeIcon} />
            ) : (
              <img src='/images/moon.png' alt='Moon icon' css={themeIcon} />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
