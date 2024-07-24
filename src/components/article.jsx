import React, { useState, useEffect } from "react";
import { news } from "../Api";
import { useParams } from "react-router-dom";

export default function Article() {
    const { id } = useParams(); 
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const articleDetails = await news(id); 
                setDetails(articleDetails);
            } catch (error) {
                console.error("Error fetching article details:", error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!details) {
        return <h1>Loading...</h1>; 
    }

    return (
        <div className="container mt-5">
            <div className="card position-relative">
                <img src={details.images} className="card-img-top" alt="" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">{details.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{details.description}</p>
                </div>
            </div>
        </div>
    );
}
