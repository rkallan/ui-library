module.exports = {
    server: {
        command: "start-storybook -p 9009 --quiet --ci",
        port: 9009,
        launchTimeout: 50000,
        usePortAction: "ignore",
    },
};
