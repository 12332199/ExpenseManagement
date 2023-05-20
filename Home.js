import React from 'react'
import Layout from '../components/layout/Layout'

import GetTransaction from './GetTransaction'

const Home = () => {



  return (
    <Layout>

      <div className="container">
        
        <GetTransaction />

      </div>


    </Layout>
  )
}

export default Home