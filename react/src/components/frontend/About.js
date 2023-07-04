import React from 'react';
import './about.css';
import image from '../../assets/admin/assets/img/coffee02.jpg';
function About() {
    return (
        <div>
            <div className='main'>

                <section id="about" class="about">
                    <div class="container aos-init aos-animate" data-aos="fade-up">

                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2 aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div class="about-img">

                                    <img src={image} alt="" />
                                </div>
                            </div>


                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Welcome to Coffee House</h3>
                                <p class="fst-italic">
                                    At Coffee House, we have everything you need for your coffee cravings - from freshly roasted beans to
                                    ready-to-drink beverages. Experience the ultimate coffee destination with us today.
                                </p>
                                <p>
                                    <ul>
                                        <li><i class="bi bi-check-circle"></i> Coffee brewed to perfection you keep coming back.</li>
                                        <li><i class="bi bi-check-circle"></i> Also providing delicious meals to top with your coffee.</li>
                                        <li><i class="bi bi-check-circle"></i> With coffee mix that ensures to keep your engine running for the whole day </li>
                                    </ul>
                                    Welcome to Coffee House, your go-to coffee shop for all things caffeinated. Our goal is to provide a warm
                                    and inviting atmosphere where you can relax, unwind, and enjoy a delicious cup of coffee.
                                </p>
                                <p>
                                    At Coffee House, we take pride in our expertly crafted coffee beverages made with the highest quality beans
                                    and ingredients. Whether you're in the mood for a classic espresso or a specialty latte, we have something
                                    for every coffee lover.
                                </p>
                                <p>
                                    But coffee isn't all we offer - our menu also includes a variety of pastries, sandwiches, and other light
                                    bites to satisfy your hunger. So come on in, pull up a chair, and let us take care of you. We can't wait
                                    to serve you at Coffee House.
                                </p>
                            </div>

                        </div>

                    </div>
                </section >
            </div >
        </div>
    )
}

export default About;