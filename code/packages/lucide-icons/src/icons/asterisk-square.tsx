import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Rect width="18" height="18" x="3" y="3" rx="2" stroke={color} />
      <Path d="M12 8v8" stroke={color} />
      <Path d="m8.5 14 7-4" stroke={color} />
      <Path d="m8.5 10 7 4" stroke={color} />
    </Svg>);

};

Icon.displayName = 'AsteriskSquare';

export const AsteriskSquare = React.memo<IconProps>(themed(Icon));