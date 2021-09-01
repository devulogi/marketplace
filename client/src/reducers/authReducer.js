const INITIAL_STATE = {
  name: 'robert',
  role: 'fullstack developer',
};

export default function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case 'USER_LOGGED_IN':
      return { ...state, ...payload };
    case 'USER_LOGGED_OUT':
      return payload;
    default:
      return state;
  }
}
