import React, { Component }   from 'react';
import ResultItem from './ResultItem';

import '../styles/resultPage.scss';

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      resultItem: [{
        fundName: 'Dreyfus Cash Mgmt',
        accountName: 'ABCFirm',
        provider: 'Dreyfus',
        providerId: '26188J206',
        currency: 'USD',
        marketValue: 160000000000,
        purchaseType: 'BUY',
        comments: '',
        validated: '',
        id: 1
      }, {
        id: 2,
        fundName: 'JP Morgan - EUR',
        accountName: 'ABCFirm, International',
        provider: 'J.P. Morgan',
        providerId: '4812A2603',
        currency: 'USD',
        marketValue: 175000000000,
        purchaseType: 'SELL',
        comments: '',
        validated: 'SUCCESS'
      }],
      amount: 1000,
      currentItem: null
    };
  }
  onValueChange(field, value, id) {
    // TODO: Find the record based on uniq id
    let resultItem = this.state.resultItem[0];
    resultItem[field] = value;
    this.setState({
      resultItem: [resultItem]
    });
  }
  render() {
    let { resultItem, amount, currentItem } = this.state;
    return (
      <div className="result-page">
        <div style={{marginBottom: '20px'}}>
        <span className="title-item">Total: {resultItem.length}</span>
        <span className="title-item">Amount: {amount}</span>
        </div>
        {
          resultItem.map((item, index) => {
            return (
              <ResultItem key={index} onValueChange={this.onValueChange}
                {...item}
                currentItem={currentItem}
                setCurrent={(id) => {
                  this.setState({currentItem: id});
                }}
              />
            );
          })
        }
      </div>
    );
  }
}
