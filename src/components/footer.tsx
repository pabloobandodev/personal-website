/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import config from 'lib/config'

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const hashtag = css`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

const containerIcons = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const iconStyle = (theme: Theme) => css`
  color: ${theme.body};
  font-size: 2em;
  margin-left: 2rem;
  &:hover {
    color: #f628a0;
    transform: scale(1.3);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`

const Footer: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <footer css={container}>
      <p css={hashtag}>#blacklivesmatter ✊🏾</p>
      <div css={containerIcons}>
        {config.social.map(({ name, url, icon }) => (
          <a
            key={url}
            href={url}
            css={iconStyle(theme)}
            target='_blank'
            aria-label={name}
            rel='noopener'
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
