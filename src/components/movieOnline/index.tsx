import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import * as classNames from 'classnames';
import * as style from './index.scss';

export interface MovieOnlineProps {
    data:data
    key?:any
    pic:any
    changeStore:any
}
export interface data {
    moviePic:any;
    movieName:string;
    stars:string;
    movieDirector:string;
    movieLeaderRole:string;
}
class MovieOnline extends React.Component<MovieOnlineProps, any>{
    constructor(props:MovieOnlineProps){
        super(props)
        this.state = {
            
        }
    }
    render(){
        const {data,pic,changeStore} = this.props;
        return(
            <div styleName="movieOnlineList">
                <div styleName="movieInfo">
                    <div styleName="moviePic"><img src={pic} alt="no pic"/></div>
                    <div styleName="movieDetail">
                        <span styleName="movieName">{data.movieName}</span>
                        <span styleName="movieStars">{data.stars}</span>
                        <span styleName="movieDirector">{data.movieDirector}</span>
                        <span styleName="movieLeaderRole">{data.movieLeaderRole}</span>
                    </div>
                </div>
                <button styleName="buttonBuy" onClick={changeStore}>购买</button>
            </div>
        ) ;
    }
}

export default CSSModules(MovieOnline,style,{allowMultiple:true});