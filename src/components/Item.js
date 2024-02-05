import PropTypes from 'prop-types';
import './Item.css'
import DataContext from '../data/DataContext';

/*const Item = () => {
  const name = "เดินห้างซื้อของ"
  const amount = 1000
  return (
    <li>
      {name} <span>-{amount}</span>
    </li>
  );
};*/

//ใช้งาน props
const Item = (props) => {
  //Destructuring
  const { title, amount } = props
  const status = amount < 0 ? "expense" : "income"
  const symbol = amount < 0 ? "-" : "+"
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <li className={status}>
      {/* /*{props.title}<span>{props.amount}</span> */}
      {title}<span>{symbol}{formatNumber(Math.abs(amount))}</span>
      {/* <DataContext.Consumer>
        {value => <p>{value}</p>}
      </DataContext.Consumer> */}
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item