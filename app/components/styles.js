import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {colors} from "../config/colors";

export default StyleSheet.create({
	loginField: {
	    marginTop: 30,
	    padding: 10,
	    height: 40, 
	    width: 300,
	    borderColor: colors.white,
	    color: colors.white,
	    borderWidth: 1
	  },

	button: {
		backgroundColor: colors.btnColor,
      	width: 300,
      	height: 45,
      	borderColor: "transparent",
      	borderWidth: 0,
      	marginTop: 40
	}  
})