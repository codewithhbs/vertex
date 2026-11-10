import investigationRoom from '../../assets/background-dect.webp'

const VideoBackground = ({ className = '' }) => (
  <img
    src={investigationRoom}
    alt=""
    className={`pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover ${className}`}
  />
)

export default VideoBackground
