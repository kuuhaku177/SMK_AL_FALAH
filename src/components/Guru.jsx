import React, { useState, useEffect } from "react";
import { getAllTeacher } from "../Api"

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        getAllTeacher().then((data) => {
            setTeachers(data);
        });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {teachers && teachers.map((data, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{data.name}</th>
                            <td>{data.jenis_Ptk}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Teachers;
