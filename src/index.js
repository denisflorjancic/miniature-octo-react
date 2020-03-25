import React from 'react';
import ReactDOM from 'react-dom';
import { Comment, comment } from './Commnet';

ReactDOM.render(
<Comment 
  text={comment.text}
  author={comment.author}
/>, 
document.getElementById('root')
);



