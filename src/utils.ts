/**
 * 校验参数是否为数组类型
 * @param params 需要校验的参数
 * @returns boolean
 */
function isArray(params: any): boolean {
  return Object.prototype.toString.call(params) === "[object Array]";
}

/**
 * 校验参数是否为对象类型
 * @param params 需要校验的参数
 * @returns boolean
 */
function isObject(params: any): boolean {
  return Object.prototype.toString.call(params) === "[object Object]";
}

/**
 * 校验参数类型
 * @param params 需要校验的参数
 * @returns "Array" | "Object" | "Other"
 */
function checkType(params: any): "Array" | "Object" | "Other" {
  if (isArray(params)) {
    return "Array";
  } else if (isObject(params)) {
    return "Object";
  } else {
    return "Other";
  }
}

/**
 * 把TextArea中的数据格式化为一个JSON对象
 * @param str
 */
export function formatJSONData(str: string): { [key: string]: any } {
  if (!str) {
    return {};
  }

  let source = str.replace(/\n|\s/g, "");
  let _source: { [key: string]: any } = {};
  try {
    _source = JSON.parse(source);
  } catch (ex) {
    try {
      _source = new Function("return " + source)();
    } catch (ex) {
      _source = {};
    }
  }

  return _source;
}

export { isArray, isObject, checkType };
