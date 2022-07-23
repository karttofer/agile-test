const IconComponent = ({ src, isMobile, clickEvent }) => (
  <img
    onClick={isMobile || clickEvent ? clickEvent : null}
    className={isMobile ? 'shop__icon shop__icon-mobile' : 'shop__icon'}
    src={src}
    alt="application logo"
  />
);
export default IconComponent;
