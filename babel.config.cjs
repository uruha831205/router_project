module.exports = (api) => {
  // 設置緩存機制
  api.cache(true); // 將 Babel 的結果緩存起來，提高重複構建的性能

  const presets = [
    "@babel/preset-env", // 轉譯最新的 JavaScript 語法
  ];

  return {
    presets,
  };
};
