import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrgsInvitations, setCurrentOrg } from '../../../redux/orgs/actions'
import Button from '../../../components/button/Button'
import NewOrg from './NewOrg'
import InvitedToOrgsList from './InvitedToOrgsList'
import { OrgStyles } from './index.styles'

class Organization extends Component {
  state = {
    createNewOrg: false
  }

  toggleCreateNewOrg = () => {
    this.setState({
      createNewOrg: true
    })
  }

  async componentDidMount() {
    const { profile, getOrgsInvitations, setCurrentOrg } = this.props
    if (profile.currentOrg) {
      console.log(profile.currentOrg)
      await setCurrentOrg(profile.currentOrg)
      return
    }
    if(profile && profile.email && !profile.currentOrg) {
      getOrgsInvitations(this.props.profile.email)
    }
  }

  render() {
    return (
      <OrgStyles.Container>
        <OrgStyles.Logo>WIKLI</OrgStyles.Logo>
        {this.state.createNewOrg ? <NewOrg /> : this.renderInvitedOrgsListAndCreateNewOrgButton()}
      </OrgStyles.Container>
    )
  }

  renderInvitedOrgsListAndCreateNewOrgButton = () => {
    const { orgsInvitations } = this.props
    return (
      <OrgStyles.CreatNewOrg>
        <InvitedToOrgsList orgsInvitations={orgsInvitations} />
        <OrgStyles.OrSeparator>-------------- OR -------------</OrgStyles.OrSeparator>
        <Button
          onClick={this.toggleCreateNewOrg}
          children='Create your own org'
          bgColor='#2a4865'
          margin='20px'
          color='white'
          width='200px'
          disabled={false}
        />
      </OrgStyles.CreatNewOrg>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    orgsInvitations: state.orgsState.invitations,
    profile: state.profileState.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrgsInvitations: (userEmail) => dispatch(getOrgsInvitations(userEmail)),
    setCurrentOrg: (orgId) => dispatch(setCurrentOrg(orgId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);

