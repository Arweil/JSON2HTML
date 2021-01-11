import { typeConfigParamsFinal } from "./formatConfig";
import { checkType } from "../utils";
import * as React from "react";

export type typeViewDetail = {
  link: string;
  name: string;
  data: any;
};

/**
 * 格式化数据 整合数据为Table可以直接使用的数据结构 & 为配置的做映射处理
 */
function handleArray<T extends object>({
  dataSource,
  needColumnsName,
  config,
  currentKey,
  onViewDetail
}: {
  dataSource: T[];
  needColumnsName?: string[];
  config: typeConfigParamsFinal;
  currentKey: string;
  onViewDetail: (params: typeViewDetail) => void;
}): {
  columns: { dataIndex: string; title: string }[];
  dataSource: T[];
} {
  const col =
    needColumnsName || (dataSource.length ? Object.keys(dataSource[0]) : []);
  const columns = col.map((item) => {
    return {
      dataIndex: item,
      title: (config[item] && config[item].title) || item,
      render: (text: any, record: any, index: number) => {
        if (checkType(text) !== "Other") {
          return React.createElement(
            "a",
            {
              onClick: () => {
                onViewDetail({
                  link: `/${currentKey}${item}${index}`,
                  name: `${currentKey}[${item}][${index}]`,
                  data: text
                });
              }
            },
            "view detail"
          );
        } else {
          return text;
        }
      }
    };
  });

  return {
    columns,
    dataSource
  };
}

/**
 * 格式化数据 配置做映射处理
 */
function handleObject({
  dataSource,
  config
}: {
  dataSource: { [key: string]: any };
  config: typeConfigParamsFinal;
}): { [key: string]: any } {
  return Object.entries(dataSource).reduce<{ [key: string]: any }>(
    (prev, current, index) => {
      const [key, value] = current;
      const relKey = (config[key] && config[key].title) || key;
      return {
        ...prev,
        [relKey]: value
      };
    },
    {}
  );
}

export { handleArray, handleObject };
