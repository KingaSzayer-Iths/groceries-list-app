import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
   
    

    // const handleNameChange = () => {
    //     const names =['Bob', 'Kevin', 'Dave'];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int])
    // }
    // const handleClick = () => {
    //     console.log(count)
    // }
    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`)
    // }
    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    // }

  return (
    <>
        {items.length ? ( 
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{ marginTop: '2rem' }}>Your list is empty!</p>
        )}  


    {/* <p onDoubleClick={handleClick}>
        Hello {name}!
    </p>
    <button onClick={handleNameChange}>Change Name</button>
    <button onClick={handleClick}>Click it</button>
    <button onClick={(e) => handleClick3(e)}>Clicked it</button>
     */}

    </>
  )
}

export default Content 