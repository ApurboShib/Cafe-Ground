// If using CommonJS (Node.js default), ensure your environment supports require.
// If using ESM (type: "module" in package.json), use import statements as below:

import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
