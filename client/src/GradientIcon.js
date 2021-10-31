

const GradientOpenWithIcon = (props) => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor="black" />
        <stop offset={1} stopColor="grey" />
      </linearGradient>
    </svg>
    {props.icon}
  </>
)

export default GradientOpenWithIcon;