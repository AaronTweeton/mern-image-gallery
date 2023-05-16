import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Show = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState();

  const getPhoto = async () => {
    const response = await fetch(`/api/photos/${id}`);
    const json = await response.json();
    if (response.ok) {
      setPhoto(json);
    }
  };

  useEffect(() => {
    if (id) {
      getPhoto();
    }
  }, [id]);

  return (
    <>
      {photo ? (
        <figure>
          <img
            alt={photo.name}
            src={`${photo.cdnUrl}-/quality/smart/-/format/auto/-/progressive/yes/`}
          />
          <figcaption>{photo.name}</figcaption>
        </figure>
      ) : null}
    </>
  );
};
