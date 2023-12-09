import React from 'react';
import './scss/Content.scss';

function Content() {
  return (
    <>
      <section className="sec-1">
        <div className="container">
          <img className="header-pic" src="./images/header-pic.png" alt="" />
          <h1>
            <span>Studying</span> Online is now much easier
          </h1>
          <p>Skilline is an interesting platform that will teach you in a more interactive way</p>
          <div className="btn-sec">
            <button type='button' className="btn cta-btn">
              Join for free
            </button>
            <button type='button' className="btn watch-it-btn">
              <img src="./images/play-btn.svg" alt="" />
              <span>Watch how it works</span>
            </button>
          </div>
          <div className="cards">
            {/* Card 1 */}
            <div className="card card-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_20_18)">
                          <path d="M7.12502 0.25C6.58257 0.25 6.14285 0.68972 6.14285 1.23216V3.19643H8.10713V1.23216C8.10713 0.68972 7.6674 0.25 7.12502 0.25Z" fill="white"/>
                          <path d="M20.875 0.25C20.3325 0.25 19.8928 0.68972 19.8928 1.23216V3.19643H21.8571V1.23216C21.8571 0.68972 21.4174 0.25 20.875 0.25Z" fill="white"/>
                          <path d="M24.8036 3.19643H21.8571V7.12502C21.8571 7.66746 21.4174 8.10718 20.875 8.10718C20.3325 8.10718 19.8928 7.66746 19.8928 7.12502V3.19643H8.10712V7.12502C8.10712 7.66746 7.6674 8.10718 7.12496 8.10718C6.58252 8.10718 6.1428 7.66746 6.1428 7.12502V3.19643H3.19643C1.56916 3.19643 0.25 4.51559 0.25 6.14285V24.8036C0.25 26.4309 1.56916 27.75 3.19643 27.75H24.8036C26.4308 27.75 27.75 26.4309 27.75 24.8036V6.14285C27.75 4.51559 26.4308 3.19643 24.8036 3.19643ZM25.7857 24.8036C25.7857 25.346 25.346 25.7857 24.8035 25.7857H3.19643C2.65399 25.7857 2.21427 25.346 2.21427 24.8036V12.0357H25.7857V24.8036Z" fill="white"/>
                          <path d="M8.10711 14H6.14284C5.6004 14 5.16068 14.4397 5.16068 14.9822C5.16068 15.5246 5.6004 15.9643 6.14284 15.9643H8.10711C8.64955 15.9643 9.08927 15.5246 9.08927 14.9822C9.08927 14.4397 8.64955 14 8.10711 14Z" fill="white"/>
                          <path d="M14.9821 14H13.0179C12.4754 14 12.0357 14.4397 12.0357 14.9822C12.0357 15.5246 12.4754 15.9643 13.0179 15.9643H14.9821C15.5246 15.9643 15.9643 15.5246 15.9643 14.9822C15.9643 14.4397 15.5246 14 14.9821 14Z" fill="white"/>
                          <path d="M21.8572 14H19.8929C19.3505 14 18.9107 14.4397 18.9107 14.9822C18.9107 15.5246 19.3505 15.9643 19.8929 15.9643H21.8572C22.3996 15.9643 22.8393 15.5246 22.8393 14.9822C22.8393 14.4397 22.3995 14 21.8572 14Z" fill="white"/>
                          <path d="M8.10711 17.9286H6.14284C5.6004 17.9286 5.16068 18.3683 5.16068 18.9107C5.16068 19.4532 5.6004 19.8929 6.14284 19.8929H8.10711C8.64955 19.8929 9.08927 19.4532 9.08927 18.9107C9.08927 18.3683 8.64955 17.9286 8.10711 17.9286Z" fill="white"/>
                          <path d="M14.9821 17.9286H13.0179C12.4754 17.9286 12.0357 18.3683 12.0357 18.9107C12.0357 19.4532 12.4754 19.8929 13.0179 19.8929H14.9821C15.5246 19.8929 15.9643 19.4532 15.9643 18.9107C15.9643 18.3683 15.5246 17.9286 14.9821 17.9286Z" fill="white"/>
                          <path d="M21.8572 17.9286H19.8929C19.3505 17.9286 18.9107 18.3683 18.9107 18.9107C18.9107 19.4532 19.3505 19.8929 19.8929 19.8929H21.8572C22.3996 19.8929 22.8393 19.4532 22.8393 18.9107C22.8393 18.3683 22.3995 17.9286 21.8572 17.9286Z" fill="white"/>
                          <path d="M8.10711 21.8571H6.14284C5.6004 21.8571 5.16068 22.2968 5.16068 22.8393C5.16068 23.3817 5.6004 23.8214 6.14284 23.8214H8.10711C8.64955 23.8214 9.08927 23.3817 9.08927 22.8392C9.08927 22.2968 8.64955 21.8571 8.10711 21.8571Z" fill="white"/>
                          <path d="M14.9821 21.8571H13.0179C12.4754 21.8571 12.0357 22.2968 12.0357 22.8393C12.0357 23.3817 12.4754 23.8214 13.0179 23.8214H14.9821C15.5246 23.8214 15.9643 23.3817 15.9643 22.8393C15.9643 22.2968 15.5246 21.8571 14.9821 21.8571Z" fill="white"/>
                          <path d="M21.8572 21.8571H19.8929C19.3505 21.8571 18.9107 22.2968 18.9107 22.8393C18.9107 23.3817 19.3505 23.8214 19.8929 23.8214H21.8572C22.3996 23.8214 22.8393 23.3817 22.8393 22.8393C22.8393 22.2968 22.3995 21.8571 21.8572 21.8571Z" fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_20_18">
                            <rect width="27.5" height="27.5" fill="white" transform="translate(0.25 0.25)"/>
                          </clipPath>
                        </defs>
                      </svg>
              <div>
                <h6>250k</h6>
                <p>Assisted Student</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card card-2">
              <img src="./images/user.png" alt="" />
              <div>
                <h6>User Experience Class</h6>
                <p>Today at 12.00 PM</p>
                <button className="btn">Join Now</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card card-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M28.9285 4.28574H1.07141L15 15.7586L29.086 4.31788C29.0345 4.30281 28.9818 4.29208 28.9285 4.28574Z" fill="white"/>
                        <path d="M15.676 17.9742C15.2813 18.2975 14.7133 18.2975 14.3186 17.9742L0 6.17783V24.6428C0 25.2346 0.479694 25.7143 1.07145 25.7143H28.9285C29.5203 25.7143 30 25.2346 30 24.6428V6.33641L15.676 17.9742Z" fill="white"/>
                      </svg>
              <div>
                <h6>Congratulations</h6>
                <p>Your admission completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="sec-2">
        <div className="container">
          <p>Trusted by 5,000+ Companies Worldwide</p>
          <div className="logos">
            <img src="./images/google.png" alt="" />
            <img src="./images/netflix.png" alt="" />
            <img src="./images/airbnb.png" alt="" />
            <img src="./images/amazon.png" alt="" />
            <img src="./images/facebook.png" alt="" />
            <img src="./images/grab-logo.png" alt="" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="sec-3">
        <div className="container">
          <h2>All-In-One <span>Cloud Software.</span></h2>
          <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
          <div className="grid">
            {/* Grid item 1 */}
            <div className="grid-item">
              <h3>Online Billing, Invoicing, & Contracts</h3>
              <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
            </div>

            {/* Grid item 2 */}
            <div className="grid-item">
              <h3>Easy Scheduling & Attendance Tracking</h3>
              <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
            </div>

            {/* Grid item 3 */}
            <div className="grid-item">
              <h3>Customer Tracking</h3>
              <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="sec-4">
        <div className="container container-xxl">
          <div className="row">
            <div className="col">
              <p className="top"><span></span>TESTIMONIAL</p>
              <h1>What They Say?</h1>
              <p>Skilline has got more than 100k positive ratings from our users around the world. </p>
              <p>Some of the students and teachers were greatly helped by the Skilline.</p>
              <p>Are you too? Please give your assessment</p>
              <button type="button" className="btn btn-custom">Write your assessment
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="39.5" stroke="#F48C06" />
                  <path d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z" fill="#F48C06" />
                </svg>
              </button>
            </div>
            <div className="col">
              {/* Testimonial Carousel */}
              <div id="testimonialControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/carousel-image.png" className="d-block" alt="" />
                    <div className="card">
                      <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."</p>
                      <div className="row">
                        <div className="col"><p>Gloria Rose</p></div>
                        <div className="col">
                          <img src="./images/stars.svg" alt="" />
                          <p className="review">12 reviews at Yelp</p>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                <button className="carousel-control-prev carousel-btn" type="button" data-bs-target="#testimonialControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next carousel-btn" type="button" data-bs-target="#testimonialControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content;
