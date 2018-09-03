/**
*
* HomeMembers
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ProfileCard from '../../profile/ProfileCard';


// TODO: Make this grid a bit more responsive...
// TODO: Center elements on last row, smaller images on smaller devices
// TODO: This might be cool? https://tympanus.net/codrops/2017/04/11/inspiration-for-grid-loading-animations/
const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
};

const masonryStyle = {
  width: '100%',
};


class HomeMembers extends React.PureComponent {
  render() {
    let memberBlocks = '';
    if (this.props.membersData) {
      memberBlocks = this.props.membersData.map(({ name, bio, linkedInUrl, gitHubUrl, websiteUrl }) => (
        <ProfileCard key={name + bio + linkedInUrl + gitHubUrl + websiteUrl} name={name} bio={bio} linkedInUrl={linkedInUrl} gitHubUrl={gitHubUrl} websiteUrl={websiteUrl} />
      ));
    }

    return (
      <section className="pb_section bg-light" id="section-members">
        <div className="container-fluid">
          <div className="row justify-content-md-center text-center mb-5">
            <div className="col-lg-7">
              <h2 className="mt-0 heading-border-top">Our Official Members</h2>
              <p>We have some amazing members in the club, check them out below!</p>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* TODO: Maybe a loading symbol or something if memberBlocks is empty */}
            <Masonry options={masonryOptions} style={masonryStyle}>
              {memberBlocks}
            </Masonry>
          </div>
        </div>
      </section>
    );
  }
}

HomeMembers.propTypes = {
  membersData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]).isRequired,
};

export default HomeMembers;
