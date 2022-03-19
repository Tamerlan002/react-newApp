import React from 'react'
interface ShadowTitleProps {
  text: string | undefined;
}

const ShadowTitle = (props: ShadowTitleProps) => {
  return (
    <div className="home__shadowText container-fluid">
      <h3 style={{opacity:"0.4"}} className="home__shadowText--title">{props.text}</h3>
      <h3 style={{opacity:"0.4"}} className="mx-5 home__shadowText--title">{props.text}</h3>
      <h3 style={{opacity:"0.4"}} className="mx-5 home__shadowText--title">{props.text}</h3>
    </div>
  )
}

export default ShadowTitle
