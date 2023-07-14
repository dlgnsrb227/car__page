import React from "react";

import { Carprops } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Carprops;
}

const CarDetails = () => {
  return <div>CarDetails</div>;
};

export default CarDetails;
