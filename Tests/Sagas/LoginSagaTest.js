import test from 'ava'
import { put } from 'redux-saga/effects'
import { login } from '../../App/Sagas/LoginSagas'
import LoginActions from '../../App/Redux/LoginRedux'
import FixtureAPI from '../../App/Services/FixtureApi'

const stepper = (fn) => (mock) => fn.next(mock).value
// TODO fixed test
test('success', (t) => {
  const mock = { username: 'a', password: 'b' }
  const step = stepper(login(FixtureAPI, mock))
  const response = FixtureAPI.login(mock.username, mock.password)
  t.deepEqual(step(response), put(LoginActions.loginSuccess(mock.username)))
})

test('failure', (t) => {
  const mock = { username: '', password: '' }
  const step = stepper(login(FixtureAPI, mock))

  t.deepEqual(step(), put(LoginActions.loginFailure('WRONG')))
})
