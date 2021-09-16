import React from 'react'

const Modal = (props) => {
  const { item } = props;

  return (
    <div className=" w-75 mx-auto my-3 text-center">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <i className="fas fa-ellipsis-h" />
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="contLeft d-flex flex-row justify-content-center align-items-center modal-titles">
                <div className="leftleft d-flex justify-content-center align-items-center">
                  <i className="fas fa-receipt" />
                </div>
                <div className="leftright d-flex flex-column">
                  <h6>
                    {item.firstName} 
                    {' '}
                    {item.lastName}
                  </h6>
                  <p>Ha entrado</p>
                </div>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;