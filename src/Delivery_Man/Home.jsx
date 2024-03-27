import './css/module.Home.css'

const Home = () => {
    return (
        <div className="container-fluid bg-dark text-light">
          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    
            {/* Main Content */}
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {/* Header */}
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Delivery Man Portal</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-light">Settings</button>
                  </div>
                </div>
              </div>
    
              {/* Section for Used Products */}
              <div className="col-md-6 mb-4">
                <div className="card bg-dark border-light">
                  <div className="card-header bg-dark border-light">
                    <h4 className="text-light">Used Products</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover text-light">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Date Used</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Sample data */}
                          <tr>
                            <td>Product 1</td>
                            <td>Description of Product 1</td>
                            <td>123 Street, City, Country</td>
                            <td>January 1, 2024</td>
                          </tr>
                          <tr>
                            <td>Product 2</td>
                            <td>Description of Product 2</td>
                            <td>456 Street, City, Country</td>
                            <td>February 15, 2024</td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Section for Product Locations */}
              <div className="col-md-6 mb-4">
                <div className="card bg-dark border-light">
                  <div className="card-header bg-dark border-light">
                    <h4 className="text-light">Product Locations</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover text-light">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Location</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Sample data */}
                          <tr>
                            <td>Product 1</td>
                            <td>123 Street, City, Country</td>
                          </tr>
                          <tr>
                            <td>Product 2</td>
                            <td>456 Street, City, Country</td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home;