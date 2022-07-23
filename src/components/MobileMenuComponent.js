const MobileMenuComponent = ({ links, clickEvent }) => (
  <div className="shop__mobile-menu">
    <ul>
      {links.map((t) => (
        <li key={t}>{t}</li>
      ))}
      <li onClick={clickEvent}>👋</li>
    </ul>
  </div>
);

export default MobileMenuComponent;
