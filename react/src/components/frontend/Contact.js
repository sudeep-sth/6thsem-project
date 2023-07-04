import React from 'react';
import './contact.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import facebook from '../assets/facebook.svg';
// import twitter from '../assets/twitter.svg';
// import insta from '../assets/instagram.svg';
// import linkedin from '../assets/linkedin.svg';


function Footer() {
    return (

        <div className='main'>
            <section id='contact' className='contact'>
                <div className='container' data-aos='fade-up'>
                    <div class="section-title">
                        {/* <h2>Contact</h2> */}
                        <p>Contact Us</p>
                    </div>
                </div>

                <div data-aos="fade-up" class=" aos-init aos-animate">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3211879054743!2d84.45316459999997!3d27.6764662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e4d927782d8b%3A0x9fbb2c39969cc7f7!2sDhanghada%20Shiva%20Mandir!5e0!3m2!1sen!2snp!4v1685271363104!5m2!1sen!2snp"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                    {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.812932277744!2d121.05948694983836!3d14.552687682101961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9364b0ac64b%3A0xfb33dbeceb4dd7de!2sKopi%20Kount!5e0!3m2!1sen!2sph!4v1666406358113!5m2!1sen!2sph" frameborder="0" allowfullscreen></iframe> */}

                </div>




                <div class="container aos-init aos-animate" data-aos="fade-up">

                    <div class="row mt-5">

                        <div class="col-lg-4">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Bharatpur-11, Dhangada Mandir</p>
                                </div>

                                <div class="open-hours">
                                    <i class="bi bi-clock"></i>
                                    <h4>Open Hours:</h4>
                                    <p>
                                        Monday to Saturday:<br />
                                        07:00 AM to 10:00 PM
                                    </p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>coffeehouse@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>056 123456</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 mt-5 mt-lg-0  aos-init aos-animate" data-aos="fade-up" >

                            <form action="https://www.facebook.com/kopikountpalpitatemoderately" method="get" role="form"
                                class="php-email-form">


                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                                </div>


                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="8" placeholder="Message"></textarea>
                                </div>


                                <div class="text-center"><button type="submit">GET IN TOUCH</button></div>


                            </form>

                        </div>

                    </div>

                </div>
            </section>

            <footer id="footer">

                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>CoffeeHouse</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>

        </div>


    )
}

export default Footer;