import './App.css';
import {NewForm} from './component/From'
import { NewApp } from './component/Counter';
import { Counter } from './component/ContextApiCounter';
import { userContext } from './component/Createcontext';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
     <NewForm></NewForm>
     {/* <NewApp/> */}
{/* <userContext.Provider value = {{count, setCount}}>
<Counter/>
</userContext.Provider> */}
     {/* <FormikForm/> */}
    </div>
  );
}

export default App;
