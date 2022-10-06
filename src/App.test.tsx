import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { server } from 'server/node';
import userEvent from '@testing-library/user-event';
import { QueryClient } from '@tanstack/react-query';
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
    renderWithClient(queryClient, <App />);

    await screen.findByText(/정확도순/);
    await screen.findByText(/최신순/);
  });

  test('1. 검색하기', async () => {
    renderWithClient(queryClient, <App />);

    const searchInput = (await screen.findByPlaceholderText('검색어를 입력하세요')) as HTMLInputElement;
    await userEvent.click(searchInput);
    await screen.findByText('최근검색어 전체 삭제');
    expect(searchInput.value).toBe('');
    fireEvent.change(searchInput, { target: { value: 'Testing' } });
    expect(searchInput.value).toBe('Testing');

    const searchButton = screen.getByTestId('search');
    fireEvent.click(searchButton);
  });

  it.todo('2. 검색 후 결과 도출');
  it.todo('3. Storage get/set');
});
