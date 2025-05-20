import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/avatar.png";
import { FaBriefcase } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PRIYANSHU SAHOO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="about-section" id="about">
        <Container>
          <Row>
            <Col md={18} >
              <About />
            </Col>
          </Row>
        </Container>
      </Container>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        margin: '64px 0 0px 0',
        padding: '0',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px 0 rgba(16,185,129,0.13)',
          borderRadius: '40px',
          border: '1.5px solid rgba(16,185,129,0.18)',
          backdropFilter: 'blur(6px)',
          padding: '10px 32px 10px 24px',
          gap: '18px',
        }}>
          <span style={{
            fontSize: '1.5em',
            fontWeight: 600,
            color: '#0F172A',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <FaBriefcase style={{ color: '#10B981', fontSize: '1.2em', marginRight: '8px' }} />
            Hire Me -
          </span>
          <button
            className="hire-link"
            style={{
              fontSize: '1.2em',
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(90deg, #10B981 60%, #059669 100%)',
              border: 'none',
              borderRadius: '30px',
              padding: '12px 32px 12px 28px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px 0 rgba(16,185,129,0.13)',
              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
            onClick={() => {
              navigate('/resume')
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #059669 60%, #10B981 100%)';
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.boxShadow = '0 6px 24px 0 rgba(16,185,129,0.18)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #10B981 60%, #059669 100%)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(16,185,129,0.13)';
            }}
          >
            <CgFileDocument style={{ fontSize: '1.2em', marginRight: '6px' }} /> Resume
          </button>
        </div>
      </div>
      

      <Projects />
      
      <div className="section-divider"></div>
      
      <Contact />
    </section>
  );
}

export default Home;
