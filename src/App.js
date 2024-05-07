import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import videoFile from './example.mp4';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-16 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              {index === 1 ? (
                <video src={videoFile} alt="" className=" mt-20 pt-20 h-90 " autoPlay muted controls />

              ) : (
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-3xl font-semibold">{d.name}</p>
              <p className="text-center text-2xl">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Future Scope of Our Project`,
    img: `src/dr1.jpg/`,
    review: `In an emergency, timely blood transfusion is very important to save lives. Hexacopters hold a promise for quickly and efficiently delivering medical supplies, such as blood, to remote or inaccessible areas. This report describes the design and development of a hexacopter capable of carrying a 500 gm payload, specifically designed to transport medical blood bags from one hospital to another within 1 km distance within 10 to 15 minutes.
    `
  },
  {
    name: ``,
  
    review: ``
  },
  {
    name: `More about our idea`,
    img: `src/dr2.jpg`,
    review: `The development of hexacopter drones for emergency blood treatment requires a focus on efficiency, reliability, and payload capacity. One crucial aspect of drone design is the frame, which serves as a major structural member carrying the weight of the entire drone and housing essential sensors.
    By optimizing the frame design through generative design techniques, significant weight reduction can be achieved, thereby increasing the drone's payload capacity.`
  },
];

export default App;
