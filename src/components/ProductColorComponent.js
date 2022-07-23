import LinkComponent from './LinkComponent';

const ProductColorComponent = ({ text, color }) => {
  return (
    <div className="shop__item-color">
      <LinkComponent text={text} bold={true} />
      <div style={{ background: color }}></div>
    </div>
  );
};

export default ProductColorComponent;
