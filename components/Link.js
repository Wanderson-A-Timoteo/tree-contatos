import React from 'react'

const Link = ({href, children}) => {
return <a href={href} className={
  'bg-gray-800 text-white py-4 w-full block text-center hover:bg-white hover:text-gray-800 border border-solid border-2 my-2'}>{children}</a>
}
export default Link
