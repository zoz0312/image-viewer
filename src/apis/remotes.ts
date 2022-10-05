import { http } from 'utils/http';
import qs from 'qs';

export type SortType =
  | 'accuracy' // 정확도순
  | 'recency'; // 최신순;
export function getImages(data: { query: string; sort?: SortType; page?: number; size?: number }) {
  return http.get<GetImages>(`/v2/search/image${qs.stringify(data, { addQueryPrefix: true })}`);
}

export interface GetImages {
  documents: Array<{
    collection: string;
    datetime: string;
    display_sitename: string;
    doc_url: string;
    height: number;
    image_url: string;
    thumbnail_url: string;
    width: number;
  }>;
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}
