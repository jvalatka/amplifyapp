import linkedinImg from "../assets/linkedin.jpg"

export default function Jeremy() {
  return (
    <div className="container">
      <h1>About Jeremy</h1>
      <p>
        This is about Jeremy.  Here's a film he created in 2021 with <a href="https://vimeo.com/realtoreel">The Real To Reel Filmschool</a>:
      </p>
      <iframe title="India: An Experience" src="https://player.vimeo.com/video/577251523?h=11d50e90b6" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <p>
        Here's a Mother Aidan music video he co-directed in 2022:
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/mGC6tvSIb4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <a href="https://www.linkedin.com/in/jeremy-valatka-310558227/" target="_blank" rel="noreferrer">
        <img
          className="img-linkedin"
          src={linkedinImg}
          alt="Jeremy Valatka on LinkedIn"
        />
      </a>

    </div>
  );
}
