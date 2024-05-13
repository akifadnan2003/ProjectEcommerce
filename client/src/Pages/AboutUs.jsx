import React from 'react';
import './CSS/AboutUs.css';
export const AboutUs = () => {
    <div className="responsive-container-block outer-container">
  <div className="responsive-container-block inner-container">
    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
      <p className="text-blk heading-text">
        Meet our dream team
      </p>
      <p className="text-blk sub-heading-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla et sagittis,
        vestibulum risus lacus sit.
      </p>
    </div>
    <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
        <div className="card">
          <img className="card-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg" alt="Gustavo Workman"/>
          <p className="text-blk name">
            Gustavo Workman
          </p>
          <p className="text-blk position">
            CEO
          </p>
        </div>
      </div>
      
      {/* Repeat the above div for each team member */}
    </div>
  </div>
</div>

  };

export default AboutUs;