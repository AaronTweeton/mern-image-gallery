const Photo = ({ photo }) => {
  return <img alt={photo.name} src={photo.cdnUrl} />;
};

export default Photo;
