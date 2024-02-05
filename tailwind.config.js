module.exports = {
  content: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}