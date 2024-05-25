/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xl: ['1.25rem', '1.875rem'],
      lg: ['1.125rem', '1.625rem'],
      md: ['1rem', '1.5'],
      sm: ['0.875rem', '1.25rem'],
      xs: ['0.75rem', '1rem'],
      xxs: ['0.625rem', '0.75rem'],
      'heading-1': [
        '3.5rem',
        {
          lineHeight: '3.875rem',
          fontWeight: '600',
        },
      ],
      'heading-2': [
        '3rem',
        {
          lineHeight: '3.25rem',
          fontWeight: '600',
        },
      ],
      'heading-3': [
        '2rem',
        {
          lineHeight: '2.375rem',
          fontWeight: '600',
        },
      ],
      'heading-4': [
        '1.75rem',
        {
          lineHeight: '2.125rem',
          fontWeight: '600',
        },
      ],
      'heading-5': [
        '1.5rem',
        {
          lineHeight: '1.875rem',
          fontWeight: '600',
        },
      ],
      'heading-6': [
        '1.125rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      boxShadow: {
        custom: '0px 4px 8px rgba(71, 85, 105, 0.2)',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
