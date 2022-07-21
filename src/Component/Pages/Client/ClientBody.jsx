import React from "react";
import AddClientForm from "./AddClientForm";
import "./ClientBody.css";

function ClientBody() {
  return (
    <div className="client-body">
      <section class="content">
        <div classname="container-fluid">
          <div classname="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="custom-card-header">
                    <div className="custom-card-header-button">
                      
                        {<AddClientForm />}
                      
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="custom-card-body-search">
                    <div className="navbar-search-block">
                      <form className="form-inline">
                        <div className="input-group input-group-sm">
                          <label className="custom-label">Search: </label>
                          <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>
                          Client name <i className="bi bi-arrow-down-up"></i>{" "}
                        </th>
                        <th>Email address</th>
                        <th>Login DID</th>
                        <th>timeout</th>
                        <th>status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amol Tribhuwan</td>
                        <td>9860603677</td>
                        <td>2</td>
                        <td>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#modal-x2"
                          >
                            3
                          </a>
                        </td>
                        <td>active</td>
                        <td>
                          <div className="custom-button-container">
                            <div className="custom-button">
                              <button type="submit" className="btn btn-primary">
                                Edit
                              </button>
                            </div>
                            <div className="custom-button">
                              <button
                                type="submit"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#modal-x1"
                              >
                                Send Script
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="custom-Pagination">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li className="page-item">
                        <a class="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientBody;
