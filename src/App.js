import { format } from "date-fns";
import { Fragment, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
const data = [
  {
    date: format(new Date('01,02, 2022'), 'MM/dd/yyyy'),
  },
];

function App(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Provider store={store}>
            <Fragment>
            {/* {data.map((el) => {
              return <div key={el}>{el.date}</div>;
            })} */}
            {showModal ? <Cart setShowModal={setShowModal}/> : null}
            <Header setShowModal={setShowModal}/>
            {/* <button onClick={() => setShowModal(true)}></button> */}
            <main>
              <Meals/>
            </main>
          </Fragment>
    </Provider>
  );
}

export default App;
