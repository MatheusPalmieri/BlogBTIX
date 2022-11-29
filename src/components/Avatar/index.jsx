import React from 'react';
import P from 'prop-types';
import { BigHead } from '@bigheads/core';

export const Avatar = ({ id }) => {

  // console.log(id)
  // console.log(typeof id)
  // if(typeof id === 'string') id = Number(id)
  // console.log('after')
  // console.log(id)
  // console.log(typeof id)

  switch (id) {
    case 1:
      return (
        <BigHead
          accessory="roundGlasses"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="raised"
          eyes="happy"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none"
          graphic="react"
          hair="none"
          hairColor="orange"
          hat="beanie"
          hatColor="black"
          lashes
          lipColor="green"
          mask
          mouth="tongue"
          skinTone="brown"
        />
      );
    case 2:
      return (
        <BigHead
          accessory="roundGlasses"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="green"
          eyebrows="raised"
          eyes="happy"
          faceMask={false}
          faceMaskColor="red"
          facialHair="stubble"
          graphic="vue"
          hair="afro"
          hairColor="white"
          hat="beanie"
          hatColor="green"
          lashes={false}
          lipColor="purple"
          mask
          mouth="open"
          skinTone="black"
        />
      );
    case 3:
      return (
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="tankTop"
          clothingColor="red"
          eyebrows="angry"
          eyes="squint"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none2"
          graphic="redwood"
          hair="bun"
          hairColor="white"
          hat="none2"
          hatColor="blue"
          lashes
          lipColor="pink"
          mask
          mouth="tongue"
          skinTone="yellow"
        />
      );
    case 4:
      return (
        <BigHead
          accessory="shades"
          body="breasts"
          circleColor="blue"
          clothing="shirt"
          clothingColor="green"
          eyebrows="leftLowered"
          eyes="leftTwitch"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none2"
          graphic="vue"
          hair="pixie"
          hairColor="black"
          hat="none2"
          hatColor="black"
          lashes
          lipColor="purple"
          mask
          mouth="openSmile"
          skinTone="yellow"
        />
      );
    case 5:
      return (
        <BigHead
          accessory="none"
          body="breasts"
          circleColor="blue"
          clothing="naked"
          clothingColor="black"
          eyebrows="angry"
          eyes="wink"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none3"
          graphic="react"
          hair="buzz"
          hairColor="pink"
          hat="none2"
          hatColor="white"
          lashes={false}
          lipColor="red"
          mask
          mouth="sad"
          skinTone="light"
        />
      );
    case 6:
      return (
        <BigHead
          accessory="tinyGlasses"
          body="chest"
          circleColor="blue"
          clothing="dressShirt"
          clothingColor="red"
          eyebrows="serious"
          eyes="happy"
          faceMask={false}
          faceMaskColor="black"
          facialHair="none"
          graphic="vue"
          hair="afro"
          hairColor="brown"
          hat="none2"
          hatColor="green"
          lashes
          lipColor="purple"
          mask
          mouth="openSmile"
          skinTone="light"
        />
      );
    case 7:
      return (
        <BigHead
          accessory="shades"
          body="chest"
          circleColor="blue"
          clothing="vneck"
          clothingColor="black"
          eyebrows="raised"
          eyes="wink"
          faceMask={false}
          faceMaskColor="blue"
          facialHair="mediumBeard"
          graphic="react"
          hair="balding"
          hairColor="black"
          hat="beanie"
          hatColor="blue"
          lashes={false}
          lipColor="pink"
          mask
          mouth="sad"
          skinTone="yellow"
        />
      );
    case 8:
      return (
        <BigHead
          accessory="shades"
          body="chest"
          circleColor="blue"
          clothing="dress"
          clothingColor="red"
          eyebrows="concerned"
          eyes="wink"
          faceMask={false}
          faceMaskColor="green"
          facialHair="mediumBeard"
          graphic="redwood"
          hair="afro"
          hairColor="black"
          hat="turban"
          hatColor="white"
          lashes={false}
          lipColor="turqoise"
          mask
          mouth="grin"
          skinTone="yellow"
        />
      );
    case 9:
      return (
        <BigHead
          accessory="shades"
          body="breasts"
          circleColor="blue"
          clothing="shirt"
          clothingColor="blue"
          eyebrows="raised"
          eyes="wink"
          faceMask={false}
          faceMaskColor="blue"
          facialHair="none2"
          graphic="graphQL"
          hair="afro"
          hairColor="black"
          hat="none2"
          hatColor="green"
          lashes={false}
          lipColor="pink"
          mask
          mouth="openSmile"
          skinTone="brown"
        />
      );
    case 10:
      return (
        <BigHead
          accessory="tinyGlasses"
          body="breasts"
          circleColor="blue"
          clothing="dressShirt"
          clothingColor="black"
          eyebrows="angry"
          eyes="squint"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none3"
          graphic="gatsby"
          hair="buzz"
          hairColor="blonde"
          hat="none5"
          hatColor="white"
          lashes={false}
          lipColor="red"
          mask
          mouth="lips"
          skinTone="red"
        />
      );
    default:
      console.log('error');
      return (
        <BigHead
          accessory="roundGlasses"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="raised"
          eyes="happy"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none"
          graphic="react"
          hair="none"
          hairColor="orange"
          hat="beanie"
          hatColor="black"
          lashes
          lipColor="green"
          mask
          mouth="tongue"
          skinTone="brown"
        />
      );
  }
};

Avatar.propTypes = {
  id: P.number.isRequired,
};
