import { useEffect, useState } from "react";
import Thumbnail from "../components/Thumbnail";
import PhotoForm from "../components/PhotoForm";

const Home = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch("/api/photos");
      const json = await response.json();

      if (response.ok) {
        setPhotos(json);
      }
    };

    getPhotos();
  }, []);

  return (
    <div className="home">
      {photos?.length ? (
        <ul className="photos">
          {photos.map((photo) => (
            <li className="photo" key={photo._id}>
              <Thumbnail photo={photo} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No photos found.</p>
      )}
      <PhotoForm />
    </div>
  );
};

export default Home;
