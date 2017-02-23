/*
 * @Author: Leon
 * @Date: 2017-02-19 10:22:40
 * @Last Modified by: Leon
 * @Last Modified time: 2017-02-23 17:32:30
 */

import axios from 'axios'
import 'es6-promise/auto'

import conf from 'config/conf.json'
import { onlyTitle, onlyDate, onlyTag } from 'utils'

/**
 * Format GitHub Api url for content list
 * @returns {string}
 */
function getListUrl () {
  // @see https://developer.github.com/v3/repos/contents/#get-contents
  // @example https://api.github.com/repos/lizhoukai/blogging/contents/_posts
  let url = `https://api.github.com/repos/${conf.repo}/contents/`
  if (conf.path) url += conf.path
  if (conf.branch) url += `?ref=${conf.branch}`
  return url
}

/**
 * Format GitHub Api url for file content
 * @param {string} hash
 * @returns {string}
 */
function getPostUrl (hash) {
  // @see https://developer.github.com/v3/git/blobs/#get-a-blob
  return `https://api.github.com/repos/${conf.repo}/git/blobs/${hash}`
}

export default {
  filterByJSON(arr) {

  },
  getList () {
    /**
     * 获取sessionStorage
     */
    if (window.sessionStorage && window.sessionStorage.hasOwnProperty('list') && window.sessionStorage.hasOwnProperty('tag')) {
      let promiseList = Promise.resolve(JSON.parse(window.sessionStorage.getItem('list')))
      let promiseTag = Promise.resolve(JSON.parse(window.sessionStorage.getItem('tag')))
      return Promise.all([promiseList, promiseTag])
    } else {
      return axios.get(getListUrl())
        .then(res => {
          let list = res.data.map(({name, sha, size}) => ({
            title: onlyTitle(name),
            date: onlyDate(name),
            tag: onlyTag(name),
            sha,
            size
          }))

          /**
           * new set() 对象遍历去重
           */
          let tag = new Set(res.data.map((arr) => (
            JSON.stringify({
              name: onlyTag(arr.name),
              default: 0
            })
          )))

          tag = Array.from(tag).map(item => JSON.parse(item))
          tag.unshift({name: '全部标签', default: 1})

          window.sessionStorage && window.sessionStorage.setItem('list', JSON.stringify(list))
          window.sessionStorage && window.sessionStorage.setItem('tag', JSON.stringify(tag))
          return new Array(list, tag)
        })
    }
  },
  getDetail (hash) {
    const httpOpts = {
      // https://developer.github.com/v3/media/#raw-1
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    const cacheKey = 'post.' + hash

    if (window.sessionStorage && window.sessionStorage.hasOwnProperty(cacheKey)) {
      return Promise.resolve(JSON.parse(window.sessionStorage.getItem(cacheKey)))
    } else {
      return axios.get(getPostUrl(hash), httpOpts)
        .then(res => res.data)
        .then(content => {
          window.sessionStorage && window.sessionStorage.setItem(cacheKey, JSON.stringify(content))
          return content
        })
    }
  }
}
