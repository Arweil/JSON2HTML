import { checkType } from "../utils";
import { handleArray, handleObject, typeViewDetail } from "./makeRenderData";
import { renderTable } from "./render/renderTable";
import { renderDescriptions } from "./render/renderDescriptions";
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

        return renderTable(formatedData);
      } else {
        return "(Empty List)";
      }
    case "Object":
      const formatedData = handleObject({
        dataSource: data,
        config
      });

      return renderDescriptions({
        data: formatedData,
        config,
        onViewDetail
      });
    default:
      return data;
  }
}

export { parseData };
