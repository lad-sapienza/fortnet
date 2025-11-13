const parseStringTemplate = (str, obj) => {
  let parts = str.split(/\$\{(?!\d)[\wæøåÆØÅ]*\}/)
  let args = str.match(/[^{}]+(?=})/g) || []
  let parameters = args.map(argument => {
    let value = obj[argument] || (obj[argument] === undefined ? "" : obj[argument])
    
    // Handle arrays by converting to title case and joining with spaces
    if (Array.isArray(value)) {
      return value.map(item => {
        const str = String(item)
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      }).join(', ')
    }
    
    // Handle stringified arrays like "[item1, item2]" or '["item1", "item2"]' by removing brackets and quotes
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      const items = value.slice(1, -1).split(',').map(item => {
        // Remove surrounding quotes and whitespace
        return item.trim().replace(/^["']|["']$/g, '')
      })
      return items.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      }).join(', ')
    }
    
    return value
  })
  return String.raw({ raw: parts }, ...parameters)
}

export default parseStringTemplate;