import React from "react";
import * as Emotion from "@emotion/react";
import * as Chakra from "@chakra-ui/react";
import * as ChakraTheme from "@chakra-ui/theme-tools"
import * as Icons from "@chakra-ui/icons";
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as bs from "react-icons/bs";
import * as cg from "react-icons/cg";
import * as di from "react-icons/di";
import * as fa from "react-icons/fa";
import * as fc from "react-icons/fc";
import * as fi from "react-icons/fi";
import * as gi from "react-icons/gi";
import * as go from "react-icons/go";
import * as gr from "react-icons/gr";
import * as hi from "react-icons/hi";
import * as im from "react-icons/im";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as md from "react-icons/md";
import * as ri from "react-icons/ri";
import * as si from "react-icons/si";
import * as ti from "react-icons/ti";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";
const reactIcons = {
  ...ai,
  ...bi,
  ...bs,
  ...cg,
  ...di,
  ...fa,
  ...fc,
  ...fi,
  ...gi,
  ...go,
  ...gr,
  ...hi,
  ...im,
  ...io,
  ...io5,
  ...md,
  ...ri,
  ...si,
  ...ti,
  ...vsc,
  ...wi,
};

const ReactLiveScope = {
  React,
  ...React,
  ...Emotion,
  ...Chakra,
  ...ChakraTheme,
  ...Icons,
  ...reactIcons,
};

export default ReactLiveScope;
