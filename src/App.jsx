import { Provider } from 'react-redux'
import store from './redux/store'
import Todo from './components/Todo'
import "./App.css"


function App() {
 

  return (
    <>
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
    </>
  )
}

export default App
