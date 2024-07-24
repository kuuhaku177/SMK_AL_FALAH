import React, { useState, useEffect } from "react";
import { getAllFacility } from "../Api";

export default function Fasilitas() {
    const [facilities, setFacilities] = useState([]);
    const [paginate, setPaginate] = useState([]);

    useEffect(() => {
        getAllFacility()
            .then((data) => {
                setFacilities(data);
                setPaginate(data.slice(0, 10)); // Mengambil 10 data terbaru
            })
            .catch((error) => {
                console.error("Error fetching facilities:", error);
            });
    }, []);


    return (
        <>
            <div className="contaner">
                <div className="d-flex justify-content-center align-item-center">
                    <h1>Fasilitas</h1>
                </div>
                <table className="mx-5 table">
                    <thead>
                        <tr>
                            <th scope="col">Nama</th>
                            <th scope="col">Panjang</th>
                            <th scope="col">Lebar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginate.map((facility, index) => (
                            <tr key={index}>
                                <td>{facility.name}</td>
                                <td>{facility.long}</td>
                                <td>{facility.wide}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
