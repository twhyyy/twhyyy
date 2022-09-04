export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxc84bdd767e5fbdc4",

  // 公众号APP_SECRET
  APP_SECRET: "541cc654a5ffd38079f170b640b7b5ca",
  // 模板消息id
  TEMPLATE_ID:"	IF1k3G4Od_sWehjXManbEg-F7j1fVvwNayFwzdZWxYM",
  //
  USERS：["orI0y59QXTeXy6f_1LtVzBhDkaao","orI0y5xSq2oMpHLboQWMkCcXEkt4"],

    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "福建",
  // 所在城市
  CITY: "厦门",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“恋爱纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "莹姐", "year": "2023", "date": "07-14"},
    {"type": "生日", "name": "文海", "year": "2023", "date": "07-15"},
    {"type": "节日", "name": "恋爱纪念日", "year": "2022", "date": "08-28"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 3,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-08-28"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "以前喜欢人是需要过程的，直到遇见了莹姐。",
      "是微风，是晚霞，是心跳不止，是无可替代的莹姐。",
      "所有的为时已晚都是恰逢其时。",
      "我喜欢人的样子，是莹姐一笔一划刻出来的呀。",
    ]},
  ],



}
