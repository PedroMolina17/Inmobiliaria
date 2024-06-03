import { api } from '../api/api';
export const getTypeDescriptionImages = async (id) => {
  const res = await api.get(`image-description?idImageCover=${id}`);
  return res.data;
};
