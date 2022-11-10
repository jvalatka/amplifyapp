import featImg from "../assets/jess_web_thumb.png";

export default function Jess() {
  return (
    <div className="container">
      <h1>About Jess</h1>
      <img
        className="img-inset"
        src={featImg}
        alt="Jess Valatka"
      />
      <p>
        Jess is an artist and musician and all-around good person.
      </p>
    </div>
  );
}
