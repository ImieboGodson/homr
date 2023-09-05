import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import CreatListingClient from "./CreatListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

const CreateListing = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="w-full h-[82vh] overflow-y-auto no-scrollbar">
      <Container>
        <ClientOnly>
          <CreatListingClient currentUser={currentUser} />
        </ClientOnly>
      </Container>
    </div>
  );
};

export default CreateListing;
