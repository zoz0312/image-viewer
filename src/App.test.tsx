import { render, renderHook, screen } from '@testing-library/react';
import App from './App';
import { server } from 'server/node';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import infiniteGetImages from 'queries/infiniteGetImages';
import { renderWithClient } from 'utils/testUtil';

jest.mock('assets/Icon/searchIcon.svg', () => () => {
  return <></>;
});

let queryClient: QueryClient;
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
});
afterAll(() => {
  server.close();
  jest.clearAllMocks();
});

describe('App', () => {
  test('메인화면', async () => {
    render(<App />);

    await screen.findByText(/정확도순/);
    await screen.findByText(/최신순/);
  });

  test('1. 검색하기', async () => {
    const { result } = renderWithClient(queryClient, <App />);
    // const { result } = renderHook(() => infiniteGetImages({ query: 'test', sort: 'accuracy' }), {
    //   wrapper,
    // });

    console.log('result', result);

    userEvent.type(screen.getByTestId('queryInput'), 'test');
    await userEvent.click(screen.getByTestId('search'));
  });
});
