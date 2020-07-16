import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Author } from 'lib/types'

export const SITE_TITLE = 'Pablo Obando 🧙'
export const SITE_URL = 'https://pabloobando.dev/'
export const author: Author = {
<<<<<<< HEAD
  name: 'Pablo Obando',
  description: `I'm a software engineer who enjoys programming and good beers 🍺`,
  hobbies: ['💚 Open Sourcer', '👩‍🔬 Science', '📜 History', '🦄 Chill Out'],
  companies: [
    { url: 'https://oktara.com/', label: '🇺🇸 🇨🇷 Oktara' },
    { url: 'https://bananacode.co/', label: '🇺🇸 🇨🇷 🇮🇳 Bananacode' },
    { url: 'https://blockmatic.io/', label: '🌎 Blockmatic ' },
    { url: 'https://nw-ideas.com/', label: '🇩🇪 🇨🇷 Nw Ideas' },
  ],
=======
  name: 'Pablo',
  description: `A software engineer who enjoys programming and good beers 🍻`,
  hobbies: ['💚 Open Sourcer', '👩‍🔬 Science', '📜 History', '🦄 Chill Out'],
>>>>>>> center-design
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
