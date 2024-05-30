import { api } from '../services/imageCover.service';
export const getTypeCoverImages = async () => {
  const res = await api.get('image-cover');
  return res.data;
};
