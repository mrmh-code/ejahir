import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-desk.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
    <img src={aboutImg} alt="nice desk" />
    <article>
      <div className='title'>
        <h3>Our Story</h3>
        <div className="underline"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui perspiciatis accusamus repudiandae vel fuga illo temporibus consequatur adipisci a optio quo nesciunt, cumque fugiat numquam commodi error id, sint ducimus? Nobis, sed qui accusamus voluptas atque animi beatae alias deserunt dolore nihil sapiente? Architecto necessitatibus cumque amet ipsam consequatur.</p>
      </div>
    </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
