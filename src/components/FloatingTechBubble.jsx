import { useRef, useEffect, useState } from "react"

const FloatingTechBubble = ({ tech, initialPosition, speed }) => {
  const bubbleRef = useRef(null)
  const [position, setPosition] = useState(initialPosition)
  const [bubbleSpeed, setBubbleSpeed] = useState(speed)
  
  useEffect(() => {
    let animationId
    let currentPosition = { ...position }
    let currentSpeed = { ...bubbleSpeed }
    let lastDirectionChange = 0
    
    const getRandomSpeed = () => {
      return {
        x: (Math.random() - 0.5) * 0.7,
        y: (Math.random() - 0.5) * 0.7,
        z: (Math.random() - 0.5) * 0.5 // Z-axis movement for depth
      }
    }
    
    const animate = (timestamp) => {
      // Random direction changes
      if (timestamp - lastDirectionChange > Math.random() * 4000 + 2000) {
        const newSpeed = getRandomSpeed()
        currentSpeed = {
          x: currentSpeed.x * 0.5 + newSpeed.x * 0.5,
          y: currentSpeed.y * 0.5 + newSpeed.y * 0.5,
          z: currentSpeed.z * 0.5 + newSpeed.z * 0.5
        }
        lastDirectionChange = timestamp
      }
      
      // Small random variations
      if (Math.random() > 0.95) {
        currentSpeed.x += (Math.random() - 0.5) * 0.1
        currentSpeed.y += (Math.random() - 0.5) * 0.1
        currentSpeed.z += (Math.random() - 0.5) * 0.08
        
        const maxSpeed = 0.8
        currentSpeed.x = Math.max(Math.min(currentSpeed.x, maxSpeed), -maxSpeed)
        currentSpeed.y = Math.max(Math.min(currentSpeed.y, maxSpeed), -maxSpeed)
        currentSpeed.z = Math.max(Math.min(currentSpeed.z, 0.6), -0.6)
      }
      
      // Update position
      currentPosition.x += currentSpeed.x
      currentPosition.y += currentSpeed.y
      currentPosition.z += currentSpeed.z
      
      // Soft bounce
      const bounce = () => Math.random() * 0.1 + 0.9
      
      if (currentPosition.x <= 0) {
        currentPosition.x = 0
        currentSpeed.x = Math.abs(currentSpeed.x) * bounce()
      } else if (currentPosition.x >= 100) {
        currentPosition.x = 100
        currentSpeed.x = -Math.abs(currentSpeed.x) * bounce()
      }
      
      if (currentPosition.y <= 0) {
        currentPosition.y = 0
        currentSpeed.y = Math.abs(currentSpeed.y) * bounce()
      } else if (currentPosition.y >= 100) {
        currentPosition.y = 100
        currentSpeed.y = -Math.abs(currentSpeed.y) * bounce()
      }
      
      // Z-axis bounds (-50 to 50 for depth)
      if (currentPosition.z <= -50) {
        currentPosition.z = -50
        currentSpeed.z = Math.abs(currentSpeed.z) * bounce()
      } else if (currentPosition.z >= 50) {
        currentPosition.z = 50
        currentSpeed.z = -Math.abs(currentSpeed.z) * bounce()
      }
      
      setPosition({...currentPosition})
      setBubbleSpeed({...currentSpeed})
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationId)
  }, [])
  
  // Calculate scale based on z position (closer = bigger)
  const scale = 1 + (position.z / 100)
  const opacity = 0.6 + (position.z / 200)
  
  return (
    <div
      ref={bubbleRef}
      className="absolute rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/20 border border-white/30 flex items-center justify-center backdrop-blur-sm shadow-2xl"
      style={{
        width: `${tech.size}px`,
        height: `${tech.size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) translateZ(${position.z}px) scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out',
        boxShadow: `0 ${8 + position.z/5}px ${24 + position.z/2}px rgba(0,0,0,${0.2 + position.z/200})`
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
      <img
        src={tech.imageSrc}
        alt={tech.name}
        width={tech.size * 0.6}
        height={tech.size * 0.6}
        className="object-contain relative z-10"
      />
    </div>
  )
}

export default FloatingTechBubble;