import { http } from 'utils/http';
import qs from 'qs';

export function getImages(data: { query: string; sort?: 'accuracy' | 'recency'; page?: number; size?: number }) {
  return http.get<GetImages>(`/v2/search/image${qs.stringify(data, { addQueryPrefix: true })}`);
}

export interface GetImages {
  documents: Array<{
    contents: string;
    datetime: string;
    title: string;
    url: string;
  }>;
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}
