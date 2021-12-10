export const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "#f1f2f3",
      display: "block",
    }}
    width={32}
    height={32}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path fill="#93dbe9" d="M17.5 30h15v40h-15z">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="18;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.2s"
      />
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="64;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.2s"
      />
    </path>
    <path fill="#689cc5" d="M42.5 30h15v40h-15z">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="20.999999999999996;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.1s"
      />
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="58.00000000000001;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.1s"
      />
    </path>
    <path fill="#5e6fa3" d="M67.5 30h15v40h-15z">
      <animate
        attributeName="y"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="20.999999999999996;30;30"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
      />
      <animate
        attributeName="height"
        repeatCount="indefinite"
        dur="1s"
        calcMode="spline"
        keyTimes="0;0.5;1"
        values="58.00000000000001;40;40"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
      />
    </path>
  </svg>
);
