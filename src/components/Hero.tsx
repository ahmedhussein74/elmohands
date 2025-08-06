import Nav from "./Nav";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section
      className="h-screen pt-6 lg:pt-12 relative"
      style={{
        backgroundImage: `url("/bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
      <Marquee />
    </section>
  );
};

export default Hero;
