export default function Loader({ hidden }) {
  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-content">
        <div className="logo-loader">
          Melody<span>Hub</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}
