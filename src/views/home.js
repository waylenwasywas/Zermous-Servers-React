import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Zermous Servers</title>
        <meta
          name="description"
          content="Find the most secure, reliable and affordable VPS and web hosting services available with , unlimited bandwidth, top-spec hardware and built-in Wireguard VPN."
        />
        <meta property="og:title" content="Zermous Servers" />
        <meta
          property="og:description"
          content="Find the most secure, reliable and affordable VPS and web hosting services available with , unlimited bandwidth, top-spec hardware and built-in Wireguard VPN."
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text headingOne">Zermous  Servers</h1>
            <h1 className="home-text01 headingOne">Choose the best</h1>
            <span className="home-text02 lead">
              Find the most secure, reliable and affordable VPS and web hosting
              services available with integrated Webmin, unlimited bandwidth and
              top-spec hardware
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="pricing"></PrimaryPinkButton>
              </div>
              <a
                href="https://client.zermous.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <OutlineGrayButton
                  button="Client Panel"
                  className="home-component02"
                ></OutlineGrayButton>
              </a>
            </div>
            <div className="home-container04">
              <a
                href="https://www.linux-kvm.org/page/Main_Page"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <img
                  alt="image"
                  src="/playground_assets/untitled-1500h.png"
                  className="home-image"
                />
              </a>
              <img
                alt="image"
                src="/playground_assets/untitled2-1500h.png"
                loading="eager"
                className="home-image01"
              />
              <a
                href="https://www.wireguard.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <img
                  alt="image"
                  src="/playground_assets/untitled2%5B1%5D-1500h.png"
                  className="home-image02"
                />
              </a>
              <a
                href="https://www.webmin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <img
                  alt="image"
                  src="/playground_assets/untitled2%5B2%5D-1500h.png"
                  className="home-image03"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image04"
      />
      <section className="home-features">
        <FeatureCard
          text="Increased security and performance"
          title="Components"
          new_prop="KVM Virtualization"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Access to 24/7 support to help with any problems and issues"
          new_prop="Free Support"
          image_src="/playground_assets/person1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Access to a list of pre-made scripts to best fit your demands"
          title="Less Code"
          new_prop="Recipes"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Cost per server is dynamic based on time used and resources granted"
          title="Fully Responsive"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text03">
            <span className="home-text04 headingOne">
              Wireguard-Secured Servers
            </span>
            <br></br>
          </h1>
          <span className="home-text06">
            All of our VPS plans come with a built-in Wireguard Connection 
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image05"
              />
            </div>
          </div>
          <div className="home-container10">
            <div className="home-container11">
              <h3 className="headingTwo">
                What Does Wireguard Mean for my Server?
              </h3>
              <p>
                <br></br>
                <span>
                  All of our servers come included with its own Wireguard
                  server. What Wireguard offers is a high-performance and secure
                  networking for each VPS. We also use secure Wireguard tunnels
                  in order to provide each VPS with a public IPV4 address
                  through a VPN tunnel, offer a secure transfer of packets
                  through cryptography from each server and a low ping + high
                  transfer speed and DDOS protection. Wireguard is embedded
                  within the operating system&apos;s kernel, which means high
                  reliability and stability.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text11 headingOne">Work with us</h2>
              <p className="home-text12 lead">
                Whatever your project is - we have you covered!
              </p>
              <p className="home-text13">
                <span>
                  Not only do we offer individual VPS systems, but we also offer
                  free and paid managed VPS solutions. With free 24/7 technical
                  support, any problem that you face we will be able to help.
                  For projects that require more extensive support and
                  management, we offer some of the most affordable and efficient
                  managed plans in the industry.
                </span>
                <br></br>
              </p>
              <p className="home-text16">Waylen Wasylenka</p>
              <p className="home-text17 small">Founder, Zermous</p>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container15">
              <div className="home-container16">
                <div className="home-container17">
                  <img
                    alt="image"
                    src="/playground_assets/logo-asana.svg"
                    className="home-image06"
                  />
                </div>
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/playground_assets/logo-slack.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-container19">
                  <img
                    alt="image"
                    src="/playground_assets/logo-google-drive.svg"
                    className="home-image08"
                  />
                </div>
              </div>
              <div className="home-container20">
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/playground_assets/logo-shopify.svg"
                    className="home-image09"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image10"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/playground_assets/logo-invision.svg"
                    className="home-image11"
                  />
                </div>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/playground_assets/logo-attlasian.svg"
                    className="home-image12"
                  />
                </div>
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/playground_assets/logo-weave.svg"
                    className="home-image13"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image14"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container27">
          <div className="home-container28">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text18 headingTwo">Cloud Storage</h2>
          <h3 className="home-text19 headingTwo">
            <span className="home-text20">Coming Soon</span>
            <br></br>
          </h3>
          <span className="home-text22">
            Take a sneak peak into our new cloud-storage sector in progress
          </span>
        </div>
        <div className="home-container29">
          <div className="home-container30">
            <div className="home-container31"></div>
            <div className="home-container32">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
              </svg>
              <h1 className="home-text23 headingOne">Coming Soon!</h1>
              <span className="home-text24">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton
                button="get started"
                rootClassName="outline-black-button-root-class-name"
              ></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container33">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              new_prop="2. Affordability Versus Other Providers"
              description="2.8x cheaper than google drive and 1.5x less than most other providers, you can ensure you are getting the most our of your money"
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              new_prop="3. Dynamic Plans"
              description="Unlike most other providers, we are all about dynamic solutions. It is for that reason that billing you for only what you need is a win-win for everyone."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container34">
          <div className="home-container35">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container36">
            <div className="home-container37"></div>
            <div className="home-container38">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text27 headingOne">Talk and Meet!</h1>
              <span className="home-text28">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
