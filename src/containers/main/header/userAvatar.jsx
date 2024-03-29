import React from 'react'
import Avatar from '../../../components/avatar/Avatar'

export default function UserAvatar({ profile, status }) {
  return (
    <Avatar
      type='circle'
      img={profile.photoUrl}
      size='25px'
      initials={profile.initials}
      status={status}
    />
  )
}
