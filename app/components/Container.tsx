"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[2500px] mx-auto px-6">{children}</div>;
};

export default Container;
