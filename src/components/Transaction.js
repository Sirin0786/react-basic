import DataContext from "../data/DataContext";
import Item from "./Item";
import './Transaction.css'
// ย้ายไป app
// import { v4 as uuidv4 } from 'uuid';

const Transaction = (props) => {
  // ย้ายไปไว้ที่ app เพราะใช้กระจายข้อมูล
  // const data = [
  //   { title: "ค่ารักษา", amount: 2000 },
  //   { title: "ค่าน้ำ", amount: 5000 },
  //   { title: "ค่าเช่า", amount: 7000 }
  // ]

  const { items } = props

  return (
    // <ul className="item-list">
    //   {/* ใส่ข้อมูล prop แบบตรงๆ
    //   <Item title="ค่ารักษาพยาบาล" amount="2000"/>
    //   <Item title="เงินเดือน" amount="50000"/>
    //   <Item title="ค่าเดินทาง" amount="500"/> */}

    //   {/* ส่งเป็น data ไป */}
    //   {/* <Item title={data[0].title} amount={data[0].amount} />
    //   <Item title={data[1].title} amount={data[1].amount} />
    //   <Item title={data[2].title} amount={data[2].amount} /> */}

    //   {/* ใช้ map มาช่วย loop ในการแสดงสมาชิก */}
    //   {items.map((e) => {
    //     // return <Item title={e.title} amount={e.amount} key={e.id} />
    //     //ใช้ spread operator มาช่วยลดรูปการเขียน
    //     // return <Item {..e} /> 

    //     //ใช้ uuid มาช่วย gen id อัตโนมัติ
    //     return <Item {...e} key={e.id} />
    //   })}

    // </ul>
    <div>
      <ul className="item-list">
        {items.map((e) => {
          return <Item {...e} key={e.id} />
        })}
      </ul>
    </div>
  );
};

export default Transaction