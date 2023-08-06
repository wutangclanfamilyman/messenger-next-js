"use client";

import Image from "next/image";
import { Modal } from "@/app/components/Modal";

interface ImageModalProps {
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" src={src} fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
