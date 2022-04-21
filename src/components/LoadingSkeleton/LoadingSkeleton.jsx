const LoadingSkeleton = ({
  width,
  height,
  margin,
  LoadingComponent,
  isLoading,
}) => {
  if (!isLoading) {
    return LoadingComponent;
  }
  return (
    <svg
      aria-labelledby="3sbdhl-aria"
      role="img"
      style={{
        height: height,
        width: width,
        margin: margin,
      }}
    >
      <title id="3sbdhl-aria">Loading...</title>
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#3sbdhl-diff)"
        style={{ fill: 'url("#3sbdhl-animated-diff")' }}
      ></rect>
      <defs>
        <clipPath id="3sbdhl-diff">
          <rect x="0" y="0" width="100%" height="100%"></rect>
        </clipPath>
        <linearGradient id="3sbdhl-animated-diff">
          <stop offset="0%" stopColor="#f5f6f7" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="50%" stopColor="#eee" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="100%" stopColor="#f5f6f7" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="1.2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LoadingSkeleton;
