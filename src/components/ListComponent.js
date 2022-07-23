// Components
import SubtitleComponent from './SubtitleComponent';

const ListComponent = ({ config }) => {
  return (
    <div className="shop__list">
      {config.map((t) => (
        <div key={t.title}>
          <SubtitleComponent text={t.title} bold={true} />
          <SubtitleComponent text={t.subtitle} />
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
