const tasks = (arr) => arr.join(" && ");

module.exports = {
    hooks: {
        "pre-commit": tasks(["npm run format", "npm run lint"]),
        "pre-push": tasks(["npm run format", "npm run lint", "npm run test:huskey"]),
        "commit-msg": "echo $HUSKY_GIT_PARAMS",
    },
};
