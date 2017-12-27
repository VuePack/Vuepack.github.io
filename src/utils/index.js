/*
 * @Author: Leon
 * @Date: 2017-02-19  13:49:45
 * @Last Modified by: Leon
 * @Last Modified time: 2017-12-27 23:33:37
 */

/**
 * 获取markdown title
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTitle (title) {
  return title.replace(/\.md$/, '')
              .replace(/\[(.*?)\]/, '')
              .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
}

/**
 * 获取markdown 日期
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyDate (title) {
  return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
}

/**
 * 获取markdown 分类
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTag (title) {
  return title.match(/\[(.*?)\]/g).toString()
              .replace(/\[/, '')
              .replace(/\]/, '')
}
