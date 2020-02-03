module.exports = {
  "env": {
    browser: true,
    es6: true
  },
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  "root": true,
  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "modules": true
    }
  },
  "extends": [
    "plugin:vue/recommended"
  ],
  "rules": {
    "quotes": [1, "double"],
    "no-console": "off",
    "semi": [
      "error",
      "always" // 分号
    ],
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明
    "no-undef": 0, // 可以 有未定义的变量
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    "complexity": [1, 10], // 循环复杂度
    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数
    // 代码风格
    "no-else-return": 1, // 如果if语句里面有return,后面不能跟else语句
    "no-multi-spaces": 1, // 不能用多余的空格
    "key-spacing": [1, { // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }]
  }
};
