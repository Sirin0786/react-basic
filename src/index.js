import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
//แบบปกติ
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

root.render(<App/>)

//แสดง html ในเว็บ
/*root.render(<h1>Penguin</h1>);*/

//สร้างตัวแปร javascript มาเก็บ html
/*const data = (
  <h1>สวัสดีชาวโลก</h1>
)

root.render(data);*/

//สร้าง functional component
/*function HelloComponent(){
  return <h1>สวัสดี Component</h1>
}

root.render(<HelloComponent/>)*/

//สร้าง class component
/*class HelloComponent extends React.Component{
  render(){
    return <h1>สวัสดี component รอบที่ 2</h1>
  }
}

root.render(<HelloComponent/>)*/

//เรียกใช้ component จากไฟล์ .js อื่น ต้อง import ก่อน
/*root.render(<HelloComponent/>)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
