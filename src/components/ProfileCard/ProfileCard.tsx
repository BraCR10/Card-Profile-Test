import { useGitHubAvatar } from "../../hooks/useGitHubAvatar";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  age: number;
  githubUsername: string;
  profilePicture?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email: string;
  location: string;
  tel: string;
  career: string;
  university: string;
  technologies: string[];
}

export function ProfileCard({
  name,
  age,
  career,
  email,
  location,
  university,
  technologies,
  tel,
  githubUsername,
  profilePicture,
  linkedin,
  twitter,
  instagram,
}: ProfileCardProps) {
  const { avatar } = useGitHubAvatar(githubUsername);

  return (
    <article className="profile-card">
      <div className="profile-card-flip">
        <section className="profile-card-front">
          <section className="profile-top-header"></section>

          <section className="profile-card-images">
            <img
              src={profilePicture}
              alt="Personal profile"
              className="personal-profile-img"
            />
            <img
              src={avatar}
              alt="GitHub avatar"
              className="github-profile-img"
            />
          </section>

          <section className="profile-card-info">
            <h1 className="profile-card-name">{name}</h1>
            <div className="profile-tags">
              <span>{career}</span>
              <span>{location}</span>
              <span>{age} years</span>
              <span>{university} </span>
            </div>
          </section>

          <div className="card-indicator">
            <span>Let's go back</span>
            <div className="arrow">↗</div>
          </div>
        </section>

        <section className="profile-card-back">
          <h1 className="back-title">Contact Information</h1>

          <div className="back-content">
            <div className="contact-section">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${email}`} className="contact-value">
                    {email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-info">
                  <span className="contact-label">Cellphone</span>
                  <span className="contact-value">{tel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-section">
            <h3 className="tech-title">Technologies</h3>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="profile-card-links">
            <a href={`https://github.com/${githubUsername}`}>
              <img src={"https://img.icons8.com/ios-filled/50/github.png"} alt="GitHub" />
            </a>
            <a href={linkedin}>
              <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" />
            </a>
            <a href={twitter}>
              <img src="https://img.icons8.com/ios-filled/50/x.png" alt="X" />
            </a>
            <a href={instagram}>
              <img src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="Instagram" />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
