import Header from './Components/Header';
import List from './Components/List';

//dummy data
import dummyData from './dummyData.json'; 
import { FabricData } from './types/fabrics'; // Import the type 
const fabrics: FabricData = JSON.parse(JSON.stringify(dummyData))

console.log('app fab:', fabrics)

function App() {

  return (
    <>
      <Header/>
      <List fabrics={fabrics}/>
    </>
  )
}

export default App;
