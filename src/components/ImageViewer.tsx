import { getImages, SortType } from 'apis/remotes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import CardList from 'components/ui/CardList';
import CardListRow from 'components/ui/CardListRow';
import { GET_ITEM_SIZE } from 'constants/common';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
import SkeletonCardListRow from 'components/skeleton/SkeletonCardListRow';
import infiniteGetImages from 'queries/infiniteGetImages';

export interface ImageViewerProps {
  query: string;
  sort: SortType;
}
function ImageViewer({ query, sort }: ImageViewerProps) {
  const { ref, inView } = useInView();
  const { data, remove, refetch, fetchNextPage, isFetchingNextPage } = infiniteGetImages({ query, sort });

  useEffect(() => {
    remove();
    refetch();
  }, [query, sort, remove, refetch]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (!data) {
    return (
      <>
        <CardList>
          <SkeletonCardListRow />
        </CardList>
      </>
    );
  }

  return (
    <>
      <CardList>
        {data.pages.map(page =>
          page.documents.map(item => (
            <CardListRow imageSrc={item.thumbnail_url} key={nanoid()}>
              <span>{item.display_sitename}</span>
            </CardListRow>
          ))
        )}
        {isFetchingNextPage ? <>Has Next</> : <div ref={ref}>will load</div>}
      </CardList>
    </>
  );
}

export default ImageViewer;
