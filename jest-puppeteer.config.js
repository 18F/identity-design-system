module.exports = {
  server: {
    command: `./node_modules/.bin/serve --listen ${process.env.JEST_PORT} --no-clipboard ./dist`,
    port: parseInt(process.env.JEST_PORT, 10),
  },
};
