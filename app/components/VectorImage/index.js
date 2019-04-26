import React from "react";
import PropTypes from "prop-types";

const VectorImage = ({
  align,
  source,
  width,
  height,
  className,
  onClick,
  style,
}) => {
  const markup = { __html: source.content };
  const { attributes } = source;

  if (!attributes) return null;

  const getAspectRatio = () => {
    switch (align) {
      case "left":
        return "xMinYMid";
      case "right":
        return "xMaxYMid";
      default:
        return "xMidYMid";
    }
  };

  return (
    <svg
      style={style}
      width={width || source.attributes.width}
      height={height || source.attributes.height}
      className={className}
      viewBox={attributes.viewBox}
      fill={attributes.fill}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={markup}
      preserveAspectRatio={getAspectRatio()}
      onClick={onClick}
    />
  );
};

VectorImage.propTypes = {
  source: PropTypes.shape({
    content: PropTypes.string,
  }),
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  align: PropTypes.oneOf(["left", "right"]),
};

VectorImage.defaultProps = {
  source: {
    content: null,
    attributes: null,
  },
  width: null,
  height: null,
  onClick: null,
  className: null,
  style: null,
  align: null,
};

export default VectorImage;
