import {
  LoginRequest,
  NewPasswordData,
  ResetPasswordRequest,
  SecurityCodePayload,
  SignUpRequest,
  login,
  resetPassword,
  setNewPassword,
  signUp,
  verifySecurityCode,
} from '@/api/auth.api';
import { deleteToken, deleteUser, persistToken, readToken } from '@/services/localStorage.service';
import { setUser } from '@/stores/slices/userSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk(
  'auth/doLogin',
  async (loginPayload: LoginRequest, { dispatch }) =>
    login(loginPayload).then((res) => {
      dispatch(setUser(res.user));
      persistToken(res.token);

      return res.token;
    })
);

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) =>
  signUp(signUpPayload)
);

export const doResetPassword = createAsyncThunk(
  'auth/doResetPassword',
  async (resetPassPayload: ResetPasswordRequest) => resetPassword(resetPassPayload)
);

export const doVerifySecurityCode = createAsyncThunk(
  'auth/doVerifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) => verifySecurityCode(securityCodePayload)
);

export const doSetNewPassword = createAsyncThunk(
  'auth/doSetNewPassword',
  async (newPasswordData: NewPasswordData) => setNewPassword(newPasswordData)
);

export const doLogout = createAsyncThunk('auth/doLogout', (payload, { dispatch }) => {
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = '';
    });
  },
});

export default authSlice.reducer;
