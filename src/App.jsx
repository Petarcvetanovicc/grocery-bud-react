import { useState } from 'react'
import Item from './Item'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }

  return list
}

const App = () => {
  const [item, setItem] = useState('')
  const [items, setItems] = useState(getLocalStorage)

  const addItem = (e) => {
    e.preventDefault()
    if (!item) {
      toast.error('Provide a value')
      return
    }
    const newItem = { id: new Date().getTime(), name: item, completed: false }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    setItem('')
    toast.success('Add Item')
  }

  const removeItem = (id) => {
    const newArray = items.filter((item) => item.id !== id)
    setItems(newArray)
    setLocalStorage(newArray)
    toast.success('Delete Item')
  }

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <form>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            name=""
            id=""
            className="form-input"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="btn" onClick={addItem}>
            Add Item
          </button>
        </div>
      </form>
      <div className="items">
        {items.map((item) => {
          return (
            <Item
              {...item}
              key={item.id}
              setItems={setItems}
              editItem={editItem}
              removeItem={removeItem}
            />
          )
        })}
      </div>
    </section>
  )
}

export default App
