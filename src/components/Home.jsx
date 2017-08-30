import React from 'react';
import '../sass/home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="section-row">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src={require('../images/carousel-02.jpg')} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={require('../images/carousel-09.jpg')} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src={require('../images/carousel-05.jpg')} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="delivery-signup-sctn">
            <form className="signup">
              <p className="signup-header">Newsletter</p>
              <input type="text" name="email" placeholder="email address" />
                <br/>
                <input type="number" name="number" placeholder="phone number" />
                <br/>
                <input type="submit" value="sign up now" />
            </form>
            <hr/>
            <div className="delivery-container">
              <h6 className="delivery-header">
                FREE standard delivery on all orders
              </h6>
              <br/>
              <a className="find-out-more" href="more">find out more</a>
            </div>
          </div>
        </section>

        <section className="section-row">
          <iframe width="560px" height="405px" title="tutorial" src="https://www.youtube.com/embed/w3p3dBhQYko" frameborder="0" allowfullscreen>
          </iframe>
          <div className="img-with-overlay">
            <img src={require('../images/carousel-07.jpg')} alt="Avatar" className="image"/>
            <div className="overlay">
              <div className="text">MakeApp</div>
            </div>
          </div>
        </section>

        <section className="section-row">
          <div className="trio-img-container">
            <img className="img" src={require('../images/carousel-08.jpg')} alt="pallete" />
            <img className="img" src={require('../images/home-001.jpg')} alt="eyes" />
            <img className="img" src={require('../images/carousel-04.jpg')} alt="purple" />
          </div>
        </section>
      </div>
      );
  }
}