import * as React from 'react';
// import React from 'react';
// const React = require('react');
import Tabs from '../../components/tabs/index';
import MovieOnline from 'src/components/movieOnline/index';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';
import './index.library.scss';
import * as CSSModules from 'react-css-modules';
import * as style from './index.scss';

const movieOnlineData = [
    {
        moviePic: require('src/images/TB1.dS0bCYH8KJjSspdXXcRgVXa_.jpg_160x160Q75.jpg'),
        movieName: 'test movie',
        stars: '9',
        movieDirector: 'jack chen',
        movieLeaderRole: 'green'
    },
    {
        moviePic: require('src/images/TB1dEI5aAfb_uJkSmLyXXcxoXXa_.jpg_160x160Q75.jpg'),
        movieName: 'test movie',
        stars: '9',
        movieDirector: 'jack chen',
        movieLeaderRole: 'green'
    },
    {
        moviePic: require('src/images/TB1FQ7tbAfb_uJkSmLyXXcxoXXa_.jpg_160x160.jpg'),
        movieName: 'test movie',
        stars: '9',
        movieDirector: 'jack chen',
        movieLeaderRole: 'green'
    },
    {
        moviePic: require('src/images/TB1IlYAerYI8KJjy0FaXXbAiVXa_.jpg_160x160Q75.jpg'),
        movieName: 'test movie',
        stars: '9',
        movieDirector: 'jack chen',
        movieLeaderRole: 'green'
    },
    {
        moviePic: require('src/images/TB1lgE8ennI8KJjSszbXXb4KFXa_.jpg_160x160.jpg'),
        movieName: 'test movie',
        stars: '9',
        movieDirector: 'jack chen',
        movieLeaderRole: 'green'
    },

]

const TabPane = Tabs.tabPane;
class App extends React.Component<any, any>{
    render() {
        return (
            <div styleName="mainWrap">
                <div styleName="mainContent">
                    <Tabs>
                        <TabPane title="正在热映">
                            <Carousel autoplay>
                                <div><img src={require('src/images/1.jpg')} alt="no pic" /></div>
                                <div><img src={require('src/images/2.jpg')} alt="no pic" /></div>
                                <div><img src={require('src/images/3.jpg')} alt="no pic" /></div>
                                <div><img src={require('src/images/4.jpg')} alt="no pic" /></div>
                                <div><img src={require('src/images/5.jpg')} alt="no pic" /></div>
                            </Carousel>
                            {
                                movieOnlineData.map((item, index, array) => <MovieOnline key={index} data={item} />)
                            }
                        </TabPane>
                        <TabPane title="即将上映">
                            content second
                    </TabPane>
                        <TabPane title="选择城市">content third</TabPane>
                    </Tabs>
                </div>
                <div styleName="mainBottom">
                    <div>主页</div>
                    <div>影院</div>
                </div>
            </div>
        )
    }
}
export default CSSModules(App,style,{allowMultiple:true});