import Header from "./Components/Header";
import List from "./Components/List";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";
import classes from "./App.module.css";

//store
import { Provider } from "react-redux";

//dummy data
import dummyData from "./dummyData.json";
import { FabricData } from "./types/fabrics"; // Import the type
const fabrics: FabricData = JSON.parse(JSON.stringify(dummyData));

console.log("app fab:", fabrics);

function App() {
  return (
    <>
      <Header />
      <main className={classes.border}>
        <Sidebar />
        <List fabrics={fabrics} />
      </main>
    </>
  );
}

export default App;
