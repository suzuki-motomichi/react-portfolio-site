import CoverImage from '../images/spcat.png';
import ProfileImage from '../images/una.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
        <div className="display-table-contents">
          {/* カバー写真 */}
          <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
          <h1 className="title-text">鈴木</h1>
          <h3 className="title-text">バックエンドエンジニア</h3>
          <ul className="social-icons">
            <li className="icon-link">
              {/* TODO */}
              <a href="https://twitter.com/" >
                <FaTwitter color="white" size="2rem" />
              </a>
            </li>
            <li className="icon-link">
              {/* TODO */}
              <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </header>
  );
};
