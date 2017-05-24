import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * login (api, { username, password }) {
  if (password === '') {
    // dispatch failure
    yield put(LoginActions.loginFailure('WRONG'))
  } else {
    const response = yield call(api.login, username, password)
    if (response.ok) {
      // dispatch successful logins
      yield put(LoginActions.loginSuccess(username))
    } else {
      yield put(LoginActions.loginFailure(response.problem))
    }
  }
}
