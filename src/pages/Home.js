import Hero from '../component/Hero/Hero';
import Testimonial from '../component/Testimonial/Testimonial';
import Footer from '../component/Footer/Footer';
import Features from '../component/Features/Features';
import ViewProject from '../component/Projects/ViewProject'
import ContactMe from '../component/ContactMe/ContactMe'

const Home = () => {
  return (
    <>
      <Hero /> 
      <Features />
      <ViewProject />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  )
}

export default Home;
