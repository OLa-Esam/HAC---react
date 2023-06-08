import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
const Complete = () => {
  return (
    <>
    <Header/>
        <section className="complete">
    <div className="img-left">
      <img src="img/complete-img.jpg" alt="" />
    </div>
    <div className="text-right">
      <div className="title-2">
        <h2>
          The Most Complete And Effective Protection For Your Home And Office
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum eaque maiores necessitatibus vel maxime
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="font">
            <i className="fa-brands fa-artstation" />
          </div>
          <h3>Check And Search Hazads</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            ducimus.
          </p>
        </div>
        <div className="card">
          <div className="font">
            <i className="fa-brands fa-artstation" />
          </div>
          <h3>Check And Search Hazads</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            ducimus.
          </p>
        </div>
        <div className="card">
          <div className="font">
            <i className="fa-brands fa-artstation" />
          </div>
          <h3>Check And Search Hazads</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            ducimus.
          </p>
        </div>
        <div className="card">
          <div className="font">
            <i className="fa-brands fa-artstation" />
          </div>
          <h3>Check And Search Hazads</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            ducimus.
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
    </>
  );
}

export default Complete;
