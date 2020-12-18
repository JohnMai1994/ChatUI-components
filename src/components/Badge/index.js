import React from 'react';
import StyleBadge, {Count} from "./style";
import PropTypes from 'prop-types';

function Badge({
     children,
     show = false,
     count = 0,
     showZero = false,
     ...rest
 }) {
    return (
        <StyleBadge
            variant={children ? "dot" : "default"}
            show={show}
            count={count}
            showZero={showZero}
            {...rest}
        >
            {children || <Count>{count}</Count>}
        </StyleBadge>
    );
}


Badge.propTypes = {
    show: PropTypes.bool,
    showZero: PropTypes.bool,
    count: PropTypes.number,
    children: PropTypes.any
};

export default Badge;