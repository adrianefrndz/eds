interface ImageGalleryModalProps {
  images: string[];
  onClose: () => void;
}

export default function ImageGalleryModal({
  images,
  onClose,
}: ImageGalleryModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      onClick={onClose}>
      <div
        className="relative bg-slate-900 rounded-xl max-w-4xl w-full p-6"
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl">
          ✕
        </button>

        <div className="grid sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project image ${index + 1}`}
              className="w-full max-h-64 object-contain rounded-lg bg-slate-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
