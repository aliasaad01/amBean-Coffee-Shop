import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </MainLayout>
  );
};

export default Contact;
