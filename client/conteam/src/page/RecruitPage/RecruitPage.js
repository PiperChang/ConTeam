import React from 'react'

const ProfileCards = () => {
	const profiles = [1, 2, 3, 4, 5]
	const profileCards = profiles.map((profile, index) => (
		<li key={index} className="bg-blue-500" style={{ height: "500px", width: "300px", color: 'blue', backgroundColor : "skyblue", marginBottom:"10px" }}>
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
	const intersectionObserver = new IntersectionObserver((entries, observer) => {
		const ioTarget = entries[0].target;
		if (entries[0].isIntersecting) {
			console.log(ioTarget);
			ioTarget.unobserve($li)

			$li = $ul.appendChild
			




			
		}
	}, options)
	return (
		<div>
			<ProfileCards />
		</div>
	)
}

