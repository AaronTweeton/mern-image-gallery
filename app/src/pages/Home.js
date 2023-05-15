import { useEffect, useState } from "react";
import Photo from "../components/Photo";
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
      <h2>Home</h2>
      {photos && (
        <ul>
          {photos.map((photo) => (
            <li key={photo._id}>
              <Photo photo={photo} />
            </li>
          ))}
        </ul>
      )}
      <PhotoForm />
    </div>
  );
};

export default Home;
