import validateLogin from '../../../service/UserAuthenticationService';

export const loginAction = (loginRes) => {
    //var loginRes = await validateLogin(objDat);
    if (loginRes.isAuth)
        return{ type: "setUserDetails", userDetails: loginRes };
};

export const logoutAction = () => {
    //var loginRes = await validateLogin(objDat);
    //    if (loginRes.isAuth)
    return { type: "setLogout" };
};