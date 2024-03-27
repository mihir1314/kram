import covervid from "../Art/import.mp4";
import cover1 from "../Art/Cover1.png"
import "../CSS/module.cover.css";
const Cover1 = () => {
  return (
    <>
      <section className="container pb-3 pb-sm-4 pb-md-5 MjSection">
        <div className="row align-items-center pb-5">
          <div className="col-md-7 col-lg-6 col-xl-5 offset-xl-1 text-center text-md-start mb-4 mb-md-0">
            <h2 className="text-light mb-4">Get the top-rated app!</h2>
            <p className="fs-lg text-light opacity-70 mb-md-5">
              Download Finder App and join the community of car enthusiasts.
              Don't stop your car search when you leave your computer with our
              Android and iOS app!
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start">
              <a className="btn-market me-sm-3 mb-3" href="#" role="button">
                <svg width="132" height="34" fill="#fff"></svg>
              </a>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <img
              className="d-block mx-auto MjCover"
              src={cover1}
              alt="Mobile App"
              controls
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cover1;
