import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

const Solutions = () => {
  return (
    <>
      <Header/>
    {/* solutions */}
    <section className="solutions">
      <div className="title">
        <h2>High-Serformance Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum libero
          velit ipsa. Minus, soluta consectetur!
        </p>
      </div>
      <div className="img-center">
        <div className="image-1">
          <img src="img/1.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sunt, omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="box-img">
          <img src="img/2.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="box-img">
          <img src="img/3.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="box-img">
          <img src="img/4.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="box-img">
          <img src="img/5.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="image-1">
          <img src="img/6.jpg" alt="" />
          <div className="text">
            <h3>Secure Managed It</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
              omnis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sunt, omnis!
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  
  );
}

export default Solutions;
