function requireAll(requireContext) {
    return requireContext.keys().map(item => {
        let arr = item.split('/');
        let svgName = arr[arr.length-1].split('.')[0];
        requireContext(item);
        return svgName;
    });
  }
  // requires and returns all modules that match
  
  var modules = requireAll(require.context(".", false, /^\.\/.*\.svg$/));
  
  // is an array containing all the matching modules
  export default modules;