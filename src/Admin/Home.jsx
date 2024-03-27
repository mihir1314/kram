import { useEffect } from "react";
import "./css/module.Home.css";
import { useState } from "react";
import axios from "axios";
import Dashbord from "./dashbord";
import NavBar from './NavBar';
import DefaultComponent from "../Components/DefaultComponent";
import AddPost from './AddPost'
import Customers from "./Customers";
import Orders from "./Orders";

function Home() {
    const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="adminhome">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link navAdmin px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {selectedTab === "Dashboard" ? (
        <>
          <Dashbord/>
        </>
      ) :selectedTab === "Orders" ? (
        <>
          <Orders/>
        </>
      ) :selectedTab === "Products" ? (
        <>
          <AddPost/>
        </>
      ) :selectedTab === "Customers" ? (
        <>
          <Customers/>
        </>
      ) :selectedTab === "Reports" ? (
        <>
          <Dashbord/>
        </>
      ) :selectedTab === "Integrations" ? (
        <>
          <Dashbord/>
        </>
      ) : (
        // Default condition if none of the tabs match
        <DefaultComponent></DefaultComponent>
      )}
        </div>
      </div>
      <script
        src="/docs/5.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
        integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
        integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"
        crossOrigin="anonymous"
      ></script>
      <script src="dashboard.js"></script>
    </div>
  );
}

export default Home;
