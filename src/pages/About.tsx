import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import AboutProcess from "../components/about/AboutProcess";
import AboutCTA from "../components/about/AboutCTA";
import AboutTeam from "../components/about/AboutTeam";
import AboutNumbers from "../components/about/AboutNumbers";

const About = () => {
  return (
    <MainLayout>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutProcess />
      <AboutValues />
      <AboutNumbers />
      <AboutCTA />
    </MainLayout>
  );
};

export default About;
