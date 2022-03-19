import React from 'react'
interface TitleProps {
  text: string | undefined;
}

const Title = (props: TitleProps) => {
  return (
    <h4 className="home__slogan--title">{props.text}</h4>
  )
}

export default Title
