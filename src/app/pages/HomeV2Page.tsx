import { useEffect, useRef } from "react";
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

import imgMainImage1 from "../../imports/181ddc332a987432e47d7d77923e244d15d6c016.png";
import imgFgv1 from "../../imports/0d714a2c3ba3ac324fb1dfd8656bb27526702842.png";
import imgMesaDeTrabajo14 from "../../imports/f2d3909eb7f074bbd15853a2f1a2171a842214bc.png";
import imgPerfilPld1 from "../../imports/b63d59e28b08de9dd608aba4ed02015958139c08.png";

type WorkItem = {
  title: string;
  category: string;
  to?: string;
  visual: React.ReactNode;
};

type ResumeGroup = {
  title: string;
  rows: Array<{ label: string; value: string | string[] }>;
};

const workItems: WorkItem[] = [
  {
    title: "Natural Parks Hunting/Fishing Licensing Platform",
    category: "Public Sector",
    to: "/natural-parks",
    visual: <NaturalParksVisual />,
  },
  {
    title: "Public Communication Campaigns",
    category: "Public Sector",
    to: "/public-communication",
    visual: <PublicCommunicationVisual />,
  },
  {
    title: "Devlights Event Communication and Social Media",
    category: "Tech",
    to: "/devlights-campaigns",
    visual: <DevlightsVisual />,
  },
  {
    title: "Houston Creative Studio Social Media in Content Systems",
    category: "Tech",
    to: "/social-media-content-systems",
    visual: <HoustonVisual />,
  },
];

const personalInformation: ResumeGroup = {
  title: "Personal Information",
  rows: [
    { label: "Location", value: "Corrientes, Argentina" },
    {
      label: "Contact",
      value: ["anapau.ch@icloud.com", "+549 3777 229333"],
    },
    {
      label: "Interests",
      value:
        "Contemporary Art, Architecture, Analog Photography, Vinyl Collecting",
    },
  ],
};

const languages = [
  { name: "English", level: "C2" },
  { name: "Spanish", level: "Native" },
];

const experience = [
  {
    years: "2019 - 2022",
    role: "Junior/Mid-Senior Designer",
    company: "Houston Agencia Creativa",
  },
  {
    years: "2021 - 2024",
    role: "Senior Graphic Designer - UI Designer",
    company: "Subsecretaria de Contenido e Innovacion Digital",
  },
  {
    years: "2024 - Present",
    role: "UX/UI Designer",
    company: "Devlights",
  },
];

const education = [
  {
    years: "2017 - 2020",
    title: "Bachelor's Degree",
    description:
      "In Graphic and Multimedia Design, Universidad de la Cuenca del Plata",
  },
  {
    years: "2021",
    title: "UX Design/Development",
    description: [
      "AI Foundations of UX Design, Google",
      "Web Development Course (HTML5 & CSS3) - UTN",
    ],
  },
  {
    years: "2018 - 2020",
    title: "UI Design",
    description: "User Interface (UI) Design Course - UTN",
  },
];

const softSkills = [
  {
    title: "Strategic Thinking",
    description:
      "Seeing the big picture while obsessing over details. I apply an Atomic Design methodology, carefully crafting even the smallest design element.",
  },
  {
    title: "Adaptability",
    description:
      "I like to pour my creative energy into each project, across different topics and audiences, delivering a tailored design solution.",
  },
  {
    title: "Visual Consistency",
    description:
      "Following branding guidelines helps me maintain a coherent identity through different platforms.",
  },
  {
    title: "Cross-Disciplinary Thinking",
    description:
      "I enjoy combining different design tools, approaching each project as part of a broader communication system.",
  },
];

const disciplines = [
  "UX/UI Design",
  "Design Systems",
  "Brand Identity",
  "Art Direction",
  "Prototyping & Interaction",
  "User Flow and Information Architecture",
];

const tools = {
  Design: [
    "Figma",
    "Lovable",
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "Illustrator",
  ],
  Management: ["Jira", "Notion", "FigJam", "Asana", "Trello"],
};

function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-montserrat text-[40px] xl:text-[60px] leading-[60px] text-black">
        {title}
      </h2>
    </div>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const content = (
    <div
      className={[
        "bg-white border border-[rgba(0,0,0,0.1)] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[16px] shrink-0 w-full transition-transform duration-300",
        item.to ? "active:scale-[0.99]" : "",
      ].join(" ")}
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="aspect-[1.33/1] w-full content-stretch flex flex-col items-center justify-center relative shrink-0 bg-[#f0ece6]">
          {item.visual}
        </div>
      </div>
      <div className="border-[rgba(0,0,0,0.1)] border-solid border-t content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col-reverse xl:flex-row xl:justify-between gap-[16px] items-start relative shrink-0 w-full">
          <h3 className="[word-break:break-word] font-montserrat font-normal leading-[32px] min-w-full xl:min-w-0 relative shrink-0 text-[24px] text-black max-w-[25ch]">
            {item.title}
          </h3>
          <div className="border border-[rgba(0,0,0,0.1)] border-solid h-[30px] relative rounded-[16777200px] shrink-0 px-[12px] flex items-center justify-center">
            <span className="font-montserrat font-normal leading-[20px] text-[14px] text-black whitespace-nowrap">
              {item.category}
            </span>
          </div>
        </div>
      </div>
      {item.to ? (
        <div className="pointer-events-none absolute inset-0 rounded-[16px] ring-0 transition-all duration-300 group-hover:ring-1 group-hover:ring-black/15" />
      ) : null}
    </div>
  );

  return (
    <FadeInSection delay={0.08 * index}>
      {item.to ? (
        <Link to={item.to} className="group block">
          {content}
        </Link>
      ) : (
        content
      )}
    </FadeInSection>
  );
}

function ResumeSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "px-[32px] py-[32px] xl:px-[48px] xl:py-[40px]",
        className,
      ].join(" ")}
    >
      <h3 className="mb-[24px] font-montserrat font-normal text-[20px] xl:text-[24px] leading-[28px] text-black">
        {title}
      </h3>
      {children}
    </section>
  );
}

function NaturalParksVisual() {
  return (
    <>
      <img
        alt=""
        className="absolute inset-0 size-full object-cover"
        src={imgBackgroundImage}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      <div className="relative w-[85%] aspect-[364/150] flex items-center justify-center">
        <img
          alt=""
          className="absolute right-[0] bottom-[0] w-[60%] rounded-[8px]"
          src={imgSuccess4}
        />
        <div className="absolute left-[0] top-[0] w-[38%] rounded-[8px] shadow-[0_4px_6px_rgba(0,0,0,0.15)] overflow-hidden aspect-[134/61]">
          <img
            alt=""
            className="absolute top-0 left-0 w-full max-w-none h-[264.71%]"
            src={imgRevendedorSolicitudAprobada1}
          />
        </div>
      </div>
    </>
  );
}

function DevlightsVisual() {
  return (
    <>
      <img
        alt=""
        className="absolute inset-0 size-full object-cover"
        src={imgBackgroundImage2}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      <div className="relative w-[65%] aspect-[233/163] flex items-center justify-center">
        <img
          alt=""
          className="absolute left-[0] top-[0] w-[53%] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
          src={imgMesaDeTrabajo61}
        />
        <img
          alt=""
          className="absolute right-[0] bottom-[0] w-[53.5%] rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
          src={imgMesaDeTrabajo71}
        />
      </div>
    </>
  );
}

function PublicCommunicationVisual() {
  return (
    <>
      <img
        alt=""
        className="absolute inset-0 size-full object-cover"
        src={imgBackgroundImage1}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      <div className="relative w-[72%] aspect-[264/163] flex items-center justify-center">
        <img
          alt=""
          className="absolute left-[0] top-[0] w-[87%] rounded-[8px]"
          src={imgGroup861}
        />
        <img
          alt=""
          className="absolute right-[0] bottom-[0] w-[24.6%] rounded-[8px]"
          src={imgGroup87}
        />
      </div>
    </>
  );
}

function HoustonVisual() {
  return (
    <>
      <img
        alt=""
        className="absolute inset-0 size-full object-cover"
        src={imgMainImage1}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      <div className="relative w-[63%] aspect-[230/162] flex items-center justify-center">
        <img
          alt=""
          className="absolute right-[0] top-[0] w-[78%] rounded-[8px]"
          src={imgFgv1}
        />
        <img
          alt=""
          className="absolute left-[0] bottom-[0] w-[78%] rounded-[8px]"
          src={imgMesaDeTrabajo14}
        />
        <img
          alt=""
          className="absolute right-[0] bottom-[0] w-[24.2%] rounded-[8px]"
          src={imgPerfilPld1}
        />
      </div>
    </>
  );
}

export default function HomeV2Page() {
  const selectedWorkRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#selected-work") {
      setTimeout(() => scrollToSection(selectedWorkRef), 100);
    }
    if (hash === "#resume") {
      setTimeout(() => scrollToSection(resumeRef), 100);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black relative">
      <main className="relative mx-auto flex w-full flex-col pb-[70px] pt-[60px] max-w-[430px] sm:max-w-[520px] xl:max-w-[1344px]">
        <FadeInSection>
          <section className="pb-[72px] pt-[98px] px-[32px] xl:px-[48px] xl:pt-[158px] xl:pb-[158px]">
            <p className="mb-[11px] font-montserrat-alternates font-medium text-[55px] xl:text-[128px] xl:leading-[128px] leading-[normal] text-black">
              Bridging Product Utility & Brand Narrative.
            </p>
            <p className="font-montserrat text-[20px] leading-[28px] text-[rgba(10,10,10,0.6)]">
              Adapting systems across industries.
            </p>
          </section>
        </FadeInSection>

        <section
          ref={selectedWorkRef}
          id="selected-work"
          className="scroll-mt-24 border-b border-[rgba(0,0,0,0.1)] py-[72px] xl:py-[96px] px-[32px] xl:px-[48px]"
        >
          <FadeInSection>
            <SectionHeader title="Selected Work" />
          </FadeInSection>
          <div className="mt-[40px] space-y-[40px] xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-[24px]">
            {workItems.map((item, index) => (
              <WorkCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section
          ref={resumeRef}
          id="resume"
          className="scroll-mt-24 py-[40px] px-[32px] xl:px-[48px]"
        >
          <FadeInSection>
            <SectionHeader title="Resume" />
          </FadeInSection>

          <div className="mt-[40px] w-full">
            <FadeInSection delay={0.05}>
              <div className="bg-white relative grid grid-cols-1 xl:grid-cols-3 xl:border xl:border-[rgba(0,0,0,0.1)]">
                <div className="xl:col-span-1 xl:row-span-3 xl:border-r xl:border-[rgba(0,0,0,0.1)] flex flex-col order-1 border-b border-[rgba(0,0,0,0.1)] xl:border-b-0">
                  <div className="p-[32px] xl:p-[48px] flex flex-col gap-[8px] border-b border-[rgba(0,0,0,0.1)]">
                    <div className="overflow-hidden rounded-[16px] bg-[rgba(0,0,0,0.05)] aspect-[350.33/437.91] w-full relative">
                      <img
                        alt="Ana Paula Churruarin"
                        className="absolute inset-0 size-full object-cover pointer-events-none"
                        src={imgImageWithFallback}
                      />
                    </div>
                    <h2 className="mt-[8px] font-montserrat font-normal text-[30px] leading-[36px] text-black">
                      Ana Paula Churruarin
                    </h2>
                    <p className="font-montserrat font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.6)]">
                      Graphic Designer
                    </p>
                  </div>

                  <ResumeSection
                    title={personalInformation.title}
                    className="border-b border-[rgba(0,0,0,0.1)]"
                  >
                    <div className="flex flex-col gap-[16px]">
                      {personalInformation.rows.map((row) => (
                        <div key={row.label} className="relative w-full">
                          <p className="font-montserrat text-[12px] uppercase tracking-[0.6px] text-[rgba(0,0,0,0.4)] leading-[16px] mb-[4px]">
                            {row.label}
                          </p>
                          {Array.isArray(row.value) ? (
                            <div className="text-[14px] text-[rgba(0,0,0,0.8)] leading-[20px] font-montserrat">
                              {row.value.map((entry) => (
                                <p key={entry} className="leading-[20px] m-0">
                                  {entry}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(0,0,0,0.8)]">
                              {row.value}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </ResumeSection>

                  <ResumeSection
                    title="Languages"
                    className="border-b border-[rgba(0,0,0,0.1)] xl:border-b-0"
                  >
                    <div className="space-y-[12px]">
                      {languages.map((language) => (
                        <div
                          key={language.name}
                          className="flex items-center justify-between border-b border-[rgba(0,0,0,0.05)] pb-[9px] last:border-b-0 last:pb-0"
                        >
                          <span className="font-montserrat text-[14px] leading-[20px] text-[rgba(0,0,0,0.8)]">
                            {language.name}
                          </span>
                          <span className="font-montserrat text-[14px] leading-[20px] text-[rgba(0,0,0,0.4)]">
                            {language.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>

                <div className="xl:col-span-2 xl:border-b xl:border-[rgba(0,0,0,0.1)] order-3 xl:order-2 border-b border-[rgba(0,0,0,0.1)]">
                  <ResumeSection title="Education">
                    <div className="flex flex-col xl:flex-row gap-[34px] xl:gap-[24px]">
                      {education.map((item) => (
                        <div
                          key={item.title}
                          className="border-l-2 border-black pl-[24px] py-[2px] flex flex-col gap-[6px] xl:flex-1"
                        >
                          <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(10,10,10,0.6)]">
                            {item.years}
                          </p>
                          <h4 className="font-montserrat font-normal text-[20px] leading-[28px] text-black">
                            {item.title}
                          </h4>
                          {Array.isArray(item.description) ? (
                            <div className="font-montserrat text-[14px] text-[rgba(10,10,10,0.6)] flex flex-col gap-[4px]">
                              {item.description.map((line) => (
                                <p key={line} className="leading-[20px] m-0">
                                  {line}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(10,10,10,0.6)]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>

                <div className="xl:col-span-3 order-2 xl:order-6 border-b border-[rgba(0,0,0,0.1)] xl:border-b-0">
                  <ResumeSection title="Experience">
                    <div className="flex flex-col xl:flex-row gap-[34px] xl:gap-[24px]">
                      {experience.map((item) => (
                        <div
                          key={item.role}
                          className="border-l-2 border-black pl-[24px] py-[2px] flex flex-col gap-[6px] xl:flex-1"
                        >
                          <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(10,10,10,0.6)]">
                            {item.years}
                          </p>
                          <h4 className="font-montserrat font-normal text-[20px] leading-[28px] text-black">
                            {item.role}
                          </h4>
                          <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(10,10,10,0.6)]">
                            {item.company}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>

                <div className="xl:col-span-1 xl:border-b xl:border-[rgba(0,0,0,0.1)] order-4 xl:order-4 border-b border-[rgba(0,0,0,0.1)]">
                  <ResumeSection title="Soft Skills">
                    <div className="flex flex-col gap-[21px]">
                      {softSkills.map((item) => (
                        <div
                          key={item.title}
                          className="flex flex-col gap-[4px]"
                        >
                          <h4 className="font-montserrat-medium font-medium text-[16px] leading-[24px] text-black">
                            {item.title}
                          </h4>
                          <p className="font-montserrat text-[14px] leading-[20px] text-[rgba(0,0,0,0.5)] whitespace-pre-wrap">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>

                <div className="xl:col-span-1 xl:border-r xl:border-b xl:border-[rgba(0,0,0,0.1)] order-5 xl:order-3 border-b border-[rgba(0,0,0,0.1)]">
                  <ResumeSection title="Core Disciplines">
                    <div className="flex flex-col gap-[24px]">
                      {disciplines.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-[16px] relative"
                        >
                          <div className="absolute left-0 top-[8px] size-[6px] rounded-[16777200px] bg-black" />
                          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[rgba(0,0,0,0.8)] ml-[22px]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>

                <div className="xl:col-span-2 xl:border-b xl:border-[rgba(0,0,0,0.1)] order-6 xl:order-5 border-b border-[rgba(0,0,0,0.1)]">
                  <ResumeSection title="Tools & Technologies">
                    <div className="flex flex-col xl:flex-row gap-[24px]">
                      {Object.entries(tools).map(([group, entries]) => (
                        <div key={group} className="flex-1">
                          <p className="mb-[8px] font-montserrat-medium font-medium text-[12px] uppercase tracking-[1.2px] text-[rgba(0,0,0,0.4)] leading-[16px]">
                            {group}
                          </p>
                          <div className="flex flex-col gap-[8px]">
                            {entries.map((entry) => (
                              <p
                                key={entry}
                                className="font-montserrat font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.8)]"
                              >
                                {entry}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Navbar
        onWorkClick={() => scrollToSection(selectedWorkRef)}
        onResumeClick={() => scrollToSection(resumeRef)}
      />
    </div>
  );
}
