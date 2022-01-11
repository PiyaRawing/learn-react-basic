import DataContext from "./DataContext";
import { useContext } from "react";
import "./reportComponent.css";


const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <div className="amount">
                <h4>ยอดคงเหลือ</h4>
                <h1>฿{formatNumber(income - Math.abs(expense))}</h1>
            </div>

            <div className="report-content">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">฿{formatNumber(Math.abs(expense))}</p>
                </div>


            </div>
        </div>
    );
}

export default ReportComponent