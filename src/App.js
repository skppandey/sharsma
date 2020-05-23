import React, {useEffect} from 'react';
import logo from './images/layout_set_logo-4.png';
import triangle from './images/triangle_mask_bottom.png';
import triangle2 from './images/triangle_mask_top.png';
import bg_img2 from './images/160926-1.jpg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './cmp/Nav';
import Info1 from './cmp/Info1';
import Info2 from './cmp/Info2';

document.addEventListener('DOMContentLoaded', function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById('navbar');

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    // if (window.pageYOffset >= sticky) {
    //   console.log("window.pageYOffset >= sticky");
    // } else {
    //   console.log("Not window.pageYOffset >= sticky");
    // }
    if (window.pageYOffset >= 190) {
      console.log(window.pageYOffset);
      navbar.classList.add('sticky');
      document.getElementById('l1').classList.add('stickyColor');
      document.getElementById('l2').classList.add('stickyColor');
      document.getElementById('l3').classList.add('stickyColor');
      document.getElementById('l4').classList.add('stickyColor');
      document.getElementById('l5').classList.add('stickyColor');
      document.getElementById('l6').classList.add('stickyColor');
      document.getElementById('l7').classList.add('stickyColor');
      document.getElementById('l8').classList.add('stickyColor');
      document.getElementById('l9').classList.add('stickyColor');
    } else {
      navbar.classList.remove('sticky');
      document.getElementById('l1').classList.remove('stickyColor');
      document.getElementById('l2').classList.remove('stickyColor');
      document.getElementById('l3').classList.remove('stickyColor');
      document.getElementById('l4').classList.remove('stickyColor');
      document.getElementById('l5').classList.remove('stickyColor');
      document.getElementById('l6').classList.remove('stickyColor');
      document.getElementById('l7').classList.remove('stickyColor');
      document.getElementById('l8').classList.remove('stickyColor');
      document.getElementById('l9').classList.remove('stickyColor');
    }
  }

  /*Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon*/

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  }
});

function App() {
  useEffect(() => {
    document.title = 'sharpSMA';
    document.body.classList.add('body');
  }, []);

  return (
    <div>
      {/* <img src={logo}  alt="sharpsma" /> */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/Product"></Route>

          <Route path="/WhereToBuy"></Route>

          <Route path="/SharpTechnology"></Route>

          <Route path="/Resources"></Route>

          <Route path="/ContactUs"></Route>
        </Switch>
      </Router>
      <div className="triangle">
        <img src={triangle} alt="triangle" />
      </div>
      <Info1 />

      <div style={{ height: '500px'}}>
        <div className="bg-img2">
          <img src={triangle2} alt="triangle2" />
          {/* <img src={bg_img2}  alt="background-image" /> */}
          <div style={{height:"50px"}}></div>
          <div style={{textAlign: 'center'}}>
            <h1
              style={{
                color: 'white',
                fontFamily: 'Open Sans',
                linHeight: '1.05em',
                fontSize: '3.5em',
                fontWeight: '100',
                // marginTop:"10%"
              }}
            >
              <span>
                "Looking for Reliable
                <br />
                LCD Partner?
              </span>
            </h1>
            <div style={{height:"50px"}}></div>
            <button class="snip1099 red">
              <span>Contact</span>
              <i class="ion-android-arrow-forward"></i>
            </button>
            <div style={{height:"100px"}}></div>
          </div>
          <img src={triangle} alt="triangle2" />
        </div>
      <Info2 />

      <div style={{ height: '500px'}}>
        <div className="bg-img3">
          <img src={triangle2} alt="triangle2" />
          {/* <img src={bg_img2}  alt="background-image" /> */}
          <div style={{height:"500px"}}></div>
        
          <img src={triangle} alt="triangle2" />
        </div>
        
      </div>

      </div>
    </div>
  );
}

export default App;
