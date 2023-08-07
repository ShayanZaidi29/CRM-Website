import React from 'react'


const Services = () => {
  return (
    <div>
      <div className="services" id="shrink">
  <div className="container-fluid">
    <div className="row">

      <h3>Services provided</h3>
      <h3>by us</h3>

      {/* First Service Section */}
      <div className="col-md-6 left-services">
        <div className="row">
          <div className="col-md-8">
            <div className="service-1">
              <h3>Privacy Policy</h3>
              <p>We assure that your details are secured with us. Don't worry :)</p>
            </div>
          </div>
          <div className="col-md-4 service-icon">
            <img src="images/privacy.png" alt="Privacy Policy" />
          </div>
        </div>
      </div>

      <div className="col-md-6 right-services">
        <div className="row">
          <div className="col-md-4 service-icon">
            <img src="images/onlineorder.png" alt="Order Online" />
          </div>
          <div className="col-md-8">
            <div className="service-2">
              <h3>Order Online</h3>
              <p>Order online through paytm, credit/debit card, googlepay, or paypal</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of First Service Section */}

      {/* Second Service Section */}
      <div className="col-md-6 left-services">
        <div className="row">
          <div className="col-md-8">
            <div className="service-1">
              <h3>Email</h3>
              <p>Stay in touch with us on email to get sales alerts</p>
            </div>
          </div>
          <div className="col-md-4 service-icon">
            <img src="images/email.png" alt="Email" />
          </div>
        </div>
      </div>

      <div className="col-md-6 right-services">
        <div className="row">
          <div className="col-md-4 service-icon">
            <img src="images/chat.png" alt="Personal Interaction" />
          </div>
          <div className="col-md-8">
            <div className="service-2">
              <h3>Personal Interaction</h3>
              <p>Chat feature where customers can directly talk to the retailer regarding any order or issues.</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Second Service Section */}

      {/* Third Service Section */}
      <div className="col-md-6 left-services">
        <div className="row">
          <div className="col-md-8">
            <div className="service-1">
              <h3>D2D Service</h3>
              <p>Delivery of products will be available at their doorstep</p>
            </div>
          </div>
          <div className="col-md-4 service-icon">
            <img src="images/d2d.png" alt="D2D Service" />
          </div>
        </div>
      </div>

      <div className="col-md-6 right-services">
        <div className="row">
          <div className="col-md-4 service-icon">
            <img src="images/Faq.png" alt="FAQ" />
          </div>
          <div className="col-md-8">
            <div className="service-2">
              <h3>FAQ</h3>
              <p>Any queries regarding the product will be solved here</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Third Service Section */}

    </div>
  </div>
</div>

    </div>
  )
}

export default Services
