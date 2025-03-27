'use client';
import useAssets from '@/app/hooks/useAssets';
import { beaconEvents } from '@/app/utils/events';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';
import Navbar from '../Nav/Navbar';
import { SetUtmParams } from '@/app/utils/setUtmParams';

const Hero = () => {
  SetUtmParams()
  const [pubName, setPubName] = useState('dpanda-in');
  const assets = useAssets();
  const params = useParams();
  const publisher = params?.publisherId?.[0] || 'dpanda-in';
  useEffect(() => {
    if (location.pathname.includes('/publisher/')) {
      setPubName(
        location.pathname.replace('/publisher/', '').replace('-', ' ')
      );
    }
    localStorage.setItem('publisher', publisher);
  }, []);

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || e.currentTarget.id || '';
    beaconEvents.fireEvents(`widget-demo-click`, { item_name: elementId });
  };

  return (
    <>
      <section className="hidden lg:block h-screen lg:relative overflow-hidden bg-white">
        <div
          className={twMerge(
            'absolute top-0 h-[50vh] bg-primary w-full',
            publisher === 'dpanda' && 'bg-action'
          )}
        ></div>

        <div className="absolute inset-0 mr-[80px] lg:flex justify-between sm:z-20">
          <Navbar />
          <div></div>
          <div className="lg:z-10 sm:z-30 flex flex-col pl-[10%]">
            <div className="flex-1 justify-end flex flex-col">
              <h2 className="text-white">
                <span
                  className={twMerge(
                    'text-secondary sm:text-[54px] 2xl:text-[72px] xxl:text-[72px] leading-[1.1]',
                    publisher === 'dpanda' && 'text-white'
                  )}
                >
                  <span
                    className={twMerge(
                      'text-action font-extrabold',
                      publisher === 'dpanda' && 'text-primary'
                    )}
                  >
                    Discovery
                  </span>{' '}
                  Meets
                  <br /> Commerce
                </span>
              </h2>

              <p
                className={twMerge(
                  'md:mt-[15px] text-secondary w-[85%] font-medium sm:text-[18px] 2xl:text-[24px] custom-text-sm-medium'
                  // publisher === 'dpanda' && 'text-action'
                )}
              >
                <span className="font-bold">
                  From <span className="line-through"> Medium</span> to
                  Destination for Discovery,
                </span>
                <br />
                as mastered by Google, Amazon, TikTok and Meta
              </p>
            </div>

            <div className="z-50 sec-container xxl:text-[1.4em] inset-0 md:my-[20px]">
              <a
                id="live-preview-desktop"
                href={'/widget/' + pubName.split(' ').join('-')}
                onClick={handleBeaconEvent}
                className={twMerge(
                  'relative flex flex-col cursor-pointer bg-action rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] sm:w-[225px] 2xl:w-[235px] px-10',
                  publisher === 'dpanda' && 'bg-primary'
                )}
              >
                <div className="absolute  left-[20px] top-[45%]">
                  <div className="relative">
                    <span
                      className={twMerge(
                        'bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute',
                        publisher === 'dpanda' && 'bg-action'
                      )}
                    ></span>
                    <span
                      className={twMerge(
                        'bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full absolute',
                        publisher === 'dpanda' && 'bg-action'
                      )}
                    ></span>
                  </div>
                </div>
                <div className="flex gap-x-2 items-start relative ml-[10px]">
                  <span className="text-white text-left text-[18px] font-normal">
                    Interactive Demo
                  </span>
                </div>
                {pubName && (
                  <p
                    className={twMerge(
                      'text-primary text-[14px] xxl:text-[0.7em] text-left ml-[10px]',
                      pubName === 'dpanda' && 'text-action'
                    )}
                  >
                    for{' '}
                    {pubName && <span className="capitalize">{pubName}</span>}
                  </p>
                )}
              </a>
            </div>
            <div className="inset-0 bg-transparent z-10 sec-container flex flex-1 items-start">
              <div className="relative">
                <div className="text-primaryTextColor bottom-0">
                  {/* <p className="font-medium lg:text-[28px]">
										Big Tech Is Transforming Discovery To Commerce
									</p> */}
                  <h1 className="py-4 custom-text-sm-medium md:text-[32px] md:mt-[5%] md:mb-[20px] md:w-[95%]">
                    <HighlightedText text={'Everything'} /> to Drive On-Site
                    User Conversion and Monetization
                  </h1>
                  <div className="flex gap-x-3 custom-text-xs font-medium">
                    <div className="bg-brand/20 sm:text-center lg:p-5 rounded-lg relative">
                      Technology
                      <div className="absolute lg:h-full bg-brand 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
                    </div>
                    <div className="bg-brand/20 sm:text-center lg:p-5 rounded-lg relative">
                      Operations
                      <div className="absolute lg:h-full bg-brand 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
                    </div>
                    <div className="bg-brand/20 sm:text-center lg:p-5 rounded-lg relative">
                      Brand Supply
                      <div className="absolute lg:h-full bg-brand 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
                    </div>
                    <div className="bg-brand/20 sm:text-center lg:p-5 rounded-lg relative">
                      Intelligence
                      <div className="absolute lg:h-full bg-brand 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              'h-[90%] rounded-b-full min-w-[40%] bg-secondary sm:hidden lg:block'
            }
          >
            <div className="flex justify-center items-center h-full">
              <DPVideo
                id="videoDiv"
                className="h-[60%] bg-secondary w-fit object-cover"
                src={assets.heroVideo}
              />
            </div>
          </div>
        </div>
        {/* <div className="lg:h-[90%] pb-10 xxl:h-[95%] rounded-b-full bg-red top-[25%] sm:-z-0 lg:w-[45%] bg-[#003045] sm:h-[40%] sm:w-full sec-container relative lg:hidden">
					<div className="flex justify-center items-end  h-full">
						<DPVideo id="videoDiv" className="lg:h-[60%] sm:h-[60%] w-fit" src="/HeroVideo.mp4" />
					</div>
				</div> */}
      </section>
    </>
  );
};

export default Hero;
