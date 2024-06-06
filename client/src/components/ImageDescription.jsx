import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTypeDescriptionImages } from '../hooks/imageDescription.hook';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const ImageDescription = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [tempDeletedImages, setTempDeletedImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);

  const {
    isLoading,
    data: TypeDescription,
    isError,
    error,
  } = useQuery(['TypeDescription', id], () => getTypeDescriptionImages(id));

  const updateMutation = useMutation(
    ({ imageIdsToDelete, newImages }) => {
      const formData = new FormData();
      formData.append('imageIdsToDelete', JSON.stringify(imageIdsToDelete));
      newImages.forEach((image, index) => {
        formData.append(`newImages`, image);
      });

      return axios.put('http://localhost:3000/update-images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['TypeDescription', id]);
        setTempDeletedImages([]);
        setNewImages([]);
        setIsConfirming(false);
      },
    },
  );

  const handleDeleteImageTemp = (imageId) => {
    setTempDeletedImages((prevTempDeletedImages) =>
      prevTempDeletedImages.includes(imageId)
        ? prevTempDeletedImages.filter((id) => id !== imageId)
        : [...prevTempDeletedImages, imageId],
    );
  };

  const handleAddNewImages = (event) => {
    const files = Array.from(event.target.files);
    setNewImages((prevNewImages) => [...prevNewImages, ...files]);
  };

  const handleConfirmUpdate = () => {
    updateMutation.mutate({ imageIdsToDelete: tempDeletedImages, newImages });
  };

  const handleCancelUpdate = () => {
    setTempDeletedImages([]);
    setNewImages([]);
    setIsConfirming(false);
  };

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
    <div className="text-white grid grid-cols-6">
      {TypeDescription.filter(
        (image) => !tempDeletedImages.includes(image.idImageDescription),
      ).map((image) => (
        <div key={image.idImageDescription} className="col-span-1 p-4">
          <img
            src={`http://localhost:3000/${image.imageUrl}`}
            className="w-96 h-96"
            alt={image.description}
            onClick={() => handleDeleteImageTemp(image.idImageDescription)}
          />
        </div>
      ))}
      <div className="col-span-6 mt-4">
        {/* Input para agregar nuevas imágenes */}
        <input
          type="file"
          multiple
          onChange={handleAddNewImages}
          className="bg-gray-700 px-4 py-2"
        />
        <div className="mt-4">
          {newImages.length > 0 && (
            <div>
              <h3>Nuevas Imágenes</h3>
              <div className="grid grid-cols-6 gap-4">
                {newImages.map((image, index) => (
                  <div key={index} className="col-span-1 p-4">
                    <img
                      src={URL.createObjectURL(image)}
                      className="w-96 h-96"
                      alt={`New ${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {isConfirming ? (
          <>
            <button
              onClick={handleConfirmUpdate}
              className="bg-red-500 px-4 py-2 mr-2"
            >
              Confirm Update
            </button>
            <button
              onClick={handleCancelUpdate}
              className="bg-gray-500 px-4 py-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsConfirming(true)}
            className="bg-blue-500 px-4 py-2"
          >
            Update Images
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageDescription;
