/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        serif: 'var(--font-serif)',
      },
      colors: {
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        surface2: 'var(--c-surface2)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        muted2: 'var(--c-muted2)',
        accent: 'var(--c-accent)',
        'accent-soft': 'var(--c-accent-soft)',
        accent2: 'var(--c-accent2)',
        line: 'var(--c-line)',
        green: 'var(--c-green)',
        'green-deep': 'var(--c-green-deep)',
        pine: 'var(--c-pine)',
        sage: 'var(--c-sage)',
        mint: 'var(--c-mint)',
      },
      borderRadius: {
        theme: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
