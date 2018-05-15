module.exports = {
    "extends":["eslint:recommended"],
    "parser": "babel-eslint",
    "rules":{
        "no-console":["error", {
            "allow": ["warn", "error", "info"]
        }]
    },
    "parser":"babel-eslint",
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