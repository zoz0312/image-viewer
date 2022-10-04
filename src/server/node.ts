import { setupServer } from 'msw/node';
import { handlers } from './handle';

export const server = setupServer(...handlers());
