import { NextPage } from "next";
import Hero from "../../../components/Heros";
import Packages from "../../../components/Packages";
import Installation from "../../../components/Installation";
import Why from "../../../components/Why";


const HomePage: NextPage = () => {
  return (
    <div>
      <Hero />
      <Why/>
      <Packages />
      <Installation />
    </div>
  );
};

export default HomePage;
