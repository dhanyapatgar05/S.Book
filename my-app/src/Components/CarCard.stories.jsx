import React from "react";
import CarCard from "../Components/CarCard";

export default {
  title: "Car/Card",
  component: CarCard,
};

const Template = (args) => <CarCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const TrendingCar = Template.bind({});
TrendingCar.args = {
  trending: true,
};

export const WithActions = Template.bind({});
WithActions.args = {
  showActions: true,
};
