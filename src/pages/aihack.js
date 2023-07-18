import React, { useEffect } from 'react'
import './aihack.scss'
import Layout from '../components/ChatBot/ChatBot'
import Typography from '../components/Typography/Typography'
import Section from '../components/Section/Section'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from 'antd'
import { SwapRightOutlined } from '@ant-design/icons'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
const SLIDERS = [{

}]
const AiHack = () => {
  const swiper = useSwiper();
  useEffect(() => {
    console.log('====================================');
    console.log(swiper);
    console.log('====================================');
  }, [swiper])
  return (
    <Layout>
      <div className='main'>
        {/* Slies */}
        <Swiper
          ref={ref => { swiper = ref }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          // install Swiper modules
          modules={[Pagination, Autoplay, EffectCreative]}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}

          pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='sliderContainer'>
              <div className='slideContent'>
                <div className='logos'>
                  <div className='logo mlab'>
                    <StaticImage src={'../images/logo/mlab.png'} alt="mlab" />
                  </div>
                  <div className='logo mic'>
                    <StaticImage src='../images/logo/microsoft.png' alt="microsoft" />
                  </div>
                </div>
                <div className='text'>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b2">Elevate Your Skills</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="h4">Sustainable AI Hackathon</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b1">Gain Recognition and Network with Industry Leaders</Typography>
                </div>
                <div className='rectangle'></div>
                <div className='navContainer'>
                  {/* left */}
                  <div onClick={() => swiper.slidePrev()} className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20.5 12H3.66998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                  {/* right */}
                  <div onClick={() => swiper.slideNext()} className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                </div>

              </div>
              <div className='slideImage'>
                <StaticImage class='image' src='../images/aihack/images/1.png' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='sliderContainer'>
              <div className='slideContent'>
                <div className='logos'>
                  <div className='logo mlab'>
                    <StaticImage src={'../images/logo/mlab.png'} alt="mlab" />
                  </div>
                  <div className='logo mic'>
                    <StaticImage src='../images/logo/microsoft.png' alt="microsoft" />
                  </div>
                </div>
                <div className='text'>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b2">Sustainable AI Hackathon</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="h4">Explore the Power of AI</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b1">Foster Collaboration and Learn from Experts</Typography>
                </div>
                <div className='rectangle'></div>
                <div className='navContainer'>
                  <div className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20.5 12H3.66998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                  <div className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                </div>

              </div>
              <div className='slideImage'>
                <StaticImage class='image' src='../images/aihack/images/3.png' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='sliderContainer'>
              <div className='slideContent'>
                <div className='logos'>
                  <div className='logo mlab'>
                    <StaticImage src={'../images/logo/mlab.png'} alt="mlab" />
                  </div>
                  <div className='logo mic'>
                    <StaticImage src='../images/logo/microsoft.png' alt="microsoft" />
                  </div>
                </div>
                <div className='text'>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b2">Sustainable AI Hackathon</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="h4">Who Can Join?</Typography>
                  <Typography style={{ fontFamily: 'Segoe' }} variant="b1">AI Enthusiasts Welcome</Typography>
                </div>
                <div className='rectangle'></div>
                <div className='navContainer'>
                  <div className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20.5 12H3.66998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                  <div className='navButton'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                </div>

              </div>
              <div className='slideImage'>
                <StaticImage class='image' src='../images/aihack/images/2.png' />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        {/* About */}
        <div className='aiAbout'>
          <div className='headerText'>
            <Typography style={{ fontFamily: 'Segoe' }} variant="h3">About</Typography>
          </div>

          <div className='cardsContainer'>
            {/* Cards */}
            <div className='card'>
              <Typography variant="h6" style={{ fontFamily: 'Segoe_Bold' }}>The Hackathon</Typography>
              <Typography style={{ fontFamily: 'Segoe' }} variant="b2">The hackathon will be hosted under the theme of Sustainable Artificial Intelligence.
              </Typography>
              <div>
                <Typography >It will focus on teams that can develop solutions under the following themes which have been identified as having a significant impact on the socio economic landscape of South Africa:</Typography>
                <ul>
                  <li><Typography style={{ fontFamily: 'Segoe' }}>Fintech</Typography></li>
                  <li><Typography style={{ fontFamily: 'Segoe' }}>Healthtech</Typography></li>
                  <li><Typography style={{ fontFamily: 'Segoe' }}>Edutech</Typography></li>
                  <li><Typography style={{ fontFamily: 'Segoe' }}>Agritech</Typography></li>
                  <li><Typography style={{ fontFamily: 'Segoe' }}>Servicetech</Typography></li>
                </ul>
              </div>

            </div>
            <div className='card'>
              <Typography variant="h5" style={{ fontFamily: 'Segoe_Bold' }}>Why AI for Sustainability</Typography>
              <Typography style={{ fontFamily: 'Segoe' }}>Given that AI has the potential to address many of the social and economic challenges faced by South Africa, such as finance, healthcare, education, and food security.
              </Typography>
              <Typography >By hosting a Sustainable AI hackathon, Microsoft and its partners seek to encourage developers to build AI solutions that have a positive impact on these issues.</Typography>
            </div>
            <div className='card'>
              <Typography variant="h5" style={{ fontFamily: 'Segoe_Bold' }}>Benefits of Joining</Typography>
              <Typography style={{ fontFamily: 'Segoe' }}>Participants would receive overnight toiletry bags containing sanitary pads, wipes and any corporate gifts from sponsors.
              </Typography>
              <ul>
                <li><Typography style={{ fontFamily: 'Segoe' }}>Internship Opportunities</Typography></li>
                <li><Typography style={{ fontFamily: 'Segoe' }}>Microsoft Azure Hosting Credits</Typography></li>
                <li><Typography style={{ fontFamily: 'Segoe' }}>Support Packages and more</Typography></li>

              </ul>
            </div>
          </div>
        </div>
        {/* Partner & Participate */}
        <div className='partners_participate'>
          {/* Partner */}
          <div className='card partner'>
            <div className='c'>
              <Typography variant="h4" style={{ fontFamily: 'Segoe_Bold' }}>Partner with us</Typography>
              <div className='memberButton'>
                <button>
                  <Typography variant="button" style={{ fontFamily: 'Segoe' }}>Become a Member</Typography>
                </button>
                <div className='hands'>
                  <StaticImage className='img' src='../images/aihack/images/partner_hands.png' alt="" />
                </div>
              </div>
            </div>

            <div className='exhisting-partners'>
              <Typography style={{ fontFamily: 'Segoe_Bold' }}>Existing Partners</Typography>
              <hr className='line' />
              <div className='partnerList'>
                <div className='partner-logo-cont'>
                  <StaticImage className='logo' src='../images/aihack/images/partner.png' alt='partnerLogo' />
                </div>
                <div className='partner-logo-cont'>
                  <StaticImage className='logo' src='../images/aihack/images/partner.png' alt='partnerLogo' />
                </div>
                <div className='partner-logo-cont'>
                  <StaticImage className='logo' src='../images/aihack/images/partner.png' alt='partnerLogo' />
                </div>
                <div className='partner-logo-cont'>
                  <StaticImage className='logo' src='../images/aihack/images/partner.png' alt='partnerLogo' />
                </div>

              </div>
            </div>
          </div>
          {/* Participate */}
          <div className='card participate'>
            <div className='partnerheader'>
              <Typography variant="h4" style={{ fontFamily: 'Segoe_bold' }}>Participate</Typography>
            </div>
            <div className='cardsContainer'>
              <div className='partnercard'>
                <StaticImage className='coat-of-arms' src='../images/aihack/images/Limpopo.png' />
                <Typography>Limpopo</Typography>
                <Button type='ghost' size='large' icon={<SwapRightOutlined />}>Sign Up
                </Button>
              </div>
              <div className='partnercard'>
                <StaticImage className='coat-of-arms' src='../images/aihack/images/Gauteng.png' />
                <Typography>Gauteng</Typography>
                <Button draggable type='ghost' size='large' icon={<SwapRightOutlined />}>Sign Up
                </Button>
              </div>
              <div className='partnercard'>
                <StaticImage className='coat-of-arms' src='../images/aihack/images/KwaZulu-Natal.png' />
                <Typography>KwaZulu-Natal</Typography>
                <Button type='ghost' size='large' icon={<SwapRightOutlined />}>Sign Up
                </Button>
              </div>
              <div className='partnercard'>
                <StaticImage className='coat-of-arms' src='../images/aihack/images/Northern-Cape.png' />
                <Typography>Northern Cape</Typography>
                <Button type='ghost' size='large' icon={<SwapRightOutlined />}>Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Participate */}

        <div className='deco1'>
          <StaticImage className='img' src='../images/aihack/images/deco1.png' alt='' />
        </div>
        {/* Brought */}
        <div className='brought'>
          <Typography style={{ fontFamily: 'Segoe_Bold' }} variant="s2">Brought to you by</Typography>
          <div className='logos'>
            <div className='logo mlab'>
              <a href='https://mlab.co.za/who-we-are' target='_blank' rel="noreferrer" >  <StaticImage src={'../images/logo/mlab.png'} alt="mlab" />
              </a>

            </div>
            <div className='logo mic'>
              <StaticImage src='../images/logo/microsoft.png' alt="microsoft" />
            </div>
          </div>
        </div>
      </div>



    </Layout >
  )
}

export default AiHack