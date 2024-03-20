import "./index.css"

import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import Accordian from "./components/Accordian";



const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];



export default function App(){
  
  // we pass the changable state items as a props and inside each child we do our operations with it
  const [items , setItems] = useState([])
  
  return(
  <div className="app">

    {/* <Accordian data={faqs} /> */}

    <Logo/>
    <Form items={items} setItems={setItems}/>
    <PackingList setItems={setItems} items={items}/>
    <Stats items={items} />
  
  </div>

  ) 
}












