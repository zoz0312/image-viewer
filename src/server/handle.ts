import { rest } from 'msw';

export function handlers() {
  return [rest.get('/getImages', getImages)];
}

const getImages: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      firstName: 'John',
      lastName: 'Maverick',
    })
  );
};
