"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { TbUserStar, TbMoneybag, TbSmartHome } from "react-icons/tb";
import { PiKey } from "react-icons/pi";
import Container from "./components/Container";
import Button from "./components/Button";
import PostCard from "./components/cards/PostCard";
import InquiryForm from "./components/InquiryForm";
import CustomerCard from "./components/cards/CustomerCard";

const HomeClient = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-white my-6">
        <Container>
          <div className="px-32 py-20">ANOTHER ONE</div>
        </Container>
      </section>
      <section className="bg-white">
        <Container>
          <div className="px-32 py-20 grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="relative rounded-lg col-span-1 h-[80vh]">
              <div className="absolute bottom-6 right-[-15%] p-4 text-xs rounded-lg bg-white shadow z-20 transition animate-custom-bounce">
                <div className="w-full flex flex-row gap-2 items-center">
                  <div className="p-3 rounded-full text-white bg-[#EF6262]">
                    <TbSmartHome size={23} />
                  </div>
                  <div className="flex flex-col gap-[2px] items-start">
                    <div className="text-xs font-thin">Total Rent</div>
                    <div className="text-sm font-extrabold">4,382 Units</div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src="/images/home.jpg"
                  alt="picture of house"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="col-span-1 self-center ">
              <div className="w-[86%] flex flex-col gap-8 items-start">
                <div className="flex flex-col gap-1 items-start">
                  <div className="text-2xl font-extrabold">Why choose us?</div>
                  <div className="text-xs">
                    Let us show you what we can do for you.
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-row gap-5 items-start justify-start">
                    <div className="rounded-full p-4 bg-[#ef626218] text-[#EF6262]">
                      <TbUserStar size={18} />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start">
                      <div className="text-sm font-bold">
                        Property Management
                      </div>
                      <div className="text-xs leading-5">
                        We will handle all the work to deliever to you your
                        dreams, you just come up with the idea.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start">
                    <div className="rounded-full p-4 bg-[#ef626218] text-[#EF6262]">
                      <PiKey size={18} />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start">
                      <div className="text-sm font-bold">Mortgage Services</div>
                      <div className="text-xs leading-5">
                        We always make sure that our clients get the best
                        mortgage structure for their properties.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start">
                    <div className="rounded-full p-4 bg-[#ef626218] text-[#EF6262]">
                      <TbMoneybag size={18} />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start">
                      <div className="text-sm font-bold">Currency Services</div>
                      <div className="text-xs leading-5">
                        We make sure that nothing stands in your path to getting
                        the home of your dreams, not even currency
                        fluctuations/variations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-100 my-4">
        <Container>
          <div className="px-32 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 self-center py-3 flex flex-col items-start gap-12">
              <div className="flex flex-col items-start gap-1">
                <div className="text-2xl font-extrabold">
                  More than 10 years of experience
                </div>
                <div className="text-sm">
                  When it comes to giving you what you want, we own this game.
                </div>
              </div>
              <div className="w-full grid grid-cols-3 gap-6">
                <div className="col-span-1 flex flex-col gap-1 items-start">
                  <div className="text-2xl font-extrabold">85%</div>
                  <div className="text-xs">Completed Property</div>
                </div>
                <div className="col-span-1 flex flex-col gap-1 items-start">
                  <div className="text-2xl font-extrabold">99%</div>
                  <div className="text-xs">Satisfied Customer</div>
                </div>
                <div className="col-span-1 flex flex-col gap-1 items-start">
                  <div className="text-2xl font-extrabold">95%</div>
                  <div className="text-xs">Home Ownership</div>
                </div>
              </div>
            </div>
            <div className="col-span-1 self-center py-1 flex flex-row items-center justify-center">
              <div className="w-full">
                <CustomerCard
                  title="Great Team"
                  body="The team at Homr is just incredible and they move fast to get you what you want and just how you want it. They are just special people doing special things."
                  rating={3}
                  name="Chu Leng"
                  position="CEO, Mackro inc."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

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
