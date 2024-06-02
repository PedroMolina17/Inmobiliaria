import { getTypeCoverImages } from '../hooks/imageCover.hook.ts';
import { useQuery } from 'react-query';

const ImageCover = () => {
  const {
    isLoading,
    data: TypeCoverImages,
    isError,
    error,
  } = useQuery({
    queryKey: ['TypeCoverImages'],
    queryFn: getTypeCoverImages,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!TypeCoverImages || TypeCoverImages.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div>
      {TypeCoverImages.map((image) => (
        <div key={image.idImageCover}>
          <img
            src={`http://localhost:3000/${image.imageUrl}
            `}
            className="w-96 h-96"
            alt={image.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCover;