import React, { Component }   from "react";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import Button from "./Button/Button";
import RadioButton from "./RadioButton";
import TextInput from "./common/TextInput";
import TextArea from "./common/TextArea";
import DropDown from "./common/DropDown";
import ViewField from "./common/ViewField";
import DatePicker from "./common/DatePickertester";
import HeadSection from "./HeadSection/HeadSection";
import ContentSection from "./ContentSection/ContentSection";

import cx from 'classnames';

export default class ResultItem extends Component {
  constructor(props) {
    super(props);
  }
  displayCurrency(num) {
    return `$${num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`
  }
  render() {
    let {
      purchaseType, onValueChange,
      fundName,
      accountName,
      provider,
      providerId,
      currency,
      marketValue, currentItem,
      comments, id,
      validated, setCurrent
    } = this.props;
    const validationClass = !validated ? 'default-bar' :
      validated === "SUCCESS" ? "success-bar" :
      validated === "ERROR" ? "error-bar" :
      validated === "WARNING" ? "warning-bar" : "";
    return (
      <div onClick={setCurrent.bind(this, id)}
        className={cx({"current-item":currentItem === id}, "result-item", validationClass)}
      >
        <HeadSection>
          <TextInput name="fundName"
            wrapperClass="underline-field"
            value={fundName}
            onChange={(e)=> {onValueChange('fundName', e.target.value)}}
          />
          <TextInput name="accountName"
            wrapperClass="underline-field"
            value={accountName}
            onChange={(e)=> {onValueChange('accountName', e.target.value)}}
          />
          <ViewField wrapperClass="payment-info"
            label="Provider"
            value={provider}
          />
          <ViewField wrapperClass="payment-info"
            label="ID CUSIP"
            value={providerId}
          />
          <ViewField wrapperClass="payment-info"
            label="Currency"
            value={currency}
          />
          <ViewField wrapperClass="payment-info"
            label="Market Value (USD)"
            value={this.displayCurrency(marketValue)}
          />
        </HeadSection>
        <ContentSection>
          <ButtonGroup groupLabel="Side">
            <Button buttonLabel="Buy"
              className={cx({"btn-primary":purchaseType === "BUY"})}
              onClick={onValueChange.bind(this, "purchaseType", "BUY")}
            />
            <Button buttonLabel="Sell"
              className={cx({"btn-danger":purchaseType === "SELL"})}
              onClick={onValueChange.bind(this, "purchaseType", "SELL")}
            />
          </ButtonGroup>
          <div className="currency-wrapper">
            <div style={{display: "flex", justifyContent: "center"}}>
              <RadioButton label="Currency" value="CURRENCY"
                group="amount"
                onClick={(e)=> {onValueChange('amount', "CURRENCY")}}
              />
              <RadioButton label="Shares" value="SHARES"
                group="amount"
                onClick={(e)=> {onValueChange('amount', "SHARES")}}
              />
            </div>
            <TextInput name="number"
              label=""
              onChange={(e)=> {onValueChange('number', e.target.value)}}
              placeholder="Enter number > 0"
            />
          </div>
          <div>
            <label>Trade Date</label>
            <DatePicker />
          </div>
          <div>
            <label>Trade Window</label>
            <DropDown
              wrapperClass="form-group"
              options={[]}
              onChange={(e)=> {onValueChange('tradeWindow', e.target.value)}}
              name="tradeWindow"
            />
          </div>
          <div className="settlement-options">
            <DropDown label="Cash Settlement Instructions"
              wrapperClass="form-group"
              options={[]}
              onChange={(e)=> {onValueChange('cashSettlementInstructions', e.target.value)}}
              name="cashSettlementInstructions"
            />
            <DropDown label="Custody Settlement Instructions"
              wrapperClass="form-group"
              options={[]}
              onChange={(e)=> {onValueChange('custodySettlementInstructions', e.target.value)}}
              name="custodySettlementInstructions"
            />
          </div>
          <TextArea name="comments"
            label="Comments"
            value={comments}
            rows={4}
            placeholder="Enter Comments"
            onChange={(e)=> {onValueChange('comments', e.target.value)}}
          />
        </ContentSection>
      </div>
    );
  }
}
