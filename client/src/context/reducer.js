

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            
            return{...state, currentUser: action.payload};

        case 'UPDATE_DETAILS':
            return {...state, details:{...state.details, ...action.payload}}
    
        default:
            throw new Error('No matched action!');
    }
};

export default reducer;