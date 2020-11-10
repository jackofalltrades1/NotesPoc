import React from 'react';

const validateLoginService = (objDat) => {
    debugger;
    //if (objDat.email === 'test@gmail.com' && objDat.password === "123") {
    if (objDat.password === "123") {        
        var res = {
            isAuth: true,
            username: objDat.email
        };

        return res;
    }
    else {
        var res = {
            isAuth: false,
            username: ''
        };
        return res;
    }        
}

export default validateLoginService;