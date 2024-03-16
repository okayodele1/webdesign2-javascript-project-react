import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem('user')) || null, 
  loginError: null,
};

export const userSlice = createSlice({
  name: 'useer',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; 
      state.loginError = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.loginError = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null; 
      state.loginError = null;
      localStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { loginSuccess, loginFailure, logout, setUser } = userSlice.actions;

export default userSlice.reducer;