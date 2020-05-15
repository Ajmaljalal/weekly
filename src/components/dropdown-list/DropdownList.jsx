import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside";
import arrowDownIcon from '../../assets/icons/caret-down.svg'
import { DropdownStyles } from './dropdown.styles'

class DropdownList extends Component {
  state = {
    isOpen: false
  }

  handleClickOutside = (evt) => {
    this.setState({
      isOpen: false
    })
  }
  toggleDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { width, placeholder, searchAble } = this.props
    return (
      <DropdownStyles.Container width={width}>
        <DropdownStyles.Header onClick={this.toggleDropDown}>
          <DropdownStyles.Search placeholder={placeholder} disabled={!searchAble}/>
          <DropdownStyles.Arrow>
            <img src={arrowDownIcon} alt='dropdown-menu-icon' />
          </DropdownStyles.Arrow>
        </DropdownStyles.Header>
        {this.renderBody()}
      </DropdownStyles.Container>
    )
  }

  renderBody = () => {
    const { children, position, closeOnClick } = this.props
    if (this.state.isOpen) {
      return (
        <DropdownStyles.Body onClick={ closeOnClick ? this.toggleDropDown : null} position={position}>
          {children}
        </DropdownStyles.Body>
      )
    } else return null
  }
}

export default onClickOutside(DropdownList)
