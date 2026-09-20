import hero from "../assets/img/jumbotron.jpg";
export default function HeroSection() {
  return (
    <div>
      <img
        src={hero}
        alt="immagine della dc comics"
        className="w-full h-96 object-cover"
      />
    </div>
  );
}
