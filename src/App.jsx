// import { useState } from 'react'
import { useState } from 'react'
import { Header } from './components/Header'
import { List } from './components/ProductsList'
import { GlobalStyles } from './styles/global'
import { GlobalReset } from './styles/reset'

export const App = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [products, setProducts] = useState([])

  const filteredProducts = products.filter(
    product => product.name.toUpperCase().includes(inputSearch.toUpperCase())
  ) 

// console.log('app')
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header setInputSearch={setInputSearch}/>
      
      <main>
        <List filteredProducts={filteredProducts} setProducts={setProducts}/>
      </main>

    </>
  )
}

