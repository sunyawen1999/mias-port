/* eslint-disable react/prop-types */
import PropTypes from "prop-types"

/**
 * Primary Button
 */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className="btn btn-primary"
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className="btn btn-primary">
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    :undefined
                }
            </button>
        )
    }
}

ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

/**
 * Outline Button
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className="btn btn-outline"
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className="btn btn-outline">
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonOutline.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
} 