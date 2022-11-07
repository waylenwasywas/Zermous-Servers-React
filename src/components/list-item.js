import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text headingThree">{props.new_prop}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'With redundant cloud storage, the safety of your files is our top priority',
  new_prop: '1. Redundant Storage via RaidZ',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
