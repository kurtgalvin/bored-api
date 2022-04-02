class Controller{
  constructor(db, boredDriver) {
    this.db = db
    this.boredDriver = boredDriver
  }

  async getLastUserPreferences() {
    const res = await this.db.query(`
      SELECT 
        a.min as minaccessibility,
        a.max as maxaccessibility,
        p.min as minprice,
        p.max as maxprice
      FROM "user" u
      JOIN accessibility a
        ON a.id = u.accessibility_id
      JOIN price p
        ON p.id = u.price_id
      ORDER BY u.created_at DESC
      LIMIT 1
    `)
    return res[0]
  }

  async getActivity() {
    const prefs = await this.getLastUserPreferences()
    return this.boredDriver.getActivity(prefs)
  }

  async getActivityOptions() {
    const res = await this.db.query(`
      SELECT 
        (
          SELECT array_agg(name ORDER BY sort_order) 
          FROM accessibility 
        ) as accessibility,
        (
          SELECT array_agg(name ORDER BY sort_order) 
          FROM price
        ) as price
    `)
    return res[0]
  }
}

export default Controller