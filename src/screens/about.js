'use-strict'

//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {

  
        render() {
          return (
            <div>
              
              {/* page-title */}
              <section className="banner-style-three">
                <div className="image-layer" style={{backgroundImage: 'url(images/icons/banner-bg-2.png)'}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <h1>About Us page</h1>
                        <p>Reach out to the world’s most reliable IT services.</p>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                      <div className="image-box  js-tilt">
                        <figure className="image clearfix wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/icons/about-us.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* page-title end */}
              {/* our-history */}
              <section className="our-history">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_53">
                        <div className="content-box wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="sec-title"><h2>What we offer?</h2></div>
                          <div className="text">
                            <p>The Tech Bridge brings for you a School Management Software with tons of features and options to make your institution a class apart.
                              The Tech Bridge offers a unique way of Institute and Coaching Management by just not managing your staff, students and fees but also a more efficient and cohesive way to manage your student enquires.</p>
                            <p> Is that it? No. We offer not just you but also the parents a much better experience of day to day child management and systematic child progress.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column" style={{paddingTop: '40px'}}>
                      <div id="image_block_47">
                        <figure className="image wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="about img/img2.svg" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div></section>
              {/* our-history end */}
              {/* video-section */}
              <section className="our-history">
                <div className="container">
                  <div className="row">
                    {/*--------------*/}
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box js-tilt" style={{paddingRight: '50px'}}>
                        <figure className="image wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="about img/undraw_winners_ao2o (1).svg" alt="" /></figure>
                      </div>
                    </div>
                    {/*---------------*/}
                    {/*---------secnd part-------*/}
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column" style={{paddingLeft: '90px', paddingTop: '20px'}}>
                      <div id="content_block_53">
                        <div className="content-box wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="sec-title" align="left"><h2>Aim &amp; Belief</h2></div>
                          <div className="text">
                            <p>The Tech Bridge comes with a mindset wherein our first and foremost aim is to provide a continuous and immediate support to the customers.</p>
                            <p> The Tech Bridge during a survey realized that most of the customers considered the features as secondary but, laid a huge interest in the after sales service from the company’s side. The lack of the after sales service from most of the companies running in this domain has led to a sudden downfall because of the unsatisfied customers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*--------secnd part end-----------*/}
                  </div>
                </div>
              </section>
              {/* video-section end */}
              {/* counter-style-three */}
              <section className="our-history">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_53">
                        <div className="content-box wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="sec-title"><h2>Social Link Integrations</h2></div>
                          <div className="text">
                            <p> We make sure that there is nothing that stops your school from making adequate presence in the market.</p> 
                            <p>With our social link options you can open multiple platforms for your clients which not just helps them with having a detailed information about you but also helps in creating a rock solid impact on them.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div id="image_block_47">
                        <figure className="image wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="about img/undraw_buffer_wq43.svg" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* counter-style-three end */}
              {/* clients-style-four */}
              {/* our-team */}
              <center> <h2 style={{color: 'black', fontSize: '60px', paddingTop: '100px'}}>Our Team Members</h2></center>
              <section className="team-style-three centred">
                <div className="container ">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-three">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src="about img/team-4.png" alt="" />
                            <ul className="social-links clearfix">
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-skype" /></a></li>
                            </ul>
                          </figure>
                          <div className="lower-content">
                            <h5><a href="#">Brijesh Singh</a></h5>
                            <span className="designation"> CTO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-three">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src="about img/team-5.png" alt="" />
                            <ul className="social-links clearfix">
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-skype" /></a></li>
                            </ul>
                          </figure>
                          <div className="lower-content">
                            <h5><a href="#">Sangvika Rajvanshi</a></h5>
                            <span className="designation">HR & Customer Relations Head</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-three">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src="about img/team-6.png" alt="" />
                            <ul className="social-links clearfix">
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-skype" /></a></li>
                            </ul>
                          </figure>
                          <div className="lower-content">
                            <h5><a href="#">Aabhas</a></h5>
                            <span className="designation">Head of Sales (Maharastra)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-three">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src="about img/team-7.png" alt="" />
                            <ul className="social-links clearfix">
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-skype" /></a></li>
                            </ul>
                          </figure>
                          <div className="lower-content">
                            <h5><a href="#">Bharat Pungalia</a></h5>
                            <span className="designation">Head of Sales (Rajasthan)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                      <div className="team-block-three">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src="about img/team-5.png" alt="" />
                            <ul className="social-links clearfix">
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-skype" /></a></li>
                            </ul>
                          </figure>
                          <div className="lower-content">
                            <h5><a href="#">Rajesh Sharma</a></h5>
                            <span className="designation">Graphics Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
              {/* team-style-three end */}
              {/* testimonial-style-ten */}
              <section className="testimonial-style-ten">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 user-column">
                      <div className="user-thumb">
                        <div className="thumb-box">
                          <div className="pattern-bg1" style={{backgroundImage: 'url(images/icons/thumb-bg.png)'}} />
                          <div className="pattern-bg2" style={{backgroundImage: 'url(images/icons/map-shap-3.png)'}} />
                          <figure className="thumb thumb-1"><img src="about img/user-8.png" alt="" /></figure>
                          <figure className="thumb thumb-2"><img src="about img/user-9.png" alt="" /></figure>
                          <figure className="thumb thumb-3"><img src="about img/user-10.png" alt="" /></figure>
                          <figure className="thumb thumb-4"><img src="about img/user-11.png" alt="" /></figure>
                          <figure className="thumb thumb-5"><img src="about img/user-12.png" alt="" /></figure>
                          <figure className="thumb thumb-6"><img src="about img/user-13.png" alt="" /></figure>
                          <figure className="thumb thumb-7"><img src="about img/user-14.png" alt="" /></figure>
                          <figure className="thumb thumb-8"><img src="about img/user-15.png" alt="" /></figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                      <div className="content-box">
                        <div className="sec-title"><h2>How Clients React</h2></div>
                        <div className="testimonial-carousel-2 owl-carousel owl-theme">
                          <div className="testimonial-content">
                            <div className="inner-box">
                              <div className="text">“The app is very useful and whenever there is an issue or problem it is solved very quickly. Due to this app communication with the parents have become easier. Thanks Alok 😊👍
                                ”</div>
                              <div className="author-info">
                                <ul className="rating clearfix">
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                </ul>
                                <h4 className="name">
                                  Vaishali Vyas</h4>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <div className="inner-box">
                              <div className="text">“The Tech bridge is one of the best solution of preschool Software. I research in market of application and Finally I got solution from The Tech Bridge. Quick response from Support team. Recommend to all.”</div>
                              <div className="author-info">
                                <ul className="rating clearfix">
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                </ul>
                                <h4 className="name">
                                  Amit Hingu</h4>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <div className="inner-box">
                              <div className="text">“The Tech Bridge is a one stop solution for all your preschool technology need. Their preschool software is the best in the industry. what's really great is , the owner (Mr. Alok) , is always available for any help that you may want regarding the software. In short you can't go wrong with The tech bridge. Just close your eyes and Ake the leap of faith them. I am sure you won't be disappointed.”</div>
                              <div className="author-info">
                                <ul className="rating clearfix">
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                  <li><i className="fas fa-star" /></li>
                                </ul>
                                <h4 className="name">Cambridge Montessori Kaggadasapura</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* testimonial-style-ten end */}
              {/* subscribe-style-five */}
              <section className="subscribe-style-five">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div id="image_block_38">
                        <div className="image-box">
                          <div className="bg-layer" style={{backgroundImage: 'url(images/icons/user-icon.png)'}} />
                          <figure className="image float-bob-y clearfix"><img src="images/icons/undraw_subscriber_vabu.svg" alt="" /></figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_41">
                        <div className="content-box">
                          <div className="sec-title"><h2>Subscribe our Newsletter</h2></div>
                          <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo</div>
                          <form action="#" method="post" className="subscribe-form">
                            <div className="form-group">
                              <input type="email" name="email" placeholder="Enter Your Email" required />
                              <button type="submit" className="theme-btn-two">Subscribe Now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* subscribe-style-five end */}
              
            </div>
          );
        }
      }



export default About;
