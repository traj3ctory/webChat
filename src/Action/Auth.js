import { auth, firestore } from 'firebase';


export const register = (user) => {
    return async (dispatch) => {
        const db = firestore();

        dispatch({ type: `$(authConstant.USER_LOGIN)_REQUEST` })

        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);
                const currentUser = auth().currentUser;
                const name = `${user.firstName} ${user.lastName}`;

                currentUser.updateProfile({

                    displayName: name

                })
                    .then(() => {

                        db.collection('users').add({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            uid: data.user.uid,
                            createdAt: new Date()
                        })
                            .then(() => {

                                const loggedInUser = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    uid: data.user.uid,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));
                                console.log('User logged in successfully ...')
                                dispatch({
                                    type: `$(authConstant.USER_LOGIN)_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({
                                    type: `$(authConstant.USER_LOGIN)_FAILURE`,
                                    payload: { errror: error }
                                });
                            })
                    });
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const login = (user) => {
    return async dispatch => {

        dispatch({ type: `$(authConstant.USER_LOGIN)_REQUEST` });

        auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                console.log(data);


                const Name = data.user.displayName.split(" ");
                const firstName = Name[0];
                const lastName = Name[1];

                const loggedInUser = {
                    firstName,
                    lastName,
                    uid: data.user.uid,
                    email: data.user.email
                }

                localStorage.setItem('user', JSON.stringify(loggedInUser));

                dispatch({
                    type: `$(authConstant.USER_LOGIN)_SUCCESS`,
                    payload: { user: loggedInUser }
                });

            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: `$(authConstant.USER_LOGIN)_FAILURE`,
                    payload: { error }
                });
            })
    }
}

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if (user) {
            dispatch({
                type: `$(authConstant.USER_LOGIN)_SUCCESS`,
                payload: { user }
            });
        } else {
            dispatch({
                type: `$(authConstant.USER_LOGIN_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }

    }
}