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

      <Path d="M10 3h.01" stroke={color} />
      <Path d="M14 2h.01" stroke={color} />
      <Path d="m2 9 20-5" stroke={color} />
      <Path d="M12 12V6.5" stroke={color} />
      <Rect width="16" height="10" x="4" y="12" rx="3" stroke={color} />
      <Path d="M9 12v5" stroke={color} />
      <Path d="M15 12v5" stroke={color} />
      <Path d="M4 17h16" stroke={color} />
    </Svg>);

};

Icon.displayName = 'CableCar';

export const CableCar = React.memo<IconProps>(themed(Icon));