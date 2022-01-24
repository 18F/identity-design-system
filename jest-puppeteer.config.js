module.exports = {
  server: {
    command: `python -m http.server ${process.env.JEST_PORT} --directory ./dist`,
    port: parseInt(process.env.JEST_PORT, 10),
  },
};
