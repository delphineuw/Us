const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  // If you want to add a new alias to the config.
  config.resolve.alias = {
    'react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry',
    'react/lib/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry',
    'native-base' : 'native-base-web',
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
    'react-native$': 'react-native-web',
  }

  config.resolve.alias['react/lib/ReactNativePropRegistry'] = 'react-native-web/dist/modules/ReactNativePropRegistry';


  return config;
};
