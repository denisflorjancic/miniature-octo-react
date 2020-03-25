import React from 'react';

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      {/* <div className="Comment-date">
        {formatDate(props.date)}
      </div> */}
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" 
      // Name props from the component's own point of view,
      // rather than the context in which it is being used, 
      // here, we have user instead of author, it is more generic 
      // and reusable
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

const comment = {
  text: 'I hope that you are doing well tonight!',
  author: {
    name: 'Denis Timotej',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
}
export {Comment, comment};
