export const UPDATE_USR = 'UPDATE_USR';
export const UPDATE_PWD = 'UPDATE_PWD';
export const UPDATE_PAGE = 'UPDATE_PAGE';

export const updateUsr = usr => ({type: UPDATE_USR, usr});
export const updatePwd = pwd => ({type: UPDATE_PWD, pwd});
export const updatePage = page => ({type: UPDATE_PAGE, page});
