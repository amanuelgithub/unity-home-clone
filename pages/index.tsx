import { LearnMoreCard } from "../components/LearnMoreCard";
import { SectionMainHeader } from "../components/SectionMainHeader";
import { SectionSubHeader } from "../components/SectionSubHeader";
import { FiBookOpen, FiCode } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BiBuildings, BiDollarCircle } from "react-icons/bi";
import { TbChartBar, TbDeviceGamepad2 } from "react-icons/tb";
import { VscLayers } from "react-icons/vsc";
import { MoreButton } from "../components/MoreButton";
import { BsArrowRight } from "react-icons/bs";
import { SubHeaderThree } from "../components/SubHeaderThree";
import { Link } from "../components/Link";
import { CardLink } from "../components/CardLink";

import { SearchInput } from "../components/SearchInput";

import { useEffect, useState } from "react";
import {
  analyticsDocLinks,
  archAndConstructionDocLinks,
  devOpsDocLinks,
  growthDocLinks,
  industrialAutomotiveDocLinks,
  liveGameBackendDocLinks,
  livePlayerEngageDocLinks,
  monetizationDocLinks,
  multiPlayerMainDocLinks,
  multiPlayerNetworkingDocLinks,
  partnerNetworksDocLinks,
  premiumEmbeddedDocLinks,
  premiumQNXDocLinks,
  scriptingReferenceTopics,
  threeDExperiencesDocLinks,
  unityEditorManualTopics,
} from "../data/doc-links";
import { PrivacyPreference } from "../components/PrivacyPreference";
import { ScrollLink } from "../components/ScrollLink";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileContentVisible, setIsMobileContentVisible] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileContentClick = () => {
    setIsMobileContentVisible((isVisible) => !isVisible);
  };

  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row gap-2 mx-1">
      {/* Left Section */}
      <div className="mt-20 w-full md:w-4/6 p-4">
        {/* main sec 1 (documentation) */}
        <div className="mb-4">
          {/* Mobile Contents Section  */}
          <div className="relative block md:hidden">
            <a
              onClick={handleMobileContentClick}
              className="my-1 flex justify-between items-center"
            >
              <SubHeaderThree title="content" />
              <IoIosArrowDown />
            </a>
            <hr />
            <div
              className={`absolute z-30 shadow-2xl w-full bg-white text-black ${
                isMobileContentVisible ? "block" : "hidden"
              }`}
            >
              <ul className="text-sm font-semibold my-1 ml-3">
                <li className="pb-4">
                  <ScrollLink
                    to="unity-editor-scripting"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-gray-500"
                  >{`Unity Editor & Scripting`}</ScrollLink>
                </li>
                <li className="pb-4">
                  <ScrollLink
                    to="real-time-3d-creation"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-gray-500"
                  >
                    Real Time 3D Creation Tool
                  </ScrollLink>
                </li>
                <li className="pb-4">
                  <ScrollLink
                    to="unity-gaming-service"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-gray-500"
                  >
                    Unity Gaming Service
                  </ScrollLink>
                </li>
                <li className="pb-4">
                  <ScrollLink
                    to="premium-runtimes"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-gray-500"
                  >
                    Premium Runtime
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>

          <SectionMainHeader
            title="Documentation"
            description="Docs and guides to work with the Unity ecosystem."
          />

          {/* Mobile Search Input */}
          <div className="block md:hidden">
            <SearchInput />
          </div>
        </div>

        <hr />

        {/* main sec 2 (unity editor & scripting) */}
        <div id="unity-editor-scripting">
          <SectionMainHeader
            title="Unity Editor & Scripting"
            description="Learn how to use and get the most from the Unity Editor."
          />

          <div>
            {/* Getting Started */}
            <LearnMoreCard
              icon={
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8437 16.4503L11.9963 21.3402C11.9419 21.4842 11.8436 21.6084 11.7146 21.6962C11.5855 21.7839 11.432 21.831 11.2747 21.831C11.1174 21.831 10.9639 21.7839 10.8348 21.6962C10.7058 21.6084 10.6075 21.4842 10.5531 21.3402L8.70576 16.4503C8.66729 16.3484 8.60662 16.2559 8.52793 16.1792C8.44924 16.1025 8.35442 16.0433 8.25 16.0058L3.23585 14.2042C3.08824 14.1512 2.96086 14.0553 2.87088 13.9294C2.78091 13.8036 2.73267 13.6539 2.73267 13.5004C2.73267 13.347 2.78091 13.1973 2.87088 13.0715C2.96086 12.9456 3.08824 12.8497 3.23585 12.7967L8.25 10.9951C8.35442 10.9576 8.44924 10.8984 8.52793 10.8217C8.60662 10.7449 8.66729 10.6525 8.70576 10.5506L10.5531 5.66064C10.6075 5.51669 10.7058 5.39246 10.8348 5.30471C10.9639 5.21697 11.1174 5.16992 11.2747 5.16992C11.432 5.16992 11.5855 5.21697 11.7146 5.30471C11.8436 5.39246 11.9419 5.51669 11.9963 5.66064L13.8437 10.5506C13.8821 10.6525 13.9428 10.7449 14.0215 10.8217C14.1002 10.8984 14.195 10.9576 14.2994 10.9951L19.3136 12.7967C19.4612 12.8497 19.5886 12.9456 19.6785 13.0715C19.7685 13.1973 19.8167 13.347 19.8167 13.5004C19.8167 13.6539 19.7685 13.8036 19.6785 13.9294C19.5886 14.0553 19.4612 14.1512 19.3136 14.2042L14.2994 16.0058C14.195 16.0433 14.1002 16.1025 14.0215 16.1792C13.9428 16.2559 13.8821 16.3484 13.8437 16.4503V16.4503Z"
                    stroke="black"
                  ></path>
                  <path d="M17.4268 1.5V6" stroke="black"></path>
                  <path d="M19.7339 3.75H15.1196" stroke="black"></path>
                  <path d="M22.0411 6.75V9.75" stroke="black"></path>
                  <path d="M23.5791 8.25H20.5029" stroke="black"></path>
                </svg>
              }
              title="Getting Started"
              body="Learn the basics. Explore topics like understanding the Unity Editor interface, adding menu items, using assets, creating scenes, and publishing builds."
              moreLink="https://docs.unity3d.com/Manual/UnityOverview.html"
            />
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:flex-wrap w-full">
              {/* unity editor manuel section */}
              <div className="md:w-1/2 md:pr-2">
                <SectionSubHeader
                  icon={<FiBookOpen />}
                  iconColor="#dd5854"
                  title="Unity Editor Manual"
                  description="Use the Unity Editor to create 2D and 3D games, apps, and experiences."
                />
                <div>
                  <MoreButton
                    icon={<BsArrowRight />}
                    moreLink="https://docs.unity3d.com/Manual/AssetStore.html"
                  >
                    Read More
                  </MoreButton>
                  <SubHeaderThree title="Explore Topics" />
                  <div className="flex flex-wrap mb-6">
                    {unityEditorManualTopics.map((topic) => (
                      <Link key={topic.name} href={topic.link}>
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scripting Reference section */}
              <div className="md:w-1/2 md:pr-2">
                <SectionSubHeader
                  icon={<FiCode />}
                  iconColor="#b19fda"
                  title="Scripting Reference"
                  description="Refer to our API documentation for Unity scripts."
                />
                <div>
                  <MoreButton
                    icon={<BsArrowRight />}
                    moreLink="https://docs.unity3d.com/Manual/AssetStore.html"
                  >
                    Read More
                  </MoreButton>
                  <SubHeaderThree title="Explore Topics" />
                  <div className="flex flex-wrap mb-6">
                    {scriptingReferenceTopics.map((topic) => (
                      <Link key={topic.name} href={topic.link}>
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Asset Store section */}
              <div className="md:w-1/2 md:pr-2">
                <SectionSubHeader
                  icon={<MdOutlineStorefront />}
                  iconColor="#db4a7a"
                  title="Asset Store"
                  description="Explore the packages and plugins that enhance Unity’s capabilities."
                />
                <div>
                  <MoreButton
                    icon={<BsArrowRight />}
                    moreLink="https://docs.unity3d.com/Manual/AssetStore.html"
                  >
                    Read More
                  </MoreButton>
                  <SubHeaderThree title="Explore Topics" />
                  <div className="flex flex-wrap mb-6">
                    {scriptingReferenceTopics.map((topic) => (
                      <Link key={topic.name} href={topic.link}>
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* main sec 3 (Real-time 3D Creation Tools) */}
        <div id="real-time-3d-creation" className="mb-10">
          <SectionMainHeader
            title="Real-time 3D Creation Tools"
            description="Build 2D, 3D, and VR industrial projects – at speed."
          />

          <div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap">
              {/*Architecture & Construction */}
              <div className="md:w-1/2">
                <SectionSubHeader
                  icon={<BiBuildings />}
                  iconColor="#a3cb69"
                  title="Architecture & Construction"
                  description="Use the Unity Editor to create 2D and 3D games, apps, and experiences."
                />
                <div>
                  {archAndConstructionDocLinks.map((docLink) => (
                    <CardLink
                      key={docLink.name}
                      href={docLink.link}
                      icon={docLink.icon}
                      title={docLink.name}
                    />
                  ))}
                </div>
              </div>

              {/*3D Experiences */}
              <div className="md:w-1/2">
                <SectionSubHeader
                  icon={<BiBuildings />}
                  iconColor="#745ea5"
                  title="3D Experiences"
                  description="Use Unity’s real-time 3D tools to bring your projects to life."
                />
                <div>
                  {threeDExperiencesDocLinks.map((docLink) => (
                    <CardLink
                      key={docLink.name}
                      href={docLink.link}
                      icon={docLink.icon}
                      title={docLink.name}
                    />
                  ))}
                </div>
              </div>

              {/*Industrial & Automotive */}
              <div className="md:w-1/2">
                <SectionSubHeader
                  icon={<BiBuildings />}
                  iconColor="#745ea5"
                  title="Industrial & Automotive"
                  description="Redefine the auto industry with our rendering, lighting, and texturing tools."
                />
                <div>
                  {industrialAutomotiveDocLinks.map((docLink) => (
                    <CardLink
                      key={docLink.name}
                      href={docLink.link}
                      icon={docLink.icon}
                      title={docLink.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* main sec 4 (Unity Gaming Services) */}
        <div id="unity-gaming-service">
          <SectionMainHeader
            title="Unity Gaming Services"
            description="Scale your game development cycle with our integrated services."
          />

          <div>
            <LearnMoreCard
              icon={
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8437 16.4503L11.9963 21.3402C11.9419 21.4842 11.8436 21.6084 11.7146 21.6962C11.5855 21.7839 11.432 21.831 11.2747 21.831C11.1174 21.831 10.9639 21.7839 10.8348 21.6962C10.7058 21.6084 10.6075 21.4842 10.5531 21.3402L8.70576 16.4503C8.66729 16.3484 8.60662 16.2559 8.52793 16.1792C8.44924 16.1025 8.35442 16.0433 8.25 16.0058L3.23585 14.2042C3.08824 14.1512 2.96086 14.0553 2.87088 13.9294C2.78091 13.8036 2.73267 13.6539 2.73267 13.5004C2.73267 13.347 2.78091 13.1973 2.87088 13.0715C2.96086 12.9456 3.08824 12.8497 3.23585 12.7967L8.25 10.9951C8.35442 10.9576 8.44924 10.8984 8.52793 10.8217C8.60662 10.7449 8.66729 10.6525 8.70576 10.5506L10.5531 5.66064C10.6075 5.51669 10.7058 5.39246 10.8348 5.30471C10.9639 5.21697 11.1174 5.16992 11.2747 5.16992C11.432 5.16992 11.5855 5.21697 11.7146 5.30471C11.8436 5.39246 11.9419 5.51669 11.9963 5.66064L13.8437 10.5506C13.8821 10.6525 13.9428 10.7449 14.0215 10.8217C14.1002 10.8984 14.195 10.9576 14.2994 10.9951L19.3136 12.7967C19.4612 12.8497 19.5886 12.9456 19.6785 13.0715C19.7685 13.1973 19.8167 13.347 19.8167 13.5004C19.8167 13.6539 19.7685 13.8036 19.6785 13.9294C19.5886 14.0553 19.4612 14.1512 19.3136 14.2042L14.2994 16.0058C14.195 16.0433 14.1002 16.1025 14.0215 16.1792C13.9428 16.2559 13.8821 16.3484 13.8437 16.4503V16.4503Z"
                    stroke="black"
                  ></path>
                  <path d="M17.4268 1.5V6" stroke="black"></path>
                  <path d="M19.7339 3.75H15.1196" stroke="black"></path>
                  <path d="M22.0411 6.75V9.75" stroke="black"></path>
                  <path d="M23.5791 8.25H20.5029" stroke="black"></path>
                </svg>
              }
              title="Getting Started"
              body="Connect your game to Unity Gaming Services and set up basic functionality."
              moreLink="https://docs.unity3d.com/Manual/UnityOverview.html"
            />
          </div>

          <div className="flex flex-col  md:flex-row md:flex-wrap">
            {/* Dev Ops */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<FiCode />}
                iconColor="#a3cb69"
                title="Dev Ops"
                description="Customize your project with our build and development tools."
              />
              <div>
                {devOpsDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/*Multiplayer */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<TbDeviceGamepad2 />}
                iconColor="#745ea5"
                title="Multiplayer"
                description="Build, scale, and operate your game with cloud-enabled tools, services and infrastructure."
              />
              <div>
                {multiPlayerMainDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
              <SubHeaderThree title="Networking" />
              <div>
                {multiPlayerNetworkingDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<TbChartBar />}
                iconColor="#745ea5"
                title="Analytics"
                description="Visualize specific information to tweak gameplay and offer the best experience possible."
              />
              <div>
                {analyticsDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/*Live Operations */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<VscLayers />}
                iconColor="#745ea5"
                title="Live Operations"
                description="Set up instrumentation, and live-configurable data in your game."
              />

              <SubHeaderThree title="Player Engagement" />
              <div>
                {livePlayerEngageDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>

              <SubHeaderThree title="Game Backend" />
              <div>
                {liveGameBackendDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/* Monetization */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<BiDollarCircle />}
                iconColor="#745ea5"
                title="Monetization"
                description="Configure ads, campaigns, and in-app purchases."
              />
              <div>
                {monetizationDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/* Growth */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<IoRocketOutline />}
                iconColor="#745ea5"
                title="Growth"
                description="Set up user acquisition campaigns and apply to the Game Growth program."
              />
              <div>
                {growthDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            {/* Partner Networks */}
            <div className="md:w-1/2 lg:w-1/3 h-fit">
              <SectionSubHeader
                icon={<BiDollarCircle />}
                iconColor="#745ea5"
                title="Partner Networks"
                description="Partner with Unity to support advertisers and publishers by providing an impactful ad experience."
              />
              <div>
                {partnerNetworksDocLinks.map((docLink) => (
                  <CardLink
                    key={docLink.name}
                    href={docLink.link}
                    icon={docLink.icon}
                    title={docLink.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <LearnMoreCard
                icon={
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8437 16.4503L11.9963 21.3402C11.9419 21.4842 11.8436 21.6084 11.7146 21.6962C11.5855 21.7839 11.432 21.831 11.2747 21.831C11.1174 21.831 10.9639 21.7839 10.8348 21.6962C10.7058 21.6084 10.6075 21.4842 10.5531 21.3402L8.70576 16.4503C8.66729 16.3484 8.60662 16.2559 8.52793 16.1792C8.44924 16.1025 8.35442 16.0433 8.25 16.0058L3.23585 14.2042C3.08824 14.1512 2.96086 14.0553 2.87088 13.9294C2.78091 13.8036 2.73267 13.6539 2.73267 13.5004C2.73267 13.347 2.78091 13.1973 2.87088 13.0715C2.96086 12.9456 3.08824 12.8497 3.23585 12.7967L8.25 10.9951C8.35442 10.9576 8.44924 10.8984 8.52793 10.8217C8.60662 10.7449 8.66729 10.6525 8.70576 10.5506L10.5531 5.66064C10.6075 5.51669 10.7058 5.39246 10.8348 5.30471C10.9639 5.21697 11.1174 5.16992 11.2747 5.16992C11.432 5.16992 11.5855 5.21697 11.7146 5.30471C11.8436 5.39246 11.9419 5.51669 11.9963 5.66064L13.8437 10.5506C13.8821 10.6525 13.9428 10.7449 14.0215 10.8217C14.1002 10.8984 14.195 10.9576 14.2994 10.9951L19.3136 12.7967C19.4612 12.8497 19.5886 12.9456 19.6785 13.0715C19.7685 13.1973 19.8167 13.347 19.8167 13.5004C19.8167 13.6539 19.7685 13.8036 19.6785 13.9294C19.5886 14.0553 19.4612 14.1512 19.3136 14.2042L14.2994 16.0058C14.195 16.0433 14.1002 16.1025 14.0215 16.1792C13.9428 16.2559 13.8821 16.3484 13.8437 16.4503V16.4503Z"
                      stroke="black"
                    ></path>
                    <path d="M17.4268 1.5V6" stroke="black"></path>
                    <path d="M19.7339 3.75H15.1196" stroke="black"></path>
                    <path d="M22.0411 6.75V9.75" stroke="black"></path>
                    <path d="M23.5791 8.25H20.5029" stroke="black"></path>
                  </svg>
                }
                btnText="Go to Services API docs"
                title="Services API Reference Documentation"
                body="Use our APIs to programmatically access Unity Gaming Services and automate workflows, while using the language and gaming engine of your choice."
                moreLink="https://docs.unity3d.com/Manual/UnityOverview.html"
              />
            </div>
          </div>
        </div>

        <hr />

        {/* premium section */}
        <div id="premium-runtimes">
          <SectionMainHeader
            title="Premium Runtimes"
            titleColor="#7260a4"
            description="Use Premium Runtimes to run Unity projects on Embedded Linux and QNX. Contact your account manager or the Unity sales team for access."
          />
          <div className="flex flex-col gap-2 md:flex-row ">
            {/* Embedded Linux */}
            <div>
              <SectionSubHeader
                icon={<FiBookOpen />}
                iconColor="#dd5854"
                title="Embedded Linux"
                description="Familiarize yourself with setting up the Unity Editor for Embedded Linux."
              />
              <div>
                <MoreButton
                  icon={<BsArrowRight />}
                  moreLink="https://docs.unity3d.com/Manual/AssetStore.html"
                >
                  Read More
                </MoreButton>
                <SubHeaderThree title="Explore Topics" />
                <div>
                  {premiumEmbeddedDocLinks.map((topic) => (
                    <Link key={topic.name} href={topic.link}>
                      {topic.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* QNX */}
            <div className="mb-10">
              <SectionSubHeader
                icon={<FiCode />}
                iconColor="#b19fda"
                title="QNX"
                description="Familiarize yourself with setting up the Unity Editor for QNX."
              />
              <div>
                <MoreButton
                  icon={<BsArrowRight />}
                  moreLink="https://docs.unity3d.com/Manual/AssetStore.html"
                >
                  Read More
                </MoreButton>
                <SubHeaderThree title="Explore Topics" />
                <div>
                  {premiumQNXDocLinks.map((topic) => (
                    <Link key={topic.name} href={topic.link}>
                      {topic.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <PrivacyPreference /> */}
      </div>

      {/* Right Section (Main Section Navigation for Large Screens)*/}

      {/* dummy div for proper page layout */}
      <div
        className={` ${
          scrollPosition > 45 ? "w-full mt-36 md:w-1/6 p-4" : "hidden"
        }`}
      ></div>
      {/* Right main div section */}
      <div
        className={`mt-36 ${
          scrollPosition <= 45
            ? "w-full md:w-1/6"
            : "w-full md:w-1/6 fixed right-24 mr-7 -top-12"
        } hidden md:block`}
      >
        <div>
          <SearchInput />
          <div>
            <SubHeaderThree title="content" />
            <ul className="text-sm text-gray-300 font-semibold ml-3 active:text-gray-500">
              <li>
                <ScrollLink>{`Unity Editor & Scripting`}</ScrollLink>
              </li>
              <li>
                <ScrollLink>Real Time 3D Creation Tool</ScrollLink>
              </li>
              <li>
                <ScrollLink>Unity Gaming Service</ScrollLink>
              </li>
              <li>
                <ScrollLink>Premium Runtime</ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
