import { rest } from 'msw';
import { images } from 'server/data/image';

export function handlers() {
  return [rest.get('/v2/search/image', getImages)];
}

const getImages: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.json(images));
};
