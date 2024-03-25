import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {mills} from "../mills";
import "../index.scss" ;

const Home = () => {
        // <div className="mt-10 text-3xl mx-auto max-w-6xl">
        //     <div>Name: mills</div>
        //     <div>Framework: react</div>
        //     <div>Language: JavaScript</div>
        //     <div>CSS: Tailwind</div>
        //     {/* Navigation link to the About page */}
        //     <Link to="/about" className="text-blue-500 hover:underline">Go to About Page</Link>
        // </div>
        // const[isModalOpen,setIsModalOpen]=useState(null);
        // const[data,setData]=useState([]);
        // useEffect(() =>{
        //         setData(mills);
        //     },[]
        // );
        // const onClose=()=>{
        //         setIsModalOpen(null);
        // }
        // const handleDelete=(millId)=> {
        //         const newData = data.filter((entity) => entity.id !== millId);
        //         setData(newData);
        // }

        const arrayDataItems = mills.map(mill =>
            <div className={"bg-amber-500"}>

            <li key={mill.id}>
                    <p>{mill.place}</p>
                    <p>{mill.year}</p>
                    <p>{mill.height}</p>
            </li>
            </div>

        )
        return (
            <div className="bg-amber-500">
                    <ul >
                            {arrayDataItems}
                    </ul>

            </div>
        );
}

export default Home;
