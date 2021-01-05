export const initialState={
    user: null,
    username: '',
}

export const actionTypes={
    SET_USER:'SET_USER',
    SET_NAME:'SET_NAME'
};

const reducer=(state, action)=>{
    console.log(action)
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };
        case actionTypes.SET_NAME:
            return{
                ...state,
                username: action.username,
            };

            default:
                return state;
    }
}

export default reducer