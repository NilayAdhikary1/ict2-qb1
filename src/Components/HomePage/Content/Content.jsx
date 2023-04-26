import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerImage_Desktop from '../../Images/Bannerimage_Desktop&Tab.png';
import BannerImage_Mobile from '../../Images/Bannerimage_Mobile.png'
import './Content.css'

function Content() {
  return (
    <div className='contain'>
        <Carousel>

            {/* 1st carousel item */}
            
            <Carousel.Item>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 caption">
                            <h2 className='agenda'>NEW WAY OF EDUCATION</h2>
                            <h5 className='feature'>LIVE STREAMING SESSIONS</h5>
                            <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate cumque cupiditate veniam exercitationem, tempora ut id at dolorum ea eaque, ex fuga, facilis nobis molestias incidunt harum natus esse. Nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className='get_started'>GET STARTED</button>
                            <button className='read_more'>READ MORE</button>
                        </div>
                        <div className="col-3 col-md-4 col-sm-12 col-12">
                            <picture>
                                <source media="(min-width: 576px)" srcset={BannerImage_Mobile}/>
                                <source media="(min-width: 768px)" srcset={BannerImage_Desktop}/>
                                <source media="(min-width: 992px)" srcset={BannerImage_Desktop}/>
                                
                                <img style={{paddingTop : '80px'}} src={BannerImage_Mobile} alt="A cute kitten"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


            {/* 2nd carousel item */}
            
            <Carousel.Item>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 caption">
                            <h2 className='agenda'>NEW WAY OF EDUCATION</h2>
                            <h5 className='feature'>LIVE STREAMING SESSIONS</h5>
                            <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit nihil sint non hic sunt molestiae eos. Molestias similique perspiciatis praesentium sed, rem officiis sint eveniet enim dolorum in impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aliquam odit reprehenderit. Commodi perspiciatis nesciunt totam sint natus voluptatem omnis assumenda consectetur.</p>
                            <button className='get_started'>GET STARTED</button>
                            <button className='read_more'>READ MORE</button>
                        </div>
                        <div className="col-3 col-md-4 col-sm-12 col-12">
                            <picture>
                                <source media="(min-width: 576px)" srcset={BannerImage_Mobile}/>
                                <source media="(min-width: 768px)" srcset={BannerImage_Desktop}/>
                                <source media="(min-width: 992px)" srcset={BannerImage_Desktop}/>
                                
                                <img style={{paddingTop : '80px'}} src={BannerImage_Mobile} alt="A cute kitten"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


            {/* 3rd carousel item */}
            
            <Carousel.Item>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 caption">
                            <h2 className='agenda'>NEW WAY OF EDUCATION</h2>
                            <h5 className='feature'>LIVE STREAMING SESSIONS</h5>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum, minima at quo nobis excepturi doloremque nihil eaque! Numquam quia odit aut incidunt aliquam non deleniti est. Aperiam, illo vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam veritatis deserunt qui nulla, nemo ipsa architecto exercitationem culpa nesciunt autem ducimus.</p>
                            <button className='get_started'>GET STARTED</button>
                            <button className='read_more'>READ MORE</button>
                        </div>
                        <div className="col-3 col-md-4 col-sm-12 col-12">
                            <picture>
                                <source media="(min-width: 576px)" srcset={BannerImage_Mobile}/>
                                <source media="(min-width: 768px)" srcset={BannerImage_Desktop}/>
                                <source media="(min-width: 992px)" srcset={BannerImage_Desktop}/>
                                
                                <img style={{paddingTop : '80px'}} src={BannerImage_Mobile} alt="A cute kitten"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


            {/* 4th carousel item */}
            
            <Carousel.Item>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 caption">
                            <h2 className='agenda'>NEW WAY OF EDUCATION</h2>
                            <h5 className='feature'>LIVE STREAMING SESSIONS</h5>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque deleniti odio aut voluptas ex sunt praesentium quam id illum a quae dicta cum repellendus quisquam laboriosam vero. Aut, ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <button className='get_started'>GET STARTED</button>
                            <button className='read_more'>READ MORE</button>
                        </div>
                        <div className="col-3 col-md-4 col-sm-12 col-12">
                            <picture>
                                <source media="(min-width: 576px)" srcset={BannerImage_Mobile}/>
                                <source media="(min-width: 768px)" srcset={BannerImage_Desktop}/>
                                <source media="(min-width: 992px)" srcset={BannerImage_Desktop}/>
                                
                                <img style={{paddingTop : '80px'}} src={BannerImage_Mobile} alt="A cute kitten"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            
        </Carousel>
    </div>
  )
}

export default Content