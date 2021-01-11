import React, { useState } from "react";
import {
  parseData,
  formatConfig,
  typeViewDetail,
  typeConfigParamsFinal
} from "./handler";
import { Breadcrumb, BackTop, Card, Button, Modal, Input } from "antd";
import { formatJSONData } from "./utils";

export default function App() {
  const [breadcrumbData, setBreadcrumbData] = useState<typeViewDetail[]>([
    { link: "/", name: "初始数据", data: {} }
  ]);
  const [modalDataVisible, setModalDataVisible] = useState<boolean>(false);
  const [modalDataValue, setModalDataValue] = useState<string>("");
  const [modalConfigVisible, setModalConfigVisible] = useState<boolean>(false);
  const [modalConfigValue, setModalConfigValue] = useState<string>("");
  const [config, setConfig] = useState<typeConfigParamsFinal>({});

  function pushBreadcrumbData(newData: typeViewDetail) {
    setBreadcrumbData([...breadcrumbData, newData]);
  }

  function spliceBreadcrumbData(link: string) {
    const cloneData = [...breadcrumbData];
    const index = cloneData.findIndex((item) => item.link === link);
    if (index > -1) {
      setBreadcrumbData(cloneData.slice(0, index + 1));
    }
  }

  return (
    <div style={{ padding: "10px 20px" }}>
      <Breadcrumb style={{ marginBottom: 10 }}>
        {breadcrumbData.map((item) => {
          return (
            <Breadcrumb.Item key={item.name}>
              <a
                onClick={() => {
                  spliceBreadcrumbData(item.link);
                }}
              >
                {item.name}
              </a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>

      <Card
        title="数据展示"
        extra={
          <React.Fragment>
            <Button
              style={{ marginRight: 8 }}
              onClick={() => setModalDataVisible(true)}
            >
              添加数据
            </Button>
            <Button onClick={() => setModalConfigVisible(true)}>
              添加配置
            </Button>
          </React.Fragment>
        }
      >
        {parseData({
          data: breadcrumbData[breadcrumbData.length - 1].data,
          config,
          onViewDetail: pushBreadcrumbData
        })}
      </Card>

      <Modal
        title="数据"
        visible={modalDataVisible}
        onOk={() => {
          setBreadcrumbData([
            {
              link: "/",
              name: "初始数据",
              data: formatJSONData(modalDataValue)
            }
          ]);
          setModalDataVisible(false);
        }}
        onCancel={() => {
          setModalDataValue("");
          setModalDataVisible(false);
        }}
      >
        <Input.TextArea
          autoSize={{ minRows: 10, maxRows: 20 }}
          value={modalDataValue}
          onChange={(event) => setModalDataValue(event.target.value)}
        />
      </Modal>

      <Modal
        title="配置"
        visible={modalConfigVisible}
        onOk={() => {
          setConfig(formatConfig(formatJSONData(modalConfigValue)));
          setModalConfigVisible(false);
        }}
        onCancel={() => {
          setModalConfigValue("");
          setModalConfigVisible(false);
        }}
      >
        <Input.TextArea
          autoSize={{ minRows: 10, maxRows: 20 }}
          value={modalConfigValue}
          onChange={(event) => setModalConfigValue(event.target.value)}
        />
      </Modal>
      <BackTop />
    </div>
  );
}
