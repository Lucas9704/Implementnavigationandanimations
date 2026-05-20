import imgBackgroundImage from "./02020aa95951a2c25d2cdbf09fcbde16d141747f.png";
import imgSuccess4 from "./fdae164e1088a54740bbe556c96fc63706203a6f.png";
import imgRevendedorSolicitudAprobada1 from "./57521d22f5ee3c7cac08f2e1bf6703e862ab4c16.png";
import imgBackgroundImage1 from "./eef97d1b28e33e30c22ec8dd57c4931ae91dc562.png";
import imgGroup861 from "./4d34812f7ce186a533793aef0de7e5ca5c9d06c2.png";
import imgGroup87 from "./ad623be10964d77eb06617a2d2a72ea92a42d878.png";
import imgBackgroundImage2 from "./21a51794e8146afcaea12d5a819d5484d0ac74ca.png";
import imgMesaDeTrabajo61 from "./30aebf1fa8674c51e9105f4713f02fecaaf53b7a.png";
import imgMesaDeTrabajo71 from "./1d77ae4dd27ff69527be4ec77b56af2875338597.png";
import imgImageWithFallback from "./a05a240bb160a8abdfcdc96979260b0d56263c46.png";

function Hero() {
  return (
    <div
      className="absolute h-[850px] left-0 top-[60px] w-[1344px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(253, 224, 71, 0.25) 0%, rgba(253, 186, 116, 0.2) 30%, rgba(249, 168, 212, 0.15) 70%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Hero"
    />
  );
}

function Hero1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hero">
      <div className="content-stretch flex flex-col gap-[11px] items-start px-[48px] py-[158px] relative size-full">
        <p className="font-helony leading-[128px] not-italic relative shrink-0 text-[128px] text-black w-[1248px]">{`Bridging Product Utility & Brand Narrative.`}</p>
        <p className="font-montserrat font-normal leading-[28px] relative shrink-0 text-[20px] text-[rgba(10,10,10,0.6)] whitespace-nowrap">
          Adapting systems across industries.
        </p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-helony leading-[60px] left-0 not-italic text-[60px] text-black top-[6px] whitespace-nowrap">
        Selected Work
      </p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[62px] mt-[86px] place-items-start relative row-1"
      data-name="Content Container"
    >
      <div
        className="col-1 h-[265.668px] ml-[59.84px] mt-[19.04px] relative rounded-[8px] row-1 w-[426.157px]"
        data-name="Success 4"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
          src={imgSuccess4}
        />
      </div>
      <div
        className="col-1 h-[123.314px] ml-0 mt-0 relative rounded-[8px] row-1 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.15)] w-[272.015px]"
        data-name="Revendedor solicitud aprobada 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img
            alt=""
            className="absolute h-[264.71%] left-0 max-w-none top-0 w-full"
            src={imgRevendedorSolicitudAprobada1}
          />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Main Container"
    >
      <div
        className="col-1 h-[457.5px] ml-0 mt-0 relative row-1 w-[610px]"
        data-name="Background Image"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={imgBackgroundImage}
          />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <ContentContainer />
    </div>
  );
}

function SelectedWork1() {
  return (
    <div
      className="content-stretch flex flex-col h-[457.5px] items-start overflow-clip relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <MainContainer />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="h-[64px] relative shrink-0 w-[427.109px]"
      data-name="Heading 3"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-helony leading-[0] left-0 not-italic text-[24px] text-black top-[2.5px] w-[428px]">
          <p className="leading-[32px] mb-0">Natural Parks</p>
          <p className="leading-[32px]">Hunting/Fishing Licensing Platform</p>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="h-[30px] relative rounded-[16777200px] shrink-0 w-[118.891px]"
      data-name="Text"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-[13px] text-[14px] text-black top-[5.5px] whitespace-nowrap">
          Public Sector
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <Text />
    </div>
  );
}

function SelectedWork2() {
  return (
    <div
      className="h-[113px] relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pt-[25px] px-[24px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="bg-white h-[572.5px] relative rounded-[16px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <SelectedWork1 />
          <SelectedWork2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Link() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[572.5px] items-start left-0 top-0 w-[612px]"
      data-name="Link"
    >
      <Container2 />
    </div>
  );
}

function ContentFrame() {
  return (
    <div
      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[62px] mt-[92px] place-items-start relative row-1"
      data-name="Content Frame"
    >
      <div
        className="col-1 h-[239.304px] ml-0 mt-0 relative rounded-[8px] row-1 w-[425.019px]"
        data-name="Group 86 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
          src={imgGroup861}
        />
      </div>
      <div className="col-1 h-[230.065px] ml-[365.89px] mt-[42.5px] relative rounded-[8px] row-1 w-[120.114px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
          src={imgGroup87}
        />
      </div>
    </div>
  );
}

function MainFrame() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Main Frame"
    >
      <div
        className="col-1 h-[457.5px] ml-0 mt-0 relative row-1 w-[610px]"
        data-name="Background Image"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={imgBackgroundImage1}
          />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <ContentFrame />
    </div>
  );
}

function SelectedWork3() {
  return (
    <div
      className="content-stretch flex flex-col h-[457.5px] items-start overflow-clip relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <MainFrame />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="h-[64px] relative shrink-0 w-[427.109px]"
      data-name="Heading 3"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-helony leading-[32px] left-0 not-italic text-[24px] text-black top-[2.5px] w-[428px]">
          Public Communication Campaigns
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="h-[30px] relative rounded-[16777200px] shrink-0 w-[118.891px]"
      data-name="Text"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-[13px] text-[14px] text-black top-[5.5px] whitespace-nowrap">
          Public Sector
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading2 />
      <Text1 />
    </div>
  );
}

function SelectedWork4() {
  return (
    <div
      className="h-[113px] relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pt-[25px] px-[24px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="bg-white h-[572.5px] relative rounded-[16px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <SelectedWork3 />
          <SelectedWork4 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Link1() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[572.5px] items-start left-[636px] top-0 w-[612px]"
      data-name="Link"
    >
      <Container4 />
    </div>
  );
}

function Devli() {
  return (
    <div
      className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[100px] mt-[81px] place-items-start relative row-1"
      data-name="devli"
    >
      <div
        className="col-1 ml-0 mt-0 relative rounded-[8px] row-1 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] size-[216.186px]"
        data-name="Mesa de trabajo 6 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
          src={imgMesaDeTrabajo61}
        />
      </div>
      <div
        className="col-1 ml-[190.99px] mt-[66.89px] relative rounded-[8px] row-1 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)] size-[219.107px]"
        data-name="Mesa de trabajo 7 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
          src={imgMesaDeTrabajo71}
        />
      </div>
    </div>
  );
}

function MainImage() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Main image"
    >
      <div
        className="col-1 h-[457.5px] ml-0 mt-0 relative row-1 w-[610px]"
        data-name="Background image"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={imgBackgroundImage2}
          />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Devli />
    </div>
  );
}

function SelectedWork5() {
  return (
    <div
      className="content-stretch flex flex-col h-[457.5px] items-start overflow-clip relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <MainImage />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="h-[64px] relative shrink-0 w-[487.031px]"
      data-name="Heading 3"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-helony leading-[0] left-0 not-italic text-[24px] text-black top-[2.5px] w-[488px]">
          <p className="leading-[32px] mb-0">Devlights</p>
          <p className="leading-[32px]">Event Communication and Social Media</p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="h-[30px] relative rounded-[16777200px] shrink-0 w-[58.969px]"
      data-name="Text"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-[13px] text-[14px] text-black top-[5.5px] whitespace-nowrap">
          Tech
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading3 />
      <Text2 />
    </div>
  );
}

function SelectedWork6() {
  return (
    <div
      className="h-[113px] relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pt-[25px] px-[24px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="bg-white h-[572.5px] relative rounded-[16px] shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <SelectedWork5 />
          <SelectedWork6 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Link2() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[572.5px] items-start left-0 top-[596.5px] w-[612px]"
      data-name="Link"
    >
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1169px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] h-[1293px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading />
      <Container1 />
    </div>
  );
}

function SelectedWork() {
  return (
    <div
      className="h-[1486px] relative shrink-0 w-full"
      data-name="SelectedWork"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pb-px pt-[96px] px-[48px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] py-[40px] relative size-full">
          <p className="font-helony leading-[60px] not-italic relative shrink-0 text-[60px] text-black whitespace-nowrap">
            Resume
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div
      className="h-[437.906px] relative shrink-0 w-full"
      data-name="ImageWithFallback"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[128.06%] left-[-30.01%] max-w-none top-[-17.33%] w-[160.08%]"
          src={imgImageWithFallback}
        />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col h-[437.906px] items-start left-[32px] overflow-clip rounded-[16px] top-[32px] w-[350.328px]"
      data-name="Container"
    >
      <ImageWithFallback />
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="absolute h-[36px] left-[32px] top-[493.91px] w-[350.328px]"
      data-name="Heading 2"
    >
      <p className="absolute font-helony leading-[36px] left-0 not-italic text-[30px] text-black top-[2.5px] whitespace-nowrap">
        Ana Paula Churruarin
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="absolute h-[20px] left-[32px] top-[537.91px] w-[350.328px]"
      data-name="Paragraph"
    >
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] top-[0.5px] whitespace-nowrap">{`Graphic Designer `}</p>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="h-[603px] relative shrink-0 w-[414px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Heading4 />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-helony leading-[28px] left-0 not-italic text-[20px] text-black top-[1.5px] whitespace-nowrap">
        Personal Information
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-full whitespace-nowrap"
      data-name="List Item"
    >
      <p className="absolute leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[0.6px] uppercase">
        Location
      </p>
      <p className="absolute leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[20.5px]">
        Corrientes, Argentina
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">
        Contact
      </p>
      <div className="absolute leading-[0] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[20.5px] w-[351px]">
        <p className="leading-[20px] mb-0">anapau.ch@icloud.com</p>
        <p className="leading-[20px]">+549 3777 229333</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">
        Interests
      </p>
      <p className="absolute leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[20.5px] w-[351px]">
        Contemporary Art, Architecture, Analog Photography, Vinyl Collecting
      </p>
    </div>
  );
}

function List() {
  return (
    <div
      className="content-stretch flex flex-col font-montserrat font-normal gap-[16px] h-[192px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[414.328px]" data-name="Container">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <Heading5 />
        <List />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-helony leading-[28px] left-0 not-italic text-[20px] text-black top-[1.5px] whitespace-nowrap">
        Languages
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
          English
        </p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div
      className="content-stretch flex h-[29px] items-center justify-between pb-[9px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none"
      />
      <Text3 />
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">
        C2
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
          Spanish
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[0.5px] whitespace-nowrap">
          Native
        </p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div
      className="content-stretch flex h-[29px] items-center justify-between pb-[9px] relative shrink-0 w-full"
      data-name="List Item"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.05)] border-b border-solid inset-0 pointer-events-none"
      />
      <Text4 />
      <Text5 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] h-[110px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[414.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[23px] relative size-full">
        <Heading6 />
        <List1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="absolute content-stretch flex flex-col h-[1208px] items-start left-0 pb-px top-0 w-[415px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <Container11 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-helony leading-[48px] left-0 not-italic text-[24px] text-black top-[5px] whitespace-nowrap">
        Experience
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] h-[130px] items-start px-[24px] py-px relative shrink-0 w-[263px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-full">
        2019 - 2022
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-full">
        Junior/Mid-Senior Designer
      </p>
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-full">
        Houston Agencia Creativa
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col h-[130px] items-start px-[24px] relative shrink-0 w-[288px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        2021 - 2024
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-[236px]">
        Senior Graphic Designer - UI Designer.
      </p>
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        Subsecretaría de Contenido e Innovación Digital
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="content-stretch flex flex-col h-[130px] items-start px-[24px] relative shrink-0 w-[288px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        2024 - Present
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-[236px]">
        UX/UI Designer
      </p>
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        Devlights
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading7 />
      <Container16 />
    </div>
  );
}

function Experience() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start justify-center left-[-1px] px-[48px] py-[32px] top-[1230px] w-[1248px]"
      data-name="Experience"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <Container15 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="font-helony leading-[24px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        Education
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] h-[180px] items-start px-[24px] py-px relative shrink-0 w-[236px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-full">
        2017 - 2020
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-full">
        Bachelor’s Degree
      </p>
      <p className="font-montserrat font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-full">
        <span className="leading-[20px]">In</span>
        <span className="leading-[20px]">{` Graphic and Multimedia Design, Universidad de la Cuenca del Plata`}</span>
        <span className="leading-[20px]">.</span>
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col gap-[9px] h-[180px] items-start px-[24px] py-px relative shrink-0 w-[236px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        2021
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black w-[186px]">
        UX Design/Development
      </p>
      <div className="font-montserrat font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[203px]">
        <p className="mb-0">
          <span className="leading-[20px]">{`AI `}</span>
          <span className="font-montserrat font-normal leading-[20px]">
            Foundations of UX Design, Google
          </span>
          <span className="leading-[20px]">.</span>
        </p>
        <p className="leading-[20px]">{`Web Development Course (HTML5 & CSS3) — UTN `}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col h-[180px] items-start px-[24px] relative shrink-0 w-[236px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-black border-l-2 border-solid inset-0 pointer-events-none"
      />
      <p className="font-montserrat font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[min-content]">
        2018-2020
      </p>
      <p className="font-helony leading-[28px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        UI Design
      </p>
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.6)] w-[161px]">
        User Interface (UI) Design Course — UTN
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading8 />
      <Container22 />
    </div>
  );
}

function Experience1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Experience">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[48px] py-[40px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-helony leading-[32px] left-0 not-italic text-[24px] text-black top-[2.5px] whitespace-nowrap">
        Core Disciplines
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text6() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[186.438px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">
        UX/UI Design
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Text6 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text7() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[231.703px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">{`Design Systems `}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Text7 />
    </div>
  );
}

function Container34() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text8() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[200.633px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">{`Brand Identity `}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Text8 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text9() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[102.984px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">
        Art Direction
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Text9 />
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text10() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[201.703px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">{`Prototyping & Interaction`}</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Text10 />
    </div>
  );
}

function Container40() {
  return (
    <div
      className="absolute bg-black left-0 rounded-[16777200px] size-[6px] top-[8px]"
      data-name="Container"
    />
  );
}

function Text11() {
  return (
    <div
      className="absolute h-[24px] left-[22px] top-0 w-[192.078px]"
      data-name="Text"
    >
      <p className="absolute font-montserrat font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 whitespace-nowrap">
        User Flow and Information Architecture
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Text11 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] h-[264px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] h-[596px] items-start pl-[48px] pr-[49px] py-[32px] relative shrink-0 w-[415.336px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-r border-solid inset-0 pointer-events-none"
      />
      <Heading9 />
      <Container28 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-helony leading-[32px] left-0 not-italic text-[24px] text-black top-[2.5px] whitespace-nowrap">
        Soft Skills
      </p>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[24px] left-0 text-[16px] text-black top-0 whitespace-nowrap">
        Strategic Thinking
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[320px]">
        Seeing the big picture while obsessing over details. I apply an Atomic
        Design methodology, carefully crafting even the smallest design element.
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading11 />
      <Paragraph1 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[24px] left-0 text-[16px] text-black top-0 whitespace-nowrap">
        Adaptability
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[320px] whitespace-pre-wrap">{`I like to pour my creative energy in each and every project I’m part of.  Working on  different topics, for diverse audiences, delivering a tailored design solution.`}</p>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading12 />
      <Paragraph2 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[24px] left-0 text-[16px] text-black top-0 whitespace-nowrap">
        Visual Consistency
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[320px]">{`Following branding guidelines help me maintaining coherent identity through different platforms. `}</p>
    </div>
  );
}

function Container45() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] h-[84px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading13 />
      <Paragraph3 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[24px] left-0 text-[16px] text-black top-0 whitespace-nowrap">
        Cross-Disciplinary Thinking
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="font-montserrat font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-[320px]">
        I enjoy combining different design tools, approaching each project as
        part of a broader communication system.
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading14 />
      <Paragraph4 />
    </div>
  );
}

function Container42() {
  return (
    <div
      className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] h-[596px] items-start px-[48px] py-[32px] relative shrink-0 w-[415.336px]"
      data-name="Container"
    >
      <Heading10 />
      <Container42 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container27 />
        <Container41 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div
      className="h-[32px] relative shrink-0 w-[734.672px]"
      data-name="Heading 3"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-helony leading-[32px] left-0 not-italic text-[24px] text-black top-[2.5px] whitespace-nowrap">{`Tools & Technologies`}</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[1.2px] uppercase whitespace-nowrap">
        Design
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Figma
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Lovable
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Premiere Pro
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        After Effects
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Photoshop
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Illustrator
      </p>
    </div>
  );
}

function List2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container49() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[165.664px]"
      data-name="Container"
    >
      <Heading16 />
      <List2 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-montserrat-medium font-medium leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[0.5px] tracking-[1.2px] uppercase whitespace-nowrap">
        Management
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Jira
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Notion
      </p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        FigJam
      </p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Asana
      </p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] whitespace-nowrap">
        Trello
      </p>
    </div>
  );
}

function List3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full"
      data-name="List"
    >
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[164px] items-start relative shrink-0 w-[165.664px]"
      data-name="Container"
    >
      <Heading17 />
      <List3 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[787px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center px-[48px] py-[32px] relative size-full">
        <Heading15 />
        <Container48 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[415.33px] pb-px top-0 w-[830.672px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <Experience1 />
      <Container26 />
      <Container47 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[1230px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Experience />
      <Container20 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[1496px] relative shrink-0 w-full" data-name="Container">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-l border-r border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start px-px relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1615px] relative shrink-0 w-full" data-name="Section">
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pb-px px-[48px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[1447px] items-start relative shrink-0 w-[1344px]"
      data-name="Resume"
    >
      <Section />
      <Section1 />
    </div>
  );
}

function MainContent() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[4060px] items-start relative shrink-0 w-full"
      data-name="Main Content"
    >
      <Hero1 />
      <SelectedWork />
      <Resume />
    </div>
  );
}

function Root() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[3808px] items-start pt-[60px] relative shrink-0 w-full"
      data-name="Root"
    >
      <MainContent />
    </div>
  );
}

function Body() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1344px]"
      data-name="Body"
    >
      <Root />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[71.953px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-helony leading-[28px] left-0 not-italic text-[18px] text-black top-[2.5px] tracking-[-0.45px] whitespace-nowrap">
          AnaPaulaChurruarin.
        </p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <button
      className="h-[20px] relative shrink-0 w-[37.445px]"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] text-left top-[0.5px] whitespace-nowrap">
          Work
        </p>
      </div>
    </button>
  );
}

function Link5() {
  return (
    <button
      className="flex-[1_0_0] h-[20px] min-w-px relative"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.6)] text-left top-[0.5px] whitespace-nowrap">
          Resume
        </p>
      </div>
    </button>
  );
}

function Container52() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-[179.617px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch cursor-pointer flex gap-[24px] items-start relative size-full">
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <Link3 />
      <Container52 />
    </div>
  );
}

function Navbar() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[61px] items-start left-0 pb-px pt-[16px] px-[48px] top-0 w-[1344px]"
      data-name="Navbar"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <Container51 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Hero />
      <Body />
      <Navbar />
    </div>
  );
}
