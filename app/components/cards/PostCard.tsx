"use client";

import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  image: string;
  title: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title }) => {
  return (
    <Link href="/" className="cols-span-1">
      <div className="flex flex-col gap-6 items-center rounded-lg overflow-hidden">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt="post image"
            className="h-full w-full object-cover"
            fill
          />
        </div>
        <div className="relative h-[15vh] flex flex-col items-start justify-start py-6 px-2">
          <div className="absolute top-[-40%] md:top-[-30%] lg:top-[-60%] right-5 py-2 px-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
            <div className="text-xs font-thin">Feb</div>
            <div className="text-base font-bold">03</div>
          </div>
          <div className="text-sm font-bold">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
