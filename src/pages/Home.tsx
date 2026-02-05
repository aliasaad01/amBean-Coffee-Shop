import MainLayout from "../layouts/MainLayout";
import Container from "../components/ui/Container";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import CTA from "../sections/CTA";

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <Hero />
        <hr />
        <Products />
        <hr />
        <CTA />
      </Container>
    </MainLayout>
  );
};

export default Home;
