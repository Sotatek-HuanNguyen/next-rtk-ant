import { httpApi } from '@/api/http.api';
import AxiosMockAdapter from 'axios-mock-adapter';

export const httpApiMock = new AxiosMockAdapter(httpApi, { delayResponse: 1000 });
