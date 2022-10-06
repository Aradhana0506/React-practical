const initialState = [
    { id: 0, name: "Aradhana Kumari", email: "email@email.com", mobile: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", mobile: 4567891230 },
  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        state = [...state, action.payload];
        return state;
      case "DELETE_USER":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_USER":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      case "RESTORE_USER":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
  