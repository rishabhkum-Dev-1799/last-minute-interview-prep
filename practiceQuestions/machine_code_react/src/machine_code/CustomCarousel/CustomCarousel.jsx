import { useState } from 'react';
import styles from './CustomCarousel.module.css';

const ImageContainer = ({ image }) => {
  return (
    <div className={styles.image_container}>
      <img
        src={image}
        alt={'carousel_image'}
      />
    </div>
  );
};

const CustomCarousel = ({
  imageArr = [
    'src/assets/images/image1.png',
    'src/assets/images/image2.png',
    'src/assets/images/image3.png',
  ],
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const onNextImageHandler = (event) => {
    setSelectedImageIdx((prevValue)=> prevValue===(imageArr.length)-1 ? 0 :prevValue+=1)
  };

  const onPrevImageHandler = (event) => {
    setSelectedImageIdx((prevValue)=> prevValue===0 ? (imageArr.length)-1:prevValue-=1)
  };

  return (
    <div className={styles.main_container}>
      <h1>Custom Carousel Component</h1>
      <div className={styles.carousel_container}>
        {imageArr.map(
          (image, index) =>
            selectedImageIdx === index && (
              <ImageContainer
                key={index}
                image={image}
              />
            )
        )}
        <div className={styles.carousel_btn_cont}>
            <button onClick={onPrevImageHandler}>Prev</button>
            <button onClick={onNextImageHandler}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
