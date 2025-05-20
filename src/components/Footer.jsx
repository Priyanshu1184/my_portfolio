import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{
      padding: '10px 0 6px 0',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center',
      fontSize: '0.95em',
      color: '#475569',
      letterSpacing: '0.02em',
      background: 'transparent',
    }}>
      <span>
        © {year} &nbsp;|&nbsp; Designed &amp; Developed by Priyanshu Sahoo
      </span>
    </Container>
  );
}

export default Footer; 