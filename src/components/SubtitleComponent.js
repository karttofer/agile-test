const SubtitleComponent = ({ text, bold }) => (
  <p className={`shop__text-subtitle ${bold ? 'shop__bold' : ''}`}>{text}</p>
);

export default SubtitleComponent;
