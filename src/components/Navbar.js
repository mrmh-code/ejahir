import React from 'react'
import styled from 'styled-components'
 
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const {openSidebar}=useProductsContext();
  const {myUser}=useUserContext();
  console.log(myUser)
  return <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/' className='icon'>
          <div class="">
        <a href="">
          <span><i class="fas fa-bell"></i></span>
          <h3>EJAHIR</h3>
        </a>
      </div>
            
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>

        <ul className='nav-links'>
          {
            links.map((link)=>{
              const {id,text,url}=link;

              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })
          }

          {myUser && (<li>
            <Link to='/checkout'> checkout</Link>
          </li>)}
        </ul>
        <CartButtons/>
      </div>
  </NavContainer> 
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 3px 8px;
  .nav-center {
    width: 100vw;
    margin: 0 auto;
  }
  .icon{
    margin-left:5.5rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

 

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

 

  @media (max-width: 992px){
  .icon{
    margin-left:1.5rem;
  }
}
  @media (min-width: 992px) {
    
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
