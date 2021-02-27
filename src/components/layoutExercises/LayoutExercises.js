import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import ListProducts from "./ListProducts";

export default class LayoutExercises extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Carousel />
        <ListProducts />
        <Footer />
      </div>
    );
  }
}
