module.exports = {
  mode: 'jit',
  purge: [
    `~/components/**/*.{vue,js}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/plugins/**/*.{js,ts}`,
    `~~/nuxt.config.{js,ts}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#333333',
      white: '#fff',

      primary: '#88B44E',
      'primary-light': '#C5FF79',
      gray: {
        100: '#E5E5E5', // Lightest
        200: '#727272',
        300: '#79797C',
        400: '#A1A6AF',
        500: '#FAFAFA',
        600: '#F2F2F2',
        46: '#757575',
        700: '#595959',
        f6: '#f6f6f6',
      },

      green: {
        400: '#68d391',
      },

      blue: {
        400: '#143369',
      },
    },
    fontSize: {
      14: ['14px'],
      16: ['16px'],
      18: ['18px'],
      20: ['20px'],
      24: ['24px'],
      48: ['48px'],
      72: ['72px'],
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
