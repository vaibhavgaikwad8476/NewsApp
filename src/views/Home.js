import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import React ,{useEffect,useState } from 'react'
import './Home.css';
import axios from 'axios';
import NewsArticle from '../component/NewsArticle/NewsArticle';

export default function Home() 
{
    const [news,setNews] = React.useState([]);
    const [searchQuery, setSearchQuery] = useState("pune");

    const loadNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-11-21&sortBy=publishedAt&apiKey=a24de9c871d34cbf868701ab1a6be4a7`);
        
        setNews(response.data.articles);
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
      loadNews();
    },);
  
    useEffect(() => {
        loadNews()
    },
    )


  return (
    <>
      <div
        className="container my-4 py-2 w-50 shadow rounded"
        style={{ backgroundColor: "#5DB1FF" }}
      >
        <h1 className="text-center fw-bold">Tazza Khabar 📰</h1>
      </div>
      <div className="container w-50">
        <form>
          <input
            type="text "
            className="form-control"
            placeholder="Enter News Here"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </form>
      </div>
      <div className='news-container'>
      {news.map((newsArticle)=>{
          const{author,title,description,url,urlToImage,publishedAt,content}= newsArticle;

          return(
            <>
           <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}/>
           </>
          );
        })
      }
    </div>
  
  </>
  );
}


