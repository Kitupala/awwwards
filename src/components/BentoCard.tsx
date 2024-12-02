import React, { useRef } from "react";
import Button from "./Button.tsx";
import { TiLocationArrow } from "react-icons/ti";

type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
  disabled?: boolean;
};

const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative size-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 rounded-md bg-black/30 p-4 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <Button
            id="coming-soon"
            title="Coming Soon"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-black/80 py-2 border border-blue-50/20 text-xs flex-center gap-2 text-white/50"
            disabled={isComingSoon}
          />
        )}
      </div>
      {title}
    </div>
  );
};
export default BentoCard;
