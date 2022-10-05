import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';
import { GET_ITEM_SIZE } from 'constants/common';
import { useEffect } from 'react';
import { SearchBox } from 'components/SearchBox';
import RoundButton from 'components/RoundButton';
import CardList from 'components/CardList';
import CardListRow from 'components/CardListRow';
import Spacing from 'components/Spacing';

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

  if (!data) {
    return <>Loading</>;
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <header>
        <SearchBox />
        <Spacing size={10} />
        <RoundButton>정확도순</RoundButton>
        <RoundButton style={{ marginLeft: '2px' }}>최신순</RoundButton>
      </header>
      <Spacing size={20} />
      <main>
        <CardList>
          {data.pages.map(page =>
            page.documents.map(item => (
              <CardListRow imageSrc={item.thumbnail_url} key={item.datetime}>
                <span>{item.display_sitename}</span>
                {/* <div>coll: {item.collection}</div>
                <div>site: {item.display_sitename}</div> */}
              </CardListRow>
            ))
          )}
        </CardList>
      </main>
      {isFetchingNextPage ? <>Loading</> : <div ref={ref}>will load</div>}
    </div>
  );
}

export default App;
