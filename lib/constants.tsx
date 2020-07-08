import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaDev,
} from 'react-icons/fa'
import { Author } from 'lib/types'

export const SITE_TITLE = 'Pablo Obando 🧙'
export const SITE_URL = 'https://pabloobando.dev/'
export const author: Author = {
  name: 'Pablo Obando',
  description: `I'm a software developer, a simple guy who enjoys programming and good beers 🍺`,
  hobbies: [
    '💚 Open Sourcer',
    '👩‍🔬 Science',
    '📜 History',
    '🦄 Chill Out',
    '😺 Smile',
    '🍻 More beers with good friends',
    '👨‍💻 More programming',
  ],
  socialMedia: [
    {
      name: 'twitter',
      url: 'https://www.twitter.com/pabloobandodev/',
      icon: <FaTwitter />,
    },
    {
      name: 'github',
      url: 'https://github.com/pabloobandodev',
      icon: <FaGithub />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pabloobandodev',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'stackoverflow',
      url: 'https://stackoverflow.com/story/pabloobandodev',
      icon: <FaStackOverflow />,
    },
    {
      name: 'fadev',
      url: 'https://dev.to/pabloobandodev',
      icon: <FaDev />,
    },
  ],
}
