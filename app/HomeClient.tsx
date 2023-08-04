"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { TbUserStar, TbMoneybag, TbSmartHome } from "react-icons/tb";
import { PiKey } from "react-icons/pi";
import Container from "./components/Container";
import Button from "./components/Button";
import PostCard from "./components/cards/PostCard";
import InquiryForm from "./components/InquiryForm";
import CustomerCard from "./components/cards/CustomerCard";
import Heading from "./components/Heading";
import ListingCard from "./components/cards/ListingCard";
import { useRouter } from "next/navigation";
import CityCard from "./components/cards/CityCard";
import HeroSearch from "./components/HeroSearch";
import Search from "./components/navbar/Search";

const HomeClient = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <section className=" bg-white pb-12">
        <div className="bg-[#ef626218]">
          <Container>
            <div className="w-full xl:px-32 h-[50vh] lg:h-[70vh] grid grid-cols-3 grid-rows-1">
              <div className="col-span-3 lg:col-span-2 row-span-1 flex flex-col items-start justify-center">
                <div className="w-full flex flex-col gap-6 items-start justify-center">
                  <div className="text-3xl md:text-4xl font-extrabold w-full md:w-[78%]">
                    Finding the perfect place for you just got so much easier.
                  </div>
                  <div className="w-full">
                    <div className="hidden md:block w-full">
                      <HeroSearch />
                    </div>
                    <div className="block w-full md:hidden">
                      <Search />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden col-span-1 relative lg:grid grid-cols-2 grid-rows-2 gap-2">
                <div className="absolute -bottom-2 right-16 p-4 text-xs rounded-lg bg-white shadow z-20 transition animate-custom-bounce">
                  <div className="w-full flex flex-col gap-2 items-center">
                    <div className="text-xs font-extrabold">
                      10k+ exclusive agents
                    </div>
                    <div className="flex flex-col gap-[2px] items-start">
                      <div className="flex flex-row items-center">
                        <Image
                          src="/images/person-1.jpg"
                          alt="person"
                          width={40}
                          height={40}
                          className="rounded-full object-cover overflow-hidden border border-white -mr-3"
                        />
                        <Image
                          src="/images/person-3.jpg"
                          alt="person"
                          width={40}
                          height={40}
                          className="rounded-full object-cover overflow-hidden border border-white -mr-3"
                        />
                        <Image
                          src="/images/person-4.jpg"
                          alt="person"
                          width={40}
                          height={40}
                          className="rounded-full object-cover overflow-hidden border border-white -mr-3"
                        />
                        <Image
                          src="/images/person-5.jpg"
                          alt="person"
                          width={40}
                          height={40}
                          className="rounded-full object-cover overflow-hidden border border-white -mr-3"
                        />
                        <div className="w-[40px] h-[40px] flex flex-row items-center justify-center bg-black text-white rounded-full border border-white">
                          <BiPlus size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full col-span-1 row-span-2 relative">
                  <div className="absolute h-[70vh] top-8 right-0 left-0 rounded-lg overflow-hidden">
                    <Image
                      src="/images/house-1.jpg"
                      alt="frontview of a house"
                      className="h-full w-full object-cover"
                      fill
                    />
                  </div>
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/house-2.jpg"
                    alt="frontview of a house"
                    className="h-full w-full object-cover"
                    fill
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/house-4.jpg"
                    alt="frontview of a house"
                    className="h-full w-full object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-white my-6">
        <Container>
          <div className="xl:px-32 py-8">
            <div className="p-4 w-full flex flex-col gap-8 items-center">
              <div className="text-xs">Trusted by the industry bests.</div>
              <div className="mt-5 w-full grid grid-cols-3 md:grid-cols-6">
                <Image
                  src="/images/amazon.png"
                  alt="amazon logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/amd.png"
                  alt="amd logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/cisco.png"
                  alt="cisco logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/dropcam.png"
                  alt="dropcam logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/logitech.png"
                  alt="logitech logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Image
                  src="/images/spotify.png"
                  alt="spotify logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white my-2">
        <Container>
          <div className="xl:px-32 py-8">
            <div className="w-full flex flex-col gap-14 items-center">
              <Heading
                title="Properties by Cities"
                subtitle="We have top-tier listings in every city that matters."
                secondayAction
              >
                <div
                  onClick={() => router.push("/listings/cities")}
                  className="flex flex-row gap-1 items-center justify-between cursor-pointer"
                >
                  <div className="text-sm font-extrabold">See all cities</div>
                  <BsArrowUpRight size={16} />
                </div>
              </Heading>
              <div className="w-full grid gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white my-2">
        <Container>
          <div className="xl:px-32 py-20">
            <div className="w-full flex flex-col gap-14 items-center">
              <Heading
                title="Latest Properties"
                subtitle="Get the best of the latest listing around the world."
                secondayAction
              >
                <div className="md:w-[20%] flex flex-row gap-2 items-center justify-between">
                  <div className="w-[8rem]">
                    <Button title="For Sale" onClick={() => {}} />
                  </div>
                  <div className="w-[8rem]">
                    <Button title="For Rent" onClick={() => {}} outline />
                  </div>
                </div>
              </Heading>
              <div className="w-full grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white">
        <Container>
          <div className="xl:px-32 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="relative rounded-lg col-span-1 h-[45vh] md:h-[50] lg:h-[80vh]">
              <div className="absolute bottom-6 right-20 md:right-[-15%] md:p-4 py-4 px-6 text-xs rounded-lg bg-white shadow z-20 transition animate-custom-bounce">
                <div className="w-full flex flex-row gap-4 items-center">
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
          <div className="xl:px-32 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 self-center py-3 flex flex-col items-start gap-12">
              <div className="flex flex-col items-start gap-1">
                <div className="text-2xl font-extrabold">
                  More than 10 years of experience
                </div>
                <div className="text-sm">
                  When it comes to giving you what you want, we own this game.
                </div>
              </div>
              <div className="w-full grid grid-cols-3 gap-4 lg:gap-6">
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
          <div className="xl:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 lg:gap-32">
            <div className="col-span-1 py-3 flex flex-col gap-8 items-start order-2 md:order-1">
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
            <div className="rounded-lg col-span-1 h-[45vh] md:h-[50vh] lg:h-[100vh] md:order-2 order-1">
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
          <div className="xl:px-32 flex flex-col items-center gap-12">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-2xl font-extrabold">Resources and tips</div>
              <div className="text-sm">
                Digest various views on all things real estate.
              </div>
            </div>
            <div className="grid gap-6 md:gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
        <div className="bg-[#FFECEF]">
          <Container>
            <div className="w-full h-[35vh] lg:h-[50vh] relative xl:px-32 flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <h2 className="text-2xl font-extrabold">
                  Become A Real Estate Agent
                </h2>
                <p className="text-sm text-center">
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
              <div className="hidden lg:block absolute lg:right-20 xl:right-48 bottom-0 overflow-hidden">
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
