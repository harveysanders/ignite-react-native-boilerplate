export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json')
    const skellockData = require('../Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  },
  login: (username, password) => {
    //
    return {
      ok: true,
      data: {
        access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2dvbnRvLmNvbSIsImF1ZCI6Im5vZGVqcy1qd3QtYXV0aCIsImV4cCI6MTQ5NTY2MTg5Miwic2NvcGUiOiJmdWxsX2FjY2VzcyIsInN1YiI6ImxhbGFsYW5kfGdvbnRvIiwianRpIjoiMHF0QkpwWGJaeUxsWGVNbSIsImFsZyI6IkhTMjU2IiwiaWF0IjoxNDk1NjU4MjkyfQ.cWA-vvg6a5hD-V-MZHq7Y1zWpC-G_VxXahOlSw4zUwU',
        id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyZWFjdG5hdGl2ZUBpbmZpbml0ZS5yZWQiLCJpYXQiOjE0OTU2NTgyOTIsImV4cCI6MTQ5NTY3NjI5Mn0.RtMvispkwlMxiKQ4QCRyGLD6E9uC8UGWwm4ezJN4G1c'
      }
    }
  }
}
