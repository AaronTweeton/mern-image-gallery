const Photo = ({ photo }) => {
  return (
    <>
      <img
        alt={photo.name}
        src={photo.cdnUrl}
        width={120}
        height={120}
        style={{ objectFit: "cover" }}
      />
      <div>
        <small>
          <span>Created {new Date(photo.createdAt).toLocaleString()}</span>
        </small>
      </div>
    </>
  );
};

export default Photo;
