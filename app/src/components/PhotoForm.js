import { Widget } from "@uploadcare/react-widget";
import { UPLOADCARE_PUBLIC_KEY } from "../private/keys";
import { useEffect, useState } from "react";

const PhotoForm = () => {
  const [photo, setPhoto] = useState();

  const handleUpload = (info) => {
    if (info) {
      setPhoto(info);
    }
  };

  useEffect(() => {
    console.log(photo);
  }, [photo]);

  return (
    <p>
      <label htmlFor="file">Your file:</label>{" "}
      <Widget
        id="file"
        imagesOnly
        onChange={handleUpload}
        publicKey={UPLOADCARE_PUBLIC_KEY}
      />
    </p>
  );
};

export default PhotoForm;
