import './App.css';
import Transit from './Transit'
import FormComponent from './FormComponent'
import React, { useState, useEffect } from 'react'
import DataContext from './DataContext';
import ReportComponent from './ReportCcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const headStyle = { color: "red", textAlign: "center" }
  const [items, setItem] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expense = amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)

    setReportIncome(income)
    setReportExpense(expense)

  }, [items, reportIncome, reportExpense])

  return (
    <React.Fragment>
      <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }} >
        <div className='container'>
          <h1 style={headStyle}>รายการเดินบัญชี</h1>
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บึนทึกข้อมมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" exact element={<ReportComponent />}></Route>
                <Route path="/insert"
                  element={<React.Fragment>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transit items={items} />
                  </React.Fragment>}>
                </Route>
              </Routes>
            </div>
          </Router>
        </div>
      </DataContext.Provider>
    </React.Fragment>

  );
}

export default App;
