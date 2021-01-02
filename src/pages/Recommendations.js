import React from "react";

import PageContainer from "./Container";
import MovieIllustration from "../components/movie/Illustration";
import StyledLink from "../components/StyledLink";

import { Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Recommendation = ({ movie, children }) => (
  <div className="shadow-lg rounded p-3 my-5">
    <h3 className="my-2">{movie}</h3>
    <Row className="mt-1">
      <Col xs={12} lg={true} className="mt-1 order-2 order-lg-1">
        {children}
      </Col>
      <Col xs={12} lg={true} className="order-1 order-lg-2">
        <MovieIllustration movie={movie} />
        <LinkContainer to={`/movies/${movie.replace(/ /g, "%20")}`}>
          <StyledLink extraClasses="mt-2 mb-2">More Information</StyledLink>
        </LinkContainer>
      </Col>
    </Row>
  </div>
);

function RecommendationsPage() {
  return (
    <PageContainer title="My Top 3 Recommendations">
      <div>
        <h2>Please note!</h2>
        <p>
          The following recommendations are based entirely on my personal
          opinion. Please don't complain to me if you like any other Ghibli
          movie more than the ones listed below, or if you think there is a more
          suitable film to recommend. <strong>(* ^ ω ^)</strong> Thank you for
          your understanding.
        </p>
      </div>
      <Recommendation movie="Spirited Away">
        For me, Spirited Away is and remains one of the most beautiful films I
        know. A visually stunning fairy tale that shows a lot of Japanese
        culture and a conflict that is resolved without malice. And the whole
        thing goes with a little depth and without big laughs. Although I'm not
        a particularly emotional person, I think the atmosphere in Spirited Away
        is very nice. Chihiro is afraid, "fights" (within the scope of her
        possibilities), performs (small) heroic deeds such as saving the river
        spirit and Haku. But she doesn't scamper around, isn't angry with
        Yubaba. One thing I noticed about the story is that good and bad are far
        less clear than in most stories. On the one hand the witch Yubaba is a
        slave driver. On the other hand, she's kind of honest and not a
        downright devil. One could almost think that the evil only came about
        through the greed of others (but this is neither claimed nor proven).
        Except for Chihiro herself, who does no evil, everyone seems to be both
        good and bad - just like people are in the real world, but not in fairy
        tales. Everything is just right here and for two hours you forget
        everything around you and immerse yourself with Chihiro in another world
        that enchants you lastingly.
      </Recommendation>
      <Recommendation movie="Castle in the Sky">
        The first thing I thought about when I compared the Castle in the Sky to
        the other works of Ghibli, was the fact that this movie was unusually
        action packed. Many chases through a mountain town, slaughter between
        airships in the sky. These are just a few of the many exciting things
        that happen in the movie. Nevertheless Castle in the Sky manages to be
        absolutely enchanted even in the many quiet moments. The very good
        interplay between the quieter and very atmospheric scenes, as well as
        the more turbulent action scenes. Not only ensures that you don't get
        bored in the 124 minutes but that the time flies by. The adventurous
        aspect but also the interpersonal part such as friendship, fear, trust
        is shown very well in this film. As a steampunk fan, I can't help but
        rave about this movie, but at the same time the film gave me
        heartwarming moments (without stretching my emotions too much) and
        offered an atmosphere that you receive with open arms and where you can
        want to believe you can fly.
      </Recommendation>
      <Recommendation movie="Howl's Moving Castle">
        With beautiful pictures, the viewer is whisked away into a fantastic
        fairy tale world and can witness how the young hat maker Sophie, after a
        fateful encounter with a mysterious and charismatic man, is cursed by
        the jealous witch from Never Land, which turns her into an old woman. A
        great adventure to save the love of her life begins. Musically, the
        whole thing is perfectly accompanied by Joe Hisaishi, who is also
        responsible for many soundtracks for Studio Ghibli productions, and thus
        contributes to the great atmosphere. The film made the child in me cheer
        out loud. Modern fairy tales told so fantastically are not seen too
        often. But the film is not as naive as it seems at first glance.
        Compulsions and fears during a war are also shown.
      </Recommendation>
    </PageContainer>
  );
}

export default RecommendationsPage;
