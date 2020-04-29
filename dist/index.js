/*!
 * sadrix-vue-color v1.0.0
 * (c) sadrix
 * Released under the MIT License.
 */
'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var data = {
  // amber
  "amber-50": "#FFF8E1",
  "amber-100": "#FFECB3",
  "amber-200": "#FFE082",
  "amber-300": "#FFD54F",
  "amber-400": "#FFCA28",
  "amber-500": "#FFC107",
  "amber-600": "#FFB300",
  "amber-700": "#FFA000",
  "amber-800": "#FF8F00",
  "amber-900": "#FF6F00",
  "amber-a-100": "#FFE57F",
  "amber-a-200": "#FFD740",
  "amber-a-400": "#FFC400",
  "amber-a-700": "#FFAB00",
  // blue-gray
  "blue-gray-50": "#ECEFF1",
  "blue-gray-100": "#CFD8DC",
  "blue-gray-200": "#B0BEC5",
  "blue-gray-300": "#90A4AE",
  "blue-gray-400": "#78909C",
  "blue-gray-500": "#607D8B",
  "blue-gray-600": "#546E7A",
  "blue-gray-700": "#455A64",
  "blue-gray-800": "#37474F",
  "blue-gray-900": "#263238",
  // blue
  "blue-50": "#E3F2FD",
  "blue-100": "#BBDEFB",
  "blue-200": "#90CAF9",
  "blue-300": "#64B5F6",
  "blue-400": "#42A5F5",
  "blue-500": "#2196F3",
  "blue-600": "#1E88E5",
  "blue-700": "#1976D2",
  "blue-800": "#1565C0",
  "blue-900": "#0D47A1",
  "blue-a-100": "#82B1FF",
  "blue-a-200": "#448AFF",
  "blue-a-400": "#2979FF",
  "blue-a-700": "#2962FF",
  // deep-orange
  "deep-orange-50": "#FBE9E7",
  "deep-orange-100": "#FFCCBC",
  "deep-orange-200": "#FFAB91",
  "deep-orange-300": "#FF8A65",
  "deep-orange-400": "#FF7043",
  "deep-orange-500": "#FF5722",
  "deep-orange-600": "#F4511E",
  "deep-orange-700": "#E64A19",
  "deep-orange-800": "#D84315",
  "deep-orange-900": "#BF360C",
  "deep-orange-a-100": "#FF9E80",
  "deep-orange-a-200": "#FF6E40",
  "deep-orange-a-400": "#FF3D00",
  "deep-orange-a-700": "#DD2C00",
  // deep-purple
  "deep-purple-50": "#EDE7F6",
  "deep-purple-100": "#D1C4E9",
  "deep-purple-200": "#B39DDB",
  "deep-purple-300": "#9575CD",
  "deep-purple-400": "#7E57C2",
  "deep-purple-500": "#673AB7",
  "deep-purple-600": "#5E35B1",
  "deep-purple-700": "#512DA8",
  "deep-purple-800": "#4527A0",
  "deep-purple-900": "#311B92",
  "deep-purple-a-100": "#B388FF",
  "deep-purple-a-200": "#7C4DFF",
  "deep-purple-a-400": "#651FFF",
  "deep-purple-a-700": "#6200EA",
  // gray
  "gray-50": "#fafafa",
  "gray-100": "#F5F5F5",
  "gray-200": "#EEEEEE",
  "gray-300": "#E0E0E0",
  "gray-400": "#BDBDBD",
  "gray-500": "#9E9E9E",
  "gray-600": "#757575",
  "gray-700": "#616161",
  "gray-800": "#424242",
  "gray-900": "#212121",
  // green
  "green-50": "#E8F5E9",
  "green-100": "#C8E6C9",
  "green-200": "#A5D6A7",
  "green-300": "#81C784",
  "green-400": "#66BB6A",
  "green-500": "#4CAF50",
  "green-600": "#43A047",
  "green-700": "#388E3C",
  "green-800": "#2E7D32",
  "green-900": "#1B5E20",
  "green-a-100": "#B9F6CA",
  "green-a-200": "#69F0AE",
  "green-a-400": "#00E676",
  "green-a-700": "#00C853",
  // indigo
  "indigo-50": "#E8EAF6",
  "indigo-100": "#C5CAE9",
  "indigo-200": "#9FA8DA",
  "indigo-300": "#7986CB",
  "indigo-400": "#5C6BC0",
  "indigo-500": "#3F51B5",
  "indigo-600": "#3949AB",
  "indigo-700": "#303F9F",
  "indigo-800": "#283593",
  "indigo-900": "#1A237E",
  "indigo-a-100": "#8C9EFF",
  "indigo-a-200": "#536DFE",
  "indigo-a-400": "#3D5AFE",
  "indigo-a-700": "#304FFE",
  // light-green
  "light-green-50": "#F1F8E9",
  "light-green-100": "#DCEDC8",
  "light-green-200": "#C5E1A5",
  "light-green-300": "#AED581",
  "light-green-400": "#9CCC65",
  "light-green-500": "#8BC34A",
  "light-green-600": "#7CB342",
  "light-green-700": "#689F38",
  "light-green-800": "#558B2F",
  "light-green-900": "#33691E",
  "light-green-a-100": "#CCFF90",
  "light-green-a-200": "#B2FF59",
  "light-green-a-400": "#76FF03",
  "light-green-a-700": "#64DD17",
  // midnight-blue
  "midnight-blue-50": "#e6e9ee",
  "midnight-blue-100": "#c1c9d4",
  "midnight-blue-200": "#98a5b7",
  "midnight-blue-300": "#6f809a",
  "midnight-blue-400": "#506584",
  "midnight-blue-500": "#314a6e",
  "midnight-blue-600": "#2c4366",
  "midnight-blue-700": "#253a5b",
  "midnight-blue-800": "#1f3251",
  "midnight-blue-900": "#13223f",
  "midnight-blue-a-100": "#7ca5ff",
  "midnight-blue-a-200": "#4983ff",
  "midnight-blue-a-400": "#1660ff",
  "midnight-blue-a-700": "#004ffc",
  // orange
  "orange-50": "#FFF3E0",
  "orange-100": "#FFE0B2",
  "orange-200": "#FFCC80",
  "orange-300": "#FFB74D",
  "orange-400": "#FFA726",
  "orange-500": "#FF9800",
  "orange-600": "#FB8C00",
  "orange-700": "#F57C00",
  "orange-800": "#EF6C00",
  "orange-900": "#E65100",
  "orange-a-100": "#FFD180",
  "orange-a-200": "#FFAB40",
  "orange-a-400": "#FF9100",
  "orange-a-700": "#FF6D00",
  // purple
  "purple-50": "#F3E5F5",
  "purple-100": "#E1BEE7",
  "purple-200": "#CE93D8",
  "purple-300": "#BA68C8",
  "purple-400": "#AB47BC",
  "purple-500": "#9C27B0",
  "purple-600": "#8E24AA",
  "purple-700": "#7B1FA2",
  "purple-800": "#6A1B9A",
  "purple-900": "#4A148C",
  "purple-a-100": "#EA80FC",
  "purple-a-200": "#E040FB",
  "purple-a-400": "#D500F9",
  "purple-a-700": "#AA00FF",
  // red
  "red-50": "#FFEBEE",
  "red-100": "#FFCDD2",
  "red-200": "#EF9A9A",
  "red-300": "#E57373",
  "red-400": "#EF5350",
  "red-500": "#F44336",
  "red-600": "#E53935",
  "red-700": "#D32F2F",
  "red-800": "#C62828",
  "red-900": "#B71C1C",
  "red-a-100": "#FF8A80",
  "red-a-200": "#FF5252",
  "red-a-400": "#FF1744",
  "red-a-700": "#D50000",
  // yellow
  "yellow-50": "#FFFDE7",
  "yellow-100": "#FFF9C4",
  "yellow-200": "#FFF59D",
  "yellow-300": "#FFF176",
  "yellow-400": "#FFEE58",
  "yellow-500": "#FFEB3B",
  "yellow-600": "#FDD835",
  "yellow-700": "#FBC02D",
  "yellow-800": "#F9A825",
  "yellow-900": "#F57F17",
  "yellow-a-100": "#FFFF8D",
  "yellow-a-200": "#FFFF00",
  "yellow-a-400": "#FFEA00",
  "yellow-a-700": "#FFD600"
};

var SadrixVueColorMixin = (function (defaultColor, customColors) {
  return {
    methods: {
      vueColor: function vueColor(name) {
        var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var hex = defaultColor;
        var colors = Object.assign(data, customColors);
        if (colors.hasOwnProperty(name)) hex = data[name];
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        var a = parseFloat(opacity);
        if (opacity > 1) a = 1;else if (opacity < 0) a = 0;
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      }
    }
  };
});

var index = {
  install: function install(Vue, options) {
    var defaultColor = '#000000';
    var customColors = {};

    if (_typeof(options) == 'object') {
      if (options.hasOwnProperty('defaultColor')) if (typeof options.defaultColor == 'string') defaultColor = options.defaultColor;else console.warn('[sadrix-vue-color]', 'defaultColor option should be a [string] of your colors. You pass [' + _typeof(options.customColors) + ']');

      if (options.hasOwnProperty('customColors')) {
        if (_typeof(options.customColors) == 'object') customColors = options.customColors;else console.warn('[sadrix-vue-color]', 'customColors option should be an [object] of your colors. You pass [' + _typeof(options.customColors) + ']');
      }
    }

    Vue.mixin(SadrixVueColorMixin(defaultColor, customColors));
  }
};

module.exports = index;
