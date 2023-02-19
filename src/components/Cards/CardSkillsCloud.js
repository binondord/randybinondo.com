import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import {technologies, hugeTechnologies} from '@/constants/skills'
import {textSizes} from '@/constants/text-sizes'
import {colors} from '@/constants/colors'



// components
export default function CardSkillsCloud({ color }) {
  const getClass = () => textSizes[Math.floor(Math.random()*textSizes.length)];
  const getColor = () => 'text-' + colors[Math.floor(Math.random()*colors.length)]+'-500';
  
  return (
    <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
        }
      >
        <div className="block w-full overflow-x-auto">
          <ul class="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8">
            {technologies.map(technology => (
              <li><Link href={`#`+technology.value} class={getClass() + ' '+ getColor()}>{technology.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
  );
}

CardSkillsCloud.defaultProps = {
  color: "light",
};

CardSkillsCloud.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
