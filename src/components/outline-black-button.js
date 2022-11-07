import React from 'react'

import PropTypes from 'prop-types'

import './outline-black-button.css'

const OutlineBlackButton = (props) => {
  return (
    <div className={`outline-black-button-container ${props.rootClassName} `}>
      <button className="outline-black-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineBlackButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

OutlineBlackButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default OutlineBlackButton
