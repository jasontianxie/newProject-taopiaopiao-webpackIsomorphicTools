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
                        {/* content first */}
                        <div>
                        <Carousel autoplay>
                            <div><img src={require('src/images/1.jpg')} alt="no pic"/></div>
                            <div><img src={require('src/images/2.jpg')} alt="no pic"/></div>
                            <div><img src={require('src/images/3.jpg')} alt="no pic"/></div>
                            <div><img src={require('src/images/4.jpg')} alt="no pic"/></div>
                            <div><img src={require('src/images/5.jpg')} alt="no pic"/></div>
                        </Carousel>
                        </div>
                    </TabPane>
                    <TabPane title="second">
                        content second
                    </TabPane>
                    <TabPane title="third">content third</TabPane>
                </Tabs>
            </div>
        )
    }
}
