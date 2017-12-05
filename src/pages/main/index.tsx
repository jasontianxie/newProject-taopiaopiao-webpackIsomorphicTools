import * as React from 'react';
// import React from 'react';
// const React = require('react');
import Tabs from '../../components/tabs/index';
import '../../commonStyle/normalize.scss';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';
import './index.library.scss';


const TabPane = Tabs.tabPane;
export class App extends React.Component<any,any>{
    render(){
        return (
            <div >
                <Tabs>
                    <TabPane title="first">
                        content first
                    </TabPane>
                    <TabPane title="second">
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </TabPane>
                    <TabPane title="third">content third</TabPane>
                </Tabs>
            </div>
        )
    }
}
