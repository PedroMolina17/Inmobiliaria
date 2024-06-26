import { getTypeCoverImages } from '../hooks/imageCover.hook.ts';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
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
    <div className="text-white">
      {TypeCoverImages.map((image) => (
        <div key={image.idImageCover}>
          <img
            src={`http://localhost:3000/${image.imageUrl}
            `}
            className="w-96 h-96"
            alt={image.description}
          />
          <Link to={`/${image.idImageCover}`}>Buscar por Id</Link>
        </div>
      ))}
    </div>
  );
};

export default ImageCover;
