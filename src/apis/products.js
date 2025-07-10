import instance from './instance';

export const fetchALLProducts = async () => {
  const res = await instance.get('/products');
  return res.data;
};
