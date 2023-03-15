import { useRouter } from 'next/router'

import { FC, ReactNode } from 'react';

interface MyProps {
  href: string;
  children: ReactNode;
}

const ActiveLink: FC<MyProps> = ({ children: ReactNode, href: string }) => {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink