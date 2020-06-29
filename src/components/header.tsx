/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FaLightbulb } from 'react-icons/fa'
import ActiveLink from './active-link'
import { useThemeMode } from 'context/theme-context'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'

const logo = css`
  width: 7rem;
  height: 7rem;
  transition-duration: 0.8s;
  transition-property: transform;
  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`

const themeIcon = (theme: Theme) => css`
  background-color: transparent;
  font-size: 1.1rem;
  border: none;
  text-align: center;
  color: ${theme.contrast};
`

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1rem;
`
const options = css`
  display: flex;
  align-items: center;
`

const Header: React.FC = () => {
  const [, toggle] = useThemeMode()
  const theme = useTheme<Theme>()
  return (
    <header>
      <nav css={container}>
        <ActiveLink href='/'>
          <img src='/images/profile.png' css={logo} alt='Profile image' />
        </ActiveLink>
        <div css={options}>
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/blog'>blog</ActiveLink>
          <button
            onClick={toggle}
            css={themeIcon(theme)}
            aria-label='Switch mode'
          >
            <FaLightbulb />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
