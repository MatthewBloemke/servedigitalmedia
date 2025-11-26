'use client';
import React from 'react';
import { IoClose } from 'react-icons/io5';

const GalleryModal = ({ open, onClose, children }: any) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/60 
        backdrop-blur-sm
        flex justify-center items-center 
        z-50
        px-2 sm:px-6
      "
      onClick={onClose}
    >
      <div
        className="
          bg-[rgba(30,30,30,0.65)]
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
          rounded-md
          w-full 
          max-w-5xl
          relative
          p-2 sm:p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute 
            top-2 right-2 sm:top-4 sm:right-4 
            text-white 
            text-2xl sm:text-3xl 
            hover:text-purple-300
            transition
          "
        >
          <IoClose />
        </button>

        {/* Modal Content */}
        <div className="p-1 sm:p-3">{children}</div>
      </div>
    </div>
  );
};

export default GalleryModal;
