import { useState } from "react";
import "./index";
import "./input.css";

export default function App() {
  // return <div className="App">
  //   <FlashCards />
  // </div>;
  return <Card />;
}

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }

//   return (
//     <div className="flashcards">
//       {questions.map((item, idx, arr) => {
//         return (
//           <div
//             key={item.id}
//             className={item.id === selectedId ? "selected" : ""}
//             onClick={() => handleClick(item.id)}
//           >
//             <p>{item.id === selectedId ? item.answer : item.question}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const data = {
  price: 450,
};

function Card() {
  const [coupons, setCoupons] = useState([]);

  function handleCoupons(e, input, setInput) {
    e.preventDefault(); // to prevent refresh
    setCoupons((coupons) => [...coupons, input]);
    setInput("");
  }

  return (
    <div className=" bg-gradient-to-tr from-[#0061ff] to-[#60efff] min-h-screen flex justify-center items-center">
      <div className="max-w-sm bg-[#222] text-white mx-auto p-4">
        <Total coupons={coupons} originalPrice={data.price} />
        <div className="border border-b-white my-5"></div>
        <Promotion coupons={coupons} onAddCoupon={handleCoupons} />
      </div>
    </div>
  );
}

function Total({ coupons, originalPrice }) {
  let price = originalPrice;
  const realCoupon =
    coupons.includes("learnreact") || coupons.includes("reactisbest");
  if (realCoupon) {
    price = price - price * 0.4;
  }

  console.log(
    coupons.includes("learnreact") || coupons.includes("reactisbest")
  );

  return (
    <div className="p-4">
      <p className="my-4">Total:</p>
      <p className="my-4 text-4xl">${price}</p>
    </div>
  );
}

function Promotion({ coupons, onAddCoupon }) {
  const [input, setInput] = useState("");

  function handleInput(e) {
    e.preventDefault(); // to prevent refresh
    setInput(e.target.value);
  }

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <p>Promotions</p>
      <form
        className="flex"
        onSubmit={(e) => {
          onAddCoupon(e, input, setInput);
        }}
      >
        <input
          className="text-black outline-none px-2 py-2"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter CouponCode"
        />
        <button className="btn" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
}
