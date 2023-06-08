import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';


const Breck = () => {
  return (
    <>
   <Header/>
  <section className="breck">
    <div className="center">
      <div className="text">
        <h2>
          Innovative Electronic Protection Of Yuor Office And Home Control
          Online
        </h2>
        <ul>
          <li>
            <a href="#">Intercom System</a>
          </li>
          <li>
            <a href="#">CCTV</a>
          </li>
          <li>
            <a href="#">GDPR</a>
          </li>
          <li>
            <a href="#">Encryption</a>
          </li>
          <li>
            <a href="#">Our Goal</a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis
          itaque veniam eum fugiat ut nam incidunt repudiandae veritatis, quod
          vero rerum molestiae at? Eius tempora molestias sed fuga commodi!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis
          itaque veniam eum fugiat ut nam incidunt repudiandae veritatis, quod
          vero rerum molestiae at? Eius tempora molestias sed fuga commodi!
        </p>
        <div className="button">
          <a href="#" className="botton-a">
            Get A Quate
          </a>
        </div>
      </div>
      <div className="image">
        <img src="img/electronic-img.png" alt="" />
      </div>
    </div>
  </section>
  <Footer/>
    </>
  );
}

export default Breck;
