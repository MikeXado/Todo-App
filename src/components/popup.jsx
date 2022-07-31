import "../components/popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div
          className="btn-close"
          onClick={() => {
            props.setState(false);
          }}
        ></div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export { Popup };
