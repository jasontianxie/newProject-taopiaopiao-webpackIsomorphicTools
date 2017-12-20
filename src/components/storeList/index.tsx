import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as style from './index.scss';

interface storeInfo {
    name:string;
    address:string;
    operation:string;
    discount:string;
}
interface storeListProps {
    storeInfo:storeInfo;
    price:any
}

class StoreList extends React.Component<storeListProps, any>{
    render() {
        const {name,address,operation,discount} = this.props.storeInfo;
        return (
            <div styleName="wrap">
                <div styleName="storeName">{name}{this.props.price}</div>
                <div styleName="storeAddress">{address}</div>
                <div styleName="operation">{operation}</div>
                <div styleName="discount">{discount}</div>
            </div>
        )
    }
}
export default CSSModules(StoreList,style,{allowMultiple:true});