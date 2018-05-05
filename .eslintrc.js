module.exports = {
    "extends":["eslint:recommended"],
    "parser": "babel-eslint",
    "rules":{
        "no-console":["error", {
            "allow": ["warn", "error", "info"]
        }]
    },
    "perserOptions":{
        "ecmaVersion":6,
        "sourceType":"script"
    },
    "globals":{
        "window":true
    },
    "env":{
        "node":true,
        "es6":true,
        "mocha":true
    }
};