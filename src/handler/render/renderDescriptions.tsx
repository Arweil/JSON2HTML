import * as React from "react";
import { Descriptions } from "antd";
import { parseData } from "../parseData";
import { checkType } from "../../utils";
import { typeConfigParamsFinal } from "../formatConfig";
import { typeViewDetail } from "../makeRenderData";

function RenderDescriptions(props: {
  data: { [key: string]: any };
  config: typeConfigParamsFinal;
  onViewDetail: (params: typeViewDetail) => void;
}) {
  const { data, config, onViewDetail } = props;
  return (
    <Descriptions bordered>
      {Object.entries(data).map(([key, value]) => {
        if (checkType(value) !== "Other") {
          const _value = Object.values(config).find((value) => {
            return value.title === key;
          });
          return (
            <Descriptions.Item
              span={24}
              label={<span style={{ whiteSpace: 'nowrap' }}>{key}</span>}
            >
              {parseData({
                data: value,
                config,
                needColumnsName: _value && _value.columns,
                currentKey: key,
                onViewDetail
              })}
            </Descriptions.Item>
          );
        } else {
          return (
            <Descriptions.Item
              span={24}
              label={<span style={{ whiteSpace: 'nowrap' }}>{key}</span>}
            >
              {value}
            </Descriptions.Item>
          );
        }
      })}
    </Descriptions>
  );
}

export { RenderDescriptions };
