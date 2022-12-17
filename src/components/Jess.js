import featImg from "../assets/jess_web_thumb.png";
import instagramImg from "../assets/Instagram_Glyph_Gradient.png";

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
      <br clear="all" />
      <hr />
      <p>
        Follow Jess on
      </p>

      <a href="https://www.instagram.com/jess.v_art/" target="_blank" rel="noreferrer">
      <img
        className="img-linkedin"
        src={instagramImg}
        alt="Jess Valatka on Instagram"
      />
      </a>

    </div>
  );
}
