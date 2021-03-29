// import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// }
// export const theme = extendTheme({ colors })
const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter, -apple-system,BlinkMacSystemFont`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
}
export default theme
