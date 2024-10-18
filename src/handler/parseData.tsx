import React from 'react';
import { checkType } from "../utils";
import { handleArray, handleObject, typeViewDetail } from "./makeRenderData";
import { RenderTable } from "./render/renderTable";
import { RenderDescriptions } from "./render/renderDescriptions";
import { typeConfigParamsFinal } from "./formatConfig";

function parseData({
  data,
  needColumnsName,
  config = {},
  currentKey,
  onViewDetail
}: {
  data: any;
  needColumnsName?: string[];
  config: typeConfigParamsFinal;
  currentKey?: string;
  onViewDetail: (params: typeViewDetail) => void;
}) {
  switch (checkType(data)) {
    case "Array":
      if (data.length) {
        const formatedData = handleArray({
          dataSource: data,
          needColumnsName,
          config,
          onViewDetail,
          currentKey: currentKey || ""
        });

        return <RenderTable {...formatedData} />;
      } else {
        return "(Empty List)";
      }
    case "Object":
      if (Object.keys(data).length === 0) {
        return '(Empty Object)';
      }

      const formatedData = handleObject({
        dataSource: data,
        config
      });

      return (
        <RenderDescriptions
          data={formatedData}
          config={config}
          onViewDetail={onViewDetail}
        />
      );
    default:
      return data;
  }
}

export { parseData };
