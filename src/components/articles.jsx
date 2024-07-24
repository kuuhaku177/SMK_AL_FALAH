import React, { useState, useEffect } from "react";
import { getAllNews } from '../Api'
import { Link } from "react-router-dom";

export default function Articles() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getAllNews()
            .then((data) => {
                setNews(data);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {news.map((article, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <img src={article.images} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/articles/${article.id}`} className="btn btn-primary">Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}