import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './Component/get/GetUser'
import Add from './Component/add/AddUser'
import Edit from './Component/update/Edit'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
