import { http } from 'utils/http';

export function getImages() {
  return http.get<GetImages>('/v2/search/image');
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
