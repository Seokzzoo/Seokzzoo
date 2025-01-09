import React from 'react'
import { useState } from 'react'

export default function Accordian() {
	const [isOpened, setIsOpened] = useState(false)

	const openFunc = () => {
		setIsOpened(!isOpened)
	}

  return (
		<div>
			<div style={{width: '100px', margin: 'auto', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between'}} onClick={openFunc}>
				<p>Click me!</p>
				<p>{ isOpened ? '-' : '+' }</p>
			</div>

			{isOpened &&  <div style={{width: '100px', margin: 'auto', backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px'}}>
				<p>Opened?</p>
			</div>}
		</div>
		
  )
}
