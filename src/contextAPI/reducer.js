export const initialState={
    user: null,
    username: '',
}

export const actionTypes={
    SET_USER:'SET_USER',
    SET_NAME:'SET_NAME',
    SET_POSTS: 'SET_POSTS'
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
        case actionTypes.SET_POSTS:
            return{
                ...state,
                posts: action.posts,
            };

            default:
                return state;
    }
}

export default reducer