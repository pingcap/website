import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

const BaiduMap = () => {
  const mapStyle = {
    width: '100%',
    height: '25.12rem',
    border: '#ccc solid 1px',
  }

  useEffect(() => {
    const mapScript = document.getElementById('baidu-map-lib')
    mapScript.addEventListener('load', () => {
      const initMap = () => {
        createMap() //创建地图
        setMapEvent() //设置地图事件
        addMapControl() //向地图添加控件
      }
      //创建地图函数：
      const createMap = () => {
        var map = new window.BMap.Map('dituContent') //在百度地图容器中创建一个地图
        var point = new window.BMap.Point(116.363568, 40.049343) //定义一个中心点坐标
        map.centerAndZoom(point, 17) //设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map //将map变量存储在全局
      }
      //地图事件设置函数：
      const setMapEvent = () => {
        window.map.enableDragging() //启用地图拖拽事件，默认启用(可不写)
        window.map.enableScrollWheelZoom() //启用地图滚轮放大缩小
        window.map.enableDoubleClickZoom() //启用鼠标双击放大，默认启用(可不写)
        window.map.enableKeyboard() //启用键盘上下左右键移动地图
      }
      //地图控件添加函数：
      const addMapControl = () => {
        //向地图中添加缩放控件
        var ctrl_nav = new window.BMap.NavigationControl({
          anchor: window.BMAP_ANCHOR_TOP_LEFT,
          type: window.BMAP_NAVIGATION_CONTROL_LARGE,
        })
        window.map.addControl(ctrl_nav)
        //向地图中添加缩略图控件
        var ctrl_ove = new window.BMap.OverviewMapControl({
          anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT,
          isOpen: 1,
        })
        window.map.addControl(ctrl_ove)
        //向地图中添加比例尺控件
        var ctrl_sca = new window.BMap.ScaleControl({
          anchor: window.BMAP_ANCHOR_BOTTOM_LEFT,
        })
        window.map.addControl(ctrl_sca)
      }
      initMap()
    })
  }, [])

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="http://api.map.baidu.com/getscript?v=1.1&ak=&services=true&t=20130716024058"
          id="baidu-map-lib"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="http://api.map.baidu.com/res/11/bmap.css"
        />
      </Helmet>
      <div id="dituContent" style={mapStyle}></div>
    </>
  )
}

export default BaiduMap
