const initialState = { isLogged: false, fullName: null, image: null, city: null, country: null, birthday: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        fullName: action.payload.fullName,
        image: action.payload.image,
        city: action.payload.city,
        country: action.payload.country,
        birthday: action.payload.birthday
      };

    case 'LOGOUT':
      return { ...state, isLogged: false, fullName: null, image: null, city: null, country: null, birthday: null };

    default:
      return state;
  }
};

export default reducer;
