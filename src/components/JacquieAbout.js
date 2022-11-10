import linkedinImg from "../assets/linkedin.jpg";

export default function JacquieAbout() {
  return (
    <div>
      <h1>About Jacquie</h1>
      <p>
        Jacqueline works with a number of small businesses across numerous industries to evaluate business 
        processes. Jacqueline determines and implements procedures to enhance the overall effectiveness of 
        the business. She has been President of the Massachusetts North Shore Chapter Of IMA since 2010.
      </p>
      <p>
        Jacqueline Valatka has focused on Ad-hoc Reporting for Senior Management, Strategic Planning, 
        Budgeting and Process Improvements particularly in the Accounting and Finance areas. She enjoys the 
        challenge of leveraging new technology to find more effective and efficient ways of doing business. 
        Her broad range of industry exposure includes adhesives, architecture, construction, environmental 
        soil remediation, financial services, food services, healthcare, interior design, robotics, 
        semiconductor and wholesale.
      </p>
      <p>
        Jacqueline grew up in Nairobi, Kenya. Jacquie has studied in four different college preparatory 
        systems. Her journey started with the Kenya KCE, followed by the London GCE and the French 
        Baccalaureate and finally was one of eight exchange students representing Kenya in the United 
        States where she spent a year in San Antonio, Texas studying in the US system. She has earned two 
        undergraduate degrees… a Bachelor of Science in Accounting and another in Finance as well as an 
        MBA focused on Finance and Entrepreneurship… all from Northeastern University.
      </p>
      <p>
        Jacqueline is known for her energy and adventurous spirit. She enjoys teaching, reading, 
        traveling, languages, photography, hiking, karate, swimming, running, aerobics, playing the piano, 
        dancing, cooking and much, much more. Jacqueline, her husband Joseph, and their two children reside 
        in Salem, Massachusetts.
      </p>
      <a href="https://www.linkedin.com/in/jacquelinevalatka/" target="_blank" rel="noreferrer">
        <img
          className="img-linkedin"
          src={linkedinImg}
          alt="Jacquie Valatka on LinkedIn"
        />
      </a>

    </div>
  );
}
