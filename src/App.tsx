import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';
import { GET_ITEM_SIZE } from 'constants/common';

function App() {
  const { data, fetchNextPage } = useInfiniteQuery(
    ['getImages'],
    async ({ pageParam = 1 }) => {
      const { data } = await getImages({ query: 'kia', page: pageParam, size: GET_ITEM_SIZE, sort: 'accuracy' });
      return {
        ...data,
        nextPage: pageParam + 1,
      };
    },
    {
      getNextPageParam: lastPage => {
        return lastPage.nextPage;
      },
    }
  );

  console.log('data', data?.pages);
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{data?.data}</p> */}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={() => fetchNextPage()}>Fetch Next </button>
      </header>
    </div>
  );
}

export default App;
