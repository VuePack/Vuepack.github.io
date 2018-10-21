/* eslint-disable */
import React from 'react'
import { Chart, Tooltip, Coord, View, Polygon, Point } from 'viser-react'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

import './index.less'

import geoData from '../../assets/json/worldGeo.json'
import travelData from '../../assets/json/map-1.json'
const DataSet = require('@antv/data-set')

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<p style="text-align:left;">{value}</p>',
  g2Tooltip: {
    top: 0
  }
}

const scale = [
  {
    dataKey: 'x',
    sync: true,
    nice: false
  },
  {
    dataKey: 'y',
    sync: true,
    nice: false
  }
]

class Content extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
  }

  static defaultProps = {
    className: 'content4'
  }

  state = {
    geoData: {},
    data: []
  }

  componentDidMount() {
    const dv = new DataSet.View()
      .source(geoData, {
        type: 'GeoJSON'
      })
      .transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY']
      })

    const userData = new DataSet.View().source(travelData).transform({
      type: 'map',
      callback: obj => {
        const projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator')
        obj.x = projectedCoord[0]
        obj.y = projectedCoord[1]
        obj.deaths = obj.deaths * 1
        obj.magnitude = obj.magnitude * 1
        return obj
      }
    })
    this.setState({ geoData: dv, data: userData })
  }

  render() {
    const props = { ...this.props }
    const isMobile = props.isMobile
    delete props.isMobile

    const { geoData, data } = this.state

    return (
      <main {...props} className="content-wrapper content4-wrapper">
        <OverPack className={`content ${props.className}`}>
          <QueueAnim leaveReverse delay={200} key="div">
            <Chart forceFit height={window.innerHeight} scale={scale}>
              <Coord type="rect" direction="TL" />
              <Tooltip {...tooltipOpts} />
              <View data={geoData} scale={scale}>
                <Polygon
                  position="x*y"
                  style={{
                    fill: '#f9f9f9',
                    stroke: '#fff',
                    lineWidth: 0.5,
                    fillOpacity: 0.85
                  }}
                  tooltip={false}
                />
              </View>
              <View data={data}>
                <Point
                  position="x*y"
                  size={['date', [3, 3]]}
                  opacity={0.4}
                  color="#f22"
                  tooltip="title*date"
                  shape="circle"
                />
              </View>
            </Chart>
          </QueueAnim>
        </OverPack>
      </main>
    )
  }
}

export default Content
