import * as express from 'express';
const { Router } = require('express');
const path = require('path');
const { get } = require('axios');

const router: express.Router = Router();

router.get('*', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.sendFile(path.resolve('../', 'build/index.html'));
});

router.post('/:query/:start?', async (req: express.Request, res: express.Response) => {
  const { query, start } = req.params;
  try {
    const { data: { items } } = await get(`
    https://www.googleapis.com/customsearch/v1?key=AIzaSyAf8qRaBaolsjmzxjpxw86N4fdRoy_fTrU&cx=c27d5e5f447ce4049&start=${start
      ? start
      : 10}&q=${encodeURI(query)}`);
    
    res.send(items);
  } catch (error) {
    console.error(error);
  }
});

export const SearchController = router;
