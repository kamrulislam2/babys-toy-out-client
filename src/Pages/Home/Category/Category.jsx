import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryTable from "./CategoryTable";

const Category = () => {
  const [allToys, setAllToys] = useState([]);
  const [filteredToy, setFilteredToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);

        //   Initial data loading while rendering
        const filterByCategory = data.filter(
          (singleToy) => singleToy.subCategory === "Lego City"
        );
        setFilteredToy(filterByCategory);
      });
  }, []);

  // Filtered data loading while clicked on a category
  const handleCategory = (categoryName) => {
    const filterByCategory = allToys.filter(
      (singleToy) => singleToy.subCategory === categoryName
    );
    setFilteredToy(filterByCategory);
  };
  return (
    <div className="my-16 px-7 lg:px-16">
      <div className="space-y-6 mb-16">
        <h2 className="text-5xl font-bold text-center">
          Shop by <span className="text-[#F79837]">Category</span>
        </h2>
        <p className="text-center text-xl">
          The customized category base shop is for you to ensure good user
          experience.
        </p>
      </div>
      <Tabs className="text-center">
        <TabList>
          {/* Tab 01 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego City")}
              className="text-lg font-medium"
            >
              Lego City
            </h5>
          </Tab>
          {/* Tab 02 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Star War")}
              className="text-lg font-medium"
            >
              Lego Star War
            </h5>
          </Tab>
          {/* Tab 03 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Architechture")}
              className="text-lg font-medium"
            >
              Lego Architechture
            </h5>
          </Tab>
          {/* Tab 04 */}
          <Tab>
            <h5
              onClick={() => handleCategory("Lego Car")}
              className="text-lg font-medium"
            >
              Lego Car
            </h5>
          </Tab>
        </TabList>

        {/* Tab 01 */}
        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredToy.map((toy) => (
                  <CategoryTable key={toy._id} toy={toy}></CategoryTable>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* Tab 02 */}
        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredToy.map((toy) => (
                  <CategoryTable key={toy._id} toy={toy}></CategoryTable>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* Tab 03 */}
        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredToy.map((toy) => (
                  <CategoryTable key={toy._id} toy={toy}></CategoryTable>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* Tab 04 */}
        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredToy.map((toy) => (
                  <CategoryTable key={toy._id} toy={toy}></CategoryTable>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;