import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages, SortType } from 'apis/remotes';
import { GET_ITEM_SIZE } from 'constants/common';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox';
import RoundButton from 'components/RoundButton';
import CardList from 'components/CardList';
import CardListRow from 'components/CardListRow';
import Spacing from 'components/Spacing';
import { nanoid } from 'nanoid';

function App() {
  const [sort, setSort] = useState<SortType>('accuracy');
  const { ref, inView } = useInView();
  const { data, remove, refetch, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infiniteGetImages', sort],
    async ({ pageParam = 1 }) => {
      const { data } = await getImages({ query: 'kia', page: pageParam, size: GET_ITEM_SIZE, sort });
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
    remove();
    refetch();
  }, [sort, remove, refetch]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (!data) {
    return <>Loading</>;
  }

  const onFilterClick = (e: any) => {
    setSort(e.target.value as SortType);
  };
  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <header>
        <SearchBox />
        <Spacing size={10} />
        <RoundButton className={sort === 'accuracy' ? 'active' : ''} value="accuracy" onClick={onFilterClick}>
          정확도순
        </RoundButton>
        <RoundButton
          className={sort === 'recency' ? 'active' : ''}
          style={{ marginLeft: '2px' }}
          value="recency"
          onClick={onFilterClick}
        >
          최신순
        </RoundButton>
      </header>
      <Spacing size={20} />
      <main>
        <CardList>
          {data.pages.map(page =>
            page.documents.map(item => (
              <CardListRow imageSrc={item.thumbnail_url} key={nanoid()}>
                <span>{item.display_sitename}</span>
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
