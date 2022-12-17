import featImg from "../assets/Jay.jpg";
import linkedinImg from "../assets/linkedin.jpg";

export default function JayAbout() {
  return (
    <div>
      <h1>About Jay</h1>
      <img
        className="img-inset"
        src={featImg}
        alt="Jay Valatka"
      />
      <p>
        Joseph "Jay" Valatka is a PC technician and web developer who continues to work with many individuals and 
        organizations to help them gain a direct presence on the web and/or get better results with their computers 
        and networks.
      </p>
      <p>
        Jay refers to himself as a "tenacious problem solver." For every problem carefully defined after initial 
        visits with a client, he seeks and selects the proper tools and knowledge that will provide the best all-around 
        solution. The solution could be a small network, new PC hardware, or software applications. Jay also has 
        decades of experience helping others become more knowledgeable about their PCs and how to more effectively use 
        them.
      </p>
      <p>
        Jay has grown up with Microsoft-based systems, starting with those heady days of MS-DOS and continuing onward 
        with the latest Windows operating system. However, he also uses open-source solutions frequently, with most of 
        his work done on Ubuntu Linux.  He has recently taken forays into cloud computing and earned the Amazon Web
        Services Cloud Developer Associate Certification.
      </p>
      <p>
        Jay also loves exploring all kinds of music. He used to be a radio deejay! He has also written a screenplay 
        for a local film production.
      </p>
      <p>
        Jay graduated from (what used to be) Daniel Webster College with a Bachelor of Science degree in Computer Science. He, his wife 
        Jacquie, and their two children currently reside in Salem, Massachusetts.
      </p>
      <hr />
      <p>
        Follow Jay on
      </p>

      <a href="https://www.linkedin.com/in/valatka/" target="_blank" rel="noreferrer">
      <img
        className="img-linkedin"
        src={linkedinImg}
        alt="Jay Valatka on LinkedIn"
      />
      </a>
    </div>
  );
}
