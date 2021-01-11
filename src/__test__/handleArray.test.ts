import { handleArray } from "../handler/makeRenderData";

describe("handleArrayTest", () => {
  test("A", () => {
    const data = handleArray({
      dataSource: [],
      needColumnsName: [],
      config: {}
    });

    expect(data).toEqual({
      columns: [],
      dataSource: []
    });
  });

  test("B", () => {
    const data = handleArray({
      dataSource: [
        { name: 1, age: 2, tele: 3 },
        { name: 1, age: 2, tele: 3 }
      ],
      needColumnsName: ["name", "age"],
      config: {
        name: {
          title: "姓名"
        },
        age: {
          title: "年龄"
        }
      }
    });

    expect(data).toEqual({
      columns: [
        {
          dataIndex: "name",
          title: "姓名"
        },
        {
          dataIndex: "age",
          title: "年龄"
        }
      ],
      dataSource: [
        { name: 1, age: 2, tele: 3 },
        { name: 1, age: 2, tele: 3 }
      ]
    });
  });
});
