const { override } =  require("customize-cra");
const overrideConfig = () => (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  return config
}
module.exports = override(overrideConfig())