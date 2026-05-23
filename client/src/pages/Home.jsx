import React from "react";

import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import WorkExamples from "../components/WorkExamples";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Workflow } from "../components/Workflow";
import { Testimonials } from "../components/Testimonials";
import About from "../components/About";
import  Contact  from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WorkExamples/>
      <WhyChooseUs />
      <Workflow />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;