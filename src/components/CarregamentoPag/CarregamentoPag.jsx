import React,{ useState, useEffect } from 'react';
import Loader from "../Loader/Loader";
import FadeLoader from "react-spinners/FadeLoader";
import "./CarregamentoPag.css"

function CarregamentoPag(props) {

  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
    display: none;
    `;
    
  return (
    <>
			{isLoading ? (
				<div className='loading'>
          <Loader />
          <FadeLoader isLoading={isLoading} css={override} />

				</div>
			) : (
				<div className="App">
					{props.component}
				</div>
			)}
		</>
  )
}

export default CarregamentoPag