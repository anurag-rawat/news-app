import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { Spinner } from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 9,
        category : 'general'
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    articles = [
        {
            "source":{"id":null,"name":"Daily Mail"},
            "author":"Jonathan Chadwick",
            "title":"'Ultra-hot' exoplanet has a layered atmosphere like Earth's, study says - Daily Mail",
            "description":"Researchers used the HARPS spectrograph at the La Silla Observatory in Chile to analyse the atmosphere of the exoplanet, called WASP-189b, in detail.","url":"https://www.dailymail.co.uk/sciencetech/article-10460161/Ultra-hot-exoplanet-layered-atmosphere-like-Earths-study-says.html",
            "urlToImage":"https://i.dailymail.co.uk/1s/2022/01/31/16/53592967-0-image-a-58_1643645589551.jpg","publishedAt":"2022-01-31T16:15:04Z","content":"An extreme 'ultra-hot' Jupiter-like exoplanet where temperatures reach 5,760°F (3,200°C) has a layered atmosphere surprisingly similar to Earth's, a study reveals. \r\nExperts in Sweden and Switzerland… [+7286 chars]"
        },
        {
            "source":{"id":null,"name":"NDTV News"},
            "author":null,
            "title":"\"No Daughter...\": Father Of Delhi Woman Who Was Raped And Paraded - NDTV",
            "description":"A 20-year-old mother who was kidnapped, sexually assaulted, beaten and paraded by her neighbours in Delhi last week is recovering from her wounds and shock away from her family and her three-year-old son.",
            "url":"https://www.ndtv.com/india-news/delhi-shahdara-kasturba-nagar-rape-s-father-says-dont-care-for-justice-want-daughter-home-2740564",
            "urlToImage":"https://c.ndtvimg.com/2022-01/fdk05mjo_video-of-assualt-on-alleged-rape-survivorkasturba-nagarshahdara_625x300_27_January_22.jpg",
            "publishedAt":"2022-01-31T15:12:00Z",
            "content":"Videos captured the glimpses of the cruelty she endured for hours. (File)\r\nNew Delhi: A 20-year-old mother who was kidnapped, sexually assaulted, beaten and paraded by her neighbours in Delhi last we… [+4184 chars]"
        },
        {
            "source":{"id":"the-times-of-india","name":"The Times of India"},
            "author":"Getty Images",
            "title":"5 signs of mental health issues you should know - Times of India",
            "description":"The onset of global pandemic in 2020 which is continuing till now has led the world by a storm. Economy, socio-political scenarios and personal lives, all have been severely affected by it. While recurrent waves of the coronavirus have taught everybody the va…",
            "url":"https://timesofindia.indiatimes.com/life-style/health-fitness/de-stress/5-signs-of-mental-health-issues-you-should-know/photostory/89252442.cms",
            "urlToImage":"https://static.toiimg.com/photo/89252636.cms",
            "publishedAt":"2022-01-31T14:40:13Z",
            "content":"The onset of global pandemic in 2020 which is continuing till now has led the world by a storm. Economy, socio-political scenarios and personal lives, all have been severely affected by it. While rec… [+982 chars]"
        },
        {
            "source":{"id":null,"name":"DNA India"},
            "author":"DNA Web Team",
            "title":"Meteor fireball lights up evening sky in Pakistan’s Karachi, videos surface - WATCH - DNA India",
            "description":"The meteor fireball was seen not just from the Karachi city but from several parts of the Sindh province in the country.",
            "url":"https://www.dnaindia.com/viral/report-meteor-fireball-lights-up-evening-sky-in-pakistan-s-karachi-videos-surface-watch-viral-2931423",
            "urlToImage":"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/31/1018115-karachi-meteor.jpg",
            "publishedAt":"2022-01-31T14:36:00Z",
            "content":"Reported By:| Edited By: DNA Web Team |Source: DNA webdesk |Updated: Jan 31, 2022, 08:16 PM ISTResidents of Karachi Pakistan got a visual treat on Saturday evening (January 29) when a flash of blazin… [+1717 chars]"
        },
        {
            "source":{"id":null,"name":"Telangana Today"},
            "author":null,
            "title":"All classes in offline mode from February 1, Osmania University clarifies - Telangana Today",
            "description":"Hyderabad: The Osmania University (OU) authorities on Monday evening have said that offline classes for all its courses will start from Tuesday, February",
            "url":"https://telanganatoday.com/all-classes-in-offline-mode-from-february-1-osmania-university-clarifies",
            "urlToImage":"https://di5qs4dv32t01.cloudfront.net/wp-content/uploads/2022/01/Osmania-University-7.jpg",
            "publishedAt":"2022-01-31T14:31:00Z",
            "content":"Hyderabad: The Osmania University (OU) authorities on Monday evening have said that offline classes for all its courses will start from Tuesday, February 1.\r\nAs per the government instruction, offlin… [+1441 chars]"
        },
        {
            "source":{"id":null,"name":"Hindustan Times"},
            "author":"hindustantimes.com",
            "title":"Parliament: Pralhad Joshi says no scope for discussion on Pegasus row, matter sub-judice - Hindustan Times",
            "description":"Parliament Budget Session: The parliamentary affairs minister however, said that if Opposition parties wanted to raise any issue, they may do so while speaking on the Motion of Thanks on the President's address. | Latest News India",
            "url":"https://www.hindustantimes.com/india-news/parliament-pralhad-joshi-says-no-scope-for-discussion-on-pegasus-row-101643638802990.html",
            "urlToImage":"https://images.hindustantimes.com/img/2022/01/31/1600x900/38ae3c04-8b29-11eb-b55d-7c7042a9f5be_1616429870860_1643638966919.jpg",
            "publishedAt":"2022-01-31T14:24:22Z",
            "content":"Parliamentary affairs minister Pralhad Joshi on Monday said there was no scope of a separate discussion or debate on the Pegasus spyware issue in the ongoing Budget session of Parliament as the matte… [+1908 chars]"
        },
            
    ]

    noImgLink = "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png";
    constructor(){
        console.log("Constructor Called");
        super();
        this.state = {
            articles : [],
            page : 1,
            loading : false

        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6b53dcb3838471ba2ba9b5bcddb12d6&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.articles);
        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        });
    }

    async componentDidMount(){
        console.log("Component Mounted");
        this.updateNews();
    }
    
    handlePrevClick = async ()=>{
        this.setState({page : this.state.page-1});
        this.updateNews();
    }
    
    handleNextClick = async ()=>{
        this.setState({page : this.state.page+1});
        this.updateNews();
    }

    render() {
        console.log("Rendered");
        return <div>
            <div className="container my-2">
                <h1>ReadIt - Top Headlines</h1>
                {this.state.loading &&  <Spinner/> }
                <div className="row">
                    {!this.state.loading && this.state.articles.map((newsElement)=>{
                        return <div className="col-xl-3" key={newsElement.url}>
                            <NewsItem title={newsElement.title} desc={newsElement.description} date={newsElement.publishedAt} imgUrl={newsElement.urlToImage?newsElement.urlToImage:this.noImgLink} url={newsElement.url} source={newsElement.source.name}/>
                        </div>
                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
            {!this.state.loading && <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>}
            {!this.state.loading && <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/21)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>}
            </div>
        </div>;
    }
}
