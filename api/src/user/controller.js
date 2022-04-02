class Controller{
  constructor(db) {
    this.db = db
  }

  async getMostRecentUser() {
    const res = await this.db.query(`
      SELECT 
        u.name, 
        a.name as accessibility,
        p.name as price
      FROM "user" u
      JOIN accessibility a
        ON a.id = u.accessibility_id
      JOIN price p
        ON p.id = u.price_id
      ORDER BY u.created_at DESC
      LIMIT 1
    `)
    if (res.length) {
      return res[0]
    } 
    return { name: '', accessibility: '', price: '' }
  }

  async createUser({ name, accessibility, price }) {
    const res = await this.db.query(`
      INSERT INTO "user" (name, accessibility_id, price_id) 
      VALUES (
        $1,
        (SELECT id FROM accessibility WHERE name = $2),
        (SELECT id FROM price WHERE name = $3)
      )
      RETURNING id;
    `, [name, accessibility, price])
    return { id: res[0].id, name, accessibility, price }
  }
}

export default Controller