import { useState } from "react";
import fallbackImage from "../assets/images/image-fallback.svg";

function SafeImage({ src, alt, className, loading = "lazy", decoding = "async" }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (currentSrc !== fallbackImage) {
      setCurrentSrc(fallbackImage);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={handleError}
    />
  );
}

export default SafeImage;
