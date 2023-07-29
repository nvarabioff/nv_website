import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import Biking from '../Assets/Biking.jpeg';
import Hiking_2 from '../Assets/Hiking_2.JPG';
import Hiking from '../Assets/Hiking.jpg';
import Trombone from '../Assets/Trombone.jpg';

const items = [
  {
    src: Biking,
    altText: 'Slide 1',
  },
  {
    src: Hiking_2,
    altText: 'Slide 2',
  },
  {
    src: Hiking,
    altText: 'Slide 3',
  },
  {
    src: Trombone,
    altText: 'Slide 5',
  }
];

class Slides extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="slideImg"/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className="ctrl"/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} className="ctrl"/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} className="ctrl"/>
      </Carousel>
    );
  }
}

export default Slides;
