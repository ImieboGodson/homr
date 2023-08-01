"use client";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-fit flex flex-row items-center justify-between">
      {children}
    </div>
  );
};

export default Wrapper;
