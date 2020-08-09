// import moment from 'moment'
import firebase from '../../firebase/firebase-config'
import { uuid } from '../../helpers/uuid'
import { OrgActionTypes } from './types'

const firestore = firebase.firestore()

const orgsInvitationCollection = firestore.collection('invitations-to-orgs')


/**
 * 
 * @param {object} org 
 */
export const createNewOrg = (org) => {
  return (dispatch) => {
    const orgId = uuid()
    firestore.collection('orgs').doc(orgId)
      .set({
        ...org,
        freeTrail: true,
        date: new Date(),
        numberOfProjects: 1,
        numberOfMembers: 1
      }).then(() => {
        dispatch({ type: OrgActionTypes.CREATE_ORG_SUCCESS, payload: org });
      }).catch(err => {
        dispatch({ type: OrgActionTypes.CREATE_ORG_ERROR, payload: err });
      })
  }
}



/**
 * 
 * @param {string} userEmail
 */
export const getOrgsInvitations = (userEmail) => {
  return (dispatch) => {
    orgsInvitationCollection.doc(userEmail).collection('invitations').where('status', '==', 'pending')
      .onSnapshot((querySnapShot) => {
        const array = [];
        querySnapShot.forEach(doc => {
          const org = {...doc.data(), invitationId: doc.id}
          array.push(org)
        })
        dispatch({ type: OrgActionTypes.GET_ORG_SUCCESS, payload: array });
      }, (err => {
        dispatch({ type: OrgActionTypes.GET_ORG_ERROR, payload: err });
      })
    )
  }
}



/**
 * 
 * @param {object} data 
 */
export const updateInvitation = ({userEmail, userName, invitation, invitationId, fieldValue}) => {
  return (dispatch) => {
    orgsInvitationCollection.doc(userEmail).collection('invitations').doc(invitationId)
      .update({
        ...invitation,
        status: fieldValue,
        inviteeName: userName
      }).then(() => {
        dispatch({ type: OrgActionTypes.UPDATE_INVITE_SUCCESS });
      }).catch((err => {
        dispatch({ type: OrgActionTypes.UPDATE_INVITE_ERROR, payload: err });
      }))
  }
}

/**
 * 
 * @param {object} data
 */
export const rejectInvitation = ({userEmail, invitationId}) => {
  return (dispatch) => {
    orgsInvitationCollection.doc(userEmail).collection('invitations').doc(invitationId)
      .delete()
      .then(() => {
        dispatch({ type: OrgActionTypes.DELETE_INVITE_SUCCESS });
      }).catch((err => {
        dispatch({ type: OrgActionTypes.DELETE_INVITE_ERROR, payload: err });
      }))
  }
}
