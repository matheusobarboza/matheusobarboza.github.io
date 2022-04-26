import React from "react";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Container, SocialIcon } from "./styles";

const SocialFollow = () => {
  return (
    <Container>
      <a
        href="https://github.com/matheusobarboza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/matheusobarboza/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/matheusobarboza/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon={faInstagram} />
      </a>
      <a
        href="https://twitter.com/matheusobarboz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon={faTwitter} />
      </a>
    </Container>
  );
};

export default SocialFollow;
