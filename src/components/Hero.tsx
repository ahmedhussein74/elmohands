import Nav from "@/components/Nav";

const Hero = () => {
  return (
    <section
      className="h-screen pt-6 lg:pt-12"
      style={{
        backgroundImage: `url("/bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
    </section>
  );
};

export default Hero;
