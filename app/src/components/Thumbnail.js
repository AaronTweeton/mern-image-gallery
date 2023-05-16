const Thumbnail = ({ photo }) => {
  return <img alt={photo.name} src={photo.cdnUrl} />;
};

export default Thumbnail;
