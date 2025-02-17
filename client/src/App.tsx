import Header from "./Components/Header";
import List from "./Components/List";
import Sidebar from "./Components/Sidebar";
import classes from "./App.module.css";
import { useState, useEffect, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";

//dummy data
import dummyData from "./dummyData.json";
import { FabricData } from "./types/fabrics"; // Import the type
const fabrics: FabricData = JSON.parse(JSON.stringify(dummyData));

function App() {
  //sidebar filtering
  interface filtersState {
    weights: string[];
    fibers: string[];
    projects: string[];
    sale: boolean;
  }

  const initialFiltersState: filtersState = {
    weights: [],
    fibers: [],
    projects: [],
    sale: false,
  };

  type filterCategory = "weights" | "fibers" | "projects";

  const [selectedFilters, setSelectedFilters] = useState(initialFiltersState);

  const handleFilterSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked, name } = e.target;

    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const category = name as filterCategory;

      if (checked) {
        newFilters[category] = [...newFilters[category], id];
      } else {
        newFilters[category] = newFilters[category].filter(
          (filter) => filter !== id
        );
      }
      return newFilters;
    });
  };

  const toggleSale = () => {
    setSelectedFilters((prevFilters) => {
      return { ...prevFilters, sale: !prevFilters.sale };
    });
  };

  const filteredFabrics = fabrics.filter((fabric) => {
    const matchingWeights =
      selectedFilters.weights.includes(fabric.characteristics.weight) ||
      selectedFilters.weights.length === 0;

    const matchingFibers =
      fabric.composition.fiber.some((fiber: string) =>
        selectedFilters.fibers.includes(fiber)
      ) || selectedFilters.fibers.length === 0;

    const matchingProjects =
      fabric.garments.uses.some((use: string) =>
        selectedFilters.projects.includes(use)
      ) || selectedFilters.projects.length === 0;

    const matchingSale = fabric.quantities.sale === selectedFilters.sale;

    return (
      matchingWeights && matchingFibers && matchingProjects && matchingSale
    );
  });

  //cart notification
  const { items } = useSelector((state: RootState) => state.cart);

  const notifyCartItemAdded = useCallback(() => {
    if (items.length === 0) {
      return;
    }

    toast("Item added to cart!", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
    });
  }, [items.length]);

  useEffect(() => {
    notifyCartItemAdded();
  }, [items.length, notifyCartItemAdded]);

  return (
    <>
      <Header />
      <main className={classes.border}>
        <Sidebar
          handleFilterSelection={handleFilterSelection}
          toggleSale={toggleSale}
          selectedFilters={selectedFilters}
        />
        <List
          filteredFabrics={filteredFabrics}
          notifyCartItemAdded={notifyCartItemAdded}
        />
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
