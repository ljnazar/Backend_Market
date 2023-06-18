import { Router } from 'express';
import { 
    mainRender, 
    loginRender, 
    loginUser, 
    //loginUserError, 
    registerRender, 
    createUser, 
    //createUserError,
    logoutUser, 
    restoreRender,
    sendPasswordCode,
    validatePasswordUpdate,
    restorePassword,
} from '../controllers/userController.js';

const userRoute = Router();

// MAIN ROUTE
userRoute.get('/', mainRender);

// LOGIN
userRoute.get('/login', loginRender);
userRoute.post('/login', loginUser);
//userRoute.get('/faillogin', loginUserError);

// REGISTER
userRoute.get('/register', registerRender);
userRoute.post('/register', createUser);
//userRoute.get('/failregister', createUserError);

// LOGOUT
userRoute.get('/logout', logoutUser);

// RESET PASSWORD
userRoute.get('/sendRecovery', restoreRender);
userRoute.post('/sendRecovery', sendPasswordCode);
userRoute.get('/restorePassword', validatePasswordUpdate);
userRoute.post('/restorePassword', restorePassword);

export default userRoute;