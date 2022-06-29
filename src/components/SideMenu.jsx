import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-accordion/dist/index.css'
import { Accordion } from 'react-bootstrap-accordion'
import './Dropdown/dropdown.css'
const SideMenu = () => {
  


  return (
   <>
          <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Δημιουργικό</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple ">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
                       <Accordion title='Υπηρεσίες'>
                      <div className="row">
                        <div class="btn-group dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                            Dropright
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                          </ul>
                        </div>
                       </div>
                     </Accordion>
                  </div>
              </div>
            </nav>
   </>
  )
}

export default SideMenu