// Components
import TitleComponent from './TitleComponent';
import RouteComponent from './RouteComponent';
import SubtitleComponent from './SubtitleComponent';
import Starcomponent from './StarComponent';
import ListComponent from './ListComponent';
import ProductColorComponent from './ProductColorComponent';
import ImgComponent from './ImgComponent';
import LineComponent from './LineComponent';
import PuchaseOptionsComponent from './PuchaseOptions';

// Assets
import ProductOne from '../assets/img/product-1.svg';

const template = [
  {
    title: 'Benefits',
    subtitle: 'Glow and natural radiance, SPF',
  },
  {
    title: 'Coverage',
    subtitle: 'Sheer to Moderate',
  },
  {
    title: 'Finish',
    subtitle: 'Radiant',
  },
  {
    title: 'Key Ingredients',
    subtitle: 'Coriander Seed, Black Pepper, Patchouli. More',
  },
];

const PuchaseComponent = ({ route, title, subTitle, starRank, list }) => {
  return (
    <div className="shop__puchase-card">
      <div className="shop__route-mobile">
        <RouteComponent />
      </div>
      <div className="shop__puchase-img">
        <ImgComponent src={ProductOne} />
      </div>
      <div className="shop__puchase-info">
        <RouteComponent />
        <TitleComponent text="Even Better Glow™ Light Reflecting Makeup Broad Spectrum SPF 15" />
        <SubtitleComponent text="Moderate-coverage foundation instantly perfects, improves evenness of skin." />
        <Starcomponent color="black" rating={5} />
        <ListComponent config={template} />
        <ProductColorComponent text="FK-12" color="#f6dfc8" />
        <LineComponent />
        <PuchaseOptionsComponent />
      </div>
    </div>
  );
};
export default PuchaseComponent;
