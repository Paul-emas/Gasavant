import React from "react";
import Image from "next/image";

export type ProjectCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
  desc: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  alt,
  title,
  desc,
}) => {
  return (
    <div className="float-shadow h-[437px] w-full overflow-hidden">
      <div className="relative h-[304px] w-full">
        <Image
          src={imageUrl}
          placeholder="blur"
          blurDataURL={imageUrl}
          fill
          alt={alt}
          className="object-cover"
        />
      </div>
      <div className="px-[29px] pt-6">
        <div className="font-switz text-4.5xl font-semibold text-neutral-900">
          {title}
        </div>
        <div className="mt-1 text-base text-neutral-500">{desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
