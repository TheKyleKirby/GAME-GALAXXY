// import platformEnum from '../../../server/schemas/game/gameTypeDefs'
// maybe hard code the options in, will be easier.

import { useState } from "react"
import { useMutation } from "@apollo/client"

const CreateTutorial = () => {

// todo retrieve values (handleChange)

// todo handle submit(htmlFor)




	return (
		<div className='flex flex-col w-full items-center bg-darkPurple-dark'>
			<div>
				<h2 className='text-goldenOrange-light m-20 bg-darkPurple-light py-5 px-10 rounded-lg font-bold text-5xl flex'>CREATE TUTORIAL</h2>
			</div>
			<div className=' bg-darkPurple-light mb-48 rounded-lg' >
				{/* text color not working...come back to. */}
				<form className='flex w-full space-x-24 items-center p-10'>
					<div className='flex flex-col space-y-20 mx-10 '>
						<input type='text' name='title' className=' rounded-lg mt-4 p-3  w-80' placeholder='Title' />
						<input type='text' name='game' className=' rounded-lg p-3  w-48' placeholder='Game' />
						<select id='platform' name='platform' className=' rounded-lg mt-4 p-3  w-80'>
							<option value='' disabled hidden >Platform</option>
							{/* {Object.entries(platformEnum).map(([key, value)] =>{<option key={key} value={value}}>{value}</option>})} */}
							<option value='xbox' >xbox</option>
							<option value='playstation' >playstation</option>
							<option value='pc' >pc</option>
							
						</select>
						<input type='text' name='level' className=' rounded-lg p-3  w-32' placeholder='Level' />
						<input type='text' name='youtubelink' className=' rounded-lg p-3 ' max-w-2xl min-w-96 placeholder='YouTube Link?' />
					</div>
					<div className='flex flex-col text-2xl text-goldenOrange-light gap-16 font-light m-3 justify-center'>
						<label>Start your tutorial here...</label>
						<textarea className=' rounded-lg p-3 -mt-5 w-96 h-96'>
						</textarea>
						<input type='text' name='tags' className=' rounded-lg p-2 w-96' placeholder='Tags' />
                        <button type="submit" className=" text-white bg-royalBlurp-dark w-48 py-2 self-end rounded-md">Save</button>

					</div>
					<button>

					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateTutorial