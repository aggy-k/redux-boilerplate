import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  let name = null;
  let address = null;
  let slug = null;
  let imageUrl = `https://kitt.lewagon.com/placeholder/cities/${slug}`;

  console.log(1, name)

  if (props.activeCity) {
    const city = props.activeCity;
    name = city.name;
    address = city.address;
    slug = city.slug;
    imageUrl = `https://kitt.lewagon.com/placeholder/cities/${slug}`;
    console.log(2, name)
  }

  return (
    <div className="active-city">
      <h3>{name}</h3>
      <p>{address}</p>
      <img src={(slug === null) ? '' : imageUrl} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
