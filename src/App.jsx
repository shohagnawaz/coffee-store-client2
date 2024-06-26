import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  return (
    <div className='m-20'>
      <h2 className="text-6xl my-20 text-center text-purple-600">Hot Hot Cold Coffee: {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => 
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
