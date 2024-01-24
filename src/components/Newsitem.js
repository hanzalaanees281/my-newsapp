// import React, { Component } from 'react'

// export default class Newsitem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//     return (
//       <div>
//         <div className="card">
//           <div style={{position: 'absolute', right: '0'}}>
//             <span className="badge rounded-pill bg-danger">
//               {source}
//             </span></div>
        
//           <img src={!imageUrl ? "https://www.travelandleisure.com/thmb/8VLDZ3FA8y5M4w1eFpIFvgNSZRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-interior-plane-cabin-flight-attendant-DIRTYPLANE1123-6c183e7a1e2e4ccc82fa70525e5f03dd.jpg" : imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-body-secondary">by {!author ? "Unkown" : author} on {new Date(date).toUTCString()}</small></p>
//             <a href={newsUrl} target="'_blank'" className="btn btn-sm btn-dark">Read more</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }



import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem