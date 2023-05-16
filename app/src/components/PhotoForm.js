import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Widget } from "@uploadcare/react-widget";
import { UPLOADCARE_PUBLIC_KEY } from "../private/keys";

const PhotoForm = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();

  const handleUpload = (info) => {
    console.log(info);
    if (info) {
      setPhoto(info);
    }
  };

  const savePhoto = async () => {
    const response = await fetch("/api/photos", {
      method: "POST",
      body: JSON.stringify(photo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (json) {
      navigate("/");
    }
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
