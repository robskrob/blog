const LOAD_PAGE = 'modules/home/load-page';

export const loadPage = () => {
  return {
    type: LOAD_PAGE
  };
};

export default function home(state = {}, action) {
  switch(action.type) {
    case LOAD_PAGE:

      return Object.assign({}, state, {
        'message': 'Hello, Mr. Skrob!'
      });
    default:
      return state;
  }
}
