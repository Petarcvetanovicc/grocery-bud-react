const Item = ({ name, id, completed, editItem, removeItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        onClick={() => editItem(id)}
        defaultChecked={completed}
      />
      <p className={completed ? 'line-through' : ''}>{name}</p>
      {/* <p style={isChecked ? { textDecoration: 'line-through' } : ''}>nesto</p> */}
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  )
}
export default Item
