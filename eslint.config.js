import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
  // Настройка файлов, к которым будут применяться правила
  {
    files: ['**/*.{ts,mts,tsx,vue}'], // Обрабатываемые файлы
    rules: {
      // Применяем базовые правила Vue
      ...pluginVue.configs['essential'].rules,
      // Применяем правила TypeScript
      ...vueTsEslintConfig().rules,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest', // Поддержка современного JavaScript
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      parser: '@typescript-eslint/parser', // Используем парсер TypeScript
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': vueTsEslintConfig.parser,
    },
    settings: {
      // Настройки Vue для лучшего распознавания файлов
      'vue/setup-compiler-macros': true,
    },
  },

  // Отключение правил, конфликтующих с форматированием Prettier
  prettierConfig,

  // Игнорируемые файлы и папки
  {
    ignores: [
      '**/dist/**', // Скомпилированные файлы
      '**/dist-ssr/**', // Скомпилированные SSR-файлы
      '**/coverage/**', // Папка с отчетами покрытия тестов
      '**/node_modules/**', // Зависимости
    ],
  },
]
