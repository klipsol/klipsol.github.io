import { FileText } from 'lucide-react';
import React from 'react';

// Define the types for the component props
interface MediaPreviewProps {
  url: string | null;
  type: 'image' | 'video';
}

export const MediaPreview: React.FC<MediaPreviewProps> = ({ url, type }) => {
  if (!url) {
    return (
      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center space-y-3 text-center">
        <FileText className="w-12 h-12 text-gray-400" />
        <div>
          <p className="text-gray-600 font-medium">No Media Selected</p>
          <p className="text-gray-500 text-sm">
            Please enter a valid media URL
          </p>
        </div>
      </div>
    );
  }

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = '/api/placeholder/400/300';
    target.alt = 'Invalid image URL';
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const target = e.target as HTMLVideoElement;
    target.style.display = 'none';
    target.insertAdjacentHTML(
      'afterend',
      `<div class="w-full h-64 flex flex-col items-center justify-center bg-gray-100 text-red-500">
        <Video class="w-12 h-12 mb-2" />
        <p>Unable to load video</p>
      </div>`
    );
  };

  return (
    <div className="mt-2 rounded-lg overflow-hidden relative group">
      {type === 'image' && (
        <img
          src={url}
          alt="Preview"
          className="w-full h-64 object-cover transition-opacity group-hover:opacity-80"
          onError={handleImageError}
        />
      )}
      {type === 'video' && (
        <video
          src={url}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-64 object-contain"
          onError={handleVideoError}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
