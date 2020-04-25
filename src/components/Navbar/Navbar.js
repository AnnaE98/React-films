import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Navbar.module.css'
const Wrap = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 976px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Film = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  span {
    font-weight: 400;
  }
  margin: 15px 0;
`;


const Toggle = styled.div`
  width: 30px;
  height: 20px;
  position: absolute;
  top: 28px;
  left: 20px;
  cursor: pointer;
  @media screen and (min-width: 800px) {
    display: none;
  }
  &::after, &::before, span {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #333;
    position: absolute;
    border-radius: 10px;
  }
  &::after {
    top: 0;
  }
  &::before {
    bottom: 0;
  }
  span {
    top: 50%;
    width: 70%;
    transform: translateY(-50%);
    transition: width .4s ease-out;
  }
  &.open span {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    font-size: 1.3rem;
    margin: 0 20px;
    &.active {
      font-weight: 700;
    }
    @media screen and (max-width: 976px) {
      margin: 5px 15px;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
    &.open {
      display: flex;
    }
  }
`;

const AddFilm = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
  @media screen and (max-width: 976px) {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 800px) {
    display: none;
    &.open {
      display: block;
    }
  }
`;

const Navbar = () => {
  const handleMenuClick = () => document.querySelectorAll('.toggle').forEach(el => el.classList.toggle('open'));
  const handleLinkClick = () => document.querySelectorAll('.toggle').forEach(el => el.classList.remove('open'));
  return (
    <Wrap>
      <Film>
        <Link to="/"><span>Фильмы</span></Link>
      </Film>
      <Toggle className="toggle" onClick={handleMenuClick}><span /></Toggle>
      <Links className="toggle">
        <NavLink onClick={handleLinkClick} activeClassName="active" exact to="/films">
          Все фильмы
        </NavLink>
        <NavLink onClick={handleLinkClick} activeClassName="active" to="/boevik">
          Боевик
        </NavLink>
        <NavLink onClick={handleLinkClick} activeClassName="active" to="/drama">
          Драма
        </NavLink>
        <NavLink onClick={handleLinkClick} activeClassName="active" to="/komedia">
          Комедия
        </NavLink>
        <NavLink onClick={handleLinkClick} activeClassName="active" to="/deaded">
          Ужасы
        </NavLink>
        <NavLink onClick={handleLinkClick} activeClassName="active" to="/fantace">
          Фантастика
        </NavLink>
      </Links>
      <AddFilm className="toggle">
        <NavLink to="/add"><img className={styles.img} src="assets/images/add.png" alt="add.png"/></NavLink>
      </AddFilm>
    </Wrap>
  );
};

export default Navbar;
