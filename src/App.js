import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import Transaction from "./components/Transaction";
import Form from "./components/Form";
import DataContext from "./data/DataContext"
import Report from "./components/Report";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Title = () => <h1>แอพบัญชีรายรับ - รายจ่าย</h1>;
const Descript = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;

function App() {
  const design = { color: "blue", textAlign: "center", fontSize: "1rem" }

  const initData = [
    { id: 1, title: "ค่ารักษา", amount: -2000 },
    { id: 2, title: "ค่าน้ำ", amount: -5000 },
    { id: 3, title: "ค่าเช่า", amount: -7000 },
    { id: 4, title: "เงิน", amount: 17000 },
    { id: 5, title: "รายได้", amount: 5000 }
  ]

  //สร้าง stage มาเก็บข้อมูลที่จะกระจาย (รับ + แสดงผล)
  const [items, setItems] = useState(initData)

  const [reportIncome, setreportIncome] = useState(0)
  const [reportExpense, setreportExpense] = useState(0)

  const onAddNewItem = (newItem) => {

    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)

    const income = amounts.filter(e => e > 0).reduce((total, e) => total += e, 0)
    const expense = (amounts.filter(e => e < 0).reduce((total, e) => total += e, 0)) * -1

    setreportIncome(income.toFixed(2))
    setreportExpense(expense.toFixed(2))
  }, [items, reportIncome, reportExpense])

  // Reducer state
  /*const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + action.payload
      case "SUB":
        return state - action.payload
      case "CLEAR":
        return 0
    }
  }
  const [result, dispatch] = useReducer(reducer, count)*/

  // useReducer
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)
  //   }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)

  return (
    //เริ่มต้น
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Penguin Studio
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    //ใช้ div เป็น root element
    /*<div>
      <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
      <ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+20,000</span></li>
        <li>ค่าอาหาร <span>-500</span></li>
      </ul>
    </div>*/

    //ใช้ section/artcle เป็น root element
    /*<section>
      <article>
        <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>
      </article>
    </section>*/

    //ใช้ react fragment เป็น root element
    //<></>
    /*<React.Fragment>
      <article>
        <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      </article>
    </React.Fragment>*/
    /*<div>
      <Title />
      <Descript />
      <Transaction />
    </div>*/

    // <DataContext.Provider value={"Penguin"}>  //ส่งไปข้อมูลเดียว
    //ส่งไปเป็นก้อน obj
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>แอพบัญชี</h1>
        <h2 style={design}>รายรับ - รายจ่าย</h2>
        {/* React Router */}
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/"
                element={<Report />}>
              </Route>
            </Routes>
            <Routes>
              <Route path="/insert"
                element={<><Form onAdd={onAddNewItem} /> <Transaction items={items} /></>}>
              </Route>
            </Routes>
          </div>
        </Router>

        {/* {showReport && <Report />} */}

        {/* //useReducer */}
        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
      </div>
    </DataContext.Provider >
    //useReducer
    /*<div align="center">
      <h1>{result}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>เพิ่ม</button>
      <button onClick={() => dispatch({ type: "SUB", payload: 5 })}>ลด</button>
      <button onClick={() => dispatch({ type: "CLEAR" })}>ล้าง</button>
    </div>*/
  );
}

export default App;
