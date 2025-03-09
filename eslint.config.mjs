import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 禁用所有常见的 ESLint 规则
      "no-unused-vars": "off",                   // 禁用未使用变量的检查
      "react/display-name": "off",               // 禁用 react 组件 display-name 检查
      "@typescript-eslint/no-unused-vars": "off", // 禁用 TypeScript 未使用变量的检查
      "@typescript-eslint/no-explicit-any": "off", // 禁用 any 类型警告
      "@typescript-eslint/no-unused-expressions": "off", // 禁用未使用表达式的警告
      "prefer-const": "off",                    // 禁用 prefer-const 规则
      "react/prop-types": "off",                // 禁用 prop-types 的检查
      "no-console": "off",                      // 禁用 console 的警告
      "no-debugger": "off",                     // 禁用 debugger 的警告
      "react/jsx-no-undef": "off",              // 禁用 JSX 中未定义变量的警告
      // 如果你想禁用更多规则，可以继续添加
    },
  },
];

export default eslintConfig;
