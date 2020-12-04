const STATE = {}

export default function dataApi (state = STATE, action) {
  const { type, payload } = action
  switch (type) {
    case 'USER_LOGIN':
      return payload
    case 'WALLET':
      return payload
    case 'CLEAR':
      return payload
    default:
      return state
  }
}
