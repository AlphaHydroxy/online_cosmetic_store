import React from 'react'
import '../sass/footer.css'
import FontAwesome from 'react-fontawesome'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-details-row">
          <div className="footer-items">terms and conditions</div>
          <div className="footer-items">privacy policy</div>
          <div className="footer-items">about us</div>
          <div className="footer-items">copyright</div>
        </div>
        <div className="social-media">
          <FontAwesome
                  className='social-icon'
                  name='facebook-official'
                  size='2x'
                  // spin
                />
          <FontAwesome
                  className='social-icon'
                  name='twitter'
                  size='2x'
                  // spin
                />
          <FontAwesome
                  className='social-icon'
                  name='snapchat'
                  size='2x'
                  // spin
                />

        </div>
      </div>
      );
  }
}