const Thumbnail = ({ photo }) => {
  return (
    <img
      alt={photo.name}
      src={`${photo.cdnUrl}-/preview/500x500/-/quality/smart/-/format/auto/-/progressive/yes/`}
    />
  );
};

export default Thumbnail;
