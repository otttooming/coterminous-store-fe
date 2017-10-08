import React from 'react'

function Categories(props) {
  const sideMenuItems = props.sideMenuItems.map((item, index) =>
    <div key={index} className="cat-list__group ">
      <h2 className="cat-list__title">
        <a href="#">
          <span className="cat-list__name">{item.name}</span>
          <span className="cat-list__desc" />
          <span className="cat-list__count">4</span>
        </a>
        <div className="cat-list__subcat-control control__items">
          <svg className="control__down" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 501.5 501.5"><g><path fill="currentColor" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" /></g></svg>
        </div>
      </h2>
      <ul className="cat-list__subcat">
      </ul>
    </div>
  );

  return (
      <ul className='menu'>{sideMenuItems}</ul>
  );
}

export default class Sidemenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ini: props,
      page: 1
    }
  }

  render () {
    return (
      <div className="widget-container widget_desirees-subcategories">
        <div className="widget-container cat-list">
            <Categories sideMenuItems={this.props.sideMenuItems} />
        </div>
      </div>
    )
  }
}
