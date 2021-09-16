import React from 'react';
import style from '../style/TicketsList.module.css';
import Modal from './Modal';

const ListItem = (props) => {
  const { item } = props;
  return (
    <div className={`${style.content} d-flex flex-row justify-content-center align-items-center`}>
      <div className={`${style.contLeft} d-flex flex-row justify-content-center align-items-center`}>
        <div className={`${style.leftleft} d-flex justify-content-center align-items-center`}>
          <i className="fas fa-receipt" />
        </div>
        <div className={`${style.leftright} d-flex flex-column`}>
          <h6>
            {item.firstName} 
            {' '}
            {item.lastName}
          </h6>
          <p>Ha entrado</p>
        </div>
      </div>
      <div className={`${style.contCenter} d-flex flex-column justify-content-center align-items-start`}>
        <div className="centcent">
          <h6>ID</h6>
          <p>{item._id}</p>
        </div>
      </div>
      <div className={`${style.contRight} d-flex flex-row justify-content-between align-items-center`}>
        <div className={`${style.rightleft} d-flex flex-column justify-content-center align-item-start`}>
          <div className="contrightleft">
            <h6>N de Ticket</h6>
            <p>{item.ticket}</p>
          </div>
        </div>
        <div className={`${style.rightright} d-flex flex-row justify-content-end align-item-end w-100`}>
          <Modal item={item} />
        </div>
      </div>
    </div>
  );
}

export default ListItem;