import * as React from 'react';
// import React from 'react';
// const React = require('react');
import {Tabs} from '../../components/tabs/index';
const TabPane = Tabs.tabPane;
export class App extends React.Component<any,any>{
    render(){
        return (
            <div>
                <Tabs>
                    <TabPane title="first"></TabPane>
                    <TabPane title="second"></TabPane>
                    <TabPane title="third"></TabPane>
                </Tabs>
            </div>
        )
    }
}
