import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src ='https://images.bubbleup.com/width1920/quality35/mville2017/1-brand/1-margaritaville.com/gallery-media/220803-compasshotel-medford-pool-73868-1677873697.jpg'  text="Second slide" />
        <Carousel.Caption>
          <h3> Clinton Hotel </h3>
          <p> Come and Visit Youll Never Forget Your Stay </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
        <img src ='https://cdn.savingplaces.org/2017/04/19/15/54/42/964/Fairmont-Copley-Plaza.jpg' text="Second slide" />
        <Carousel.Caption>
          <h3>Toppenheimer Hotel </h3>
          <p>Historic Hotel , Timeless Design .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src ='https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg'  text="Second slide" />
        <Carousel.Caption>
          <h3> The Marriot </h3>
          <p>
            Distingushed Hotel , Vast Amenities 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;