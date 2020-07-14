/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FaLightbulb } from 'react-icons/fa'
import { useThemeMode } from 'context/theme-context'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import ActiveLink from 'components/active-link'

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
`
const options = css`
  display: flex;
  align-items: center;
`

const logo = css`
  width: 7rem;
  height: 7rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`

const Header: React.FC = () => {
  const [, toggle] = useThemeMode()
  const theme = useTheme<Theme>()
  return (
    <header>
      <nav css={container}>
        <ActiveLink href='/'>
          <img src='/images/logo.png' css={logo} alt='Profile image' />
        </ActiveLink>
        <div css={options}>
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
