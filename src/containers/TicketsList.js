/* eslint-disable no-useless-constructor */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import apiCall  from '../helpers/APICall';
import style from '../style/TicketsList.module.css';
import ListItem from '../components/ListItem';
import generateKey from '../helpers/generateKey';

class TicketsList extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const { getAllItems } = this.props;
    try {
      await getAllItems();
    } catch (error) {
      console.log(error)
    }        
  }

  componentDidUpdate(prevProps){
    if(prevProps.items.itemsList !== this.props.items.itemsList){
      console.log('Hello world!')
    }
  }

  render() {
    const { items, auth } = this.props;
    const { itemsList } = items;
    const {user } = auth;
    console.log(itemsList);
    return (
      <main className={`${style.main} container`}>
        <div className={style.title}>
          <h3 className={style.welcome}>
            Bienvenido de nuevo,
            {' '}
            {user.username}
            ! &#128075;
          </h3>
          <p className={style.subtitle}>Estas son las personas que han comprado entrada.</p>
        </div>
        <>
          {itemsList.length === 0 ? (<div className="d-flex justify-content-center align-items-center pt-5 w-100"><Spinner animation="grow" /></div>
        ) : (
          itemsList.map((item, index) => (
            <ListItem key={generateKey(index)} item={item} />
          ))
          )}
        </>     
      </main>
    );
  }
}

TicketsList.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    itemsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: {
    user: state.auth.user,
  },
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: apiCall
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);