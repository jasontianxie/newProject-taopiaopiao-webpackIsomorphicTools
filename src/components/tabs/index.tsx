import * as React from 'react';
import {TabPane} from '../tabPane/index';

export class Tabs extends React.Component<any,any>{
    static tabPane = TabPane
    render(){
        return (
            <div>
                <ul>
                    {React.Children.map(this.props.children,(child: React.ReactElement<any>,index)=>{
                        return (
                            <li>{child.props.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}