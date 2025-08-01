// Home.jsx

// import logo from './transparentLogo.png';

function Home() {
  return (
    <>
      <div className="welcomeheader">
        <h2>welcome!
                          {/* <img src={logo} alt="biz logo" className="logo" /> */}

        </h2>
      </div>

      <div className="welcome">
        <p> welcome to purepostage: a new kind of shipping platform designed to make online shopping more eco-friendly and less stressful for small business owners. while the full platform is still in development, we're currently inviting early partners to join our beta program to test a MVP version, and offer feedback on core features such as label generation and environmental tracking.
          this is just the beginning, and we’d love your input as we build something better together.
        </p>
      </div>
    </>
  );
}

export default Home;