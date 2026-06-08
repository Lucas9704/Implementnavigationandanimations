import imgMesaDeTrabajo61 from "./30aebf1fa8674c51e9105f4713f02fecaaf53b7a.png";
import imgMesaDeTrabajo71 from "./1d77ae4dd27ff69527be4ec77b56af2875338597.png";
import imgMesaDeTrabajo51 from "./c519b594809d8965d1bf31c5e6d1e69085e08746.png";
import imgMesaDeTrabajo21 from "./00ea0d6569e3e6789aa03ac8c73e9ebbbbe9aabe.png";
import imgOrneMetaadsCopia1 from "./e25b529d73de48738df2b7e45469df636cc91baa.png";
import imgMesaDeTrabajo101 from "./14e0ad6b601ba702ba92a6655a0c03888c78d326.png";
import imgMesaDeTrabajo91 from "./762ef24657cd92acc6e2d6818669c51368409639.png";
import imgOrneMetaads1 from "./c95e86eefa506dcddb79386d08cea975a2a77454.png";
import imgMesaDeTrabajo12 from "./b09e2672ebfb0df174ba3e99f8119613d3e74ed0.png";
import imgMesaDeTrabajo111 from "./a3c2ea2b85809c7793270ed05f13b047aa2cb9c4.png";
import imgWorkshopHist11 from "./ef31d2aed7eb79eec0622b852235a02d88db66f9.png";
import imgWorkshopHist1 from "./82fe76d4d9f368d793a5ddef6840b468e31419e4.png";
import imgKitParticipante1 from "./81fba3c518ea329b31d0a04096d3b436372c7d76.png";
import imgTips11 from "./614ce64b3a29f347f113dd141b500bb201e54dfc.png";
import imgTips21 from "./e994255c8970c4ce7b83aefe4f3f4f81f20fc548.png";
import img11 from "./d299b20208c2cf10a87d7608d710084aca3179af.png";
import img225 from "./2c6b61b381ba1fd255c7533729d4187a8a5c4c2d.png";
import imgFaQs11 from "./843eb3459841dd8ca720c9b03c30dd31f19e300c.png";
import imgIndex12 from "./896c8a6fc898fc8a93a61dba47508c8c669d9b16.png";
import imgBootcampMobile2 from "./44b20b793a95b3d45bb2cfb1a7d78d8a17a2e993.png";
import imgBootcampMobile1 from "./851d64ff942ddff12c38b078a4b4fe30e153e8e5.png";
import imgBootmockup1 from "./702db0600ec7963e7fb73d354f069cfc9e4ecfc3.png";
import videoSpotSponsors from "./SpotSponsors.mp4";
import videoReel from "./Reel_1.mp4";
import VideoPlayer from "../../app/components/VideoPlayer";

const adsFeed = [
  { src: imgMesaDeTrabajo51, ratio: "aspect-[1080/1920]" },
  { src: imgMesaDeTrabajo21, ratio: "aspect-[1080/1080]" },
  { src: imgOrneMetaadsCopia1, ratio: "aspect-[1080/1920]" },
  { src: imgMesaDeTrabajo101, ratio: "aspect-[1080/1350]" },
  { src: imgMesaDeTrabajo91, ratio: "aspect-[1080/1080]" },
  { src: imgOrneMetaads1, ratio: "aspect-[1080/1920]" },
];

const socialCards = [
  imgWorkshopHist11,
  imgWorkshopHist1,
  imgKitParticipante1,
  imgFaQs11,
  imgTips11,
  img11,
  img225,
  imgTips21,
];

function ColorColumn({
  code,
  top,
  bottom,
  gradient,
  topAspect,
  barAspect,
  bottomAspect,
}: {
  code: string;
  top: string;
  bottom: string;
  gradient: string;
  topAspect: string;
  barAspect: string;
  bottomAspect?: string;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-end min-w-px relative">
      <p
        className="font-dm-sans-extralight font-extralight leading-[normal] text-[12px] text-center text-white"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        {code}
      </p>
      <div className={`${topAspect} relative shrink-0 w-full rounded-full`} style={{ background: top }} />
      <div className={`${barAspect} relative rounded-[140px] shrink-0 w-full`} style={{ background: gradient }} />
      <div className={`${bottomAspect ?? topAspect} relative shrink-0 w-full rounded-full`} style={{ background: bottom }} />
    </div>
  );
}

export default function DevlightsDigitalCampaignsMobile() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <section className="border-[rgba(0,0,0,0.1)] border-b border-solid px-[24px] pb-px w-full">
        <div className="flex flex-col items-start justify-center py-[88px] w-full">
          <div className="flex flex-col gap-[32px] items-start w-full">
            <div className="flex flex-col gap-[32px] items-start w-full">
              <div className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[13px] py-[5px] rounded-[16777200px]">
                <p className="font-montserrat font-normal leading-[20px] text-[12px] text-black text-center">
                  Social Media Design - META Ads - Motion Content
                </p>
              </div>
              <h1 className="font-montserrat font-normal leading-[46px] text-[36px] text-black">
                Devlights Digital Campaigns
              </h1>
            </div>

            <div className="h-[374px] relative w-full">
              <div className="absolute aspect-square left-0 rounded-[20px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] top-0 w-[65.17%]">
                <img alt="" className="absolute inset-0 object-cover pointer-events-none rounded-[20px] size-full" src={imgMesaDeTrabajo61} />
              </div>
              <div className="absolute aspect-square right-0 rounded-[20px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] top-[124px] w-[66.05%]">
                <img alt="" className="absolute inset-0 object-cover pointer-events-none rounded-[20px] size-full" src={imgMesaDeTrabajo71} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start px-[24px] py-[48px] w-full">
        <div className="border-[rgba(0,0,0,0.1)] border-l border-solid flex flex-col gap-[32px] items-start pl-[20px] w-full">
          <div className="border-[rgba(0,0,0,0.1)] border-r border-solid w-full">
            <h2 className="font-montserrat font-normal leading-[32px] text-[24px] text-black">Project Overview</h2>
          </div>
          <p className="font-montserrat font-normal leading-[32.5px] text-[20px] text-[rgba(10,10,10,0.8)] w-full">
            The Devlights META Ads campaign was developed to increase brand visibility and communicate the company's technology services to potential business clients through targeted digital advertising. Focused on a B2B audience, the project combined static and motion-based content tailored for META platforms.
          </p>
        </div>
      </section>

      <section className="border-[rgba(0,0,0,0.1)] border-b border-solid flex flex-col gap-[112px] items-center px-[24px] py-[48px] w-full">
        <VideoPlayer src={videoReel} maxWidth="382px" className="w-full" />

        <div className="flex flex-col gap-[12px] items-center w-full">
          {adsFeed.map((item, index) => (
            <div key={index} className={`${item.ratio} w-full`}>
              <img alt="" className="size-full object-cover pointer-events-none" src={item.src} />
            </div>
          ))}
          <div className="h-[375px] w-[300px]">
            <img alt="" className="size-full object-cover pointer-events-none" src={imgMesaDeTrabajo12} />
          </div>
          <div className="h-[375px] w-[300px]">
            <img alt="" className="size-full object-cover pointer-events-none" src={imgMesaDeTrabajo111} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start px-[24px] w-full">
        <div className="flex flex-col gap-[96px] items-start w-full">
          <div className="border-[rgba(0,0,0,0.1)] border-solid border-t w-full">
            <div className="flex flex-col gap-[32px] items-center py-[48px] w-full">
              <div className="flex flex-col gap-[28px] items-start w-full">
                <div className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[24px] py-[5px] rounded-[16777200px] w-full">
                  <p className="font-montserrat font-normal leading-[20px] text-[14px] text-black w-full">Event Branding - Landing Page - Digital Communication</p>
                </div>
                <h3 className="font-montserrat font-semibold leading-[40px] text-[32px] text-black">03.1 - HackAIthon</h3>
                <p className="font-montserrat font-normal leading-[32.5px] text-[20px] text-[rgba(10,10,10,0.8)] w-full">
                  HackAIthon was a technology-focused event organized by <a className="underline" href="https://www.devlights.com/?utm_source=chatgpt.com" target="_blank">Devlights</a> in Corrientes, bringing together students and professionals to collaborate on projects powered by artificial intelligence. The project involved the development of the event's visual identity and communication system, including branding, merchandising, social media content, and video advertising campaigns.
                </p>
              </div>

              <p className="font-montserrat font-normal leading-[41px] text-[#a1a1a1] text-[16px] uppercase">Sponsor video</p>
              <VideoPlayer src={videoSpotSponsors} maxWidth="382px" className="w-full" />

              <p className="font-montserrat font-normal leading-[41px] text-[#a1a1a1] text-[16px] uppercase">Social media</p>
              <div className="gap-[4px] grid grid-cols-2 w-full">
                {socialCards.map((src, index) => (
                  <div key={index} className="aspect-[1090/1920] w-full">
                    <img alt="" className="size-full object-cover pointer-events-none" src={src} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[28px] items-start w-full">
            <div className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[24px] py-[5px] rounded-[16777200px] w-full">
              <p className="font-montserrat font-normal leading-[20px] text-[14px] text-black w-full">Educational Branding - Landing Page - Communication Design</p>
            </div>
            <h3 className="font-montserrat font-semibold leading-[40px] text-[32px] text-black w-full">03.2 - Bootcamp Experience</h3>
            <p className="font-montserrat font-normal leading-[32.5px] text-[20px] text-[rgba(10,10,10,0.8)] w-full">
              This project involved the design and development of the landing page for the Devlights Bootcamp, with the goal of clearly communicating the value proposition of the program and guiding users through the enrollment process. To streamline collaboration with the developer, the designs were based on the Aceternity UI component library, facilitating a smoother transition from design to code while ensuring consistency and scalability.
            </p>

            <div className="font-dm-sans-bold font-bold flex items-center justify-between text-[#1c59ff] text-[16px] w-full">
              <a className="underline" href="https://www.figma.com/proto/VmHzh0FNY3baWnV9RcjGj3/Bootcamp-3.0?node-id=795-5760&t=0YRtF28haw3wjumK-1&scaling=min-zoom&content-scaling=fixed&page-id=795%3A4273&starting-point-node-id=795%3A5037" target="_blank">Mobile Prototype</a>
              <a className="underline" href="https://www.figma.com/proto/VmHzh0FNY3baWnV9RcjGj3/Bootcamp-3.0?node-id=1018-6220&t=NFtxGvZhTkgyZixk-1&scaling=min-zoom&content-scaling=fixed&page-id=795%3A4273&starting-point-node-id=795%3A5037" target="_blank">Desktop Prototype</a>
            </div>

            <div className="content-center flex flex-wrap gap-y-[32px] items-center justify-between relative w-full">
              <div className="h-[260.857px] relative rounded-[10px] shrink-0 w-[189px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute h-[587.66%] left-0 max-w-none top-[-75.47%] w-full" src={imgIndex12} />
                </div>
              </div>

              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 h-[205.046px] ml-0 mt-[10.41px] relative row-1 w-[113.048px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.09%] left-[-12.97%] max-w-none top-[-0.05%] w-[112.97%]" src={imgBootcampMobile2} />
                  </div>
                </div>
                <div className="col-1 h-[235.555px] ml-[60.54px] mt-0 relative row-1 w-[116.359px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[100.06%] left-0 max-w-none top-[-0.03%] w-[114.63%]" src={imgBootcampMobile1} />
                  </div>
                </div>
              </div>

              <div className="h-[139px] relative rounded-[10px] shrink-0 w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                  <img alt="" className="absolute h-[2226.09%] left-0 max-w-none top-[-1246.74%] w-full" src={imgIndex12} />
                </div>
              </div>

              <div className="bg-black border border-black border-solid content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-[1_0_0] gap-[35px] h-[341.947px] items-center justify-center min-w-px px-[60px] py-[48px] rounded-[41px] w-full">
                <ColorColumn
                  code="#99FFFE"
                  top="#99FFFE"
                  bottom="#9747FF"
                  gradient="linear-gradient(178.267deg, rgb(153, 255, 254) 21.326%, rgb(151, 71, 255) 99.487%)"
                  topAspect="aspect-[66.31951904296875/62.92108154296875]"
                  barAspect="aspect-[66.31951904296875/167.1263427734375]"
                />
                <ColorColumn
                  code="#A772FF"
                  top="#A772FF"
                  bottom="#1C59FF"
                  gradient="linear-gradient(180deg, #1A5AFF 0%, #9747FF 63.467%)"
                  topAspect="aspect-[64.62030029296875/62.92108154296875]"
                  barAspect="aspect-[64.62030029296875/167.1263427734375]"
                />
                <ColorColumn
                  code="#1C59FF"
                  top="#1C59FF"
                  bottom="#D699FF"
                  gradient="linear-gradient(180deg, #1C59FF 0%, #D699FF 63.467%)"
                  topAspect="aspect-[64.62030029296875/62.92108154296875]"
                  barAspect="aspect-[64.62030029296875/167.1263427734375]"
                />
                <ColorColumn
                  code="#D699FF"
                  top="#D699FF"
                  bottom="#1B1B1B"
                  gradient="linear-gradient(0deg, #1B1B1B 12.574%, #D699FF 78.869%)"
                  topAspect="aspect-[69/62.86417007446289]"
                  barAspect="aspect-[69/166.50509643554688]"
                  bottomAspect="aspect-[69/62.86417007446289]"
                />
              </div>

              <div className="content-stretch flex flex-col h-[212px] items-start overflow-clip relative shrink-0 w-full">
                <div className="absolute flex h-[293.416px] items-center justify-center left-0 top-[-49px] w-[372.173px]">
                  <div className="flex-none rotate-[12.83deg]">
                    <div className="h-[225.727px] relative w-[330.305px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBootmockup1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
