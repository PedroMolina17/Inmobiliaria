export const renameImage = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileName = file.originalname;
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.random() * 16)
    .join('');
  callback(null, `${name}-${randomName}${fileName}`);
};
