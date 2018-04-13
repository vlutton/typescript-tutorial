// TODO: fix type errors
const listCars = (cars) => {
  return cars.map((car) => {
    return { ...car };
  });
};

// Get a list of all the green trucks
// get a list of all the vehicles of type toyota
// get the first ford in the list

const AutoTest = () => {
  const autoList = [
    { type: 'truck', color: 'green', model: 'honda' },
    { type: 'truck', color: 'blue', model: 'toyota' },
    { type: 'truck', color: 'blue', model: 'ford' },
    { type: 'truck', color: 'green', model: 'ford' },
    { type: 'car', color: 'red', model: 'ford' },
    { type: 'car', color: 'red', model: 'honda' },
    { type: 'car', color: 'yellow', model: 'toyota' },
    { type: 'car', color: 'green', model: 'toyota' }
  ];
  const cars = listCars(autoList);
  console.log(cars);
};

export default AutoTest;
