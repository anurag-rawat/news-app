import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, desc, date, imgUrl, url, source } = this.props;
        return <div>
            <div className="card my-1">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'50%'}}>
                    {source}
                </span>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className='text-muted'>Published On : {date}</small></p>
                    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>;
    }
}
