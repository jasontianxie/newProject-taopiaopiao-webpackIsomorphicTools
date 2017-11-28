///<reference path="./index.d.ts" />
import * as React from 'react';
import { TabPane } from '../tabPane/index';
// const style = require('./index.scss.json') ;
// import style from './index.scss.json';
import * as CSSModules from 'react-css-modules';
// let style =require('./index.scss') ;
import * as style from './index.scss';


class Tabs extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state = {
            tabPaneToShow:0
        }
    }
    tabPaneClickToShow(tabIndex:number):void{
        this.setState({...this.state,tabPaneToShow:tabIndex});
    }
    static tabPane = TabPane
    render() {
        console.log(this.props)
        return (
            <div>
                <ul styleName="titleWrap">
                    {React.Children.map(this.props.children, (child: React.ReactElement<any>, index) => {
                        return (
                            <li styleName='title' onClick={()=>this.tabPaneClickToShow(index)}>{child.props.title}</li>
                        )
                    })}
                </ul>
                {
                    React.Children.map(this.props.children, (child: React.ReactElement<any>, index) => {
                        return (
                            <div style={{display:(this.state.tabPaneToShow === index?'block':'none')}}>{child.props.children}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CSSModules(Tabs,style);