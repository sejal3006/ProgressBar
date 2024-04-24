import React, {useState, useEffect} from 'react'

export default function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 1), 230)
		}
	},[filled, isRunning])
  return (
	  <div id='container'>
            <h1 style={{textAlign : "center"}}>PROGRESSBAR</h1>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
		  <button className="btn" onClick={() => {setIsRunning(true)}}>RunPlease</button>
	</div>
  )
}