import { cn } from "@ajk-ui/core";
import { ProductImages, ProductImage } from "@ajk-ui/product";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export type ThumbPosition = "bottom" | "left";

export interface ProductGalleryProps {
  images: ProductImages;
  selectedImage: ProductImage;
  onImageSelect: (image: ProductImage) => void;
  thumbPosition?: ThumbPosition;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  selectedImage,
  onImageSelect,
  thumbPosition = "bottom",
}) => {
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const mainImageRef = useRef<HTMLDivElement | null>(null);

  const currentIndex = images.gallery.findIndex(
    (img) => img.id === selectedImage.id
  );

  const { ref: swipeableRef, ...swipeHandlers } = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < images.gallery.length - 1) {
        onImageSelect(images.gallery[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        onImageSelect(images.gallery[currentIndex - 1]);
      }
    },
    trackMouse: true,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showModal) return;

      switch (e.key) {
        case "ArrowLeft":
          navigateGallery("prev");
          break;
        case "ArrowRight":
          navigateGallery("next");
          break;
        case "Escape":
          setShowModal(false);
          break;
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevenir scroll cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restaurar scroll cuando el modal se cierra
      document.body.style.overflow = "unset";
    };
  }, [showModal, currentIndex]);

  const setRefs = useCallback(
    (element: HTMLDivElement | null) => {
      mainImageRef.current = element;
      swipeableRef(element);
    },
    [swipeableRef]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = mainImageRef.current;
    if (!element) return;

    const { left, top, width, height } = element.getBoundingClientRect();

    // Calculamos la posición del mouse en porcentaje dentro de la imagen principal
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));

    // El zoom será del doble del tamaño (200%)
    // Por lo tanto, necesitamos ajustar el rango de movimiento al 100% extra
    const translateX = x;
    const translateY = y;

    setZoomPosition({
      x: translateX,
      y: translateY,
    });
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const navigateGallery = (direction: "prev" | "next") => {
    if (direction === "next") {
      // Si es el último, volver al primero
      if (currentIndex === images.gallery.length - 1) {
        onImageSelect(images.gallery[0]);
      } else {
        onImageSelect(images.gallery[currentIndex + 1]);
      }
    } else {
      // Si es el primero, ir al último
      if (currentIndex === 0) {
        onImageSelect(images.gallery[images.gallery.length - 1]);
      } else {
        onImageSelect(images.gallery[currentIndex - 1]);
      }
    }
  };

  const containerClassName = `
    ${thumbPosition === "left" ? "flex gap-4" : "space-y-4"}
  `;

  const thumbsClassName = `
    ${
      thumbPosition === "left"
        ? "flex flex-col gap-4 w-24"
        : "grid grid-cols-4 gap-4"
    }
  `;

  const mainImageClassName = `
    ${thumbPosition === "left" ? "flex-1" : "w-full"}
  `;

  return (
    <>
      <div className={containerClassName}>
        {thumbPosition === "left" && (
          <div className={thumbsClassName}>
            {images.gallery.map((image) => (
              <button
                key={image.id}
                onClick={() => onImageSelect(image)}
                className={`aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImage.id === image.id ? "ring-2 ring-primary-500" : ""
                }`}
              >
                <img
                  src={image.size.xs.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className={mainImageClassName}>
          <div className="relative">
            <div
              ref={setRefs}
              {...swipeHandlers}
              className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setShowModal(true)}
            >
              <img
                key={selectedImage.id}
                src={selectedImage.size.lg.url}
                alt={selectedImage.alt}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>

            {/* Zoom Window */}
            {showZoom && (
              <div className="hidden lg:block absolute left-[100%] top-0 ml-4 w-[400px] h-[400px] overflow-hidden rounded-lg border-2 border-gray-200 bg-white">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${selectedImage.size.lg.url})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: "400%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {thumbPosition === "bottom" && (
          <div className={thumbsClassName}>
            {images.gallery.map((image) => (
              <button
                key={image.id}
                onClick={() => onImageSelect(image)}
                className={`aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImage.id === image.id ? "ring-2 ring-primary-500" : ""
                }`}
              >
                <img
                  src={image.size.xs.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-40 p-1"
              onClick={() => setShowModal(false)}
              title="Cerrar (ESC)"
            >
              <svg className={cn("w-6 h-6")} fill="none" viewBox="0 0 24 24">
                <path
                  className={cn("stroke-white w-full h-full")}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="absolute left-4 bg-black bg-opacity-40 p-3"
              onClick={() => navigateGallery("prev")}
              title="Anterior (←)"
            >
              <div className={cn("w-6 h-6")}>
                <svg
                  width="16"
                  height="30"
                  viewBox="0 0 16 30"
                  fill="none"
                  className={cn("fill-white w-full h-full")}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.2958 29.7141L0.295798 15.7141C0.20207 15.6211 0.127676 15.5105 0.0769072 15.3887C0.0261385 15.2668 0 15.1361 0 15.0041C0 14.8721 0.0261385 14.7414 0.0769072 14.6195C0.127676 14.4977 0.20207 14.3871 0.295798 14.2941L14.2958 0.294092C14.4841 0.105788 14.7395 0 15.0058 0C15.2721 0 15.5275 0.105788 15.7158 0.294092C15.9041 0.482395 16.0099 0.73779 16.0099 1.00409C16.0099 1.27039 15.9041 1.52579 15.7158 1.71409L2.4158 15.0041L15.7158 28.2941C15.9041 28.4824 16.0099 28.7378 16.0099 29.0041C16.0099 29.2704 15.9041 29.5258 15.7158 29.7141C15.5275 29.9024 15.2721 30.0082 15.0058 30.0082C14.7395 30.0082 14.4841 29.9024 14.2958 29.7141Z" />
                </svg>
              </div>
            </button>

            <img
              src={selectedImage.size.lg.url}
              alt={selectedImage.alt}
              className="md:max-h-screen  md:max-w-screen-lg object-contain"
            />

            <button
              className="absolute right-4 bg-black bg-opacity-40 p-3"
              onClick={() => navigateGallery("next")}
              title="Siguiente (→)"
            >
              <div className={cn("w-6 h-6")}>
                <svg
                  width="17"
                  height="30"
                  viewBox="0 0 17 30"
                  className={cn("fill-white w-full h-full")}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.295798 29.7141C0.20207 29.6211 0.127676 29.5105 0.0769072 29.3887C0.0261385 29.2668 0 29.1361 0 29.0041C0 28.8721 0.0261385 28.7414 0.0769072 28.6195C0.127676 28.4977 0.20207 28.3871 0.295798 28.2941L13.5958 15.0041L0.295798 1.71409C0.107495 1.52579 0.0017066 1.27039 0.0017066 1.00409C0.0017066 0.73779 0.107495 0.482395 0.295798 0.294092C0.484102 0.105788 0.739497 1.9841e-09 1.0058 0C1.2721 -1.9841e-09 1.52749 0.105788 1.7158 0.294092L15.7158 14.2941C15.8095 14.3871 15.8839 14.4977 15.9347 14.6195C15.9855 14.7414 16.0116 14.8721 16.0116 15.0041C16.0116 15.1361 15.9855 15.2668 15.9347 15.3887C15.8839 15.5105 15.8095 15.6211 15.7158 15.7141L1.7158 29.7141C1.62284 29.8078 1.51223 29.8822 1.39038 29.933C1.26852 29.9838 1.13781 30.0099 1.0058 30.0099C0.873786 30.0099 0.743081 29.9838 0.621222 29.933C0.499362 29.8822 0.388761 29.8078 0.295798 29.7141Z" />
                </svg>
              </div>
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4  bg-black bg-opacity-40 px-3 py-1 text-gray-400 rounded text-sm">
              {currentIndex + 1} / {images.gallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
