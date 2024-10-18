import * as React from "react";
import { Table } from "@m-tools/antd-ext";

function RenderTable<T extends object>(props: {
  columns: { dataIndex: string; title: React.ReactNode }[];
  dataSource: T[];
}) {
  const [width, setWidth] = React.useState<number>(0);

  return (
    <Table
      style={{ maxWidth: width }}
      ref={(ele) => setWidth(ele?.nativeElement.parentElement?.offsetWidth || 0)}
      rowKey={(record, index) => index + "1"}
      columns={props.columns}
      dataSource={props.dataSource}
      scroll={{ x: true }}
      pagination={{
        hideOnSinglePage: true
      }}
    />
  );
}

export { RenderTable };
