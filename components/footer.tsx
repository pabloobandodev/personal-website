/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { author } from 'lib/constants'

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const hashtag = css`
  font-weight: bold;
`

const containerIcons = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const iconStyle = (theme: Theme) => css`
  color: ${theme.body};
  font-size: 1.5em;
  padding: 0 0.5rem;
  &:hover {
    color: ${theme.primary};
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
        {author.socialMedia.map(({ name, url, icon }) => (
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
