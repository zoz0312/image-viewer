import { setupWorker } from 'msw';
import { handlers } from './handle';

export const server = setupWorker(...handlers());
