import * as React from "react";
import { Table } from "antd";

function renderTable<T extends object>(data: {
  columns: { dataIndex: string; title: string }[];
  dataSource: T[];
}) {
  return (
    <Table
      rowKey={(record, index) => index + "1"}
      columns={data.columns}
      dataSource={data.dataSource}
      pagination={{
        hideOnSinglePage: true
      }}
    />
  );
}

export { renderTable };
