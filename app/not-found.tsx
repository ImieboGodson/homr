import Link from "next/link";
import Image from "next/image";
import Container from "./components/Container";

export default function NotFound() {
  return (
    <div className="relative w-full h-[80vh] flex flex-col justify-center items-center bg-white text-black ">
      <div className="w-fit h-fit text-[12.5rem] font-bold tracking-widest">
        404
      </div>
      <div className="absolute bottom-8 right-0 left-0 flex flex-row justify-center items-center">
        <p className="text-sm font-light">
          Take me back to the{" "}
          <Link href="/" className="underline font-normal">
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
