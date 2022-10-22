import featImg from "../assets/20200215_142512.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="The Valatkas"
      />

      <h1>{title}</h1>
      <p>
        We're an American family, doing stuff, going places.
      </p>
      <p>
        Jay is the web designer and PC system guy.
      </p>
      <p>
        Jacquie is the business manager, financial analyst, consultant, and aquarobics instructor.
      </p>
      <p>
        Jeremy is the filmmaker and Smash Brothers enthusiast.
      </p>
      <p>
        Jessica is the artist, musician, and future sustainability engineer.
      </p>
      <p>
        Feel free to look around!
      </p>
    </div>
  );
}
