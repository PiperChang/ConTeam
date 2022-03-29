import React from 'react'

const ProfileCards = () =>{
	const profiles = [1,2,3,4,5]
	const profileCards = profiles.map((profile,index) =>(
		<li key={index} className="bg-blue-500" >				
			{profile}
		</li>
	))
	return (
			<ul>
				{profileCards}
			</ul>
	)
}

export default function RecruitPage() {
			
  return (
    <div>
		<ProfileCards />
    </div>
  )
}

