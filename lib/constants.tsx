import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Author } from 'lib/types'

export const SITE_TITLE = 'Pablo Obando 🧙'
export const SITE_URL = 'https://pabloobando.dev/'
export const author: Author = {
  name: 'Pablo',
  description: `A software engineer who enjoys programming and good beers 🍻`,
  companies: [
    { url: 'https://oktara.com/', label: '🇺🇸 🇨🇷 Oktara' },
    { url: 'https://bananacode.co/', label: '🇺🇸 🇨🇷 🇮🇳 Bananacode' },
    { url: 'https://blockmatic.io/', label: '🌎 Blockmatic ' },
    { url: 'https://nw-ideas.com/', label: '🇩🇪 🇨🇷 Nw Ideas' },
  ],
  socialMedia: [
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/pabloobandodev/',
      icon: <FaTwitter />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pabloobandodev',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pabloobandodev',
      icon: <FaLinkedinIn />,
    },
  ],
}
