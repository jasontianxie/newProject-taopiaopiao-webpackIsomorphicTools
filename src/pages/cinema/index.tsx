import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as style from './index.scss';
import { hashHistory } from 'react-router';


class Cinema extends React.Component<any, any>{
    render() {
        return (
            <div styleName="mainWrap">
                <div styleName="mainContent">
                    this is the content
                </div>
                <div styleName="mainBottom">
                    <div onClick={()=>hashHistory.push('/')}>主页</div>
                    <div style={{color:'red'}}>影院</div>
                </div>
            </div>
        )
    }
}
export default CSSModules(Cinema,style,{allowMultiple:true});