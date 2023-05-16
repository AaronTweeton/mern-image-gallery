import { Widget } from "@uploadcare/react-widget";
import { UPLOADCARE_PUBLIC_KEY } from "../private/keys";
import { useEffect, useState } from "react";

const PhotoForm = () => {
  const [photo, setPhoto] = useState();

  const handleUpload = (info) => {
    console.log(info);
    if (info) {
      setPhoto(info);
    }
  };

  const savePhoto = async () => {
    const body = {
      name: photo.name,
      cdnUrl: photo.cdnUrl,
    };

    const response = await fetch("/api/photos", {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
  };

  useEffect(() => {
    if (photo) {
      savePhoto();
    }
  }, [photo]);

  return (
    <div class="upload">
      <Widget
        id="file"
        imagesOnly
        onChange={handleUpload}
        publicKey={UPLOADCARE_PUBLIC_KEY}
      />
    </div>
  );
};

export default PhotoForm;
