module.exports = {
    user: String(process.env.USER),
    password: String(process.env.PASSWORD),
    host: String(process.env.HOST),
    PORT: Number(process.env.PGPORT),
    database: String(process.env.DATABASE)
}