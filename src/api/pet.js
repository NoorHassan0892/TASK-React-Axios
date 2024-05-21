import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};
const getOnePet = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};
const CreatPet = async (name, image, type, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });

  return res.data;
};

export { getAllPets, CreatPet, getOnePet };
