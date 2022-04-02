import { Pool } from 'pg'

export class DatabaseDriver {
  constructor(pool) {
    this.pool = pool
  }

  parseError({ code, detail }) {
    switch(code) {
      case '23505':
        return { code: 'unique_violation', detail }
      default:
        return { code, detail }
    }
  }

  async query(queryString, queryParams) {
    try {
      const res = await this.pool.query(queryString, queryParams)
      return res.rows
    } catch(err) {
      throw this.parseError(err)
    }
  }
}

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
})
export default new DatabaseDriver(pool)