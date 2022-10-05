import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from 'apis/remotes';
import { ImageViewerProps } from 'components/ImageViewer';
import { GET_ITEM_SIZE } from 'constants/common';

export default function ({ query, sort }: ImageViewerProps) {
  return useInfiniteQuery(
    ['infiniteGetImages', query, sort],
    async ({ pageParam = 1 }) => {
      const { data } = await getImages({ query, page: pageParam, size: GET_ITEM_SIZE, sort });
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
}
