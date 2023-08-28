module.exports = {
  HOST: "localhost",
  USER: "sa",
  PASSWORD: "0000qqqq@Q",
  DB: "MES",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
