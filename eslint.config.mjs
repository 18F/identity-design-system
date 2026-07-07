import { defineConfig } from "eslint/config";
import EslintPluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([{
    plugins: {
        "import": EslintPluginImport,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },
        ecmaVersion: "latest",
        parser: tseslint.parser,
        sourceType: "module",
    },

    rules: {
        "import/no-unresolved": ["error", {
            ignore: ["^@uswds/uswds/js/_?usa-[a-z-]+$"],
        }],

        "import/no-extraneous-dependencies": ["error", {
            devDependencies: ["test/**", "scripts/**"],
        }],

        "no-restricted-globals": "off",
    },
}]);
