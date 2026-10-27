// Shared, non-reactive flight state: written by Rocket every frame, read by Galaxy's canvas loop.
export const flight = {
  /** Smoothed scroll speed in px/frame (positive = forward / down the page). */
  velocity: 0,
  /** Horizontal steering, -1 (left) .. 1 (right). */
  steer: 0,
};
