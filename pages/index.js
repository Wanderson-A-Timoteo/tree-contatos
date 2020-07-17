import React from 'react'
import Link from '../components/Link'
import Prismic from 'prismic-javascript'


const Index = props => {
  const items = props.data.body[0].items
  return (
    <div className='max-w-xl'>
      <h1>
        <img src={props.data.headerimage.url} alt='DevPleno' />
      </h1>
      <ul>
        {items.map(item => {
          return(
          <li> 
            <Link href={item.link.url}>{item.texto}</Link> 
          </li>
          )
        })}
      </ul>
    </div>
  )
}
export async function getServerSideProps () {
  const client = Prismic.client('https://tree-contatos.cdn.prismic.io/api/v2')
  const page = await client.getSingle('home')
  console.log(page)
  return {
    props : {
      data: page.data
    }
  }
}
export default Index
