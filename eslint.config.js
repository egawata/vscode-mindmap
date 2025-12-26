const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
    {
        ignores: ['dist/**', '**/*.d.ts']
    },
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': typescriptEslint
        },
        rules: {
            ...typescriptEslint.configs.recommended.rules,
            'curly': 'warn',
            'eqeqeq': 'warn',
            'no-throw-literal': 'warn'
        }
    }
];
