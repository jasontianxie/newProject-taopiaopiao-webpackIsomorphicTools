import * as React from 'react';
import './index.scss';
const style = require('./index.scss.json');

interface tabPaneProps {
    title:string
}

export class TabPane extends React.Component<tabPaneProps,any>{
    render(){
        return (
            <div className={style.title}>this is a welcome page www123</div>
        )
    }
}