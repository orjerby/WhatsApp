module.exports = {
    "parser": "babel-eslint",
    //"extends": "airbnb",
    "extends": ["eslint:recommended",
    "plugin:react/recommended"],
    "parserOptions": {
    "ecmaFeatures": {
    "jsx": true,
    "modules": true
    }
    },
    "plugins": [
    "react",
    "jsx-a11y",
    "import"
    ],
    "rules": {
        "react/prop-types": 0
    }
};