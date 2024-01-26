import authReducer from '@/stores/slices/authSlice';
import nightModeReducer from '@/stores/slices/nightModeSlice';
import pwaReducer from '@/stores/slices/pwaSlice';
import themeReducer from '@/stores/slices/themeSlice';
import userReducer from '@/stores/slices/userSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  pwa: pwaReducer,
};
