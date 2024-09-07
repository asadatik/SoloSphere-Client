import { useLoaderData } from 'react-router-dom'
import Carousel from '../component/Carousel'
import TabCategories from '../component/TabCategories'

const Home = () => {
  return (
    <div>
      <Carousel />
      <TabCategories />
    </div>
  )
}

export default Home
