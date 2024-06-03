import { api } from '../api/api';
export const getTypeCoverImages = async () => {
  const res = await api.get('image-cover');
  return res.data;
};
