import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ProjectCards(props) {
  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group" 
          style={{gap:"4"}}>
        <button className="carousel-control-prev" onClick={() => previous()}>
          <BsArrowLeftCircleFill />
        </button>
        <button className="carousel-control-next" onClick={() => next()}>
          <BsArrowRightCircleFill />
        </button>
      </div>
    );
  };

  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <Carousel
          responsive={props.imageResponsive}
          infinite={true}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false}
          renderButtonGroupOutside={true}
          className="project-image-carousel"
        >
          {props.images.map((img, index) => (
            <Card.Img
              key={index}
              variant="top"
              src={img}
              alt={`${props.title}-${index + 1}`}
              className="project-image"
            />
          ))}
        </Carousel>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="project-card-buttons">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-button"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-button"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
