import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ROOT_URL } from "../../../../actions/newsActions";
import moment from "moment";
import "./News.scss";
class News extends Component {
  //constructor() {
  //  super();
    state = {
      articles: [],
      isLoading: false
    };
  //}
  componentDidMount() {
    this.setState({
        isLoading: true, 
        articles: []
    })
    fetch(ROOT_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, articles: [data] });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { articles, isLoading } = this.state;
    //const { isLoading, data } = this.state;
    //const { news } = this.props;
    //console.log(news);
    //console.log(isFetching)
    //if(news.data.length === 0 || news.isFetching) {
    //  return <Loader />
    //}
    return (
      <div className="main-content">
        <h1>Новости</h1>
        <div className="container">
          {isLoading && <h3>Загружаю...</h3>}
          {articles.map(newsItem => {
            // @ts-ignore
            return newsItem.articles.map((item, i) => {
              return (
                <div key={i} className="news-item">
                  <div className="row">
                    <div className="col-sm-3">
                      <img src={item.urlToImage} className="image" alt="" />
                    </div>
                    <div className="col-sm-9">
                      <h4>{item.title}</h4>
                      <p>{item.source.name}</p>
                      <p>
                        {moment.utc(item.publishedAt).format("MMM DD YYYY")}
                      </p>
                      <p>{item.description}</p>
                      <a href={item.url}>
                        <button className="btn btn-primary">
                          Подробнее...
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    );
  }
}
// @ts-ignore
News.propTypes = {
  articles: PropTypes.array,
  security: PropTypes.object.isRequired
};
// @ts-ignore
const mapStateToProps = state => ({
   articles: state.articles,
   security: state.security
})
export default connect(
 mapStateToProps,
 null                                // { getNews }
)(News);