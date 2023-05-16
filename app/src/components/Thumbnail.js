import { Link } from "react-router-dom";

const Thumbnail = ({ photo }) => {
  return (
    <Link to={`/${photo._id}`}>
      <img
        alt={photo.name}
        src={`${photo.cdnUrl}-/preview/500x500/-/quality/smart/-/format/auto/-/progressive/yes/`}
      />
    </Link>
  );
};

export default Thumbnail;
