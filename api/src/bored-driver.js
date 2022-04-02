import axios from 'axios'

class Activity {
  constructor({ activity, accessibility, type, participants, price, link, key }) {
    this.activity = activity
	  this.accessibility = this.parseAccessibility(accessibility)
	  this.type = type
    this.participants = participants
    this.price = this.parsePrice(price)
    this.link = link
    this.key = key
  }

  parseAccessibility(accessibility) {
    if (accessibility <= 0.25) {
      return 'High'
    } else if (accessibility <= 0.75) {
      return 'Medium'
    } else {
      return 'Low'
    }
  }

  parsePrice(price) {
    if (price === 0) {
      return 'Free'
    } else if (price <= 0.5) {
      return 'Low'
    } else {
      return 'High'
    }
  }

  toJson() {
    return {
      activity: this.activity,
	    accessibility: this.accessibility,
	    type: this.type,
      participants: this.participants,
      price: this.price,
      n: this.n,
      link: this.link,
      key: this.key,
    }
  }
}

export class BoredDriver {
  constructor(http) {
    this.activityURL = 'http://www.boredapi.com/api/activity/'
    this.http = http
  }

  async getActivity(params) {
    const res = await this.http.get(this.activityURL, { params })
    return new Activity(res.data)
  }
}

export default new BoredDriver(axios)