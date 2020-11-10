const validateLoginService = (objDat) => {
    debugger;
    //if (objDat.email === 'test@gmail.com' && objDat.password === "123") {
    if (objDat.password === "123") {        
        var successRes = {
            isAuth: true,
            username: objDat.email
        };

        return successRes;
    }
    else {
        var failureRes = {
            isAuth: false,
            username: ''
        };
        return failureRes;
    }        
}

export default validateLoginService;