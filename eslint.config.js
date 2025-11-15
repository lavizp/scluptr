//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      files: ['**/*.{js,jsx,ts,tsx}'],
      'sort-imports': 'off',
      'import/order': 'off',
    },
  },
]
