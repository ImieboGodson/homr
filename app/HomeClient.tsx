"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Container from "./components/Container";
import Button from "./components/Button";
import PostCard from "./components/cards/PostCard";

const HomeClient = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-white my-20">
        <Container>
          <div className="px-32 flex flex-col items-center gap-8">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-2xl font-bold">Resources and tips</div>
              <div className="text-sm">
                Digest various views on all things real estate.
              </div>
            </div>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <PostCard
                image="/images/post-1.jpg"
                title="BestLife magazine reveils best cities to enjoy biking and walks."
              />
              <PostCard
                image="/images/post-2.jpg"
                title="How to write a listing description that works"
              />
              <PostCard
                image="/images/post-3.jpg"
                title="Evaluating your listing and coming up with the best price for and your client"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pt-20">
        <div className="relative   bg-[#FFECEF]">
          <Container>
            <div className="w-full h-[50vh] px-12 flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2 items-start">
                <h2 className="text-2xl font-extrabold">
                  Become A Real Estate Agent
                </h2>
                <p className="text-sm">
                  We only work with the best companies and people in the world.
                </p>
                <div className="w-[10rem] mt-4">
                  <Button
                    title="Register Now"
                    icon={BsArrowUpRight}
                    onClick={() => {}}
                    primary
                  />
                </div>
              </div>
              <div className="absolute right-32 bottom-0 overflow-hidden">
                <Image
                  src="/images/man.png"
                  width={260}
                  height={200}
                  alt="man"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
