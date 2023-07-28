"use clink";

import Link from "next/link";

interface LinkProps {
  link: string;
  title: string;
  color?: string;
}

const LinkTag: React.FC<LinkProps> = ({ link, title, color }) => {
  return (
    <Link href={link}>
      <div className="text-gray-400">{title}</div>
    </Link>
  );
};

export default LinkTag;
