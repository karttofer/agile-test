// Components
import ButtonComponent from './ButtonComponent';
import QuantityComponent from './QuantityComponent';
import SelectComponent from './SelectComponent';
import TitleComponent from './TitleComponent';

const options = [
  'One time purchase',
  'Two time purchase',
  'Three time purchase',
];

const PuchaseOptionsComponent = () => {
  return (
    <div className="shop__puchase-opt">
      <div className="shop__f-row">
        <QuantityComponent />
        <SelectComponent options={options} />
      </div>
      <div className="shop__s-row">
        <TitleComponent text="$29.00" />
        <ButtonComponent text="Add to Bag" style="black" />
      </div>
    </div>
  );
};
export default PuchaseOptionsComponent;
