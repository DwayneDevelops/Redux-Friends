import React from 'react'
import Friend from '../components/Friend';

export default function FriendsList() {
  return (
      {props.friends.map((friend, i) => {
        <div>
            <Friend friend={friend} key={i} />
        </div>

      })}
    
  )
}
