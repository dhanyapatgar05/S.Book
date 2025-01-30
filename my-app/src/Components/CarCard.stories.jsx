import React from "react";
import CarCard from "../Components/CarCard";

export default {
  title: "Car/Card",
  component: CarCard,
};

const Template = (args) => <CarCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
