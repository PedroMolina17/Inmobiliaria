import { useParams } from 'react-router-dom';
import { getTypeDescriptionImages } from '../hooks/imageDescription.hook';
import { useQuery } from 'react-query';
const ImageDescription = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: TypeDescription,
    isError,
    error,
  } = useQuery(['TypeDescription', id], () => getTypeDescriptionImages(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!TypeDescription || TypeDescription.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="text-white">
      {TypeDescription.map((image) => (
        <div key={image.idImageDescription}>
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

export default ImageDescription;
