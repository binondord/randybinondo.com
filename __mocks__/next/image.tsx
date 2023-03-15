mport * as React from 'react'
import { ImageProps } from 'next/image'

const mock = (props: ImageProps): React.ReactElement => {
  // in my case, I was only using these props, but you may need to filter out more if you are using more props
  // that shouldn't be rested onto an <img /> element 
  const { objectFit, objectPosition, src, ...filteredProps } = props

  return <img src={src.toString()} {...filteredProps} />
}

export default mock