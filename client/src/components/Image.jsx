const Image = ({src, alt, className, rounded}) => {
  return (
    <>
    <img src={src} alt={alt} className={`${className ? className : ''} ${rounded ? rounded : ''}`} />
    </>
    )
};
export default Image;