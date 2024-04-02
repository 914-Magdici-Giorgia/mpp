import React, {createContext, useContext, useEffect, useState} from "react";
import millsData from "../domain/mills";
// Create a context for managing mill data
const MillContext = createContext();

// MillProvider component to wrap your application and provide mill data
export const MillProvider = ({ children }) => {
    // Define state to hold mill data
    const [mills, setMills] = useState(millsData);

    const fetchMillData = () => {
        // Set the fetched mill data from millsData to the mills state
        setMills(millsData);
    };

    // Load mill data when the component mounts
    useEffect(() => {
        fetchMillData();
    }, []);
    // Function to update mill data
    const updateMill = (updatedMill) => {
        setMills((prevMills) =>
            prevMills.map((mill) =>
                mill.id === updatedMill.id ? updatedMill : mill
            )
        );
    };
    const addMill = (newMill) => {
        setMills((prevMills) => {
            const updatedMills = [...prevMills, newMill];
            console.log("Updated mills array:", updatedMills);
            return updatedMills;
        });
    };
    const deleteMill = (millId) => {
        setMills((prevMills) => prevMills.filter((mill) => mill.id !== millId));
    };

    const sortMillsByYear = () => {
        const sortedMills = [...mills].sort((a, b) => parseInt(a.year) - parseInt(b.year));
        setMills(sortedMills);
    };

    // Value object to provide mills data and update function
    const value = { mills, updateMill,addMill,deleteMill,sortMillsByYear };

    // Provide the context value to its children
    return (
        <MillContext.Provider value={value}>
            {children}
        </MillContext.Provider>
    );
};

// Custom hook to consume MillContext
export const useMillContext = () => useContext(MillContext);
