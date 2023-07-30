"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Container from "./components/Container";
import Button from "./components/Button";
import PostCard from "./components/cards/PostCard";
import InquiryForm from "./components/InquiryForm";

const HomeClient = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-white my-20">
        <Container>
          <div className="px-32 grid grid-cols-1 md:grid-cols-2 gap-32">
            <div className="col-span-1 py-3 flex flex-col gap-8 items-start">
              <div className="flex flex-col items-start gap-1">
                <div className="text-2xl font-extrabold">
                  Property inquiry form
                </div>
                <div className="text-sm font-medium">
                  Feel free to communicate your needs to us.
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 items-start">
                <InquiryForm />
              </div>
            </div>
            <div className="rounded-lg col-span-1 h-[100vh]">
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src="/images/interior-design.jpg"
                  alt="picture of interior design"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white my-20">
        <Container>
          <div className="px-32 flex flex-col items-center gap-12">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-2xl font-extrabold">Resources and tips</div>
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
        <div className="relative bg-[#FFECEF]">
          <Container>
            <div className="w-full h-[50vh] px-32 flex flex-row justify-between items-center">
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
              <div className="absolute right-48 bottom-0 overflow-hidden">
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
