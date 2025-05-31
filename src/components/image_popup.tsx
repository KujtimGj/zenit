import { X } from "lucide-react";
interface ImagePopupProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

const ImagePopup = ({ isOpen, imageUrl, title, onClose }: ImagePopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center animate-fade-in">
      <div className="relative max-w-[95vw] max-h-[100vh]">
        <img 
          src={imageUrl} 
          alt={title}
          className="object-contain"
          style={{ height: '80%',width:'90%' }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
          style={{background:'#ff5e1f'}}
        >
          <X className="w-6 h-6 text-white bg-ff5e1f" />
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;