import * as React from "react";

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 12"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        {...props}
    >
        <path
            d="M0 6H12M12 6L7 1M12 6L7 11"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowRight;
