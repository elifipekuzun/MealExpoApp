import { createDataContext } from "../create.context";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSkwve58nxsna9rXVhnF3okKSRh_Jmx30",
  authDomain: "mealsexpoapp.firebaseapp.com",
  projectId: "mealsexpoapp",
  storageBucket: "mealsexpoapp.appspot.com",
  messagingSenderId: "1020892981525",
  appId: "1:1020892981525:web:53db5981bc05405affe11c",
};
initializeApp(firebaseConfig);

const auth = getAuth();

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const initState = {
  userEmail: {},
  isAuthenticated: false,
  token: null,
  uid: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        isAuthenticated: true,
        userEmail: action.payload.user.email,
        uid: action.payload.user.uid,
      };
    case "SIGNIN":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.user.refreshToken,
        userEmail: action.payload.user.email,
        uid: action.payload.user.uid,
      };
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        userEmail: action.payload.email,
        uid: action.payload.uid,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userEmail: "",
        uid: null,
      };
    default:
      return state;
  }
};

const setUser = (dispatch) => () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({ type: "USER", payload: { user } });
    } else {
      return "user not found!";
    }
  });
};

const login = (dispatch) => async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "SIGNIN", payload: { user } });
  } catch (error) {
    return error.message;
  }
};

const register = (dispatch) => async (email, password, confirmedPassword) => {
  if (
    password !== confirmedPassword ||
    password.length === 0 ||
    confirmedPassword.length === 0
  ) {
    return "Passwords do not match!";
  }
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({
      type: "REGISTER",
      payload: {
        email: user.email,
        token: user.refreshToken,
        uid: user.uid,
      },
    });
  } catch (error) {
    return error.message;
  }
};

const logout = (dispatch) => async () => {
  signOut(auth)
    .then(() => {
      dispatch({ type: "LOGOUT" });
    })
    .catch((error) => error.message);
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { setUser, login, register, logout },
  initState
);
