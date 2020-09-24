import React from 'react'
import Link from '../components/Link'
import Prismic from 'prismic-javascript'
import Head from 'next/head'


const Index = props => {
  const items = props.data.body[0].items
  return (
    <div className='max-w-xl mx-auto'>
      <Head>
        <title>Wanderson A. Timóteo</title>
      </Head>
        <h1>
          <img className='mx-auto rounded-full h-32 mt-6' src={props.data.headerimage.url} alt='Wanderson A. Timóteo' />
        </h1>
          <p className='text-center py-2 italic text-gray-600'>@Wanderson-A-Timóteo</p>
          <p className='text-center py-1 italic text-gray-600'>Desenvolvedor de Software</p>

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
export async function getServerSideProps ({ res }) {
  res.setHeader('Cache-control', 's-maxage=60, stale-while-revalidate')
  const client = Prismic.client('https://tree-contatos.cdn.prismic.io/api/v2')
  const page = await client.getSingle('home')
  return {
    props : {
      data: page.data
    }
  }
}
export default Index
