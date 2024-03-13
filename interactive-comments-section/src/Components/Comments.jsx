import React from 'react'
import Comment from './Comment'
// Comments section

const Comments = () => {
  return (
    <section>
      <Comment activeUser={true}/>
      <Comment activeUser={false}/>
    </section>
  )
}

export default Comments
