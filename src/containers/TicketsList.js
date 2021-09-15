/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apiCall  from '../helpers/APIcall';

class TicketsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { getAllItems } = this.props;
    try {
      await getAllItems();
    } catch (error) {
      console.log(error)
    }        
  }

  render() {
    const { items } = this.props;
    const { itemsList } = items;
    
    return itemsList.length === 0 ? <div className="d-flex justify-content-center align-items-center pt-5 w-100">Loading...</div> : (
      <main />
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