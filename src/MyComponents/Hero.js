import React from "react";


export default function FixedNavbar() {
  return (
    <>
      <header style={{ paddingLeft: 0, paddingTop: '1px' }}>
        <div className expand="lg" fixed = "w-100" light bgColor="white" style={{position: 'fixed'}}>
          <div className fluid>
            <div classNameToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation">
            </div>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <div classNameNav right className="mb-2 mb-lg-0">
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 text-center bg-light" style={{marginTop: '58px'}}>
          <h1 className="mb-3">Customer Relationship Management</h1>
          <h4 className="mb-3">A Platform For All Types Of Retailers</h4>
          <a className="btn btn-primary" href="#" role="button"> Explore
           
          </a>
        </div>
      </header>
    </>
  );
}