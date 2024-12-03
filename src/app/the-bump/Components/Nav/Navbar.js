'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CalendlyModal from '../Calendly/CalendlyModal';

export default function Navbar({ publisher }) {
	const pathname = usePathname();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	console.log({ pathname }, !pathname === '/', pathname);
	return (
		<>
			<div className={'md:mr-[80px] opacity-1 md:absolute md:w-full mt-6 relative z-50'} id="nav">
				<div className="flex justify-between items-center flex-row bg-transparent rounded-3xl relative sm:text-sm  2xl:text-lg xxl:text-2xl">
					<div className="md:pl-[10%]">
						<img src="/dpandaLogo2.png" alt="logo" className="md:hidden block w-16 -mt-4" />
						<img src="/DpandaLogo.png" alt="logo" className="hidden md:block max-h-10" />
					</div>
					<div className="min-w-[40%] md:relative md:gap-x-2 items-center flex-1 md:flex-none justify-around flex bg-secondary p-2 md:px-4 rounded-2xl rounded-t-none md:rounded-t-2xl">
						<Link
							href="/roi-calculator"
							className="rounded-[24px] text-[16px] text-center bg-secondary/70 px-4 py-1 text-white font-medium"
							variant="primary"
						>
							ROI Calculator
						</Link>{' '}
						{pathname !== '/' && <div className="bg-secondary/70 h-6 w-0.5"></div>}
						{pathname !== '/' && (
							<div
								onClick={openModal}
								className="rounded-[24px] text-[16px] text-white px-4 text-center py-1 font-medium"
							>
								<p>Talk to us</p>
								{publisher && (
									<p className="text-[12px] text-primary">
										for <span className="capitalize">{publisher}</span>
									</p>
								)}
							</div>
						)}
						<div className="bg-secondary/70 h-6 w-0.5"></div>
						<Link
							href="/features"
							className="rounded-[24px] text-[16px] text-center bg-secondary px-4 py-1 text-white font-medium"
							variant="primary"
						>
							All Features
						</Link>
					</div>
				</div>
			</div>
			<CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
}
