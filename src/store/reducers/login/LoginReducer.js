const initialState = {
    userDetails: {
        userName: ''
    },   
    isAuth: false, // (localAccessToken !== undefined && localAccessToken !== null && localAccessToken !== '') ? true : false,
    userName: "",
};

const UserReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case "setUserDetails":
            return {
                ...state,
                isAuth: true,
                userDetails: action.userDetails,
            };
            break;
        
        case "setLogout":
            return {
                ...state,
                userDetails: {
                    userName: ''
                },
                isAuth: false,
            };
            break;       
    }

    return state;
};

export default UserReducer;