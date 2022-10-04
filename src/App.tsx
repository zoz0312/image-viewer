import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';
import { GET_ITEM_SIZE } from 'constants/common';
import { useEffect } from 'react';

function App() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
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

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  console.log('isFetchingNextPage', isFetchingNextPage);
  if (!data) {
    return <>Loading</>;
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <p>{data?.data}</p> */}
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <button onClick={() => fetchNextPage()}>Fetch Next </button>
        </header>
      </div>
      {data.pages.map(page =>
        page.documents.map(item => (
          <div key={item.datetime}>
            <div>coll: {item.collection}</div>
            <div>site: {item.display_sitename}</div>
            <img src={item.thumbnail_url} />
          </div>
        ))
      )}
      {isFetchingNextPage ? <>Loading</> : <div ref={ref}>will load</div>}
    </>
  );
}

export default App;
