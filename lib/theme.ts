import { Theme } from 'lib/types'

const white = '#ffffff'
const black = '#131415'
const mirage = '#151f2b'

const themeLight = {
  background: white,
  body: black,
  primary: '#9e0e63',
  white: white,
  contrast: mirage,
}
const themeDark = {
  background: mirage,
  body: white,
  primary: '#ff85cc',
  white: white,
  contrast: white,
}

export default (mode: string): Theme =>
  mode === 'dark' ? themeDark : themeLight
