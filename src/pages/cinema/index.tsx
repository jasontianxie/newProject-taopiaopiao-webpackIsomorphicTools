import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as style from './index.scss';
import StoreList from 'src/components/storeList/index';
import { hashHistory } from 'react-router';

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
                        return <StoreList storeInfo={item} key={index}/>
                    })}
                </div>
                <div styleName="mainBottom">
                    <div onClick={() => hashHistory.push('/')}>主页</div>
                    <div style={{ color: 'red' }}>影院</div>
                </div>
            </div>
        )
    }
}
export default CSSModules(Cinema, style, { allowMultiple: true });