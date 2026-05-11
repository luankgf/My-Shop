import { createSlice } from "@reduxjs/toolkit"

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Primeira action: login
    login: (state, action) => {
      state.user = action.payload;
    },
    // Segunda action: login
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login,logout } = userSlice.actions