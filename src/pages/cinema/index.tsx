import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as style from './index.scss';
// const style = require('./index.scss');
import StoreList from 'src/components/storeList/index';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

const stores = [
    { name: "长江一店", address: "huangpujiang shanghai china", operation: "return", discount: "there is no discount" },
    { name: "长江一店", address: "huangpujiang shanghai china", operation: "return", discount: "there is no discount" },
    { name: "长江一店", address: "huangpujiang shanghai china", operation: "return", discount: "there is no discount" },
    { name: "长江一店", address: "huangpujiang shanghai china", operation: "return", discount: "there is no discount" }
];

class Cinema extends React.Component<any, any>{
    render() {
        return (
            <div styleName="mainWrap">
                <div styleName="mainContent">
                    {stores.map((item,index,arr)=>{
                        return <StoreList storeInfo={item} key={index} price={this.props.price}/>
                    })}
                </div>
                <div styleName="mainBottom">
                    <div onClick={() => hashHistory.push('/')}>主页</div>
                    <div>影院</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        price: state.get('stores')
    }
  }

export default connect(
    mapStateToProps
  )(CSSModules(Cinema, style, { allowMultiple: true }));