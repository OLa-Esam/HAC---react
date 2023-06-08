import React from 'react';

const Header = () => {
  return (
    <>
       
  <nav className='header2'>
    <div className="main-bar">
      <div className="box-addres">
        <div className="email">
          <p>
            <i className="fa-regular fa-envelope" />
            Email: Hello@seku.com
          </p>
        </div>
        <div className="drive">
          <p>
            <i className="fa-brands fa-google-drive" />
            658 line Drive St.califomia
          </p>
        </div>
      </div>
      <div className="fonts">
        <i className="fa-brands fa-facebook-f" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-linkedin-in" />
        <i className="fa-brands fa-instagram" />
      </div>
    </div>
    <div className='nav'>
      <div className="logo">
        <h1>HACKER</h1>
      </div>
      <div className="links">
        <ul>
        <li className="box-link">
            <a href="/">
              Home & About
              <i className="fa-solid fa-angle-right" />
            </a>
            <ul>
              <li className="back">
                <a href="#">Home One</a>
              </li>
              <li>
                <a href="#">Home Two</a>
              </li>
              <li>
                <a href="#">Home Three</a>
              </li>
              <li>
                <a href="#">Home Four</a>
              </li>
              <li>
                <a href="#">Home Five</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/security">Security</a>
          </li>
          <li className="box-link link-2">
            <a href="/solutions">
            Solutions
              <i className="fa-solid fa-angle-right" />
            </a>
            <ul>
              <li className="back">
                <a href="#">Services Style One</a>
              </li>
              <li>
                <a href="#">Services Style Two</a>
              </li>
              <li>
                <a href="#">Services Style Three</a>
              </li>
              <li>
                <a href="#">Services Details</a>
              </li>
            </ul>
          </li>
          <li className="box-link link-2">
            <a href="/breck">
            Breck
              <i className="fa-solid fa-angle-right" />
            </a>
            <ul>
              <li className="back">
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Checkot</a>
              </li>
              <li>
                <a href="#">Product Detalis</a>
              </li>
            </ul>
          </li>
          <li className="box-link link-2">
            <a href="/complete">
            Complete
              <i className="fa-solid fa-angle-right" />
            </a>
            <ul>
              <li className="back">
                <a href="#">Home One</a>
              </li>
              <li>
                <a href="#">Blog Grid</a>
              </li>
              <li>
                <a href="#">Blog Left Sidebar</a>
              </li>
              <li>
                <a href="#">Blog Right Sidebar</a>
              </li>
              <li>
                <a href="#">Blog Details</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="btt2">
        <div className="button bttn">
          <a href="#" className="botton-a">
            Get A Quate
          </a>
        </div>
      </div>
      <div className="click">
        <i className="fa-solid badr fa-align-right" />
        <div className="responsive">
          <i className="fa-solid fa-xmark xmark" />
          <ul className="">
            <li>
              <a href="#">
                Home
                <i className="fa-solid fa-angle-right" />
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">
                Pages
                <i className="fa-solid fa-angle-right" />
              </a>
            </li>
            <li>
              <a href="#">
                Services
                <i className="fa-solid fa-angle-right" />
              </a>
            </li>
            <li>
              <a href="#">
                Shop
                <i className="fa-solid fa-angle-right" />
              </a>
            </li>
            <li>
              <a href="#">
                Blog
                <i className="fa-solid fa-angle-right" />
              </a>
            </li>
            <li>
              <a href="#">Contect</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
     
       
     
     
  </nav>
    </>

  );
}

export default Header;
