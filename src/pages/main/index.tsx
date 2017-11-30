import * as React from 'react';
// import React from 'react';
// const React = require('react');
import Tabs from '../../components/tabs/index';
import '../../commonStyle/normalize.scss';


const TabPane = Tabs.tabPane;
export class App extends React.Component<any,any>{
    render(){
        return (
            <div >
                <Tabs>
                    <TabPane title="first">content first</TabPane>
                    <TabPane title="second">content second</TabPane>
                    <TabPane title="third">content third</TabPane>
                </Tabs>
            </div>
        )
    }
}
