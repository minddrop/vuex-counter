module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  plugins: ["vue"],
  rules: {
    semi: [2, "never"],
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "single"]
  }
}
