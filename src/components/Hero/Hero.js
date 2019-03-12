import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-left">
          <h1>Learning leathercraft</h1>
          <h2>Projects and tutorials teaching the art of leathercraft</h2>
          <button onClick={scrollToContent} aria-label="scroll">
            <span>Latest posts</span>
          </button>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          background: ${theme.hero.background};
          background-color: ${theme.background.color.alt};
          background-image: url(${backgrounds.mobile});
          background-size: 100%;
          background-position: bottom center;
          background-repeat: no-repeat;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-items: center;
          height: 100vh;
          min-height: 500px;
          padding: ${theme.space.inset.s};
        }
        .hero-left {
          flex-basis: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: ${theme.space.inset.s};
        }
        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.s};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
        }
        h2 {
          font-weight: ${theme.font.weight.standard};
          margin: ${theme.space.xs} 0 ${theme.space.l} 0;
          text-align: center;
          font-size: ${`calc(${theme.heading.size.h3} )`};
        }

        button {
          background: ${theme.color.brand.dark};
          border: 0;
          border-radius: 4px;
          font-size: ${theme.font.size.m};

          color: ${theme.color.neutral.white};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          &:hover {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }
          .hero-left {
            padding: ${theme.space.inset.l};
          }
          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }
        }

        @from-width desktop {
          .hero {
            flex-flow: row;
            align-items: center;
            justify-content: flex-start;
            background-image: url(${backgrounds.desktop});
            padding-top: ${theme.header.height.homepage};
            background-size: 50%;
            background-position: center right;
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.2)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
