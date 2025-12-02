import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='max-w-7xl mx-auto px-5 sm:px-10 lg:px-[120px]'>
			{children}
		</div>
	)
}

export default Container
