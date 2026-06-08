import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import Navbar from "../components/Navbar";
import imgBackgroundImage from "../../imports/Home/02020aa95951a2c25d2cdbf09fcbde16d141747f.png";
import imgSuccess4 from "../../imports/Home/fdae164e1088a54740bbe556c96fc63706203a6f.png";
import imgRevendedorSolicitudAprobada1 from "../../imports/Home/57521d22f5ee3c7cac08f2e1bf6703e862ab4c16.png";
import imgBackgroundImage1 from "../../imports/Home/eef97d1b28e33e30c22ec8dd57c4931ae91dc562.png";
import imgGroup861 from "../../imports/Home/4d34812f7ce186a533793aef0de7e5ca5c9d06c2.png";
import imgGroup87 from "../../imports/Home/ad623be10964d77eb06617a2d2a72ea92a42d878.png";
import imgBackgroundImage2 from "../../imports/Home/21a51794e8146afcaea12d5a819d5484d0ac74ca.png";
import imgMesaDeTrabajo61 from "../../imports/Home/30aebf1fa8674c51e9105f4713f02fecaaf53b7a.png";
import imgMesaDeTrabajo71 from "../../imports/Home/1d77ae4dd27ff69527be4ec77b56af2875338597.png";
import imgImageWithFallback from "../../imports/Home/106-DSC00301.jpg";

function Hero() {
	return (
		<div
			className="absolute left-0 top-[60px] h-[55vh] min-h-[400px] max-h-[850px] w-full md:h-[68vh] md:min-h-[520px]"
			style={{
				backgroundImage:
					"linear-gradient(rgba(253, 224, 71, 0.3) 0%, rgba(253, 186, 116, 0.25) 40%, rgba(249, 168, 212, 0.2) 70%, rgb(255, 255, 255) 100%)",
			}}
			data-name="Hero"
		/>
	);
}

function FadeInSection({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isInView, hasAnimated]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
			transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
		>
			{children}
		</motion.div>
	);
}

function WorkCard({
	to,
	title,
	category,
	images,
	delay = 0,
}: {
	to: string;
	title: string;
	category: string;
	images: React.ReactNode;
	delay?: number;
}) {
	return (
		<FadeInSection delay={delay}>
			<Link
				to={to}
				className="bg-white h-[340px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[572.5px] relative rounded-[16px] shrink-0 w-full block group overflow-hidden"
			>
				<motion.div
					className="overflow-clip rounded-[inherit] size-full"
					whileHover={{ y: -8 }}
					transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
				>
					<div className="content-stretch flex flex-col items-start p-px relative size-full">
						<div className="content-stretch flex flex-col flex-1 items-start overflow-clip relative shrink-0 w-full transition-transform duration-500 h-[calc(100%-80px)] sm:h-[calc(100%-90px)] md:h-[calc(100%-100px)] lg:h-[calc(100%-113px)]">
							{images}
						</div>
						<div className="h-auto min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[113px] absolute bottom-0 left-0 right-0 bg-white">
							<div
								aria-hidden="true"
								className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none"
							/>
							<div className="content-stretch flex flex-col items-start pt-3 sm:pt-4 md:pt-5 lg:pt-[25px] px-4 sm:px-5 md:px-[24px] pb-3 sm:pb-4 relative size-full">
								<div className="content-stretch flex flex-col items-start gap-2 sm:gap-3 relative shrink-0 w-full">
									<div className="relative flex-1 min-w-0">
										<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
											<div className="font-groteska-medium not-italic text-base sm:text-lg md:text-xl lg:text-[24px] leading-tight sm:leading-snug text-black truncate">
												{title}
											</div>
										</div>
									</div>
									<div className="h-[26px] sm:h-[30px] relative rounded-full shrink-0">
										<div
											aria-hidden="true"
											className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-full"
										/>
										<div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full px-2.5 sm:px-3 md:px-[13px] py-[3px] sm:py-[5.5px]">
											<p className="font-montserrat font-normal leading-[18px] sm:leading-[20px] text-[11px] sm:text-xs md:text-sm text-black whitespace-nowrap">
												{category}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<div
					aria-hidden="true"
					className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] group-hover:border-[rgba(0,0,0,0.2)] transition-colors duration-300"
				/>
			</Link>
		</FadeInSection>
	);
}

export default function HomePage() {
	const selectedWorkRef = useRef<HTMLDivElement>(null);
	const resumeRef = useRef<HTMLDivElement>(null);

	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		const hash = window.location.hash;
		if (hash === "#selected-work") {
			setTimeout(() => scrollToSection(selectedWorkRef), 100);
		} else if (hash === "#resume") {
			setTimeout(() => scrollToSection(resumeRef), 100);
		}
	}, []);

	return (
		<div className="bg-white relative size-full overflow-y-auto">
			<Hero />
			<div className="bg-white content-stretch flex flex-col items-center pt-[60px] relative w-full">
				<div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1440px]">
					<FadeInSection>
						<div className="relative shrink-0 w-full">
							<div className="content-stretch flex flex-col gap-3 sm:gap-[11px] items-start px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] py-12 sm:py-16 md:py-32 lg:py-40 relative size-full">
								<h1 className="font-groteska-bold leading-[1.1] md:leading-[96px] lg:leading-[128px] not-italic relative shrink-0 text-[2rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl xl:text-[128px] text-black max-w-full">
									Bridging Product Utility & Brand Narrative.
								</h1>
								<p className="font-montserrat font-normal leading-[1.4] sm:leading-[28px] relative shrink-0 text-[1rem] sm:text-lg md:text-[20px] text-[rgba(10,10,10,0.6)]">
									Adapting systems across industries.
								</p>
							</div>
						</div>
					</FadeInSection>

					<div
						ref={selectedWorkRef}
						id="selected-work"
						className="relative shrink-0 w-full scroll-mt-[60px]"
					>
						<div
							aria-hidden="true"
							className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
						/>
						<div className="content-stretch flex flex-col items-start pb-px pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] relative size-full">
							<div className="content-stretch flex flex-col gap-10 sm:gap-12 md:gap-16 items-start relative shrink-0 w-full">
								<FadeInSection>
									<div className="relative shrink-0 w-full">
										<p className="font-groteska-bold leading-tight sm:leading-[48px] md:leading-[60px] not-italic text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-black">
											Selected Work
										</p>
									</div>
								</FadeInSection>

								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[24px] w-full mb-5">
									<WorkCard
										to="/natural-parks"
										title="Natural Parks Hunting/Fishing Licensing Platform"
										category="Public Sector"
										delay={0.1}
										images={
											<div className="relative h-full w-full overflow-hidden">
												<div className="absolute inset-0 pointer-events-none">
													<img
														alt=""
														className="absolute size-full max-w-none object-cover"
														src={imgBackgroundImage}
													/>
													<div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
												</div>
												<div className="relative hidden h-full md:block">
													<div className="absolute left-[12%] top-[15%] h-[123.314px] w-[272.015px] overflow-hidden rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.15)]">
														<img
															alt=""
															className="absolute left-0 top-0 h-[264.71%] w-full max-w-none"
															src={imgRevendedorSolicitudAprobada1}
														/>
													</div>
													<div className="absolute right-[9%] top-[20%] h-[265.668px] w-[426.157px] max-w-[68%] rounded-[8px]">
														<img
															alt=""
															className="absolute inset-0 size-full rounded-[8px] object-cover pointer-events-none"
															src={imgSuccess4}
														/>
													</div>
												</div>
												<div className="relative flex h-full flex-col justify-end gap-3 p-4 md:hidden">
													<div className="ml-auto aspect-[426/266] w-[88%] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.16)]">
														<img
															alt=""
															className="size-full object-cover"
															src={imgSuccess4}
														/>
													</div>
													<div className="aspect-[272/123] w-[70%] overflow-hidden rounded-[10px] bg-white shadow-[0px_6px_16px_0px_rgba(0,0,0,0.12)]">
														<img
															alt=""
															className="h-[264.71%] w-full max-w-none object-top"
															src={imgRevendedorSolicitudAprobada1}
														/>
													</div>
												</div>
											</div>
										}
									/>

									<WorkCard
										to="/public-communication"
										title="Public Communication Campaigns"
										category="Public Sector"
										delay={0.2}
										images={
											<div className="relative h-full w-full overflow-hidden">
												<div className="absolute inset-0 pointer-events-none">
													<img
														alt=""
														className="absolute size-full max-w-none object-cover"
														src={imgBackgroundImage1}
													/>
													<div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
												</div>
												<div className="relative hidden h-full md:block">
													<div className="absolute left-[12%] top-[16%] h-[239.304px] w-[425.019px] max-w-[68%] rounded-[8px]">
														<img
															alt=""
															className="absolute inset-0 size-full rounded-[8px] object-cover pointer-events-none"
															src={imgGroup861}
														/>
													</div>
													<div className="absolute right-[11%] top-[26%] h-[230.065px] w-[120.114px] rounded-[8px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)]">
														<img
															alt=""
															className="absolute inset-0 size-full rounded-[8px] object-cover pointer-events-none"
															src={imgGroup87}
														/>
													</div>
												</div>
												<div className="relative flex h-full flex-col justify-end gap-3 p-4 md:hidden">
													<div className="aspect-[425/239] w-[84%] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.16)]">
														<img
															alt=""
															className="size-full object-cover"
															src={imgGroup861}
														/>
													</div>
													<div className="ml-auto aspect-[120/230] w-[28%] min-w-[88px] overflow-hidden rounded-[10px] shadow-[0px_6px_16px_0px_rgba(0,0,0,0.14)]">
														<img
															alt=""
															className="size-full object-cover"
															src={imgGroup87}
														/>
													</div>
												</div>
											</div>
										}
									/>

									<div className="col-span-1">
										<WorkCard
											to="/devlights-campaigns"
											title="Devlights Event Communication and Social Media"
											category="Tech"
											delay={0.3}
											images={
												<div className="relative h-full w-full overflow-hidden">
													<div className="absolute inset-0 pointer-events-none">
														<img
															alt=""
															className="absolute size-full max-w-none object-cover"
															src={imgBackgroundImage2}
														/>
														<div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
													</div>
													<div className="relative hidden h-full md:block">
														<div className="absolute left-[18%] top-[15%] size-[216.186px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
															<img
																alt=""
																className="absolute inset-0 size-full rounded-[8px] object-cover pointer-events-none"
																src={imgMesaDeTrabajo61}
															/>
														</div>
														<div className="absolute right-[14%] top-[29%] size-[219.107px] rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
															<img
																alt=""
																className="absolute inset-0 size-full rounded-[8px] object-cover pointer-events-none"
																src={imgMesaDeTrabajo71}
															/>
														</div>
													</div>
													<div className="relative flex h-full flex-col justify-end gap-3 p-4 md:hidden">
														<div className="aspect-square w-[56%] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.18)]">
															<img
																alt=""
																className="size-full object-cover"
																src={imgMesaDeTrabajo61}
															/>
														</div>
														<div className="ml-auto aspect-square w-[58%] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.18)]">
															<img
																alt=""
																className="size-full object-cover"
																src={imgMesaDeTrabajo71}
															/>
														</div>
													</div>
												</div>
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div ref={resumeRef} id="resume" className="scroll-mt-[60px] w-full">
						<FadeInSection>
							<div className="relative shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
								/>
								<div className="content-stretch flex flex-col items-start px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] py-6 sm:py-8 md:py-10 lg:py-[40px] relative w-full">
									<h2 className="font-groteska-bold leading-tight sm:leading-[48px] md:leading-[60px] not-italic text-2xl sm:text-3xl md:text-4xl lg:text-[60px] text-black">
										Resume
									</h2>
								</div>
							</div>
						</FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="relative shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
                />
                <div className="content-stretch flex flex-col items-start pb-px px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] relative size-full">
                  <div className="relative shrink-0 w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none hidden md:block"
                    />
                    <div className="content-stretch flex flex-col items-start px-0 md:px-px relative size-full">
                      <div className="relative shrink-0 w-full grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[415px_1fr] gap-8 md:gap-0">
                        <div className="content-stretch flex flex-col items-start pb-px">
                          <div className="h-auto md:h-[603px] relative shrink-0 w-full">
                            <div
                              aria-hidden="true"
                              className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
                            />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full p-[32px]">
                              <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col items-start overflow-clip rounded-[16px] mb-[24px]">
                                <div className="h-[437.906px] relative shrink-0 w-full">
                                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <img
                                      alt="Profile"
                                      className="absolute h-[115%] left-0 max-w-none top-0 w-full"
                                      src={imgImageWithFallback}
                                    />
                                  </div>
                                </div>
                              </div>
                              <h2 className="font-['Groteska:Medium',sans-serif] leading-[36px] not-italic text-[30px] text-black mb-[8px]">
                                Ana Paula Churruarin
                              </h2>
                              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.6)]">
                                Graphic Designer
                              </p>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div
                              aria-hidden="true"
                              className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
                            />
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
                              <h3 className="font-['Groteska:Medium',sans-serif] leading-[28px] not-italic text-[20px] text-black">
                                Personal Information
                              </h3>
                              <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 w-full">
                                <div className="w-full">
                                  <p className="leading-[16px] text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase mb-[4px]">
                                    Location
                                  </p>
                                  <p className="leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                    Corrientes, Argentina
                                  </p>
                                </div>
                                <div className="w-full">
                                  <p className="leading-[16px] text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase mb-[4px]">
                                    Contact
                                  </p>
                                  <p className="leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                    anapau.ch@icloud.com
                                  </p>
                                  <p className="leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                    +549 3777 229333
                                  </p>
                                </div>
                                <div className="w-full">
                                  <p className="leading-[16px] text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase mb-[4px]">
                                    Interests
                                  </p>
                                  <p className="leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                    Contemporary Art, Architecture, Analog
                                    Photography, Vinyl Collecting
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full p-[32px]">
                            <h3 className="font-['Groteska:Medium',sans-serif] leading-[28px] not-italic text-[20px] text-black mb-[16px]">
                              Languages
                            </h3>
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full border-b border-[rgba(0,0,0,0.05)]">
                                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                  English
                                </p>
                                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.4)]">
                                  C2
                                </p>
                              </div>
                              <div className="content-stretch flex items-center justify-between pb-[9px] relative shrink-0 w-full border-b border-[rgba(0,0,0,0.05)]">
                                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.8)]">
                                  Spanish
                                </p>
                                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.4)]">
                                  Native
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

												<div className="content-stretch flex flex-col items-start pb-px">
													<div className="relative shrink-0 w-full">
														<div
															aria-hidden="true"
															className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
														/>
														<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-5 sm:gap-6 lg:gap-[24px] items-start px-4 sm:px-6 md:px-[48px] py-6 sm:py-8 lg:py-[40px] relative size-full">
															<h2 className="font-groteska-medium leading-[1.3] sm:leading-[24px] not-italic text-lg sm:text-xl lg:text-[24px] text-black">
																Education
															</h2>
															<div className="content-start flex flex-col gap-4 sm:gap-5 lg:gap-[6px] items-start relative shrink-0 w-full">
																<div className="content-stretch flex flex-col gap-1.5 sm:gap-2 lg:gap-[6px] items-start px-4 sm:px-5 lg:px-[24px] py-2 sm:py-px border-l-2 border-black w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2017 - 2020
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		Bachelor's Degree
																	</p>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		In Graphic and Multimedia Design,
																		Universidad de la Cuenca del Plata
																	</p>
																</div>
																<div className="content-stretch flex flex-col gap-2 sm:gap-[9px] items-start px-4 sm:px-5 lg:px-[24px] py-2 sm:py-px border-l-2 border-black w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2021
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		UX Design/Development
																	</p>
																	<div className="font-montserrat font-normal text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		<p className="leading-[1.5] sm:leading-[20px]">
																			AI Foundations of UX Design, Google
																		</p>
																		<p className="leading-[1.5] sm:leading-[20px]">
																			Web Development Course (HTML5 & CSS3) —
																			UTN
																		</p>
																	</div>
																</div>
																<div className="content-stretch flex flex-col gap-2 items-start px-4 sm:px-5 lg:px-[24px] py-2 border-l-2 border-black w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2018-2020
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		UI Design
																	</p>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		User Interface (UI) Design Course — UTN
																	</p>
																</div>
															</div>
														</div>
													</div>

													<div className="relative shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 border-t border-[rgba(0,0,0,0.1)]">
														<div
															aria-hidden="true"
															className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none hidden lg:block"
														/>
														<div className="content-stretch flex flex-col gap-5 sm:gap-6 lg:gap-[24px] items-start px-4 sm:px-6 md:px-[48px] py-6 sm:py-8 lg:py-[32px] border-b lg:border-b-0 border-[rgba(0,0,0,0.1)] lg:border-r">
															<h3 className="font-groteska-medium leading-[1.3] sm:leading-[32px] not-italic text-base sm:text-xl lg:text-[24px] text-black">
																Core Disciplines
															</h3>
															<div className="content-stretch flex flex-col gap-4 sm:gap-5 lg:gap-[24px] items-start w-full">
																{[
																	"UX/UI Design",
																	"Design Systems",
																	"Brand Identity",
																	"Art Direction",
																	"Prototyping & Interaction",
																	"User Flow and Information Architecture",
																].map((skill) => (
																	<div
																		key={skill}
																		className="flex items-center gap-3 sm:gap-4 lg:gap-[16px]"
																	>
																		<div className="bg-black rounded-full size-[5px] sm:size-[6px]" />
																		<p className="font-montserrat font-normal leading-[1.5] sm:leading-[24px] text-[13px] sm:text-[16px] text-[rgba(0,0,0,0.8)]">
																			{skill}
																		</p>
																	</div>
																))}
															</div>
														</div>
														<div className="content-stretch flex flex-col gap-5 sm:gap-6 lg:gap-[24px] items-start px-4 sm:px-6 md:px-[48px] py-6 sm:py-8 lg:py-[32px]">
															<h3 className="font-groteska-medium leading-[1.3] sm:leading-[32px] not-italic text-base sm:text-xl lg:text-[24px] text-black">
																Soft Skills
															</h3>
															<div className="content-stretch flex flex-col gap-4 sm:gap-5 lg:gap-[21px] items-start w-full">
																<div>
																	<h4 className="font-montserrat-medium font-medium leading-[1.5] sm:leading-[24px] text-[13px] sm:text-[16px] text-black mb-1 lg:mb-[4px]">
																		Strategic Thinking
																	</h4>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.5)]">
																		Seeing the big picture while obsessing over
																		details. I apply an Atomic Design
																		methodology, carefully crafting even the
																		smallest design element.
																	</p>
																</div>
																<div>
																	<h4 className="font-montserrat-medium font-medium leading-[1.5] sm:leading-[24px] text-[13px] sm:text-[16px] text-black mb-1 lg:mb-[4px]">
																		Adaptability
																	</h4>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.5)]">
																		I like to pour my creative energy in each
																		and every project I'm part of. Working on
																		different topics, for diverse audiences,
																		delivering a tailored design solution.
																	</p>
																</div>
																<div>
																	<h4 className="font-montserrat-medium font-medium leading-[1.5] sm:leading-[24px] text-[13px] sm:text-[16px] text-black mb-1 lg:mb-[4px]">
																		Visual Consistency
																	</h4>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.5)]">
																		Following branding guidelines help me
																		maintaining coherent identity through
																		different platforms.
																	</p>
																</div>
																<div>
																	<h4 className="font-montserrat-medium font-medium leading-[1.5] sm:leading-[24px] text-[13px] sm:text-[16px] text-black mb-1 lg:mb-[4px]">
																		Cross-Disciplinary Thinking
																	</h4>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.5)]">
																		I enjoy combining different design tools,
																		approaching each project as part of a
																		broader communication system.
																	</p>
																</div>
															</div>
														</div>
													</div>

													<div className="relative shrink-0 w-full px-4 sm:px-6 md:px-[48px] py-6 sm:py-8 lg:py-[32px] border-t border-[rgba(0,0,0,0.1)]">
														<h3 className="font-groteska-medium leading-[1.3] sm:leading-[32px] not-italic text-base sm:text-xl lg:text-[24px] text-black mb-4 sm:mb-6 lg:mb-[24px]">
															Tools & Technologies
														</h3>
														<div className="flex flex-col sm:flex-row gap-6 sm:gap-[24px]">
															<div className="flex-1">
																<p className="font-montserrat-medium font-medium leading-[1.3] sm:leading-[16px] text-[11px] sm:text-[12px] text-[rgba(0,0,0,0.4)] tracking-[1.2px] uppercase mb-2 sm:mb-3 lg:mb-[8px]">
																	Design
																</p>
																<div className="flex flex-col gap-2 sm:gap-[8px]">
																	{[
																		"Figma",
																		"Lovable",
																		"Premiere Pro",
																		"After Effects",
																		"Photoshop",
																		"Illustrator",
																	].map((tool) => (
																		<p
																			key={tool}
																			className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.8)]"
																		>
																			{tool}
																		</p>
																	))}
																</div>
															</div>
															<div className="flex-1">
																<p className="font-montserrat-medium font-medium leading-[1.3] sm:leading-[16px] text-[11px] sm:text-[12px] text-[rgba(0,0,0,0.4)] tracking-[1.2px] uppercase mb-2 sm:mb-3 lg:mb-[8px]">
																	Management
																</p>
																<div className="flex flex-col gap-2 sm:gap-[8px]">
																	{[
																		"Jira",
																		"Notion",
																		"FigJam",
																		"Asana",
																		"Trello",
																	].map((tool) => (
																		<p
																			key={tool}
																			className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(0,0,0,0.8)]"
																		>
																			{tool}
																		</p>
																	))}
																</div>
															</div>
														</div>
													</div>

													<div className="relative shrink-0 w-full">
														<div
															aria-hidden="true"
															className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
														/>
														<div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-5 sm:gap-6 lg:gap-[24px] items-start px-4 sm:px-6 md:px-[48px] py-6 sm:py-8 lg:py-[40px] relative size-full">
															<h2 className="font-groteska-medium leading-[1.3] sm:leading-[48px] not-italic text-lg sm:text-xl lg:text-[24px] text-black">
																Experience
															</h2>
															<div className="content-stretch flex flex-col lg:flex-row items-start relative shrink-0 w-full gap-5 lg:gap-[24px]">
																<div className="content-stretch flex flex-col gap-1.5 sm:gap-2 lg:gap-[6px] items-start px-4 sm:px-5 lg:px-[24px] py-2 border-l-2 border-black flex-1 w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2019 - 2022
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		Junior/Mid-Senior Designer
																	</p>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		Houston Agencia Creativa
																	</p>
																</div>
																<div className="content-stretch flex flex-col gap-1.5 sm:gap-2 lg:gap-[6px] items-start px-4 sm:px-5 lg:px-[24px] py-2 border-l-2 border-black flex-1 w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2021 - 2024
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		Senior Graphic Designer - UI Designer
																	</p>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		Subsecretaría de Contenido e Innovación
																		Digital
																	</p>
																</div>
																<div className="content-stretch flex flex-col gap-1.5 sm:gap-2 lg:gap-[6px] items-start px-4 sm:px-5 lg:px-[24px] py-2 border-l-2 border-black flex-1 w-full">
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		2024 - Present
																	</p>
																	<p className="font-groteska-medium leading-[1.4] sm:leading-[28px] not-italic text-base sm:text-lg lg:text-[20px] text-black">
																		UX/UI Designer
																	</p>
																	<p className="font-montserrat font-normal leading-[1.5] sm:leading-[20px] text-[12px] sm:text-[14px] text-[rgba(10,10,10,0.6)]">
																		Devlights
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</FadeInSection>
					</div>
				</div>
			</div>

			<Navbar
				onWorkClick={() => scrollToSection(selectedWorkRef)}
				onResumeClick={() => scrollToSection(resumeRef)}
			/>
		</div>
	);
}
