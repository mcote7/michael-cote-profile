import React from 'react';
import { onRoute } from '../../utilities/onRoute';
import img1 from '../../images/DojoCert.png';
import img2 from '../../images/MasterReactCert.png';
import img3 from '../../images/ReduxCert.png';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import DojoInfo from './dojoInfo';
import ReduxInfo from './reduxInfo';
import ReactInfo from './reactInfo';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../css/education.css';

class Education extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 1,
      slides: [
        (<img src={img2} className="myCertImg" alt="img"/>),
        (<img src={img1} className="myCertImg" alt="img"/>),
        (<img src={img3} className="myCertImg" alt="img"/>),
        (null),
      ],
      thumbnails: [
        (<img src={img2} className="myCertThumb m-0" alt="img"/>),
        (<img src={img1} className="myCertThumb m-0" alt="img"/>),
        (<img src={img3} className="myCertThumb m-0" alt="img"/>),
      ],
    }
    this.onchange = this.onchange.bind(this);
  }
  onchange(value) {
    console.log("imgVal", value);
    this.state.value === 2 ? this.setState({ value: 0 }) : this.setState({ value });
  }
  onImageSwitch = () => {
    if(this.state.value === 1) return ( <DojoInfo/> );
    else if(this.state.value === 2) return ( <ReduxInfo/> );
    else if(this.state.value === 0) return ( <ReactInfo/> );
  }
  componentDidMount() {
    onRoute();
  }
  render() {
    return (
      <React.Fragment>
      <div className="col-lg-6 mt-3 mr-5">
        <Carousel
          offset={5}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
          arrowLeft={<span><i className="fa fa-arrow-circle-left fa-3x arrowIcon" aria-hidden="true"></i></span>}
          arrowLeftDisabled={<span><i className="fa fa-arrow-circle-left fa-3x disable" aria-hidden="true"></i></span>}
          arrowRight={<span><i className="fa fa-arrow-circle-right fa-3x arrowIcon" aria-hidden="true"></i></span>}
          arrowRightDisabled={<span><i className="fa fa-arrow-circle-right fa-3x disable" aria-hidden="true"></i></span>}
          addArrowClickHandler
        />
        <hr className="carouselHR"/>
        <Dots
          number={this.state.thumbnails.length}
          thumbnails={this.state.thumbnails}
          value={this.state.value}
          onChange={this.onchange}
        />
      </div>
      <div className="col-lg-5 mt-2">
        {this.onImageSwitch()}
      </div>
      </React.Fragment>
    );
  };
};
export default Education;