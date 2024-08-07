import { useState } from "react";
import "./Webcard.css";
import 'remixicon/fonts/remixicon.css';

// name={member.name}
//              email={member.email}
//              extn={member.ext_no}
//              id={member.email}
//              interests={member.interests}
//              image={member.image}
//              desg={member.desg}
//              url={member.url}

const Webcard = ({ name, email, extn, desg, image, url, interests}) => {
  const [isHovered, setIsHovered] = useState(false);
  const pimage=image || "https://www.svgrepo.com/show/274909/programmer.svg";

  const urls = url.split(" & ");
  const linkedinUrl = urls[0] || "#";
  const githubUrl = urls[1] || "#";
  const emailUrl = urls[2] || "#";

  const desgs = desg.split(" & ");
  const desg1 = desgs[0] || "Web Developer";
  const desg2 = desgs[1] || "";
  const desg3 = desgs[2] || "";
  // const interestArray = desg.split(" || ");
  // const interestText = interestArray[0];
  // const skills = interestArray.slice(0).map(desg => desg.trim());

  return (
   
    <div className="containerw webcardnew">
    <div className="card">
      <div className="card__border">
        <div className="card__perfil">
          <img src={pimage} alt="card image" className="card__img" />
        </div>
      </div>

      <h3 className="card__name">{name}</h3>
      <span className="card__profession">{desg1}</span><br/>
      <span className="card__profession">{desg2}</span><br/>
      <span className="card__profession">{desg3}</span>


      <div className="info ">
        <div className="info__icon m-auto">
          <i className="ri-information-line m-auto mb-2 pb-2"></i>
        </div>

        <div className="info__border">
          <div className="info__perfil">
            <img src={pimage} alt="card image" className="info__img" />
          </div>
        </div>

        <div className="info__data">
          <h3 className="info__name">{name}</h3>
          <span className="info__profession">{interests}</span>
          {/* <span className="info__location">{intrests}</span> */}
        </div>

        <div className="info__social">
          <a href={linkedinUrl} target="_blank" className="info__social-link" rel="noopener noreferrer">
            <span className="info__social-icon">
              <i className="ri-linkedin-box-line"></i>
            </span>
          </a>

          <a href={emailUrl} target="_blank" className="info__social-link" rel="noopener noreferrer">
            <span className="info__social-icon">
            <i class="ri-mail-send-line"></i>
            </span>
          </a>

          <a href={githubUrl} target="_blank" className="info__social-link" rel="noopener noreferrer">
            <span className="info__social-icon">
              <i className="ri-github-fill"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Webcard;
