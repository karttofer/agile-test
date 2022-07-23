// Component
import ImgComponent from './ImgComponent';
import ButtonComponent from './ButtonComponent';
import LinkComponent from './LinkComponent';

const RelatedProductCard = ({ img, title, price }) => {
  return (
    <div className="shop__related-img-container">
      <div className="shop__related-img">
        <ImgComponent src={require(`../assets/img/${img}`)} />
      </div>
      <div className="shop__related-title">
        <LinkComponent text={title} />
        <LinkComponent text={price} />
      </div>
      <div>
        <ButtonComponent text="Shop Now" style="white" />
      </div>
    </div>
  );
};

export default RelatedProductCard;
