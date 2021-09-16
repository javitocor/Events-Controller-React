/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiCall  from '../helpers/APICall';
import style from '../style/TicketsList.module.css';
import ListItem from '../components/ListItem';
import generateKey from '../helpers/generateKey';



class TicketsList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { 
      count:{
        prev: 0,
        next: 10
      },
      hasMore: true,
      current: [],
    }
  }

  async componentDidMount() {
    const { getAllItems } = this.props;
    try {
      await getAllItems();
      this.setState({current: this.props.items.itemsList.slice(this.state.count.prev, this.state.count.next)})
    } catch (error) {
      console.log(error)
    }        
  }

  getMoreData = () => {
    if (this.state.current.length === this.props.items.itemsList.length) {
      this.setState({HasMore: false});
      return;
    }
    setTimeout(() => {
      this.setState({current: this.state.current.concat(this.props.items.itemsList.slice(this.state.count.prev + 10, this.state.count.next + 10))})
    }, 500)
    this.setState({count:{ prev: this.state.count.prev + 10, next: this.state.count.next + 10 }})
  }

  render() {
    const { items, auth } = this.props;
    const { itemsList } = items;
    const {user } = auth;
    console.log(this.state.current)
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
          <InfiniteScroll
            dataLength={this.state.current.length}
            next={this.getMoreData}
            hasMore={this.state.hasMore}
            loader={<div className="d-flex justify-content-center align-items-center pt-5 w-100"><Spinner animation="grow" /></div>}
          >
            <div>
              {this.state.current && this.state.current.map(((item, index) => (
                <ListItem key={generateKey(index)} item={item} />
          )))
        }
            </div>
          </InfiniteScroll>
          
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