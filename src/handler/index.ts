/**
 * 1. 能够替换JSON数据源的字段名
 * 2. 能够根据提供的字段名配置进行字段筛选
 * 3. 如果不同层级的字段名相同，那么以配置的第一个项为准
 * 4. JSON数据源格式化为HTML结构
 * 5. HTML 数据结构的折叠展示
 * 6. 参考的映射数据结构：{ [字段名]: [重命名字段名] }
 *    exp: { name: '姓名' }
 */
import { parseData } from "./parseData";
import { formatConfig, typeConfigParamsFinal } from "./formatConfig";
import { typeViewDetail } from "./makeRenderData";

export { parseData, formatConfig, typeConfigParamsFinal, typeViewDetail };
