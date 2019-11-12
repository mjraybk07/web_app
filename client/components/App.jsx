import React from 'react';
import './App.css';
import Header from './header/Header.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="root-home">
        <div className="navbar navbar-dimensions elevated">
          <span className="navbar-item navbar-item-dimensions clickable">About</span>
          <span className="navbar-item navbar-item-dimensions clickable">Work</span>
          <span className="navbar-item navbar-item-dimensions clickable">Contact</span>
        </div>

        <Header/>
        
        <div className='home-section container-about'>
          <img className="profile-picture-about" alt="profile-pic" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Alpaca_headshot.jpg/520px-Alpaca_headshot.jpg' />
          <div className="about-text">
            <span className="about-text-main">
              {"Hi I\'m Michael"}
            </span>
            <br/>
            <span className="about-text-subtitle">
              {"I\'m a software engineer"}
            </span>
            <br/>
            <br/>
            {"I like to build things with code"}
            <br/>
            {"Some of my interests are: Web development, UI/UX design, game development, analytics, microservices and AR/VR."}
            <br/>
            <br/>
            {"If you would like to learn more: "}
            <a href="https://www.linkedin.com/in/TEMP_TEMP/">
              <span className="about-cv"> {'Here is my LinkedIn'}</span>
            </a>
            <span>{', '}</span>
            <a href="https://github.com/TEMP_TEMP">
              <span className="about-cv"> {'Here is my GitHub'}</span>
            </a>
            <br/>
            <br/>
            {"Keep scrolling to see some of my projects."}
          </div>
        </div>

        <div className="work">
          <div className="home-section work-container">
            <div className="labels-work">
              <div className="labels-container text-unselectable">
                <label className="label special-label special-label-selected clickable">show all</label>
                <label className="label common-label clickable">web</label>
                <label className="label common-label clickable">experiment</label>
                <label className="label common-label clickable">game</label>
                <label className="label common-label clickable">ar</label>
                <label className="label common-label clickable">vr</label>
                <label className="label common-label clickable">microservices</label>
                <label className="label common-label clickable">analytics</label>
              </div>
            </div>
            <div className="project-container-work">
              <div className="projects-container">
                
                <div className="project-card clickable text-unselectable highlight-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Alpacas.JPG/440px-Alpacas.JPG"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"Game"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable highlight-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Alpaca_skeleton.jpg/440px-Alpaca_skeleton.jpg"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"VR"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable highlight-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Guanako.jpg/520px-Guanako.jpg"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable highlight-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Suri-alpaca.jpg"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"Analytics"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable normal-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bolivian_Alpaca.jpg/440px-Bolivian_Alpaca.jpg"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"Microservices"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable normal-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Alpaca_wool_scarf.JPG/400px-Alpaca_wool_scarf.JPG"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"Game"}</label>
                    </div>
                  </div>
                </div>

                <div className="project-card clickable text-unselectable normal-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Otavalo_Artisan_Market_-_Andes_Mountains_-_South_America_-_photograph_033.JPG/400px-Otavalo_Artisan_Market_-_Andes_Mountains_-_South_America_-_photograph_033.JPG"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"Analytics"}</label>
                    </div>
                  </div>
                </div>


                <div className="project-card clickable text-unselectable normal-card project-fade-enter-done">
                  <img className="project-image" alt="project image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"/>
                  <div className="info-bar">
                    <div>{"Project Name"}</div>
                    <div>
                      <label className="label-minimal clickable">{"Web"}</label>
                      <label className="label-minimal clickable">{"AR"}</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="home-section contact-container">
          <div>
            {"If you would like to contact me you may reach out via email"}
          </div>
          <div className="contact-social-group">
            <a className="contact-item" href="mailto:xyzabc.temp@temp.com" target="_blank" rel="me noopener noreferrer">
              <span className="contact-item-icon contact-item-icon-margin">
                <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="hsl(288, 39%, 49%)" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </span> 
              <span className="contact-item-text">{"xyzabc.temp@temp.com"}</span>
            </a>
          </div>
          <div className="contact-social-group">
            <a className="contact-item" href="https://github.com/mjraybk07" target="_blank" rel="me noopener noreferrer" >
              <span className="contact-item-icon contact-item-icon-margin">
                <i className={"fab fa-github"} aria-hidden="true"></i>
              </span> 
              <span className="contact-item-text">{""}</span>
            </a>
          
            <a className="contact-item" href="https://www.linkedin.com/in/TEMP_TEMP/" target="_blank" rel="me noopener noreferrer">
              <span className="contact-item-icon contact-item-icon-margin">
                <i className={"fab fa-linkedin-in"} aria-hidden="true"></i>
              </span> 
              <span className="contact-item-text">{""}</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default App;