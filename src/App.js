
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './utils/counterSlice';

function App() {

  const count = useSelector(store => store.counter.count)
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment())
  }

  const handleDecrement = () => {
    if(count>0)
    dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  );
}

export default App;
