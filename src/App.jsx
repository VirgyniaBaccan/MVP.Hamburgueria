import { useState } from 'react'
import { Header } from './components/Header'
import { List } from './components/ProductsList'
import { GlobalStyles } from './styles/global'
import { GlobalReset } from './styles/reset'
import { Modal } from './components/CartModal'

export const App = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [products, setProducts] = useState([])
  const [cartList, setListCart] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = products.filter(
    product => product.name.toUpperCase().includes(inputSearch.toUpperCase())
  )

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      {isOpen ? <Modal cartList={cartList} setListCart={setListCart} setIsOpen={setIsOpen} /> : <></>}
      <Header setInputSearch={setInputSearch} setIsOpen={setIsOpen} />
      <main>
        <List filteredProducts={filteredProducts} setProducts={setProducts} cartList={cartList} setListCart={setListCart} />
      </main>

    </>
  )
}

