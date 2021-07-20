import React from 'react';
import styled from 'styled-components';
const Essay = ({number, question, children }) => {
    return (
        <EssayStyled>
        <div>
        <h3>Essay # {number}</h3>
        <div className="question">{question}</div>
        <div className="answer">{children}</div>
        </div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`
    padding:20px;
    border: solid 1px grey;
    filter: drop-shadow(1px 0px 0px #1b766d); /**drop shadow */
    margin: 20px;

    h2 {padding: 20px; margin:10px;}


    .question {
        font-size: 28px;
        text-align:left;
        color: #242424;
        background-color: #999;
        padding:10px;
        font-weight: bold;
    }
    .answer {
        font-size: 18px;
        text-align: left;
        padding: 10px;
        background-color: #eee;
}
`;