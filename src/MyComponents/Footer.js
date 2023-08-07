import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer">
  <div className="container-fluid">
    <div className="row">
      <div className="news-letter">
        <h2>NEWSLETTER</h2>
        <form>
          <div className="form-group">
            <label className="label" htmlFor="exampleInputEmail1"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" />
          </div>
          <button type="submit" className="btn-form btn-1">Subscribe</button>
        </form>
        <form method="post" action={window.location.pathname}>
          {/* You can remove this empty <form> tag or replace with appropriate content */}
        </form>
        <div className="footer-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="about us.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contactus.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer
