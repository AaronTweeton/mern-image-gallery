const Photo = ({ photo }) => {
  return (
    <>
      <strong>{photo.filename}</strong>&emsp;
      <small>
        <span>Created {new Date(photo.createdAt).toLocaleString()}</span>
      </small>
    </>
  );
};

export default Photo;
