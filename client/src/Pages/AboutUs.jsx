import React from 'react';
import './CSS/AboutUs.css';
import image1 from '../Components/Assets/1.png'
import image2 from '../Components/Assets/2.png'
import image3 from '../Components/Assets/3.png'
import image4 from '../Components/Assets/4.png'
import image5 from '../Components/Assets/5.png'
export const AboutUs = () => {
    return (
        <div className="responsive-container-block outer-container">
            <div className="responsive-container-block inner-container">
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                    <p className="text-blk heading-text">
                        Meet our dream team
                    </p>
                    <p className="text-blk sub-heading-text">
                        
                    </p>
                </div>
                <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div className="card">
                            <img className="card-img" src={image1} alt="Akif Adnan"/>
                            <p className="text-blk name">
                               Akif Adnan
                            </p>
                            <p className="text-blk position">
                                Frontend Master
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div className="card">
                            <img className="card-img" src={image2} alt="Gustavo Workman"/>
                            <p className="text-blk name">
                            Bilyal Mustafa Yarmadzha
                            </p>
                            <p className="text-blk position">
                                BackEnd Genius
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div className="card">
                            <img className="card-img" src={image3} alt="Gustavo Workman"/>
                            <p className="text-blk name">
                            Anas Y M Alshourafa
                            </p>
                            <p className="text-blk position">
                                The Authenticator
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div className="card">
                            <img className="card-img" src={image4} alt="Gustavo Workman"/>
                            <p className="text-blk name">
                                Farhan Ahmad
                            </p>
                            <p className="text-blk position">
                                Document it All
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                        <div className="card">
                            <img className="card-img" src={image5} alt="Gustavo Workman"/>
                            <p className="text-blk name">
                                Mustafa Can Ersoy
                            </p>
                            <p className="text-blk position">
                                Let's Design
                            </p>
                        </div>
                    </div>
                    {/* Repeat the above div for each team member */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;