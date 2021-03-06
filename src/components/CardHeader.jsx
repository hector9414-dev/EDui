import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { CardContext } from "../utils/contexts";
import { CHILDREN_PROPTYPES } from "../constants";

const CardHeader = React.forwardRef((props, ref) => {
	const { image, className, imageClasses, children, alt, ...restProps } = props;

	return (
		<CardContext.Consumer>
			{({ horizontal }) =>
				image ? (
					<div
						className={classnames(
							className,
							"img-container s-ratio-16-9",
							horizontal && "m-cols-2"
						)}
						ref={ref}
						{...restProps}
					>
						<img
							className={classnames(
								imageClasses,
								horizontal && "s-radius-tl-1 s-radius-tr-1 m-radius",
								!horizontal && "s-radius-tl-1 s-radius-tr-1"
							)}
							src={image}
							alt={alt}
						/>
					</div>
				) : (
					children
				)
			}
		</CardContext.Consumer>
	);
});

CardHeader.propTypes = {
	image: PropTypes.string,
	className: PropTypes.string,
	imageClasses: PropTypes.string,
	alt: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES)
};

CardHeader.defaultProps = {
	image: "",
	className: "",
	imageClasses: "",
	alt: ""
};

export { CardHeader };
