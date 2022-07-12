import { useState } from 'react';
import '../about/about.css';

const About = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main className="about">
      <section className="aboutTitleSection">
        <span className="aboutTitle">Who am I?</span>
      </section>
      <img
        src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-2882509.jpg&fm=jpg"
        alt=""
        className="aboutImg"
      />
      <section className="aboutIntroSection">
        <div className="aboutIntroSubtitles">
          <h2
            className={
              visible
                ? 'aboutIntroSubtitle de-active'
                : 'aboutIntroSubtitle as-dev'
            }
            onClick={(e) => setVisible(false)}
          >
            As a Developer
          </h2>
          <h2
            className={
              visible
                ? 'aboutIntroSubtitle as-friend'
                : 'aboutIntroSubtitle de-active'
            }
            onClick={(e) => setVisible(true)}
          >
            As a friend
          </h2>
        </div>
        {visible ? (
          <div className="aboutDescContainer">
            <p className="aboutIntroDesc as-friend">
              Since 2021, I had studied Physics in graduate school. But now, I
              changed my career to be a web front-developer. However, I still
              deeply intereted in Physics 'cause it's awesome!
              <br />
              Also, I loved almost music, which is what kinds of genre.
              Especially, I loved Blues, garage rock genre, and psychedelic
              music, such as "Light My Fire" song by The Doors. So, I'll
              introduce my favorite songs.
              <br />
              In addition, I spend a time mostly watching movie when I take some
              rest. So, I hope to share what I loved movies!
              <br />
              If you wanna some conversation or discuss what I posted, please do
              not hesitate reply your opinion on my post!
              <br />
            </p>
            <p className="aboutOutroDesc">
              Heretofore, I introduced myself! Now, I'm SO excited 'cause I can
              discuss others, who read my post!
              <br />
              Finally, thank you for reading my post and visit my blog!
            </p>
          </div>
        ) : (
          <div className="aboutDescContainer">
            <p className="aboutIntroDesc as-dev">
              I am a passionate junior developer who is trying to build various
              experiences and skills as a web front developer!
              <br />
              I'm interested in writing sementic HTML, CSS for user-friendly UI,
              and creating convenient and useful web services using React.
              <br />
              Also, I like to learn new things about my development, create
              things what I think about, and share them with other developers
              around me.
              <br />
              As a web developer, I'm constantly learning with happy mind. With
              this mindset, I hope to make fully serviced website by myself.
              That is reason why I made this blog. This blog is my first fully
              running website!
              <br />I think of web/app service developers as space creators that
              connect providers and customers. To this end, we strive to create
              better service by solving problems with an active and proactive
              attitude and communication. And I'm striving to grow into a
              developer who can be proud of calling myself a "Developer".
            </p>
            <p className="aboutOutroDesc">
              Heretofore, I introduced myself! Now, I'm SO excited 'cause I can
              discuss others, who read my post!
              <br />
              Finally, thank you for reading my post and visit my blog!
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default About;
