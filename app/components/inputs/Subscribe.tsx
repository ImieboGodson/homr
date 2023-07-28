"use client";

interface SubscribeProps {
  onSubmit: () => void;
}

const Subscribe: React.FC<SubscribeProps> = ({ onSubmit }) => {
  return (
    <div className="w-full p-1 flex flex-row justify-between items-center bg-white rounded-md">
      <input
        placeholder="Enter your email address"
        className="w-[70%] px-2 font-light text-black  outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
      />
      <div className="px-4 py-2 bg-gray-100 text-black hover:bg-gray-200 rounded-md cursor-pointer transition">
        Subscribe
      </div>
    </div>
  );
};

export default Subscribe;
