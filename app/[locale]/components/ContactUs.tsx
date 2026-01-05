'use client'

import { useTranslations } from 'next-intl'

export default function ContactUs() {
	const t = useTranslations('HomePage')

	return (
		<>
			<div className="bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/50 bg-blend-multiply mt-5 lg:mt-10">
				<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5 pb-2.5'>
					<div className='flex flex-col items-center gap-2 lg:max-w-full lg:gap-5'>
						<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl text-center'>
							{t('connectWithUs')}
						</h2>
						<div className='flex flex-col gap-3 lg:flex-row lg:w-full'>
							<div className='w-full lg:w-1/2 mx-auto bg-gray-400 gap-2.5 flex flex-col p-2 rounded-2xl justify-center items-center'>
								<div className='flex flex-col items-center gap-1'>
									<h3 className='text-[#FAC22B] text-2xl md:font-semibold md:pb-2'>
										{t('reservePlace')}
									</h3>
									<p className='text-[#3A3A3A] px-2.5 md:text-lg md:font-semibold md:w-2/3'>
										{t('reservePlaceDesc')}
									</p>
								</div>
								<form className='w-full md:px-4 max-w-4xl lg:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4'>
									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('surname')}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='text'
											required
											className='p-3 border md:border-2 rounded-lg outline-0'
											placeholder='Familiya'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('name')}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='text'
											required
											className='p-3 border md:border-2  rounded-lg outline-0'
											placeholder='Ism'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('howMany')}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='number'
											required
											className='p-3 border md:border-2  rounded-lg outline-0'
											placeholder='Odamlar soni'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('date')}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='date'
											required
											className='p-3 border md:border-2  rounded-lg outline-0'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('number')}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='text'
											required
											className='p-3 border md:border-2  rounded-lg outline-0'
											placeholder='+998 ** *** ** **'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-semibold'>
											{t('email')}
										</label>
										<input
											type='email'
											required
											className='p-3 border md:border-2  rounded-lg outline-0'
											placeholder='Email'
										/>
									</div>

									<div className='flex flex-col col-span-2'>
										<label className='text-sm font-semibold'>
											{t('needs')}
										</label>
										<textarea
											className='p-3 border md:border-2  rounded-lg h-32 resize-none outline-0'
											placeholder='Qo‘shimcha xohishlar...'
										/>
									</div>

									<p className='col-span-2 text-start md:text-center md:font-medium px-10 text-[#3A3A3A] max-w-full'>
										{t('rule')}
									</p>
									<button className='bg-[#DD1C1C] py-3 px-3 md:px-12 md:w-fit place-self-center text-center text-white rounded-full text-sm md:text-lg col-span-2 cursor-pointer'>
										{t('reserveBtn')}
									</button>
								</form>
							</div>
							<div className='flex flex-col gap-2 lg:w-1/2 lg:gap-10'>
								<div className='w-full h-75 md:h-112.5 rounded-lg overflow-hidden'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d613.7502105092781!2d69.3409660007771!3d41.31529759491884!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1764683788652!5m2!1sru!2s'
										className='w-full h-full border-0'
										allowFullScreen={true}
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
									/>
								</div>
								<div>
									<div className='flex items-center gap-2 text-white md:text-lg md:font-semibold'>
										<p>{t('days')}</p>
										<div className='flex-1 border-t border-white/40 border-2'></div>
										<p>9:00–23:00</p>
									</div>

									<div className='flex items-center gap-2 text-white md:text-lg md:font-semibold'>
										<p>{t('weekend')}</p>
										<div className='flex-1 border-t border-white/40 border-2'></div>
										<p>24/7</p>
									</div>

									<div className='flex items-center gap-2 text-white md:text-lg md:font-semibold'>
										<p>{t('place')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

// ;<iframe

// 	style='border:0;'
// 	allowfullscreen=''
// 	loading='lazy'
// 	referrerpolicy='no-referrer-when-downgrade'
// ></iframe>
