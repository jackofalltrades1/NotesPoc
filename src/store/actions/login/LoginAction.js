
export const loginAction = (loginRes) => {    
    if (loginRes.isAuth)
        return{ type: "setUserDetails", userDetails: loginRes };
};

export const logoutAction = () => {    
    return { type: "setLogout" };
};