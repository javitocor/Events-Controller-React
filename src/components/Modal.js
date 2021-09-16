import React from 'react';
import style from '../style/Modal.module.css';

const Modal = (props) => {
  const { item } = props;
  
  return (
    <div className={style.icon}>
      <button type="button" className={style.modalButton} data-toggle="modal" data-target={`#${item._id}`}>
        <i className="fas fa-ellipsis-h" />
      </button>
      <div className={`modal fade ${style.modal}`} id={item._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className={`modal-dialog ${style.custom2} modal-lg`} role="document">
          <div className={`modal-content ${style.custom3}`}>
            <div className={`modal-header ${style.modalheader}`}>
              <div className={`${style.contLeft2} d-flex flex-row justify-content-center align-items-center`}>
                <div className={`${style.leftleft2} d-flex justify-content-center align-items-center`}>
                  <i className="fas fa-receipt" style={{color: item.present ? 'green' : 'red'}} />
                </div>
                <div className={`${style.leftright2} d-flex flex-column align-items-start"`}>
                  <h6>
                    {item.firstName} 
                    {' '}
                    {item.lastName}
                  </h6>
                  <p>{item.present ? 'Ha entrado' : 'No ha entrado'}</p>
                </div>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={`${style.modtop} d-flex flex-row justify-content-start align-items-start`}>
                <div className={`${style.modttopleft} d-flex flex-column justify-content-center align-items-start`}>
                  <h6>ID</h6>
                  <p className="text-muted">{item._id}</p>
                </div>
                <div className={`${style.modtopright} d-flex flex-column justify-content-center align-items-start`}>
                  <h6>N de Ticket</h6>
                  <p className="text-muted">{item.ticket}</p>
                </div>
              </div>
              <div className={`${style.modcenter} d-flex flex-row justify-content-start align-items-start`}>
                <div className={`${style.modtcenterleft} d-flex flex-column justify-content-center align-items-start`}>
                  <h6>Fecha de nacimiento</h6>
                  <p className="text-muted">{item.birthdate}</p>
                </div>
                <div className={`${style.modtcentercenter} d-flex flex-column justify-content-center align-items-start`}>
                  <h6>Email</h6>
                  <p className="text-muted">{item.email}</p>
                </div>
                <div className={`${style.modtcenterright} d-flex flex-column justify-content-center align-items-start`}>
                  <h6>Telefono</h6>
                  <p className="text-muted">{item.phone}</p>
                </div>
              </div>
              <div className={`${style.modbottom} d-flex flex-column justify-content-start align-items-start`}>
                <h6>Direccion</h6>
                <p className="text-muted">{item.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;