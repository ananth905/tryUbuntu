/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.EMBER_ENV === 'production',
    content: [
      './app/**/*.hbs',
      './app/**/*.js',
      // Add any other files that contain HTML or JavaScript here
    ],
  },
  // Other Tailwind CSS configuration...
};
