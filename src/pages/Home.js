import React from "react";
import PageContainer from "./Container";
import StyledLink from "../components/StyledLink";
import { Row, Col, Carousel, Image } from "react-bootstrap";

import logo from "../assets/slideshow/Logo.jpg";
import spiritedAway from "../assets/slideshow/Spirited Away Wallpaper.jpg";
import totoro from "../assets/slideshow/Totoro Wallpaper.jpg";
import ponyo from "../assets/slideshow/Ponyo Wallpaper.jpg";
import castleInTheSky from "../assets/slideshow/Castle in the Sky Wallpaper.jpg";

const wallpapers = [
  { movie: "Spirited Away", image: spiritedAway },
  { movie: "My Neighbor Totoro", image: totoro },
  { movie: "Ponyo", image: ponyo },
  { movie: "Castle in the Sky", image: castleInTheSky },
];

function HomePage() {
  return (
    <PageContainer title="Home">
      <h2 className="mb-2">What is Studio Ghibli?</h2>
      <Row>
        <Col xs={12} xl={5} className="order-2 order-xl-1">
          <p>
            Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
            Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio
            headquartered in Koganei, Tokyo. The studio is best known for its
            animated feature films, and has also produced several short films,
            television commercials, and one television film. The studio’s mascot
            and most recognizable symbol is the character, Totoro, a giant
            cat-like spirit from the 1988 classic, My Neighbor Totoro. Studio
            Ghibli’s highest grossing films include fan favorites such as
            Spirited Away (2001), Ponyo (2008), and Howl’s Moving Castle (2004).
            This world-famous studio was founded on June 15, 1985 by directors
            Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after
            the success of Topcraft's anime film Nausicaä of the Valley of the
            Wind (1984). Studio Ghibli has also collaborated with video game
            studios on the visual development of several video games.
          </p>
        </Col>
        <Col className="mb-3 order-1 order-xl-2">
          <Carousel interval={3000}>
            <Carousel.Item>
              <Image src={logo} className="d-block w-100" />
              <Carousel.Caption>
                This is the logo of <strong>Studio Ghibli</strong>.
              </Carousel.Caption>
            </Carousel.Item>
            {wallpapers.map((wallpaper) => (
              <Carousel.Item key={wallpaper.movie}>
                <Image src={wallpaper.image} className="d-block w-100" />
                <Carousel.Caption>
                  Wallpaper of the movie <strong>{wallpaper.movie}</strong>.
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <StyledLink
        to="https://en.wikipedia.org/wiki/Studio_Ghibli"
        extraClasses="my-1"
      >
        Read More | Source <i className="fas fa-external-link-alt"></i>
      </StyledLink>
    </PageContainer>
  );
}

export default HomePage;
