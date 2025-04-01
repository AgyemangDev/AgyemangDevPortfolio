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
        x: (Math.random() - 0.5) * 0.7, // slightly higher speed range
        y: (Math.random() - 0.5) * 0.7
      }
    }
    
    const animate = (timestamp) => {
      // Random direction changes
      if (timestamp - lastDirectionChange > Math.random() * 4000 + 2000) { // Change direction every 2-6 seconds
        // Apply small random adjustments to current speed instead of completely new speeds
        const newSpeed = getRandomSpeed()
        currentSpeed = {
          x: currentSpeed.x * 0.5 + newSpeed.x * 0.5, // Blend old and new speeds
          y: currentSpeed.y * 0.5 + newSpeed.y * 0.5
        }
        lastDirectionChange = timestamp
      }
      
      // Add small random variations to create more organic movement
      if (Math.random() > 0.95) { // 5% chance each frame
        currentSpeed.x += (Math.random() - 0.5) * 0.1
        currentSpeed.y += (Math.random() - 0.5) * 0.1
        
        // Limit max speed to prevent extremely fast movement
        const maxSpeed = 0.8
        currentSpeed.x = Math.max(Math.min(currentSpeed.x, maxSpeed), -maxSpeed)
        currentSpeed.y = Math.max(Math.min(currentSpeed.y, maxSpeed), -maxSpeed)
      }
      
      // Update position
      currentPosition.x += currentSpeed.x
      currentPosition.y += currentSpeed.y
      
      // Soft bounce off walls with randomness
      const bounce = () => Math.random() * 0.1 + 0.9 // 0.9-1.0 bounce factor
      
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
      
      // Apply updated values
      setPosition({...currentPosition})
      setBubbleSpeed({...currentSpeed})
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationId)
  }, [])
  
  // Add subtle rotation for more visual interest
  const rotationStyle = {
    transform: `rotate(${Math.sin(Date.now() * 0.001) * 10}deg)`
  }
  
  return (
    <div
      ref={bubbleRef}
      className="absolute rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center overflow-hidden transition-all duration-300"
      style={{
        width: `${tech.size}px`,
        height: `${tech.size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <img
        src={tech.imageSrc}
        alt={tech.name}
        width={tech.size * 0.6}
        height={tech.size * 0.6}
        className="object-contain"
        style={rotationStyle}
      />
    </div>
  )
}

export default FloatingTechBubble