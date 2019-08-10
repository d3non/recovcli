import React from "react";
import BookResult from "../components/BookResult";

function ResultsContainer(props) {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results Found</h3>
                {props.bookData.map((credit) => {
                    return <BookResult
                    creditnum={credit.id_credit}
                    name={credit.first_name}
                    mid={credit.mid_name}
                    paid={credit.total_pay}
                    debt={credit.total_debt}/>
                })}
            </div>
        );
    } 
}

export default ResultsContainer;