class Controller{
  constructor(db) {
    this.db = db
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