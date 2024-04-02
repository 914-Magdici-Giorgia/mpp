import React, {useState} from "react";
import MillCard from "../components/MillCard";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {useMillContext} from "../components/MillContext";


const MillsList = () => {
    const { mills,sortMillsByYear } = useMillContext();
    const millsPerPage = 5;// Get the mills array from the context
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastMill = currentPage * millsPerPage;
    const indexOfFirstMill = indexOfLastMill - millsPerPage;
    const currentMills = mills.slice(indexOfFirstMill, indexOfLastMill);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <Link to="/add-mill">
                <Button>Add Mill</Button>
            </Link>
            <div>
                <Button onClick={sortMillsByYear}>Sort by Year</Button> {/* Use the Button component for sorting */}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMills.map((mill) => (
                    <MillCard key={mill.id} mill={mill} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {/* Previous Button */}
                <button
                    className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {/* Next Button */}
                <button
                    className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={indexOfLastMill >= mills.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MillsList;