// Surface Area and Volume of a Box

  const getSize = (width, height, depth) => {
  const area = (width * depth + height * depth + width * height) * 2
  const volume = (width * height * depth)
  return [area, volume]
}
