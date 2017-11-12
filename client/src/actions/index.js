export const UPDATE_USR = 'UPDATE_USR';
export const UPDATE_PWD = 'UPDATE_PWD';

export const updateUsr = usr => ({type: UPDATE_USR, usr});
export const updatePwd = pwd => ({type: UPDATE_PWD, pwd});
