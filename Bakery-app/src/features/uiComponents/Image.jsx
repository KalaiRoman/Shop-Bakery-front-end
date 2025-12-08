function Image({image, className,alt}) {
  return (
    <div>
      <img src={image} alt={alt} className={className} />
    </div>
  );
}

export default Image;
