import React from "react";
import Card from "./Card"; // Assuming the Card component is created in the same directory.
import './CardContainer.css';
const CardContainer = () => {
  return (
    <div className="relative flex space-x-6 overflow-x-auto p-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
      <Card name="Name1" field="Field1" review="Review1" />
      <Card name="Name2" field="Field2" review="Review2" />
      <Card name="Name3" field="Field3" review="Review3" />
      <Card name="Name4" field="Field4" review="Review4" />
      <Card name="Name5" field="Field5" review="Review5" />
      <Card name="Name6" field="Field6" review="Review6" />
      <Card name="Name7" field="Field7" review="Review7" />
      <Card name="Name8" field="Field8" review="Review8" />
      {/* Add more <Card /> components as needed */}
    </div>
  );
};

export default CardContainer;
