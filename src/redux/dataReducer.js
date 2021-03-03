const ADD_DATA = 'ADD--DATA';
const initialState = {
  tablesData: [
    {
      id: 1,
      title: 'Test',
      email: 'ждименя@mail.ru',
      phone: ''
    },
    {
      id: 2,
      title: 'test2',
      email: '',
      phone: '9379992'
    }
  ],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      const newItem = {
        title: action.title,
        phone: action.phone,
        email: action.email,
        id: action.id,
      };
      return {
        ...state,
        tablesData: [...state.tablesData, newItem],
        isAuth: true,
      };
    default:
      return state;
  }
};

const addItem = (title, tel, email, id) => {
  return {
    type: ADD_DATA,
    title: title,
    email: email,
    phone: tel,
    id
  };
};

export {dataReducer, addItem};