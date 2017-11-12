export const UPDATE_USR = 'UPDATE_USR';
export const UPDATE_PWD = 'UPDATE_PWD';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
export const UPDATE_SUID = 'UPDATE_SUID';
export const UPDATE_REGISTRATION = 'UPDATE_REGISTRATION';

export const updateUsr = usr => ({type: UPDATE_USR, usr});
export const updatePwd = pwd => ({type: UPDATE_PWD, pwd});
export const updatePage = page => ({type: UPDATE_PAGE, page});
export const updateFirstName = firstName => ({type: UPDATE_FIRSTNAME, firstName});
export const updateLastName = lastName => ({type: UPDATE_LASTNAME, lastName});
export const updateSUID = SUID => ({type: UPDATE_SUID, SUID});
export const updateRegistration = registration => ({type: UPDATE_REGISTRATION, registration});
