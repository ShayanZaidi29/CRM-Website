import React from 'react'

const Header = () => {
  return (
    <div>
      
<div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <button type="button" class="btn btn-primary"data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">CRM</button>
      <p class="d-inline-flex gap-1">
  
 
</p>
<div class="collapse" id="collapseExample">
  
</div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Header