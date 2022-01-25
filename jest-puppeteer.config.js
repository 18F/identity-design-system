process.env.JEST_PORT = process.env.JEST_PORT || '40410';

module.exports = {
  server: {
    command: `ruby -run -ehttpd ./dist -p${process.env.JEST_PORT}`,
    port: parseInt(process.env.JEST_PORT, 10),
  },
};
