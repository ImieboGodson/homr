import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";

const page = async () => {
  return (
    <Container>
      <ClientOnly>
        <EmptyState
          title="No listings yet"
          subtitle="Try adjusting the filters, or start on clean slate."
          center
        />
      </ClientOnly>
    </Container>
  );
};

export default page;
