import { isObject } from "../utils";

export type typeConfigParamsSimple = { [key: string]: string };
export type typeConfigParamsFinal = {
  [key: string]: {
    title: string; // 当前字段的映射名称
    columns?: string[]; // 如果是数组，需要的列名[key]
  };
};

/**
 * 格式化配置格式，统一为 typeConfigParamsFinal 格式
 * @param config 配置格式，支持两种 typeConfigParamsSimple | typeConfigParamsFinal
 * @returns typeConfigParamsFinal
 */
function formatConfig(
  config: typeConfigParamsSimple | typeConfigParamsFinal
): typeConfigParamsFinal {
  return Object.entries(config).reduce((prev, [key, data]) => {
    return {
      ...prev,
      [key]: isObject(data) ? data : { title: data }
    };
  }, {});
}

export { formatConfig };
