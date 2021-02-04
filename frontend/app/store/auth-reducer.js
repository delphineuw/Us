const initialState = { isLogged: false, fullName: null, image: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogged: true, fullName: action.payload.fullName, image: action.payload.image };

    case 'LOGOUT':
      return { ...state, isLogged: false, fullName: null, image: null };

    default:
      return state;
  }
};

export default reducer;
