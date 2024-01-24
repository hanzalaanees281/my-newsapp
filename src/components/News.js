// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";


// export default class News extends Component {

//   static defaultProps = {
//     country: "us",
//     pageSize: 10,
//     category: "general",
//   }

//   static Props = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `News - ${this.capitalizeFirstLetter(props.category)}`
//   }
//   async updateNews() {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a948e85b18e24c58831a36316923b9d0&page=${this.state.page}&pagesize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(40);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     })
//     props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//   };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a948e85b18e24c58831a36316923b9d0&page=${this.state.page}&pagesize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1 className='text-center my-4'>News - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length < this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//             <div className="row mx-3">
//               {this.state.articles.map((element,index) => {
//                 return <div className="col-md-4" key={index}>
//                   <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
//                     description={element.description ? element.description.slice(0, 60) : ""}
//                     imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                 </div>
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>

//       </>
//     )
//   }
// }





import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalresults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.
      category}&apiKey=a948e85b18e24c58831a36316923b9d0&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `News - ${capitalizeFirstLetter(props.category)}`
    updateNews();
    //eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.
      category}&apiKey=a948e85b18e24c58831a36316923b9d0&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalresults(parsedData.totalResults)
  };

  return (
    <>
      <h1 className='text-center' style={{ marginTop: "65px" }}>News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row mx-3">
            {articles.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 60) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
}

News.Props = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News