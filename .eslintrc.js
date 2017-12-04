module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            2,
            4
        ],
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            0
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            0
        ]
        
    }
};