import { AiFillCloseSquare } from 'react-icons/ai'
import './popup.css';

const PopUp = (props) => {
    
  return (props.trigger) ? (
    <div className='popup-main'>
      <div className='popup-left'> {props.children} </div>
      <div className='popup-right' onClick={() => props.setTrigger(false)}>  <AiFillCloseSquare /> </div>
    </div>
  ) : "";
}

export default PopUp;
