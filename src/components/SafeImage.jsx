import { useEffect, useState } from "react";
import fallbackImage from "../assets/image-fallback.svg";

function SafeImage({ src, alt, className, loading = "lazy", fetchPriority }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleError = () => {
    if (imageSrc !== fallbackImage) {
      setImageSrc(fallbackImage);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={handleError}
    />
  );
}

export default SafeImage;
