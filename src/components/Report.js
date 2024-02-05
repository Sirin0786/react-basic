import { useContext } from "react"
import DataContext from "../data/DataContext"
import './Report.css'

const Report = () => {
    const name = useContext(DataContext)
    const { income, expense } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            {/* ข้อมูลส่งมาค่าเดียว */}
            {/* Hello : {name} */}

            {/* ข้อมูลส่งมาหลายค่า/ก้อน obj */}
            {/* <DataContext.Consumer>
                {context => <p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
            </DataContext.Consumer> */}
            {/* แสดงค่าแบบ 2 */}
            {/* <p>รายรับ : {income} </p>
            <p>รายจ่าย : {expense} </p> */}

            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default Report