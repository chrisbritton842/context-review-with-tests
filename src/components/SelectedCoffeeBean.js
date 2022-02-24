import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const context = useCoffeeContext();
  console.log('Context: ', context)
  const { coffeeBean } = context;
  console.log('CoffeeBean: ', coffeeBean)

  return (
    <div className='selected-coffee'>
      <h2>
        {coffeeBean.name}
      </h2>

    </div>
  );
}

export default SelectedCoffeeBean;
