import { format } from "date-fns";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
const data = [
  {
    date: format(new Date('01,02, 2022'), 'MM/dd/yyyy'),
  },
];

function App() {
  return (
    <Fragment>
      {/* {data.map((el) => {
        return <div>{el.date}</div>;
      })} */}
      <h1>ISHTE</h1>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
