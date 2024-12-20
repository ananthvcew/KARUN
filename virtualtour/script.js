(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init()",
 "downloadEnabled": false,
 "data": {
  "name": "Player445"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "children": [
  "this.MainViewer"
 ],
 "overflow": "visible",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.99,
  "pitch": -1.97
 },
 "id": "panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.18,
  "pitch": -1.24
 },
 "id": "panorama_DBB2209A_C745_9115_41C0_285097579EF7_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.18,
  "pitch": -3.29
 },
 "id": "panorama_C8303E69_C74F_7137_41E3_77860354A5A8_camera"
},
{
 "thumbnailUrl": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_082510_20240816131235",
 "id": "panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DF755B3D_C742_970F_41E7_CE4187577F01",
  "this.overlay_DF75AB3D_C742_970F_41C3_838F407E049D",
  "this.overlay_DF75BB3D_C742_970F_41E0_FE335B5045AE",
  "this.overlay_DF758B3D_C742_970F_41E6_C90C3B40A446",
  "this.overlay_DF759B3D_C742_970F_41D7_4D2DE4593C6B",
  "this.overlay_DF75EB3D_C742_970F_41C1_A1F9A1349022",
  "this.overlay_DF75FB3D_C742_970F_41E3_FC09BA4C6A75",
  "this.overlay_DF75CB3D_C742_970F_41E6_B1C2DDBAC516",
  "this.overlay_DF75DB3D_C742_970F_41E0_24E15B1905EC",
  "this.overlay_DF742B3D_C742_970F_41B4_D0D04027AE14",
  "this.overlay_DF740B3D_C742_970F_41E5_CD0E82E27D4F",
  "this.overlay_D0F7FCCC_C745_910D_41B6_75B247BC47F0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_084642_20240816131235",
 "id": "panorama_DB93CAC6_C743_917D_41BC_0B65B954F613",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_t.jpg",
   "snapshots": [
    "this.snapshot_1369AF90_047D_B8D0_418B_6D4AE00C929B"
   ],
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DB93AAC6_C743_917D_41D8_0D3B5122D55C",
  "this.overlay_DB93BAC6_C743_917D_41DD_F0F7CCA23292",
  "this.overlay_DB939AC6_C743_917D_41E4_AABECC74F7F3",
  "this.overlay_DB937AC6_C743_917D_41C3_03A04C44130B",
  "this.overlay_DB935AC6_C743_917D_41D7_C50E7292ECFB",
  "this.overlay_DB932AC6_C743_917D_41BE_404CA79A0E19",
  "this.overlay_DB92AAC6_C743_917D_41E7_DFBDD7726B5F",
  "this.overlay_DB926AC6_C743_917D_41E3_D6B5642C9624",
  "this.overlay_D0F45657_C746_911C_41C9_FB06515837A3"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_161417_20240816131235",
 "id": "panorama_D1714679_C745_7114_41C2_92A1AD42AA41",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D1713679_C745_7114_41E3_CFB6BCB4B389",
  "this.overlay_D1711679_C745_7114_41E0_D6D3A79D9BAF",
  "this.overlay_D171B679_C745_7114_41C7_7A305455F61A",
  "this.overlay_D171A679_C745_7114_41CA_E7D2D73E0305",
  "this.overlay_D1719679_C745_7114_41D1_736CB3A6A329",
  "this.overlay_D1718679_C745_7114_41E7_29ACECC92FE0",
  "this.overlay_D1707679_C745_7114_41E7_46C7A106F605",
  "this.overlay_D1704679_C745_7114_41E6_530D03EA757C",
  "this.overlay_D1700679_C745_7114_41D4_25ABE26F070C",
  "this.overlay_D170D679_C745_7114_41E8_871725178662",
  "this.overlay_D170C679_C745_7114_41B8_FDFF8F342C2E",
  "this.overlay_D1709679_C745_7114_41D9_79E01D38AC54",
  "this.overlay_D1710679_C745_7114_41E0_C646BB54C4AC",
  "this.overlay_D171F679_C745_7114_41E0_7B45C7CA57BB",
  "this.overlay_D171D679_C745_7114_41C8_30647072C6D7",
  "this.overlay_D171B679_C745_7114_41E0_959D61FCCCFE",
  "this.overlay_D171A679_C745_7114_41E7_BA6BDF087245",
  "this.overlay_D1719679_C745_7114_41D7_1B9229EC116D",
  "this.overlay_D1707679_C745_7114_41E1_7AB577BB6A7F",
  "this.overlay_D1706679_C745_7114_41C5_A29BF9476742",
  "this.overlay_D0EF471F_C742_BF0B_41E7_DDAE5F80C164"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_085306_20240816131235",
 "id": "panorama_DAD7387B_C742_910B_41E5_F241B7A59D43",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DAD7087B_C742_910B_41E4_89C694B03213",
  "this.overlay_DAD7687B_C742_910B_41DB_02C6421FE11E",
  "this.overlay_DAD7487B_C742_910B_41E3_F67F5E3BBD37",
  "this.overlay_DAD7587B_C742_910B_41E1_BF3DA60E41EB",
  "this.overlay_DAD7A87B_C742_910B_41C4_F7C7B87B15C0",
  "this.overlay_DAD7E87B_C742_910B_41DC_3DEFF0E97C69",
  "this.overlay_DAD7C87B_C742_910B_41B5_A4ED69247F55",
  "this.overlay_DAD6387B_C742_910B_41B1_E1536452748C",
  "this.overlay_DAD6587B_C742_910B_41D8_5DC5C6E7628F",
  "this.overlay_DAD6887B_C742_910B_41D0_204EF3ACA2B9",
  "this.overlay_DAD6987B_C742_910B_41E4_E7459E2F8D66",
  "this.overlay_DAD6C87B_C742_910B_41D6_1E4CD5C2EDDD",
  "this.overlay_DAD6D87B_C742_910B_41E4_98240C37D474",
  "this.overlay_DAD9387B_C742_910B_41DC_047F417F285A",
  "this.overlay_DAD9087B_C742_910B_41E3_6AA410B90944",
  "this.overlay_D0EBE623_C746_913B_41E8_06D98F2E38A4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.01,
  "pitch": 6.12
 },
 "id": "panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.71,
  "pitch": 5.78
 },
 "id": "panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 143.74,
  "pitch": -2.47
 },
 "id": "panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.13,
  "pitch": 1.33
 },
 "id": "panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_camera"
},
{
 "thumbnailUrl": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_084148_20240816131235",
 "id": "panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DC4FBE76_C743_F11D_41B9_48982A47E05C",
  "this.overlay_DC4FAE76_C743_F11D_41B0_A72E9BC4B055",
  "this.overlay_DC4F8E76_C743_F11D_41E0_74ABB0D4FC2D",
  "this.overlay_DC4FEE76_C743_F11D_41B9_795EB3CED4E5",
  "this.overlay_DC4FDE76_C743_F11D_41C0_84ADDDDEF61A",
  "this.overlay_DC4FCE76_C743_F11D_41DD_58DF655D5384",
  "this.overlay_D092FADF_C746_910B_41E8_161DC93DE7E0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_085859_20240816131235",
 "id": "panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D95A25B4_C742_931D_41D8_1B0BD65F7A3D",
  "this.overlay_D95A35B4_C742_931D_416F_8686D1FFC1A6",
  "this.overlay_D95A15B4_C742_931D_41E5_F250689614BB",
  "this.overlay_D95AE5B4_C742_931D_41BF_3F1038561D13",
  "this.overlay_D95AC5B4_C742_931D_41E3_A82262D5C6BD",
  "this.overlay_D95AA5B4_C742_931D_41C1_CAAA174751B0",
  "this.overlay_D95A85B4_C742_931D_41D6_A4C7306C3578",
  "this.overlay_D0F4145C_C746_B10D_41E3_9568B92A10FD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_090132_20240816131235",
 "id": "panorama_DBB2209A_C745_9115_41C0_285097579EF7",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DBB2109A_C745_9115_41CD_BECAD766CD09",
  "this.overlay_DBB2609A_C745_9115_41C0_3BF110A7C7C8",
  "this.overlay_DBB2709A_C745_9115_41B2_97499092FAF8",
  "this.overlay_DBB2509A_C745_9115_41E8_96C9E859B85A",
  "this.overlay_DBB5A09A_C745_9115_41E2_743DC55B8C94",
  "this.overlay_DBB5B09A_C745_9115_41E3_71038D521843",
  "this.overlay_DBB5809A_C745_9115_41D9_75486A6D5088",
  "this.overlay_DBB5909A_C745_9115_41E7_D58AA28ADC7B",
  "this.overlay_DBB2C09A_C745_9115_41D6_E6BFFDA1C1D7",
  "this.overlay_D0F4D13C_C746_930D_41CF_BE13CB1618EA"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.41,
  "pitch": 10.98
 },
 "id": "panorama_DA71D514_C742_931D_4147_A1C159C042D8_camera"
},
{
 "thumbnailUrl": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_160348_20240816130951",
 "id": "panorama_D699E355_C742_B71F_41E5_4AE38C62D69E",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D69A1355_C742_B71F_41E1_5F7456381DFE",
  "this.overlay_D69A0355_C742_B71F_41A8_B25660F92371",
  "this.overlay_D69A3355_C742_B71F_41E6_71D451CA720F",
  "this.overlay_D69A5355_C742_B71F_41D7_E59F54C40BBF",
  "this.overlay_D69A4355_C742_B71F_41BA_04BA9DBE1365",
  "this.overlay_D69A7355_C742_B71F_41B3_848AC3FB9E63",
  "this.overlay_D69A6355_C742_B71F_41D3_3951C6E0AA43",
  "this.overlay_D69A9355_C742_B71F_41CC_E3B5BD70EF80",
  "this.overlay_D69A8355_C742_B71F_41D2_FAF87F65887B",
  "this.overlay_D69AB355_C742_B71F_41D1_C9781BF93CD6",
  "this.overlay_D69AA355_C742_B71F_41E0_0A738511E264",
  "this.overlay_D69AC355_C742_B71F_41C5_EA69647FDE45",
  "this.overlay_D69AF355_C742_B71F_41BA_B6AD298A129F",
  "this.overlay_D0F4C4C3_C742_F174_41E5_D2EBE187F989"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.95,
  "pitch": 16.97
 },
 "id": "panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_camera"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_t.jpg",
 "overlays": [
  "this.overlay_3D7C4FF5_602B_57F0_41D2_38F442B2BF47",
  "this.overlay_383C2223_6029_C810_4199_E37E3D27DF2C",
  "this.overlay_72C7BC83_65FE_4E4A_41D8_95AC7E03C093",
  "this.overlay_64B8B84F_7018_92E6_41C7_DCDC9447DACB"
 ],
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "label": "DJI_20240815131403_0280_D",
 "id": "panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_090548_20240816131235",
 "id": "panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D9EE8597_C745_931B_41D2_6D0AC78C23D6",
  "this.overlay_D9EE9597_C745_931B_41DE_35C8E5AEB05C",
  "this.overlay_D9EE4597_C745_931B_41A7_1D0023895539",
  "this.overlay_D9EE7597_C745_931B_41C1_0A828DB81EF2",
  "this.overlay_D9EE2597_C745_931B_41D4_FFBDD7C7304D",
  "this.overlay_D991C597_C745_931B_41E3_99F95C5303F1",
  "this.overlay_D9918597_C745_931B_41D9_B4BCC20FEBD7",
  "this.overlay_D9919597_C745_931B_41D3_5B408C56971A",
  "this.overlay_D991B597_C745_931B_41DD_20865738B5F8",
  "this.overlay_D0F42D82_C746_93F5_41C1_0D73F697FBB3"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.49,
  "pitch": 2.12
 },
 "id": "panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.19,
  "pitch": 1.29
 },
 "id": "panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.54,
  "pitch": -0.05
 },
 "id": "panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_camera"
},
{
 "thumbnailUrl": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_t.jpg",
 "class": "Panorama",
 "label": "DJI_20240815092757_0247_D",
 "id": "panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E247EF8E_C359_4E7A_41E6_3D92493BBBEB",
  "this.overlay_E2463F8E_C359_4E7A_41C4_8953105F6BBB",
  "this.overlay_E2462F8E_C359_4E7A_41C4_AC8FE669A273",
  "this.overlay_E2461F8E_C359_4E7A_41DE_8266BC2D938C",
  "this.overlay_E2460F8E_C359_4E7A_4150_8C5900A3F7F5",
  "this.overlay_E2408F8E_C359_4E7A_41DE_CF3199AA7058",
  "this.overlay_E240FF8E_C359_4E7A_41E5_30C2D91547EE",
  "this.overlay_E240EF8E_C359_4E7A_41D3_E6BFA81F1CB4",
  "this.overlay_E240DF8E_C359_4E7A_41CD_419607110D5C",
  "this.overlay_E240CF8E_C359_4E7A_41E7_382BC4AC1261",
  "this.overlay_E2471F8E_C359_4E7A_41D9_069E2516623D",
  "this.overlay_E2470F8E_C359_4E7A_41CA_A94C9C19D3E8",
  "this.overlay_E2477F8E_C359_4E7A_41C0_0C9E1AFCD877",
  "this.overlay_E2475F8E_C359_4E7A_41E8_58EA329AD5B2",
  "this.overlay_E2474F8E_C359_4E7A_41D8_E63933377960",
  "this.overlay_E247BF8E_C359_4E7A_41AC_E840B126D2C1",
  "this.overlay_E2479F8E_C359_4E7A_41DF_026020AD2D8F",
  "this.overlay_E247EF8E_C359_4E7A_41E2_79B678BB8CEF",
  "this.overlay_E247CF8E_C359_4E7A_41E6_59ABFB073124",
  "this.overlay_E2463F8E_C359_4E7A_41DC_927A0ACF072C",
  "this.overlay_E2460F8E_C359_4E7A_41E4_47981FF14496",
  "this.overlay_E2467F8E_C359_4E7A_4199_F77E62E10F42",
  "this.overlay_E2465F8E_C359_4E7A_41C1_D21412895237",
  "this.overlay_E2464F8E_C359_4E7A_41E7_CA01B1F61AEE",
  "this.overlay_E246BF8E_C359_4E7A_41E0_EE9B95F47986",
  "this.overlay_E2469F8E_C359_4E7A_41DB_1C0DAC39CED9",
  "this.overlay_E2468F8E_C359_4E7A_41E1_65EC8C833118",
  "this.overlay_E246FF8E_C359_4E7A_41DD_9C9946A6D9A3",
  "this.overlay_E246DF8E_C359_4E7A_41DE_3297FC50FED3",
  "this.overlay_E246CF8E_C359_4E7A_41C3_CFB5CD1DE07E",
  "this.overlay_E2453F8E_C359_4E7A_41CA_D6D9CFD2805A",
  "this.overlay_E2451F8E_C359_4E7A_41D3_85F6F43F89BF",
  "this.overlay_D0F348AF_C743_910C_41E6_5F673A2BF48E"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB93CAC6_C743_917D_41BC_0B65B954F613"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09"
  }
 ],
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_t.jpg",
 "class": "Panorama",
 "label": "PIC_20240815_132911_20240816131235",
 "id": "panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D2951760_C746_BF35_41C2_D1C4CA9CCBFD",
  "this.overlay_D2953760_C746_BF35_41E6_A5EA519FA059"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.71,
  "pitch": 5.62
 },
 "id": "panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_camera"
},
{
 "thumbnailUrl": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_082121_20240816131235",
 "id": "panorama_DE14421A_C742_9115_41E6_1D855630620D",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE14821A_C742_9115_41D6_352D12609EE0",
  "this.overlay_DE14921A_C742_9115_41C2_6EFB97D068D4",
  "this.overlay_DE14B21A_C742_9115_41D6_BCE0E45788D6",
  "this.overlay_DE14E21A_C742_9115_41D8_993FF3F6508C",
  "this.overlay_DE17021A_C742_9115_41E5_3BD2B5F441CA",
  "this.overlay_DE17121A_C742_9115_41E3_2F6E2F1C2DA3",
  "this.overlay_DE17521A_C742_9115_41AA_C1BBC59D00A3",
  "this.overlay_DE17821A_C742_9115_41BA_2FBD1D9DD21B",
  "this.overlay_DE17A21A_C742_9115_41D3_F064B739089D",
  "this.overlay_DE17B21A_C742_9115_41E0_63E7DE1F3B1A",
  "this.overlay_DE17C21A_C742_9115_41E7_93F0097FFC3C",
  "this.overlay_DE17D21A_C742_9115_41E5_2C0D1C5C014A",
  "this.overlay_DE17F21A_C742_9115_41E0_70317369F828",
  "this.overlay_D0EEBA3E_C745_F10D_41E7_454AD061E90C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_160115_20240816130646 ",
 "id": "panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D7806B55_C74D_B71F_41DA_5A5867AAC5C0",
  "this.overlay_D78F9B55_C74D_B71F_41AC_EE3F38424A8C",
  "this.overlay_D78F8B55_C74D_B71F_41E4_AE62C26B0179",
  "this.overlay_D78FBB55_C74D_B71F_41D1_979F0EC22028",
  "this.overlay_D78FAB55_C74D_B71F_41DA_DCB3894C2E5C",
  "this.overlay_D78FDB55_C74D_B71F_41C2_0D1A79908CF5",
  "this.overlay_D78FCB55_C74D_B71F_41D0_C0B381D10D21",
  "this.overlay_D78FFB55_C74D_B71F_41E8_444FE5FDC837",
  "this.overlay_D78F1B55_C74D_B71F_41C9_D8BB4FF9A52E",
  "this.overlay_D78F0B55_C74D_B71F_41DE_F03CDF05F210",
  "this.overlay_D78F3B55_C74D_B71F_41E6_0C7A6450930A",
  "this.overlay_D78F9B55_C74D_B71F_41A3_41AFB05E32CE",
  "this.overlay_D78F8B55_C74D_B71F_41D2_FD60E60ABB77",
  "this.overlay_D0EB6B32_C742_9715_41E1_64CD3F9241F3"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_075419_20240816131235",
 "id": "panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D778640B_C74E_B10B_41CA_536F170D6F8F",
  "this.overlay_D778040B_C74E_B10B_41DD_CD07577677E6",
  "this.overlay_D778340B_C74E_B10B_41D2_F1D7DC1C7D1F",
  "this.overlay_D778240B_C74E_B10B_41D9_F9BB65FB738D",
  "this.overlay_D778C40B_C74E_B10B_41C9_B287425083AE",
  "this.overlay_D778E40B_C74E_B10B_41CE_BD38037CEFCF",
  "this.overlay_D778840B_C74E_B10B_41E0_C9E5B95F0E85",
  "this.overlay_D778B40B_C74E_B10B_41A8_50484D3AC884",
  "this.overlay_D707540B_C74E_B10B_41C7_2F8B25B5164B",
  "this.overlay_D707440B_C74E_B10B_41E6_B7478A692EE6",
  "this.overlay_D707640B_C74E_B10B_41D0_77EDCBC0F745",
  "this.overlay_D0F66074_C742_911D_41DC_F3B3FAC95CDD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.17,
  "pitch": 1.03
 },
 "id": "panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_camera"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_080941_20240816131235",
 "id": "panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D1BF80C0_C743_9175_41E6_056131E63FA2",
  "this.overlay_D1BFE0C0_C743_9175_41E0_724D2D6C7CBA",
  "this.overlay_D1BFF0C0_C743_9175_41E6_4C2E2AA67D27",
  "this.overlay_D1BFC0C0_C743_9175_41BB_05BB8F7FAC7D",
  "this.overlay_D1BFD0C0_C743_9175_41D9_75548E87FB37",
  "this.overlay_D1BF20C0_C743_9175_41D9_C24B9C5CA085",
  "this.overlay_D1BF30C0_C743_9175_41D0_B39B3B1D8403",
  "this.overlay_D1BF00C0_C743_9175_418B_28BA9A5D81E8",
  "this.overlay_D0E9A138_C745_9315_41E6_BEE17693D39F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_082749_20240816131235",
 "id": "panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DC18E806_C75D_90FD_41E6_ABBEA9394998",
  "this.overlay_DC18C806_C75D_90FD_41D4_657F63B70657",
  "this.overlay_DC18A806_C75D_90FD_41E5_746DB84F9CB5",
  "this.overlay_DC18B806_C75D_90FD_41E4_A39A10FFE6CF",
  "this.overlay_DC189806_C75D_90FD_41D1_ECEC64B4B6C3",
  "this.overlay_DC186806_C75D_90FD_41E8_2EEC834B2BC6",
  "this.overlay_DC184806_C75D_90FD_41E5_785154AC15C2",
  "this.overlay_DC180806_C75D_90FD_41E0_CC54E268F5B2",
  "this.overlay_DC1BE806_C75D_90FD_41BE_BF04796C238A",
  "this.overlay_DC1BF806_C75D_90FD_41BB_6AE23FB36BFF",
  "this.overlay_D0F7B352_C745_9715_41D8_2C15D523A6A7"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_165036_20240816131235",
 "id": "panorama_D0DBC8C8_C745_7175_41E7_228A0840F889",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D0DB98C8_C745_7175_41B2_1DC16BB56DC9",
  "this.overlay_D0DB88C8_C745_7175_41BB_A3D0B595242A",
  "this.overlay_D0DB68C8_C745_7175_41E5_3A56C8C2EA9F",
  "this.overlay_D0DB48C8_C745_7175_41CF_22035B12C546",
  "this.overlay_D0DB28C8_C745_7175_41C4_1BA95F166598",
  "this.overlay_D0DAC8C8_C745_7175_41E1_0A007E181010",
  "this.overlay_D0DAA8C8_C745_7175_41E8_C375A377B19A",
  "this.overlay_D0DA98C8_C745_7175_41E6_12B41D8E0448"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.18,
  "pitch": 5.84
 },
 "id": "panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_camera"
},
{
 "thumbnailUrl": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_074854_20240816131235",
 "id": "panorama_C8303E69_C74F_7137_41E3_77860354A5A8",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C8302E69_C74F_7137_41E6_1796ADC00AEA",
  "this.overlay_C8301E69_C74F_7137_41B2_53FAA6F5282C",
  "this.overlay_C8300E69_C74F_7137_41E3_CE7E76DD3430",
  "this.overlay_C831FE69_C74F_7137_41DF_CEC6BFE9CBDD",
  "this.overlay_C831EE69_C74F_7137_41DE_3A72E1C2C242",
  "this.overlay_C831CE69_C74F_7137_41E1_D01DD490C82D",
  "this.overlay_D860809A_C742_B115_41DA_79440BD0511E"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.58,
  "pitch": 1.9
 },
 "id": "panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_D0DBC8C8_C745_7175_41E7_228A0840F889",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_DB93CAC6_C743_917D_41BC_0B65B954F613",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DBB2209A_C745_9115_41C0_285097579EF7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)",
   "media": "this.panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_camera"
},
{
 "thumbnailUrl": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_084843_20240816131235",
 "id": "panorama_DA71D514_C742_931D_4147_A1C159C042D8",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB93CAC6_C743_917D_41BC_0B65B954F613"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DA71F514_C742_931D_41E6_C211CA866A47",
  "this.overlay_DA700514_C742_931D_41C8_DB9DBB415852",
  "this.overlay_DA702514_C742_931D_41DA_732092ED8A34",
  "this.overlay_DA704514_C742_931D_41D0_E57B52A268D8",
  "this.overlay_DA705514_C742_931D_41D1_38359848AA2F",
  "this.overlay_DA706514_C742_931D_41E5_BB6483D6608E",
  "this.overlay_DA707514_C742_931D_41C7_73C564E55FB9",
  "this.overlay_DA709514_C742_931D_41AF_1978438618B5",
  "this.overlay_D0F7D182_C746_F3F5_41A2_F8B1BE9BAB66"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.29,
  "pitch": 2.08
 },
 "id": "panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_camera"
},
{
 "thumbnailUrl": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_074423_20240816131235",
 "id": "panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C9A4454B_C73E_930B_41E2_A2AD4E003A21",
  "this.overlay_C9A4754B_C73E_930B_41BA_731B488AB09E",
  "this.overlay_C9A4954B_C73E_930B_41E6_86A5E8340761",
  "this.overlay_C9A4C54B_C73E_930B_41B3_3B4155EE6BCB",
  "this.overlay_C9A4D54B_C73E_930B_41D7_3DEE322A55C5",
  "this.overlay_C9A4F54B_C73E_930B_41E4_CD6422F08026",
  "this.overlay_D0F62707_C743_F0FB_41D9_77B5D14070E8"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -18.14,
  "pitch": -1.73
 },
 "id": "panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_camera"
},
{
 "thumbnailUrl": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_083531_20240816131235",
 "id": "panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DCD5DF4C_C75F_EF0D_41E1_9D2E8212824B",
  "this.overlay_DCD5CF4C_C75F_EF0D_41CF_60EEFDC465BB",
  "this.overlay_DCD53F4C_C75F_EF0D_41E7_6E7E4C6E3DA3",
  "this.overlay_DCD52F4C_C75F_EF0D_41C0_93F30DA95229",
  "this.overlay_DCD51F4C_C75F_EF0D_41E2_DE0C684C0422",
  "this.overlay_DCD50F4C_C75F_EF0D_41E2_9628B37B42A3",
  "this.overlay_DCD57F4C_C75F_EF0D_41E4_6C992E40F80C",
  "this.overlay_DCD56F4C_C75F_EF0D_41B9_6797C21B6B30",
  "this.overlay_D0F6BB7D_C745_770F_41DA_35CFADFFFF32"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_t.jpg",
 "class": "Panorama",
 "label": "PIC_20240815_133405_20240816131235",
 "id": "panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D5A14FB6_C747_AF1D_41E3_1A9A295E7195",
  "this.overlay_D5A17FB6_C747_AF1D_41E1_AD489EB369B6",
  "this.overlay_D5A16FB6_C747_AF1D_41CA_82BCA1DA6317"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.32,
  "pitch": 10.61
 },
 "id": "panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.3,
  "pitch": -0.19
 },
 "id": "panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.22,
  "pitch": -3.09
 },
 "id": "panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_camera"
},
{
 "thumbnailUrl": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_170053_20240816131235",
 "id": "panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D67DAA82_C74D_B1F5_41E2_05A186946A31",
  "this.overlay_D67D5A82_C74D_B1F5_419C_4BBE969828C0",
  "this.overlay_D67D4A82_C74D_B1F5_418B_07C7A5DA16E4",
  "this.overlay_D67D6A82_C74D_B1F5_41E1_43A6D548C2F1",
  "this.overlay_D67D1A82_C74D_B1F5_41E1_60C6BB9E06C5",
  "this.overlay_D67D0A82_C74D_B1F5_41D9_80777D5CA5AC",
  "this.overlay_D67D3A82_C74D_B1F5_41D2_51F031D2F38C",
  "this.overlay_D67CDA82_C74D_B1F5_41D9_1D4CFB391DC5",
  "this.overlay_D67CCA82_C74D_B1F5_41E3_4133792E7C78",
  "this.overlay_D67D8A82_C74D_B1F5_41D0_90096214F9D6",
  "this.overlay_D67DBA82_C74D_B1F5_41E5_199DE1188AE4",
  "this.overlay_D67DAA82_C74D_B1F5_41B3_B13E2398BECE",
  "this.overlay_D67D5A82_C74D_B1F5_41DB_2F16624EA513",
  "this.overlay_D67D7A82_C74D_B1F5_41DE_817E9EED4313",
  "this.overlay_D67D6A82_C74D_B1F5_41CF_2AB8F8F4BEEE",
  "this.overlay_D67D1A82_C74D_B1F5_41D2_49E18DA1D302",
  "this.overlay_D67D0A82_C74D_B1F5_41E0_9797930410F4",
  "this.overlay_D67D3A82_C74D_B1F5_41E0_9B050BEEBB0E",
  "this.overlay_D67D2A82_C74D_B1F5_41D6_033BF82D62C1",
  "this.overlay_D095AC39_C742_B117_41B8_287A440A9243"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_camera"
},
{
 "thumbnailUrl": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_t.jpg",
 "class": "Panorama",
 "label": "1st shot",
 "id": "panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4BA35AB3_5B88_6A10_41C7_DF81A8698F54",
  "this.overlay_4B706563_5B88_1E37_41B5_E2CD509313DE",
  "this.overlay_4B69C705_5B88_3BF0_4192_9DDE6C458C68",
  "this.overlay_6FAF4760_603B_C810_41A1_920DABA31BE4",
  "this.overlay_71295E46_6039_5810_41C6_7485C8953EBD",
  "this.overlay_6FDD9F5F_603B_D830_41A9_10896372E034",
  "this.overlay_3D967E2E_607B_3810_41CF_EBFA21C68135",
  "this.overlay_3D063AF9_6079_79F0_41D0_ED62DB8C4A99",
  "this.overlay_3DD56808_6079_5810_41B7_B72CF8D1833C",
  "this.overlay_3D544CAE_6076_D810_41BD_8E2C989B4AC3",
  "this.overlay_3D446596_6077_C830_41C0_B8C005815543",
  "this.overlay_3D799CE9_6077_3810_41D4_C8C86855BE78",
  "this.overlay_3D286F70_6069_38F0_41D3_840857E055E2",
  "this.overlay_7415C2F5_6546_DBCE_41AB_899942F3141D",
  "this.overlay_742E8231_6546_5A46_4181_4FE041EFB54F",
  "this.overlay_D388308D_C11F_060C_41DB_6B827165492F"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8"
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.84,
  "pitch": 2.38
 },
 "id": "panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.5,
  "pitch": 1.14
 },
 "id": "panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.56,
  "pitch": 0.82
 },
 "id": "panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 15.58,
  "pitch": -3.88
 },
 "id": "panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_camera"
},
{
 "thumbnailUrl": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_081931_20240816131235",
 "id": "panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE44E80D_C743_B10C_41E4_718756187880",
  "this.overlay_DE44580D_C743_B10C_41DF_55A8A84872D4",
  "this.overlay_DE44680D_C743_B10C_41D4_E05D43E07EAB",
  "this.overlay_DE44080D_C743_B10C_41E1_87BCF63340CF",
  "this.overlay_DE44380D_C743_B10C_41BF_2637455D52F3",
  "this.overlay_DE44280D_C743_B10C_41E1_1252A1169792",
  "this.overlay_DE45D80D_C743_B10C_41B7_1A3C48A46073",
  "this.overlay_DE45F80D_C743_B10C_41C1_4D3797AEA221",
  "this.overlay_DE45E80D_C743_B10C_41E5_66624580E335"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_075130_20240816131235",
 "id": "panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C88D6F01_C74E_B0F7_41E0_673024A20E78",
  "this.overlay_C88D9F01_C74E_B0F7_41DB_32EC544CCFBE",
  "this.overlay_C88D8F01_C74E_B0F7_41D5_BD9594CB37A6",
  "this.overlay_C88DBF01_C74E_B0F7_41D4_9BFA3AEA8CE4",
  "this.overlay_C88DDF01_C74E_B0F7_41E3_A037441EF164",
  "this.overlay_C88DCF01_C74E_B0F7_41D2_D3667597F165",
  "this.overlay_C88DEF01_C74E_B0F7_41D5_C48C8BA09E01",
  "this.overlay_C88C0F01_C74E_B0F7_41B0_061E098A5C9D",
  "this.overlay_C88C3F01_C74E_B0F7_41D2_D6B0CE606693",
  "this.overlay_C88C5F01_C74E_B0F7_41D7_A858E36D567F",
  "this.overlay_C88C4F01_C74E_B0F7_41C3_ABC499C25B47",
  "this.overlay_C88C7F01_C74E_B0F7_41B6_7A48D254E1F5",
  "this.overlay_C88C6F01_C74E_B0F7_41E7_DB46E44BDD04",
  "this.overlay_C88C9F01_C74E_B0F7_41E7_9B376643A2DD",
  "this.overlay_C88C3F01_C74E_B0F7_41E7_3D73E58F85F5",
  "this.overlay_C88C2F01_C74E_B0F7_41E6_BE777F168989",
  "this.overlay_C88C5F01_C74E_B0F7_41E8_4F1327333E6C",
  "this.overlay_C88C4F01_C74E_B0F7_41DA_82110A76B9FF",
  "this.overlay_C88C7F01_C74E_B0F7_41D1_AC07BC6BFE4E",
  "this.overlay_C88C6F01_C74E_B0F7_41E8_52FCEC3C5C39",
  "this.overlay_D0ED5299_C743_7117_41BB_B6D44104EEE0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.06,
  "pitch": 5.51
 },
 "id": "panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_camera"
},
{
 "thumbnailUrl": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_160949_20240816131235",
 "id": "panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D2B02C0D_C746_910F_41C9_C2AC5219C1D7",
  "this.overlay_D2B0EC0D_C746_910F_41E7_2C4B0675025C",
  "this.overlay_D2B08C0D_C746_910F_41E5_38A79E1D7F9E",
  "this.overlay_D2B0AC0D_C746_910F_41E4_21DCC3C0D150",
  "this.overlay_D2B0BC0D_C746_910F_41E3_D68A48D45F48",
  "this.overlay_D2B75C0D_C746_910F_41E1_5B38F35847DB",
  "this.overlay_D2B77C0D_C746_910F_41DD_0B35E4B3E6F8",
  "this.overlay_D2B71C0D_C746_910F_41D5_1E5D2A473D2F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_074538_20240816131235",
 "id": "panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C812071B_C74F_BF0B_41D0_358994150A74",
  "this.overlay_C812271B_C74F_BF0B_41E7_2BDC408EACE1",
  "this.overlay_C813F71B_C74F_BF0B_41E8_9F27A71114FD",
  "this.overlay_C813E71B_C74F_BF0B_41DA_E61ED694F039",
  "this.overlay_C813971B_C74F_BF0B_41D7_C9FBF0689FC7",
  "this.overlay_C813A71B_C74F_BF0B_41C5_415B02ECCCA2",
  "this.overlay_C813571B_C74F_BF0B_41DD_017F90189C91",
  "this.overlay_C813471B_C74F_BF0B_41C2_523188EFD32E",
  "this.overlay_C813671B_C74F_BF0B_41E2_AF4E439BB3E8",
  "this.overlay_D0F499A5_C743_933C_41D0_5DCB2F00C017"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_t.jpg",
 "class": "Panorama",
 "label": "DJI_20240815093229_0249_D",
 "id": "panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D009C60B_C74C_0C86_41E2_C8590EF8AFBA",
  "this.overlay_D00A060B_C74C_0C86_41E6_035757952F4C",
  "this.overlay_D00A460B_C74C_0C86_41DD_F254029A41E6",
  "this.overlay_D00AB60B_C74C_0C86_41D8_0018ECDCCB0A",
  "this.overlay_D00AA60B_C74C_0C86_41D8_F36AC488F429",
  "this.overlay_D00A860B_C74C_0C86_41CA_F399930F4CAF",
  "this.overlay_D00AE60B_C74C_0C86_41E3_390B16D4D355",
  "this.overlay_D00AD60C_C74C_0C82_41E4_E2A5C009087B",
  "this.overlay_D00B360C_C74C_0C82_41DF_6B1B0160C311",
  "this.overlay_D00B260C_C74C_0C82_41E5_95842D7893C7",
  "this.overlay_D00B060C_C74C_0C82_41E8_51129484AFF3",
  "this.overlay_D00B760C_C74C_0C82_41E4_6074A78A0ED1",
  "this.overlay_D00B460C_C74C_0C82_41E8_67ADAB92834F",
  "this.overlay_D00B960C_C74C_0C82_41AC_BA3098CC6C65",
  "this.overlay_D00B860C_C74C_0C82_41D3_4412017666D3",
  "this.overlay_D00BF60C_C74C_0C82_41D5_B5E3662EE647",
  "this.overlay_D00BE60C_C74C_0C82_41E8_C47E53AFBEB4",
  "this.overlay_D00C360C_C74C_0C82_41CE_BD3579F42598",
  "this.overlay_D00C060C_C74C_0C82_41C2_E80F5B76D766",
  "this.overlay_D00C660C_C74C_0C82_41D9_FA569F504BE0",
  "this.overlay_D00C560C_C74C_0C82_41D0_F6A21EAC3AD5",
  "this.overlay_D00C460C_C74C_0C82_41E6_304F5675E9A0",
  "this.overlay_D00CA60C_C74C_0C82_41AA_00A900603536",
  "this.overlay_D00C960C_C74C_0C82_41D4_0291C0AA9ED8",
  "this.overlay_D00CE60C_C74C_0C82_41CC_C5CB45C1F18E",
  "this.overlay_D00D360C_C74C_0C82_4175_417088F10E04",
  "this.overlay_D00D160C_C74C_0C82_41CE_C6FC3A999ED3",
  "this.overlay_D00D060C_C74C_0C82_41E0_29454635C3F2",
  "this.overlay_D00D760C_C74C_0C82_41DC_7379D25AB9E1",
  "this.overlay_D00D660C_C74C_0C82_41D2_EB06687A38C9",
  "this.overlay_D00D560C_C74C_0C82_41D2_0E1DC199B59B",
  "this.overlay_C113BC9C_E067_EBB3_41E9_188DEE758DB5",
  "this.overlay_C0F89C76_E065_EB7F_41E5_E9E7C0575AA6",
  "this.overlay_D0F53ECB_C743_B10B_41D2_E38C6C7E11BF"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB93CAC6_C743_917D_41BC_0B65B954F613"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3"
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.37,
  "pitch": 2.92
 },
 "id": "panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.87,
  "pitch": 0.21
 },
 "id": "panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_camera"
},
{
 "thumbnailUrl": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_080445_20240816131235",
 "id": "panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DA71D514_C742_931D_4147_A1C159C042D8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DF7E236B_C742_B70B_41A7_CB5C0B3044D0",
  "this.overlay_DF7ED36B_C742_B70B_41E4_07ADAABE134B",
  "this.overlay_DF7EC36B_C742_B70B_41AD_597FDFDE148C",
  "this.overlay_DF7E936B_C742_B70B_41E5_F812D7942B57",
  "this.overlay_DF7EB36B_C742_B70B_41E1_23ED13BDBB5D",
  "this.overlay_DF7F436B_C742_B70B_41E5_7BAB568B82C5",
  "this.overlay_DF7F736B_C742_B70B_41D0_E22A7AEBE01D",
  "this.overlay_DF7F636B_C742_B70B_41E2_33C3FD0CE38F",
  "this.overlay_D09114F4_C745_B11C_41E3_6C48DB0E5210"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.44,
  "pitch": -4.52
 },
 "id": "panorama_DE14421A_C742_9115_41E6_1D855630620D_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.02,
  "pitch": -1.41
 },
 "id": "panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.92,
  "pitch": -0.09
 },
 "id": "panorama_D1714679_C745_7114_41C2_92A1AD42AA41_camera"
},
{
 "thumbnailUrl": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_164753_20240816131235",
 "id": "panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0DBC8C8_C745_7175_41E7_228A0840F889"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D2DA6746_C745_BF7D_4190_E3BA31390FCD",
  "this.overlay_D2DA1746_C745_BF7D_41DD_15FE2557ECB3",
  "this.overlay_D2DA0746_C745_BF7D_41E2_0793A34A1AB1",
  "this.overlay_D2DA3746_C745_BF7D_41E4_1D8F52C9C583",
  "this.overlay_D2D9D746_C745_BF7D_41D2_80B9F7C20C94",
  "this.overlay_D2D9C746_C745_BF7D_41AD_0345EAD38BB9",
  "this.overlay_D2D9F746_C745_BF7D_41DB_DAB5E09616B6",
  "this.overlay_D2DA4746_C745_BF7D_418A_C6E283BD8322",
  "this.overlay_D2DA7746_C745_BF7D_41E1_D5E455018776",
  "this.overlay_D2DA6746_C745_BF7D_41CF_7D3500CDFC41",
  "this.overlay_D2DA0746_C745_BF7D_41E5_1C117BAAF8A3",
  "this.overlay_D2DA3746_C745_BF7D_41E6_CB6117F2E5A5",
  "this.overlay_D2DA2746_C745_BF7D_41D9_CB5A2C10273E",
  "this.overlay_D2D9D746_C745_BF7D_41DE_BAE89DCF56C9",
  "this.overlay_D2D9C746_C745_BF7D_41E0_167592B5C46E",
  "this.overlay_D0EB09CA_C745_7375_41E3_3482917120AB"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_t.jpg",
 "class": "Panorama",
 "label": "3rd shot",
 "id": "panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4AA661E6_5B88_1631_41D4_9F15F716DC26",
  "this.overlay_4AA781E6_5B88_1631_41A0_44696F0CD842",
  "this.overlay_05A8D936_606A_F870_41BE_226C2DFDDD73",
  "this.overlay_50F3A2A4_5E40_B48C_41C3_AB72A377FECE",
  "this.overlay_50F8CC50_5E41_5383_41D1_532505F04D00",
  "this.overlay_509A3BAA_5E41_5484_4194_C4BED9ED41E1",
  "this.overlay_50B2DD5E_5E40_ADBC_41D2_A9CB4CE8679D",
  "this.overlay_3EC77F74_6069_78F0_41D6_88E4B9F9161E",
  "this.overlay_3FA70EFC_6069_79F0_41D5_DE509F0D7616",
  "this.overlay_3F9600D5_6069_4830_41B4_BE7D7A1FF8F3",
  "this.overlay_3FBD8E0C_606B_5817_41A2_403AF9BA08F3",
  "this.overlay_3EED6466_606B_4810_41D7_0460218A7838",
  "this.overlay_3FB8C33F_6069_C870_41BB_EF8E64EF212C",
  "this.overlay_3E4E4B36_6069_5870_41D6_6E5505C21A6D",
  "this.overlay_3FAC02C5_6077_C810_41D2_EEC5E7E6C56C",
  "this.overlay_3E6C6BD3_6077_5830_41D5_D0B294D7F48B",
  "this.overlay_3E5906FE_6076_C9F0_41C2_AC0AD95429FF",
  "this.overlay_05BA1AB7_606F_3870_41C4_C476DFB42D6B",
  "this.overlay_05BA0AB7_606F_3870_41B7_3044407675A3",
  "this.overlay_0B9791C4_6069_C810_41D4_587FECF74A34",
  "this.overlay_0A92D314_6069_4830_4193_B9454381505D",
  "this.overlay_75E3B8D7_6542_57C9_41C3_745DE668ADAE",
  "this.overlay_50B2AD5E_5E40_ADBC_41D6_50B3017C9D38",
  "this.overlay_75E3A8D7_6542_57C9_41C0_D907C7EBDB9A",
  "this.overlay_704903F4_65C2_F9CF_41C4_A0572258735D",
  "this.overlay_7CB73E77_6FF9_AEA6_419C_83370F1F472C",
  "this.overlay_7D2F65D7_6FF8_BDE7_41C3_D4DA51D9F810",
  "this.overlay_6AD62163_7A48_4ECF_41CF_DD44C2F1BF58",
  "this.overlay_6AD6D163_7A48_4ECF_41D8_F9D72F72A8E9",
  "this.overlay_D73F50C4_C6C4_0583_41E2_891C56F1C5EA",
  "this.overlay_D73F10C5_C6C4_058D_41E6_D00C685EF16D",
  "this.overlay_D73F20C5_C6C4_058D_4175_468A03EED453",
  "this.overlay_C8D2CFDE_DF9D_65AC_41B7_ACE45586BC9F",
  "this.overlay_C724B809_DFE4_EA95_41EB_08A2E837CFD8",
  "this.overlay_D0BC516F_C743_930B_41D0_366409A3BEE9"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513796F5_5B78_1A13_41B8_5423F09EC40D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0DBC8C8_C745_7175_41E7_228A0840F889"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05"
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.19,
  "pitch": 5.45
 },
 "id": "panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.96,
  "pitch": -2.63
 },
 "id": "panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_camera"
},
{
 "thumbnailUrl": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_t.jpg",
 "class": "Panorama",
 "label": "DJI_20240815093402_0250_D",
 "id": "panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D0E16F67_C74C_3C8D_41D9_683ACDC41162",
  "this.overlay_D0E11F67_C74C_3C8D_41E4_293173FA7813",
  "this.overlay_D0E10F67_C74C_3C8D_41E7_5C13BAD0AB42",
  "this.overlay_D0E13F67_C74C_3C8D_41D3_0CA8F44A2171",
  "this.overlay_D0E12F67_C74C_3C8D_41C5_DC7484698D84",
  "this.overlay_D0E1FF67_C74C_3C8D_41E6_37346E596CFF",
  "this.overlay_D0E1EF67_C74C_3C8D_41DD_4FC48C44A0F8",
  "this.overlay_D0E19F67_C74C_3C8D_41E7_0BC4C17F484B",
  "this.overlay_D0E1BF67_C74C_3C8D_41B1_58F572C2911A",
  "this.overlay_D0E1AF67_C74C_3C8D_41E2_DBF1FBDC8825",
  "this.overlay_D0E26F67_C74C_3C8D_41DB_46DAACFB2112",
  "this.overlay_D0E21F67_C74C_3C8D_41E4_90FB6EFB758B",
  "this.overlay_D0E23F67_C74C_3C8D_41DD_30D96BC29D66",
  "this.overlay_D0E2DF67_C74C_3C8D_41CB_149E350ECF10",
  "this.overlay_D0E2FF67_C74C_3C8D_41E4_F808FFE5537A",
  "this.overlay_D0E29F67_C74C_3C8D_41B2_A2EA9702AF2B",
  "this.overlay_D0E28F67_C74C_3C8D_41E7_6FBD9356351C",
  "this.overlay_D0E35F67_C74C_3C8D_41B5_0574BA736BE7",
  "this.overlay_D0E34F67_C74C_3C8D_41B4_13B397096895",
  "this.overlay_D0E31F68_C74C_3C83_41CF_00A4317CDB05",
  "this.overlay_D0E33F68_C74C_3C83_4192_3DC5E6864770",
  "this.overlay_D0E3DF68_C74C_3C83_41E5_83871305956F",
  "this.overlay_D0E3FF68_C74C_3C83_41C3_5208FC265592",
  "this.overlay_D0E3EF68_C74C_3C83_41C2_E33E35846692",
  "this.overlay_D0E38F68_C74C_3C83_41DC_9F7E3EB3BF63",
  "this.overlay_D0E3BF68_C74C_3C83_41E7_8D8221CAD16C",
  "this.overlay_D0F73323_C743_B734_41C2_5B4778D836C2"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE14421A_C742_9115_41E6_1D855630620D"
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 46.89,
  "pitch": 4.51
 },
 "id": "panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_camera"
},
{
 "thumbnailUrl": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_t.jpg",
 "class": "Panorama",
 "label": "2nd shot",
 "id": "panorama_513796F5_5B78_1A13_41B8_5423F09EC40D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_48B6ED7B_5B88_2E17_41A2_9516F3EF2AC9",
  "this.overlay_4B789995_5BB8_1613_4195_9282D4B42EF3",
  "this.overlay_4B787995_5BB8_1613_41D3_6C8FA1D13DEB",
  "this.overlay_4B69DFEE_5B88_2A31_41D2_9D1DDC5E3ED4",
  "this.overlay_3E58CB89_607B_3810_41D2_400659FE1B7F",
  "this.overlay_3FA462DF_607B_C830_41CC_C373249451E3",
  "this.overlay_3FA728C0_607B_5810_41D3_9DCDCDC85C9E",
  "this.overlay_3FA2D59E_607A_C830_41C5_3858FCFE144A",
  "this.overlay_3FAF606D_6079_C810_418C_A9E7CD609BB5",
  "this.overlay_3FA5A13F_6079_4870_41D7_877E145877D4",
  "this.overlay_3E64A660_607F_4810_41D8_4D3B90051500",
  "this.overlay_3E2F8C5F_6079_7830_41C4_62ED4D1F4A35",
  "this.overlay_3E4687EF_6079_C810_418E_783A5A20FDF6",
  "this.overlay_3D003F0E_607B_F810_41D3_BC45DE51A02C",
  "this.overlay_0D04FA99_6029_7830_41C5_CA0CBBFECE15",
  "this.overlay_051D608D_6029_4810_41CE_F483D6857033",
  "this.overlay_06E0227D_602B_48F0_41C0_9700880FA6EC",
  "this.overlay_04B2F307_6029_4810_41D3_EF95EA815664",
  "this.overlay_0BE51768_6059_4810_41AF_DEE90C508AD0",
  "this.overlay_0807CB0E_6056_D810_41C8_54C20D95CA6C",
  "this.overlay_18A966BC_6069_4870_41C5_718926537D62",
  "this.overlay_0FF29568_6056_C811_41D5_71296BB406DE",
  "this.overlay_7585BAA6_655E_4A4A_41B4_559940451FA1",
  "this.overlay_744C45DB_6546_79FA_41D0_99D0C5E68503",
  "this.overlay_71F2592C_65C2_D65E_41A7_45BAF9D9D8F0",
  "this.overlay_052C6FD8_6056_F830_419D_A6FC708715A8",
  "this.overlay_633499A9_7A02_3912_41D2_F38AEEF57507",
  "this.overlay_633489A9_7A02_3912_41C4_2D00D0252120",
  "this.overlay_6A8F4FCE_7A48_31D6_41B9_5589F82B7AA0",
  "this.overlay_6A84AFCF_7A48_31D6_41C5_4BBD1B17E227",
  "this.overlay_D44F8B4E_C6C4_049F_41D4_2EFCDAAD5E6F",
  "this.overlay_D4B2DD90_C6FC_1F83_41CF_ECAEED1B666E",
  "this.overlay_D5F6A067_C6C4_048D_41DB_6D0C88C4F6C9",
  "this.overlay_C9321F84_DFA7_E59C_41DD_C38133E2DD39"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D699E355_C742_B71F_41E5_4AE38C62D69E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8303E69_C74F_7137_41E3_77860354A5A8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05"
  }
 ],
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240814_162606_20240816131235",
 "id": "panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D1714679_C745_7114_41C2_92A1AD42AA41"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D1E6CE13_C745_911B_41DF_CA776FB22533",
  "this.overlay_D1E63E13_C745_911B_41C9_F9ECD994CC42",
  "this.overlay_D1E61E13_C745_911B_41E5_897BFF166580",
  "this.overlay_D1E67E13_C745_911B_41BD_1BD7FBE6E718",
  "this.overlay_D1E65E13_C745_911B_41E0_16DA2E761DE9",
  "this.overlay_D1E5BE13_C745_911B_41B9_35146BBA931F",
  "this.overlay_D1E59E13_C745_911B_41E6_0968A200E539",
  "this.overlay_D1E5FE13_C745_911B_41D2_B4996F095CFA",
  "this.overlay_D0EAFB05_C742_90FF_41BD_D40024A8857B"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "PIC_20240815_083251_20240816131235",
 "id": "panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD",
 "hfovMin": "135%",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DCADDF77_C75F_AF1B_41E2_F315E1CAFE59",
  "this.overlay_DCADCF77_C75F_AF1B_41B4_CDC249EBD0C5",
  "this.overlay_DCADEF77_C75F_AF1B_41DC_37256E4DACEF",
  "this.overlay_DCAD9F77_C75F_AF1B_41D6_B1DD37857C60",
  "this.overlay_DCAD8F77_C75F_AF1B_41CF_CCADBF5BC250",
  "this.overlay_DCAD5F77_C75F_AF1B_41E2_818FADB599E1",
  "this.overlay_DCAD7F77_C75F_AF1B_41D5_D22B708C152D",
  "this.overlay_D0EBCE9D_C745_910C_41A7_971DE10D33E2"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.42,
  "pitch": -0.39
 },
 "id": "panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_camera"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "minHeight": 50,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -146.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0_HS_0_0.png",
      "width": 83,
      "height": 74
     }
    ]
   },
   "pitch": 0.02
  }
 ],
 "id": "overlay_DF755B3D_C742_970F_41E7_CE4187577F01",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.02,
   "hfov": 3.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 79.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_1_0.png",
      "width": 77,
      "height": 75
     }
    ]
   },
   "pitch": -0.72
  }
 ],
 "id": "overlay_DF75AB3D_C742_970F_41C3_838F407E049D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.72,
   "hfov": 3.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -177.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_2_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 37.43
  }
 ],
 "id": "overlay_DF75BB3D_C742_970F_41E0_FE335B5045AE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 37.43,
   "hfov": 2.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_3_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 39.44,
   "yaw": 104.95,
   "hfov": 6.92,
   "distance": 50
  }
 ],
 "id": "overlay_DF758B3D_C742_970F_41E6_C90C3B40A446",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_3_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 39.44,
   "hfov": 6.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 98.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_4_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 39.4
  }
 ],
 "id": "overlay_DF759B3D_C742_970F_41D7_4D2DE4593C6B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 39.4,
   "hfov": 2.82
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_5_0.png",
      "width": 190,
      "height": 76
     }
    ]
   },
   "pitch": 37.42,
   "yaw": -171.75,
   "hfov": 7.12,
   "distance": 50
  }
 ],
 "id": "overlay_DF75EB3D_C742_970F_41C1_A1F9A1349022",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_5_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 37.42,
   "hfov": 7.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 53.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_6_0.png",
      "width": 1147,
      "height": 677
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF75FB3D_C742_970F_41E3_FC09BA4C6A75",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -3.43,
   "hfov": 53.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6276593_C74D_931B_41E2_700F54EEC3E5",
   "pitch": -10.04,
   "yaw": -11.5,
   "hfov": 24.47,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF75CB3D_C742_970F_41E6_B1C2DDBAC516",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_7_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -10.04,
   "hfov": 24.47
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -67.25
  }
 ],
 "id": "overlay_DF75DB3D_C742_970F_41E0_24E15B1905EC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.25,
   "hfov": 3.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -157.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_9_0.png",
      "width": 473,
      "height": 361
     }
    ]
   },
   "pitch": 2.49
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF742B3D_C742_970F_41B4_D0D04027AE14",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_9_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 2.49,
   "hfov": 22.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6271593_C74D_931B_41E4_A5338F0B485B",
   "pitch": -0.63,
   "yaw": -157.65,
   "hfov": 7.8,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DF740B3D_C742_970F_41E5_CD0E82E27D4F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_10_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -0.63,
   "hfov": 7.8
  }
 ]
},
{
 "yaw": -70.97,
 "bleaching": 0.7,
 "pitch": 31.47,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F7FCCC_C745_910D_41B6_75B247BC47F0",
 "bleachingDistance": 0.4
},
{
 "class": "PanoramaSnapshot",
 "position": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.96,
  "pitch": -2.63,
  "hfov": 130
 },
 "id": "snapshot_1369AF90_047D_B8D0_418B_6D4AE00C929B"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 46.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_1_0.png",
      "width": 83,
      "height": 91
     }
    ]
   },
   "pitch": -2.28
  }
 ],
 "id": "overlay_DB93AAC6_C743_917D_41D8_0D3B5122D55C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -2.28,
   "hfov": 3.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0_HS_2_0.png",
      "width": 78,
      "height": 88
     }
    ]
   },
   "pitch": 0.58
  }
 ],
 "id": "overlay_DB93BAC6_C743_917D_41DD_F0F7CCA23292",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 0.58,
   "hfov": 3.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -5.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_3_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 33.61
  }
 ],
 "id": "overlay_DB939AC6_C743_917D_41E4_AABECC74F7F3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 33.61,
   "hfov": 3.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_4_0.png",
      "width": 189,
      "height": 73
     }
    ]
   },
   "pitch": 33.76,
   "yaw": 0.08,
   "hfov": 7.47,
   "distance": 50
  }
 ],
 "id": "overlay_DB937AC6_C743_917D_41C3_03A04C44130B",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_4_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 33.76,
   "hfov": 7.47
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -118.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_5_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 25.15
  }
 ],
 "id": "overlay_DB935AC6_C743_917D_41D7_C50E7292ECFB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 25.15,
   "hfov": 3.3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_6_0.png",
      "width": 186,
      "height": 71
     }
    ]
   },
   "pitch": 25.19,
   "yaw": -112.59,
   "hfov": 7.93,
   "distance": 50
  }
 ],
 "id": "overlay_DB932AC6_C743_917D_41BE_404CA79A0E19",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_6_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 25.19,
   "hfov": 7.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 36.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 37.69,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_7_0.png",
      "width": 829,
      "height": 523
     }
    ]
   },
   "pitch": 14.22
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DB92AAC6_C743_917D_41E7_DFBDD7726B5F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_7_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 14.22,
   "hfov": 37.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 34.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -64.48
  }
 ],
 "id": "overlay_DB926AC6_C743_917D_41E3_D6B5642C9624",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DB93CAC6_C743_917D_41BC_0B65B954F613_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -64.48,
   "hfov": 4.1
  }
 ]
},
{
 "yaw": -139.3,
 "bleaching": 0.7,
 "pitch": 36.74,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F45657_C746_911C_41C9_FB06515837A3",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 145.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_0_0.png",
      "width": 83,
      "height": 73
     }
    ]
   },
   "pitch": 0.24
  }
 ],
 "id": "overlay_D1713679_C745_7114_41E3_CFB6BCB4B389",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.24,
   "hfov": 3.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 170.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_1_0.png",
      "width": 83,
      "height": 75
     }
    ]
   },
   "pitch": -0.07
  }
 ],
 "id": "overlay_D1711679_C745_7114_41E0_D6D3A79D9BAF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.07,
   "hfov": 3.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 125.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_2_0.png",
      "width": 87,
      "height": 79
     }
    ]
   },
   "pitch": 0.54
  }
 ],
 "id": "overlay_D171B679_C745_7114_41C7_7A305455F61A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.54,
   "hfov": 4.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 95.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.46,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_3_0.png",
      "width": 73,
      "height": 85
     }
    ]
   },
   "pitch": 0.4
  }
 ],
 "id": "overlay_D171A679_C745_7114_41CA_E7D2D73E0305",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 0.4,
   "hfov": 3.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -35.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_4_0.png",
      "width": 91,
      "height": 83
     }
    ]
   },
   "pitch": -3.28
  }
 ],
 "id": "overlay_D1719679_C745_7114_41D1_736CB3A6A329",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -3.28,
   "hfov": 4.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 18.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_5_0.png",
      "width": 85,
      "height": 83
     }
    ]
   },
   "pitch": -1.82
  }
 ],
 "id": "overlay_D1718679_C745_7114_41E7_29ACECC92FE0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.82,
   "hfov": 4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -105.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_8_0.png",
      "width": 474,
      "height": 361
     }
    ]
   },
   "pitch": 9.08
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1707679_C745_7114_41E7_46C7A106F605",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_8_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 9.08,
   "hfov": 21.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -55.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_9_0.png",
      "width": 749,
      "height": 463
     }
    ]
   },
   "pitch": 23.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1704679_C745_7114_41E6_530D03EA757C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_9_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 23.13,
   "hfov": 32.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -137.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_10_0.png",
      "width": 501,
      "height": 493
     }
    ]
   },
   "pitch": 5.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1700679_C745_7114_41D4_25ABE26F070C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.78,
   "hfov": 23.41
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 80.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_11_0.png",
      "width": 668,
      "height": 343
     }
    ]
   },
   "pitch": 11.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D170D679_C745_7114_41E8_871725178662",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_11_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 11.11,
   "hfov": 30.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 88.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_12_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 9.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D170C679_C745_7114_41B8_FDFF8F342C2E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_12_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 9.5,
   "hfov": 5.56
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -103.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_13_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -60.21
  }
 ],
 "id": "overlay_D1709679_C745_7114_41D9_79E01D38AC54",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -60.21,
   "hfov": 4.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 156.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_14_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 22.6
  }
 ],
 "id": "overlay_D1710679_C745_7114_41E0_C646BB54C4AC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_14_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 22.6,
   "hfov": 3.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_15_0.png",
      "width": 188,
      "height": 76
     }
    ]
   },
   "pitch": 22.74,
   "yaw": 162.38,
   "hfov": 8.18,
   "distance": 50
  }
 ],
 "id": "overlay_D171F679_C745_7114_41E0_7B45C7CA57BB",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_15_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 22.74,
   "hfov": 8.18
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 104.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_16_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 40.67
  }
 ],
 "id": "overlay_D171D679_C745_7114_41C8_30647072C6D7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_16_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 40.67,
   "hfov": 2.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_17_0.png",
      "width": 189,
      "height": 76
     }
    ]
   },
   "pitch": 40.7,
   "yaw": 110.88,
   "hfov": 6.75,
   "distance": 50
  }
 ],
 "id": "overlay_D171B679_C745_7114_41E0_959D61FCCCFE",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_17_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 40.7,
   "hfov": 6.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -19.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_18_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 10.75
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D171A679_C745_7114_41E7_BA6BDF087245",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_18_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 10.75,
   "hfov": 19.94
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -165.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_19_0.png",
      "width": 425,
      "height": 317
     }
    ]
   },
   "pitch": 18.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1719679_C745_7114_41D7_1B9229EC116D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_19_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 18.24,
   "hfov": 18.95
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 20.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_20_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 41.22
  }
 ],
 "id": "overlay_D1707679_C745_7114_41E1_7AB577BB6A7F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_20_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 41.22,
   "hfov": 2.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_21_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 41.3,
   "yaw": 25.64,
   "hfov": 6.68,
   "distance": 50
  }
 ],
 "id": "overlay_D1706679_C745_7114_41C5_A29BF9476742",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1714679_C745_7114_41C2_92A1AD42AA41_1_HS_21_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 41.3,
   "hfov": 6.68
  }
 ]
},
{
 "yaw": -102.88,
 "bleaching": 0.7,
 "pitch": 31.72,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EF471F_C742_BF0B_41E7_DDAE5F80C164",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -130.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_0_0.png",
      "width": 88,
      "height": 82
     }
    ]
   },
   "pitch": -2.82
  }
 ],
 "id": "overlay_DAD7087B_C742_910B_41E4_89C694B03213",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -2.82,
   "hfov": 4.15
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_1_0.png",
      "width": 79,
      "height": 80
     }
    ]
   },
   "pitch": -0.8
  }
 ],
 "id": "overlay_DAD7687B_C742_910B_41DB_02C6421FE11E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.8,
   "hfov": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -39.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_2_0.png",
      "width": 76,
      "height": 79
     }
    ]
   },
   "pitch": -0.16
  }
 ],
 "id": "overlay_DAD7487B_C742_910B_41E3_F67F5E3BBD37",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.16,
   "hfov": 3.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_3_0.png",
      "width": 511,
      "height": 334
     }
    ]
   },
   "pitch": 1.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD7587B_C742_910B_41E1_BF3DA60E41EB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_3_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": 1.43,
   "hfov": 23.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DFA27D92_C74D_7314_41B4_793A040FAF30",
   "pitch": -1.53,
   "yaw": 27.97,
   "hfov": 4.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD7A87B_C742_910B_41C4_F7C7B87B15C0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_5_0_0_map.gif",
      "width": 49,
      "height": 16
     }
    ]
   },
   "pitch": -1.53,
   "hfov": 4.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -33.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_6_0.png",
      "width": 358,
      "height": 227
     }
    ]
   },
   "pitch": 0.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD7E87B_C742_910B_41DC_3DEFF0E97C69",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_6_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 0.96,
   "hfov": 16.81
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DFA21D92_C74D_7314_41CD_F7F54B4F3EB2",
   "pitch": -1.23,
   "yaw": -33.01,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD7C87B_C742_910B_41B5_A4ED69247F55",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_7_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -1.23,
   "hfov": 7.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_8_0.png",
      "width": 76,
      "height": 79
     }
    ]
   },
   "pitch": -0.64
  }
 ],
 "id": "overlay_DAD6387B_C742_910B_41B1_E1536452748C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.64,
   "hfov": 3.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -3.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_9_0.png",
      "width": 323,
      "height": 261
     }
    ]
   },
   "pitch": 0.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD6587B_C742_910B_41D8_5DC5C6E7628F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_9_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.69,
   "hfov": 15.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62FB593_C74D_931B_41DB_D761BAE295A9",
   "pitch": -1.25,
   "yaw": -3.51,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DAD6887B_C742_910B_41D0_204EF3ACA2B9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_10_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 7.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 17.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_11_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 43.07
  }
 ],
 "id": "overlay_DAD6987B_C742_910B_41E4_E7459E2F8D66",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_11_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 43.07,
   "hfov": 2.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_12_0.png",
      "width": 186,
      "height": 72
     }
    ]
   },
   "pitch": 43.29,
   "yaw": 23.21,
   "hfov": 6.44,
   "distance": 50
  }
 ],
 "id": "overlay_DAD6C87B_C742_910B_41D6_1E4CD5C2EDDD",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_12_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 43.29,
   "hfov": 6.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 33.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_13_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -71.51
  }
 ],
 "id": "overlay_DAD6D87B_C742_910B_41E4_98240C37D474",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -71.51,
   "hfov": 3.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -152.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_14_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 33.95
  }
 ],
 "id": "overlay_DAD9387B_C742_910B_41DC_047F417F285A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_14_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 33.95,
   "hfov": 3.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_15_0.png",
      "width": 171,
      "height": 75
     }
    ]
   },
   "pitch": 34.13,
   "yaw": -147.16,
   "hfov": 6.64,
   "distance": 50
  }
 ],
 "id": "overlay_DAD9087B_C742_910B_41E3_6AA410B90944",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_15_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 34.13,
   "hfov": 6.64
  }
 ]
},
{
 "yaw": 24.49,
 "bleaching": 0.7,
 "pitch": 36.99,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EBE623_C746_913B_41E8_06D98F2E38A4",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -118.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_0_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 57.02
  }
 ],
 "id": "overlay_DC4FBE76_C743_F11D_41B9_48982A47E05C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 57.02,
   "hfov": 1.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_1_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 57.15,
   "yaw": -112.93,
   "hfov": 4.84,
   "distance": 50
  }
 ],
 "id": "overlay_DC4FAE76_C743_F11D_41B0_A72E9BC4B055",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_1_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 57.15,
   "hfov": 4.84
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 125.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 56.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0_HS_2_0.png",
      "width": 1270,
      "height": 855
     }
    ]
   },
   "pitch": 19.03
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DC4F8E76_C743_F11D_41E0_74ABB0D4FC2D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0_HS_2_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": 19.03,
   "hfov": 56.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -164.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_3_0.png",
      "width": 80,
      "height": 98
     }
    ]
   },
   "pitch": -0.03
  }
 ],
 "id": "overlay_DC4FEE76_C743_F11D_41B9_795EB3CED4E5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -0.03,
   "hfov": 3.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 132.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -64.23
  }
 ],
 "id": "overlay_DC4FDE76_C743_F11D_41C0_84ADDDDEF61A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -64.23,
   "hfov": 4.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -22.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0_HS_5_0.png",
      "width": 79,
      "height": 80
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "id": "overlay_DC4FCE76_C743_F11D_41DD_58DF655D5384",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC4E5E76_C743_F11D_41E5_BFE89D17EB63_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.7,
   "hfov": 3.7
  }
 ]
},
{
 "yaw": -173.97,
 "bleaching": 0.7,
 "pitch": 39.25,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D092FADF_C746_910B_41E8_161DC93DE7E0",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 35.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_0_0.png",
      "width": 76,
      "height": 71
     }
    ]
   },
   "pitch": -1.72
  }
 ],
 "id": "overlay_D95A25B4_C742_931D_41D8_1B0BD65F7A3D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.72,
   "hfov": 3.57
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 78.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0_HS_1_0.png",
      "width": 79,
      "height": 97
     }
    ]
   },
   "pitch": -0.1
  }
 ],
 "id": "overlay_D95A35B4_C742_931D_416F_8686D1FFC1A6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -0.1,
   "hfov": 3.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_2_0.png",
      "width": 426,
      "height": 330
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D95A15B4_C742_931D_41E5_F250689614BB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_2_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 0.57,
   "hfov": 19.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62E6593_C74D_931B_41E0_7D3C8BFE5FC9",
   "pitch": -2.2,
   "yaw": 27.41,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D95AE5B4_C742_931D_41BF_3F1038561D13",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_3_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -2.2,
   "hfov": 7.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_6_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -62.72
  }
 ],
 "id": "overlay_D95AC5B4_C742_931D_41E3_A82262D5C6BD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -62.72,
   "hfov": 4.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 17.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_7_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 43.07
  }
 ],
 "id": "overlay_D95AA5B4_C742_931D_41C1_CAAA174751B0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 43.07,
   "hfov": 2.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_8_0.png",
      "width": 186,
      "height": 72
     }
    ]
   },
   "pitch": 43.29,
   "yaw": 23.21,
   "hfov": 6.44,
   "distance": 50
  }
 ],
 "id": "overlay_D95A85B4_C742_931D_41D6_A4C7306C3578",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_8_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 43.29,
   "hfov": 6.44
  }
 ]
},
{
 "yaw": -58.66,
 "bleaching": 0.7,
 "pitch": 40.51,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F4145C_C746_B10D_41E3_9568B92A10FD",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -53.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0_HS_0_0.png",
      "width": 89,
      "height": 92
     }
    ]
   },
   "pitch": 1.13
  }
 ],
 "id": "overlay_DBB2109A_C745_9115_41CD_BECAD766CD09",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.13,
   "hfov": 4.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 130.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.47,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0_HS_1_0.png",
      "width": 74,
      "height": 66
     }
    ]
   },
   "pitch": -1.27
  }
 ],
 "id": "overlay_DBB2609A_C745_9115_41C0_3BF110A7C7C8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.27,
   "hfov": 3.47
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62DB593_C74D_931B_41D6_16E4B683862E",
   "pitch": -1.44,
   "yaw": 118.75,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBB2709A_C745_9115_41B2_97499092FAF8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_2_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -1.44,
   "hfov": 7.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -62.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_3_0.png",
      "width": 576,
      "height": 343
     }
    ]
   },
   "pitch": 3.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBB2509A_C745_9115_41E8_96C9E859B85A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_3_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 3.78,
   "hfov": 26.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62D4593_C74D_931B_41E1_6677172C974E",
   "pitch": 0.35,
   "yaw": -61.46,
   "hfov": 7.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBB5A09A_C745_9115_41E2_743DC55B8C94",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_4_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": 0.35,
   "hfov": 7.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 118.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_5_0.png",
      "width": 554,
      "height": 393
     }
    ]
   },
   "pitch": 2.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DBB5B09A_C745_9115_41E3_71038D521843",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_5_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 2.14,
   "hfov": 25.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -131.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_6_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -66.49
  }
 ],
 "id": "overlay_DBB5809A_C745_9115_41D9_75486A6D5088",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -66.49,
   "hfov": 3.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 42.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_7_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 43.47
  }
 ],
 "id": "overlay_DBB5909A_C745_9115_41E7_D58AA28ADC7B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 43.47,
   "hfov": 2.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_8_0.png",
      "width": 186,
      "height": 72
     }
    ]
   },
   "pitch": 43.75,
   "yaw": 48.46,
   "hfov": 6.36,
   "distance": 50
  }
 ],
 "id": "overlay_DBB2C09A_C745_9115_41D6_E6BFFDA1C1D7",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_8_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 43.75,
   "hfov": 6.36
  }
 ]
},
{
 "yaw": 29.77,
 "bleaching": 0.7,
 "pitch": 43.02,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F4D13C_C746_930D_41CF_BE13CB1618EA",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -65.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_0_0.png",
      "width": 91,
      "height": 108
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_D69A1355_C742_B71F_41E1_5F7456381DFE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -2.39,
   "hfov": 4.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -140.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_1_0.png",
      "width": 85,
      "height": 93
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "id": "overlay_D69A0355_C742_B71F_41A8_B25660F92371",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.44,
   "hfov": 4.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -165.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_2_0.png",
      "width": 85,
      "height": 77
     }
    ]
   },
   "pitch": -0.57
  }
 ],
 "id": "overlay_D69A3355_C742_B71F_41E6_71D451CA720F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.57,
   "hfov": 4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 145.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_4_0.png",
      "width": 85,
      "height": 91
     }
    ]
   },
   "pitch": -1.25
  }
 ],
 "id": "overlay_D69A5355_C742_B71F_41D7_E59F54C40BBF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 4.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 15.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_5_0.png",
      "width": 96,
      "height": 126
     }
    ]
   },
   "pitch": -3.23
  }
 ],
 "id": "overlay_D69A4355_C742_B71F_41BA_04BA9DBE1365",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -3.23,
   "hfov": 4.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 169.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_6_0.png",
      "width": 449,
      "height": 224
     }
    ]
   },
   "pitch": 7.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D69A7355_C742_B71F_41B3_848AC3FB9E63",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_6_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 7.98,
   "hfov": 20.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 177.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_7_0.png",
      "width": 67,
      "height": 57
     }
    ]
   },
   "pitch": 7.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D69A6355_C742_B71F_41D3_3951C6E0AA43",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_7_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 7.01,
   "hfov": 3.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -64.23
  }
 ],
 "id": "overlay_D69A9355_C742_B71F_41CC_E3B5BD70EF80",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -64.23,
   "hfov": 4.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -103.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_10_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 42.75
  }
 ],
 "id": "overlay_D69A8355_C742_B71F_41D2_FAF87F65887B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_10_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 42.75,
   "hfov": 2.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_11_0.png",
      "width": 189,
      "height": 76
     }
    ]
   },
   "pitch": 42.74,
   "yaw": -97.81,
   "hfov": 6.53,
   "distance": 50
  }
 ],
 "id": "overlay_D69AB355_C742_B71F_41D1_C9781BF93CD6",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_11_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 42.74,
   "hfov": 6.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 107.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_12_0.png",
      "width": 91,
      "height": 87
     }
    ]
   },
   "pitch": -0.38
  }
 ],
 "id": "overlay_D69AA355_C742_B71F_41E0_0A738511E264",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.38,
   "hfov": 4.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 129.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_13_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 19.71
  }
 ],
 "id": "overlay_D69AC355_C742_B71F_41C5_EA69647FDE45",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_13_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 19.71,
   "hfov": 3.43
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_14_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 19.85,
   "yaw": 135.4,
   "hfov": 8.39,
   "distance": 50
  }
 ],
 "id": "overlay_D69AF355_C742_B71F_41BA_B6AD298A129F",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D699E355_C742_B71F_41E5_4AE38C62D69E_1_HS_14_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 19.85,
   "hfov": 8.39
  }
 ]
},
{
 "yaw": -0.63,
 "bleaching": 0.7,
 "pitch": 45.53,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F4C4C3_C742_F174_41E5_D2EBE187F989",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_0_0.png",
      "width": 133,
      "height": 141
     }
    ]
   },
   "pitch": -15.86
  }
 ],
 "id": "overlay_3D7C4FF5_602B_57F0_41D2_38F442B2BF47",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.86,
   "hfov": 3.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_1_0.png",
      "width": 125,
      "height": 128
     }
    ]
   },
   "pitch": -1.11
  }
 ],
 "id": "overlay_383C2223_6029_C810_4199_E37E3D27DF2C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.11,
   "hfov": 3.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_2_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -67.25
  }
 ],
 "id": "overlay_72C7BC83_65FE_4E4A_41D8_95AC7E03C093",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.25,
   "hfov": 3.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 179.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_3_0.png",
      "width": 155,
      "height": 145
     }
    ]
   },
   "pitch": -8.93
  }
 ],
 "id": "overlay_64B8B84F_7018_92E6_41C7_DCDC9447DACB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51108EEE_5E40_AC9C_41AE_C77D43AD216A_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.93,
   "hfov": 4.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 32.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_1_0.png",
      "width": 95,
      "height": 87
     }
    ]
   },
   "pitch": 1.32
  }
 ],
 "id": "overlay_D9EE8597_C745_931B_41D2_6D0AC78C23D6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 1.32,
   "hfov": 4.48
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -99.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_2_0.png",
      "width": 92,
      "height": 94
     }
    ]
   },
   "pitch": -1.29
  }
 ],
 "id": "overlay_D9EE9597_C745_931B_41DE_35C8E5AEB05C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.29,
   "hfov": 4.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 41.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_3_0.png",
      "width": 377,
      "height": 304
     }
    ]
   },
   "pitch": 2.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9EE4597_C745_931B_41A7_1D0023895539",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 2.96,
   "hfov": 17.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E62DC593_C74D_931B_41E2_8C3C9329303B",
   "pitch": 0.66,
   "yaw": 41.19,
   "hfov": 7.26,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9EE7597_C745_931B_41C1_0A828DB81EF2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_4_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": 0.66,
   "hfov": 7.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -61.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_5_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -66.49
  }
 ],
 "id": "overlay_D9EE2597_C745_931B_41D4_FFBDD7C7304D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -66.49,
   "hfov": 3.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 105.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_6_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 53.3
  }
 ],
 "id": "overlay_D991C597_C745_931B_41E3_99F95C5303F1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_6_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 53.3,
   "hfov": 2.18
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_7_0.png",
      "width": 186,
      "height": 72
     }
    ]
   },
   "pitch": 53.53,
   "yaw": 111.86,
   "hfov": 5.23,
   "distance": 50
  }
 ],
 "id": "overlay_D9918597_C745_931B_41D9_B4BCC20FEBD7",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_7_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 53.53,
   "hfov": 5.23
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -101.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_8_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 18.94
  }
 ],
 "id": "overlay_D9919597_C745_931B_41D3_5B408C56971A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_8_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 18.94,
   "hfov": 3.45
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_9_0.png",
      "width": 181,
      "height": 75
     }
    ]
   },
   "pitch": 19.09,
   "yaw": -96.02,
   "hfov": 8.05,
   "distance": 50
  }
 ],
 "id": "overlay_D991B597_C745_931B_41DD_20865738B5F8",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_0_HS_9_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": 19.09,
   "hfov": 8.05
  }
 ]
},
{
 "yaw": 73.98,
 "bleaching": 0.7,
 "pitch": 43.52,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F42D82_C746_93F5_41C1_0D73F697FBB3",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 173.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_0_0.png",
      "width": 132,
      "height": 128
     }
    ]
   },
   "pitch": -30.78
  }
 ],
 "id": "overlay_E247EF8E_C359_4E7A_41E6_3D92493BBBEB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.78,
   "hfov": 3.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 151.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_2_0.png",
      "width": 132,
      "height": 134
     }
    ]
   },
   "pitch": -57.83
  }
 ],
 "id": "overlay_E2463F8E_C359_4E7A_41C4_8953105F6BBB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -57.83,
   "hfov": 2.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 47.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_3_0.png",
      "width": 119,
      "height": 122
     }
    ]
   },
   "pitch": -23.18
  }
 ],
 "id": "overlay_E2462F8E_C359_4E7A_41C4_AC8FE669A273",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -23.18,
   "hfov": 3.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 101.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_4_0.png",
      "width": 119,
      "height": 113
     }
    ]
   },
   "pitch": -12.43
  }
 ],
 "id": "overlay_E2461F8E_C359_4E7A_41DE_8266BC2D938C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.43,
   "hfov": 3.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 126.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_5_0.png",
      "width": 139,
      "height": 121
     }
    ]
   },
   "pitch": -17.18
  }
 ],
 "id": "overlay_E2460F8E_C359_4E7A_4150_8C5900A3F7F5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -17.18,
   "hfov": 4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 49.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_6_0.png",
      "width": 128,
      "height": 126
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "id": "overlay_E2408F8E_C359_4E7A_41DE_CF3199AA7058",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.36,
   "hfov": 3.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 42.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_7_0.png",
      "width": 128,
      "height": 143
     }
    ]
   },
   "pitch": -10.43
  }
 ],
 "id": "overlay_E240FF8E_C359_4E7A_41E5_30C2D91547EE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -10.43,
   "hfov": 3.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_8_0.png",
      "width": 145,
      "height": 126
     }
    ]
   },
   "pitch": -6.64
  }
 ],
 "id": "overlay_E240EF8E_C359_4E7A_41D3_E6BFA81F1CB4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_8_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -6.64,
   "hfov": 4.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 74.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_9_0.png",
      "width": 125,
      "height": 149
     }
    ]
   },
   "pitch": -10.84
  }
 ],
 "id": "overlay_E240DF8E_C359_4E7A_41CD_419607110D5C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -10.84,
   "hfov": 3.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_11_0.png",
      "width": 140,
      "height": 146
     }
    ]
   },
   "pitch": -55.35
  }
 ],
 "id": "overlay_E240CF8E_C359_4E7A_41E7_382BC4AC1261",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -55.35,
   "hfov": 2.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 94.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_12_0.png",
      "width": 938,
      "height": 561
     }
    ]
   },
   "pitch": -4.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2471F8E_C359_4E7A_41D9_069E2516623D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_12_0_0_map.gif",
      "width": 26,
      "height": 15
     }
    ]
   },
   "pitch": -4.11,
   "hfov": 28.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06A506B_C34B_32BB_41C5_F44E66C269C3",
   "pitch": -7.06,
   "yaw": 94.2,
   "hfov": 5.22,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2470F8E_C359_4E7A_41CA_A94C9C19D3E8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_13_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -7.06,
   "hfov": 5.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 170.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_15_0.png",
      "width": 658,
      "height": 405
     }
    ]
   },
   "pitch": -21.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2477F8E_C359_4E7A_41C0_0C9E1AFCD877",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_15_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -21.98,
   "hfov": 18.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06AA06B_C34B_32BB_41E5_1B4105B1F80B",
   "pitch": -24.61,
   "yaw": 171,
   "hfov": 6.6,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2475F8E_C359_4E7A_41E8_58EA329AD5B2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_16_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -24.61,
   "hfov": 6.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 164.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_17_0.png",
      "width": 1115,
      "height": 694
     }
    ]
   },
   "pitch": -50.22
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2474F8E_C359_4E7A_41D8_E63933377960",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_17_0_0_map.gif",
      "width": 25,
      "height": 15
     }
    ]
   },
   "pitch": -50.22,
   "hfov": 21.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06AF06B_C34B_32BB_41B0_F0F74C3A5A4C",
   "pitch": -54.39,
   "yaw": 165.37,
   "hfov": 5.86,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E247BF8E_C359_4E7A_41AC_E840B126D2C1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_14_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -54.39,
   "hfov": 5.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 9.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.56,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_19_0.png",
      "width": 1051,
      "height": 722
     }
    ]
   },
   "pitch": -44.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2479F8E_C359_4E7A_41DF_026020AD2D8F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_19_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -44.31,
   "hfov": 22.56
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06B306B_C34B_32BB_41E3_5B5A4EB3ECBD",
   "pitch": -49.19,
   "yaw": 9.59,
   "hfov": 5.88,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E247EF8E_C359_4E7A_41E2_79B678BB8CEF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_18_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -49.19,
   "hfov": 5.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 60.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_20_0.png",
      "width": 673,
      "height": 497
     }
    ]
   },
   "pitch": -7.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E247CF8E_C359_4E7A_41E6_59ABFB073124",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_20_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -7.43,
   "hfov": 20.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06B706B_C34B_32BB_417F_C54FC2AE1336",
   "pitch": -10.22,
   "yaw": 59.87,
   "hfov": 7.67,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2463F8E_C359_4E7A_41DC_927A0ACF072C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_21_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -10.22,
   "hfov": 7.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 47.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_22_0.png",
      "width": 420,
      "height": 307
     }
    ]
   },
   "pitch": -6.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2460F8E_C359_4E7A_41E4_47981FF14496",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_22_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -6.98,
   "hfov": 12.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E06BB06B_C34B_32BB_41D0_4A508C8552DF",
   "pitch": -8.98,
   "yaw": 47.52,
   "hfov": 2.66,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2467F8E_C359_4E7A_4199_F77E62E10F42",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_23_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -8.98,
   "hfov": 2.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 32.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_24_0.png",
      "width": 359,
      "height": 228
     }
    ]
   },
   "pitch": -6.28
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2465F8E_C359_4E7A_41C1_D21412895237",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_24_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -6.28,
   "hfov": 10.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E068006B_C34B_32BB_4198_2106C9154301",
   "pitch": -7.96,
   "yaw": 32.79,
   "hfov": 5.64,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2464F8E_C359_4E7A_41E7_CA01B1F61AEE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_25_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -7.96,
   "hfov": 5.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -99.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_26_0.png",
      "width": 940,
      "height": 477
     }
    ]
   },
   "pitch": 3.05
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E246BF8E_C359_4E7A_41E0_EE9B95F47986",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_26_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 3.05,
   "hfov": 28.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -109.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_27_0.png",
      "width": 145,
      "height": 123
     }
    ]
   },
   "pitch": 6.18
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2469F8E_C359_4E7A_41DB_1C0DAC39CED9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_27_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 6.18,
   "hfov": 4.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_28_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -67.25
  }
 ],
 "id": "overlay_E2468F8E_C359_4E7A_41E1_65EC8C833118",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_28_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.25,
   "hfov": 3.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 56.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_32_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 3.91
  }
 ],
 "id": "overlay_E246FF8E_C359_4E7A_41DD_9C9946A6D9A3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_32_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 3.91,
   "hfov": 3.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_33_0.png",
      "width": 296,
      "height": 118
     }
    ]
   },
   "pitch": 4.03,
   "yaw": 62.3,
   "hfov": 8.86,
   "distance": 50
  }
 ],
 "id": "overlay_E246DF8E_C359_4E7A_41DE_3297FC50FED3",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_33_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 4.03,
   "hfov": 8.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 30.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_34_0.png",
      "width": 475,
      "height": 240
     }
    ]
   },
   "pitch": 0.93
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E246CF8E_C359_4E7A_41C3_CFB5CD1DE07E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_34_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 0.93,
   "hfov": 14.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_35_0.png",
      "width": 437,
      "height": 391
     }
    ]
   },
   "pitch": 0.45
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2453F8E_C359_4E7A_41CA_D6D9CFD2805A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_35_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.45,
   "hfov": 13.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -3.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_36_0.png",
      "width": 319,
      "height": 190
     }
    ]
   },
   "pitch": 0.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_E2451F8E_C359_4E7A_41D3_85F6F43F89BF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_36_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 0.1,
   "hfov": 9.57
  }
 ]
},
{
 "yaw": -106.89,
 "bleaching": 0.7,
 "pitch": 46.79,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F348AF_C743_910C_41E6_5F673A2BF48E",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -118.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_1_HS_0_0.png",
      "width": 80,
      "height": 94
     }
    ]
   },
   "pitch": -5.88
  }
 ],
 "id": "overlay_D2951760_C746_BF35_41C2_D1C4CA9CCBFD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -5.88,
   "hfov": 3.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -122.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_1_HS_1_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -64.23
  }
 ],
 "id": "overlay_D2953760_C746_BF35_41E6_A5EA519FA059",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D296F760_C746_BF35_41C6_EE9F9F23ADDD_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -64.23,
   "hfov": 4.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -24.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_0_0.png",
      "width": 81,
      "height": 87
     }
    ]
   },
   "pitch": -0.97
  }
 ],
 "id": "overlay_DE14821A_C742_9115_41D6_352D12609EE0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.97,
   "hfov": 3.84
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 157.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_1_0.png",
      "width": 82,
      "height": 78
     }
    ]
   },
   "pitch": -1.48
  }
 ],
 "id": "overlay_DE14921A_C742_9115_41C2_6EFB97D068D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.48,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -130.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.69,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_2_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 42.38
  }
 ],
 "id": "overlay_DE14B21A_C742_9115_41D6_BCE0E45788D6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 42.38,
   "hfov": 2.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_3_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 42.37,
   "yaw": -123.85,
   "hfov": 6.63,
   "distance": 50
  }
 ],
 "id": "overlay_DE14E21A_C742_9115_41D8_993FF3F6508C",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_3_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 42.37,
   "hfov": 6.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 174.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_4_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 25.64
  }
 ],
 "id": "overlay_DE17021A_C742_9115_41E5_3BD2B5F441CA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 25.64,
   "hfov": 3.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_5_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 25.87,
   "yaw": 179.94,
   "hfov": 8.03,
   "distance": 50
  }
 ],
 "id": "overlay_DE17121A_C742_9115_41E3_2F6E2F1C2DA3",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_5_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 25.87,
   "hfov": 8.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -158.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_6_0.png",
      "width": 473,
      "height": 361
     }
    ]
   },
   "pitch": 0.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE17521A_C742_9115_41AA_C1BBC59D00A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_6_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 0.82,
   "hfov": 22.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6393593_C74D_931B_41E0_6D40ACAF8B4B",
   "pitch": -2.71,
   "yaw": -158.06,
   "hfov": 7.79,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE17821A_C742_9115_41BA_2FBD1D9DD21B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_7_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -2.71,
   "hfov": 7.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -165.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -59.21
  }
 ],
 "id": "overlay_DE17A21A_C742_9115_41D3_F064B739089D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -59.21,
   "hfov": 4.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 15.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_9_0.png",
      "width": 747,
      "height": 370
     }
    ]
   },
   "pitch": 0.32
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE17B21A_C742_9115_41E0_63E7DE1F3B1A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_9_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 0.32,
   "hfov": 35.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E638A593_C74D_931B_41C0_86F7C92D660C",
   "pitch": -3.41,
   "yaw": 15.73,
   "hfov": 11.96,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE17C21A_C742_9115_41E7_93F0097FFC3C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_10_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -3.41,
   "hfov": 11.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -16.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_11_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 32.73
  }
 ],
 "id": "overlay_DE17D21A_C742_9115_41E5_2C0D1C5C014A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_11_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 32.73,
   "hfov": 3.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_12_0.png",
      "width": 186,
      "height": 71
     }
    ]
   },
   "pitch": 33,
   "yaw": -11.17,
   "hfov": 7.33,
   "distance": 50
  }
 ],
 "id": "overlay_DE17F21A_C742_9115_41E0_70317369F828",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_12_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 33,
   "hfov": 7.33
  }
 ]
},
{
 "yaw": 11.93,
 "bleaching": 0.7,
 "pitch": 34.23,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EEBA3E_C745_F10D_41E7_454AD061E90C",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -67.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_0_0.png",
      "width": 87,
      "height": 89
     }
    ]
   },
   "pitch": -0.27
  }
 ],
 "id": "overlay_D7806B55_C74D_B71F_41DA_5A5867AAC5C0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.27,
   "hfov": 4.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_1_0.png",
      "width": 94,
      "height": 82
     }
    ]
   },
   "pitch": -2.54
  }
 ],
 "id": "overlay_D78F9B55_C74D_B71F_41AC_EE3F38424A8C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.54,
   "hfov": 4.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -142.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_2_0.png",
      "width": 104,
      "height": 96
     }
    ]
   },
   "pitch": -0.7
  }
 ],
 "id": "overlay_D78F8B55_C74D_B71F_41E4_AE62C26B0179",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.7,
   "hfov": 4.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 89.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_3_0.png",
      "width": 87,
      "height": 99
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_D78FBB55_C74D_B71F_41D1_979F0EC22028",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -1.61,
   "hfov": 4.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 34.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_5_0.png",
      "width": 105,
      "height": 91
     }
    ]
   },
   "pitch": -2.4
  }
 ],
 "id": "overlay_D78FAB55_C74D_B71F_41DA_DCB3894C2E5C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -2.4,
   "hfov": 4.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 160.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_6_0.png",
      "width": 509,
      "height": 255
     }
    ]
   },
   "pitch": -1.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D78FDB55_C74D_B71F_41C2_0D1A79908CF5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_6_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": -1.15,
   "hfov": 23.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 169.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_7_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": -1.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D78FCB55_C74D_B71F_41D0_C0B381D10D21",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_7_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -1.23,
   "hfov": 5.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -38.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -67.75
  }
 ],
 "id": "overlay_D78FFB55_C74D_B71F_41E8_444FE5FDC837",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.75,
   "hfov": 3.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image Her"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 22.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_10_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 6.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D78F1B55_C74D_B71F_41C9_D8BB4FF9A52E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_10_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 6.01,
   "hfov": 20.18
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 58.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_11_0.png",
      "width": 382,
      "height": 217
     }
    ]
   },
   "pitch": 2.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D78F0B55_C74D_B71F_41DE_F03CDF05F210",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_11_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 2.63,
   "hfov": 17.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -48.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_12_0.png",
      "width": 556,
      "height": 416
     }
    ]
   },
   "pitch": 15.7
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D78F3B55_C74D_B71F_41E6_0C7A6450930A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_12_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 15.7,
   "hfov": 25.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 35.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_13_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 41.33
  }
 ],
 "id": "overlay_D78F9B55_C74D_B71F_41A3_41AFB05E32CE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_13_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 41.33,
   "hfov": 2.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_14_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 41.48,
   "yaw": 41.11,
   "hfov": 6.66,
   "distance": 50
  }
 ],
 "id": "overlay_D78F8B55_C74D_B71F_41D2_FD60E60ABB77",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D7807B55_C74D_B71F_41E5_9ED7A46E1DDA_1_HS_14_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 41.48,
   "hfov": 6.66
  }
 ]
},
{
 "yaw": -69.97,
 "bleaching": 0.7,
 "pitch": 40.26,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EB6B32_C742_9715_41E1_64CD3F9241F3",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 125.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_0_0.png",
      "width": 88,
      "height": 86
     }
    ]
   },
   "pitch": -1.41
  }
 ],
 "id": "overlay_D778640B_C74E_B10B_41CA_536F170D6F8F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 125.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.41,
   "hfov": 4.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 172.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_2_0.png",
      "width": 78,
      "height": 79
     }
    ]
   },
   "pitch": 0.73
  }
 ],
 "id": "overlay_D778040B_C74E_B10B_41DD_CD07577677E6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.73,
   "hfov": 3.7
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 147.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_3_0.png",
      "width": 82,
      "height": 90
     }
    ]
   },
   "pitch": -0.02
  }
 ],
 "id": "overlay_D778340B_C74E_B10B_41D2_F1D7DC1C7D1F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.02,
   "hfov": 3.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 37.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_4_0.png",
      "width": 821,
      "height": 417
     }
    ]
   },
   "pitch": 13.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D778240B_C74E_B10B_41D9_F9BB65FB738D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_4_0_0_map.gif",
      "width": 31,
      "height": 15
     }
    ]
   },
   "pitch": 13.79,
   "hfov": 37.41
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_5_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 16.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D778C40B_C74E_B10B_41C9_B287425083AE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_5_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 16.41,
   "hfov": 5.41
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 61.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_6_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -70.51
  }
 ],
 "id": "overlay_D778E40B_C74E_B10B_41CE_BD38037CEFCF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -70.51,
   "hfov": 3.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 91.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_8_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 33.36
  }
 ],
 "id": "overlay_D778840B_C74E_B10B_41E0_C9E5B95F0E85",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_8_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 33.36,
   "hfov": 3.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_9_0.png",
      "width": 188,
      "height": 75
     }
    ]
   },
   "pitch": 33.42,
   "yaw": 97.89,
   "hfov": 7.39,
   "distance": 50
  }
 ],
 "id": "overlay_D778B40B_C74E_B10B_41A8_50484D3AC884",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_9_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 33.42,
   "hfov": 7.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -149.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_10_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 6.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D707540B_C74E_B10B_41C7_2F8B25B5164B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_10_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 6.61,
   "hfov": 20.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -100.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_11_0.png",
      "width": 350,
      "height": 283
     }
    ]
   },
   "pitch": 4.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D707440B_C74E_B10B_41E6_B7478A692EE6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_11_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 4.38,
   "hfov": 16.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 147.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_12_0.png",
      "width": 450,
      "height": 319
     }
    ]
   },
   "pitch": 8.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D707640B_C74E_B10B_41D0_77EDCBC0F745",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D778740B_C74E_B10B_41D8_8E8D572B10EC_1_HS_12_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 8.02,
   "hfov": 20.91
  }
 ]
},
{
 "yaw": -45.09,
 "bleaching": 0.7,
 "pitch": 22.92,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F66074_C742_911D_41DC_F3B3FAC95CDD",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 49.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_0_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 32.5
  }
 ],
 "id": "overlay_D1BF80C0_C743_9175_41E6_056131E63FA2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 32.5,
   "hfov": 3.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_1_0.png",
      "width": 191,
      "height": 75
     }
    ]
   },
   "pitch": 32.62,
   "yaw": 55.48,
   "hfov": 7.57,
   "distance": 50
  }
 ],
 "id": "overlay_D1BFE0C0_C743_9175_41E0_724D2D6C7CBA",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_1_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 32.62,
   "hfov": 7.57
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_2_0.png",
      "width": 79,
      "height": 88
     }
    ]
   },
   "pitch": -0.37
  }
 ],
 "id": "overlay_D1BFF0C0_C743_9175_41E6_4C2E2AA67D27",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.37,
   "hfov": 3.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -172.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_3_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 41.44
  }
 ],
 "id": "overlay_D1BFC0C0_C743_9175_41BB_05BB8F7FAC7D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 41.44,
   "hfov": 2.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_4_0.png",
      "width": 187,
      "height": 72
     }
    ]
   },
   "pitch": 41.65,
   "yaw": -166.46,
   "hfov": 6.64,
   "distance": 50
  }
 ],
 "id": "overlay_D1BFD0C0_C743_9175_41D9_75548E87FB37",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_4_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 41.65,
   "hfov": 6.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -19.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0_HS_5_0.png",
      "width": 91,
      "height": 73
     }
    ]
   },
   "pitch": -3.31
  }
 ],
 "id": "overlay_D1BF20C0_C743_9175_41D9_C24B9C5CA085",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0_HS_5_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -3.31,
   "hfov": 4.27
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -101.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0_HS_6_0.png",
      "width": 85,
      "height": 101
     }
    ]
   },
   "pitch": -4.67
  }
 ],
 "id": "overlay_D1BF30C0_C743_9175_41D0_B39B3B1D8403",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -4.67,
   "hfov": 3.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -21.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_7_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -57.95
  }
 ],
 "id": "overlay_D1BF00C0_C743_9175_418B_28BA9A5D81E8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1BFB0C0_C743_9175_41E5_19E8366FB650_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -57.95,
   "hfov": 5.05
  }
 ]
},
{
 "yaw": -132.52,
 "bleaching": 0.7,
 "pitch": 28.95,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0E9A138_C745_9315_41E6_BEE17693D39F",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -79.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_0_0.png",
      "width": 90,
      "height": 76
     }
    ]
   },
   "pitch": 0.22
  }
 ],
 "id": "overlay_DC18E806_C75D_90FD_41E6_ABBEA9394998",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.22,
   "hfov": 4.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -100.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_1_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 32.33
  }
 ],
 "id": "overlay_DC18C806_C75D_90FD_41D4_657F63B70657",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 32.33,
   "hfov": 3.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_2_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 32.41,
   "yaw": -93.82,
   "hfov": 7.55,
   "distance": 50
  }
 ],
 "id": "overlay_DC18A806_C75D_90FD_41E5_746DB84F9CB5",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_2_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 32.41,
   "hfov": 7.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 169.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_5_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 30.86
  }
 ],
 "id": "overlay_DC18B806_C75D_90FD_41E4_A39A10FFE6CF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 30.86,
   "hfov": 3.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_4_0.png",
      "width": 191,
      "height": 76
     }
    ]
   },
   "pitch": 30.98,
   "yaw": 174.99,
   "hfov": 7.69,
   "distance": 50
  }
 ],
 "id": "overlay_DC189806_C75D_90FD_41D1_ECEC64B4B6C3",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_4_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 30.98,
   "hfov": 7.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 81.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 51.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_6_0.png",
      "width": 1091,
      "height": 629
     }
    ]
   },
   "pitch": 1.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DC186806_C75D_90FD_41E8_2EEC834B2BC6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 1.3,
   "hfov": 51.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6263593_C74D_931B_41E1_BA4B1CC342F1",
   "pitch": -6.51,
   "yaw": 80.62,
   "hfov": 13.13,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DC184806_C75D_90FD_41E5_785154AC15C2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_7_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -6.51,
   "hfov": 13.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 55.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -67.75
  }
 ],
 "id": "overlay_DC180806_C75D_90FD_41E0_CC54E268F5B2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.75,
   "hfov": 3.6
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -61.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_9_0.png",
      "width": 718,
      "height": 397
     }
    ]
   },
   "pitch": 3.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DC1BE806_C75D_90FD_41BE_BF04796C238A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_9_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 3.33,
   "hfov": 33.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E625C593_C74D_931B_41D8_502AAE47F8B4",
   "pitch": -0.87,
   "yaw": -61.05,
   "hfov": 7.8,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DC1BF806_C75D_90FD_41BB_6AE23FB36BFF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_10_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -0.87,
   "hfov": 7.8
  }
 ]
},
{
 "yaw": -1.63,
 "bleaching": 0.7,
 "pitch": 34.48,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F7B352_C745_9715_41D8_2C15D523A6A7",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -35.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0_HS_1_0.png",
      "width": 83,
      "height": 87
     }
    ]
   },
   "pitch": -1.92
  }
 ],
 "id": "overlay_D0DB98C8_C745_7175_41B2_1DC16BB56DC9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.92,
   "hfov": 3.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -39.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_2_0.png",
      "width": 724,
      "height": 373
     }
    ]
   },
   "pitch": 13.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0DB88C8_C745_7175_41BB_A3D0B595242A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_2_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 13.04,
   "hfov": 33.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -30.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_3_0.png",
      "width": 92,
      "height": 85
     }
    ]
   },
   "pitch": 10.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0DB68C8_C745_7175_41E5_3A56C8C2EA9F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 10.31,
   "hfov": 4.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 144.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -65.99
  }
 ],
 "id": "overlay_D0DB48C8_C745_7175_41CF_22035B12C546",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -65.99,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_6_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 21.25
  }
 ],
 "id": "overlay_D0DB28C8_C745_7175_41C4_1BA95F166598",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_6_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 21.25,
   "hfov": 3.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_7_0.png",
      "width": 188,
      "height": 75
     }
    ]
   },
   "pitch": 21.34,
   "yaw": -6.98,
   "hfov": 8.25,
   "distance": 50
  }
 ],
 "id": "overlay_D0DAC8C8_C745_7175_41E1_0A007E181010",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_7_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 21.34,
   "hfov": 8.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -120.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 39.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_8_0.png",
      "width": 886,
      "height": 426
     }
    ]
   },
   "pitch": 19.26
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0DAA8C8_C745_7175_41E8_C375A377B19A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_1_HS_8_0_0_map.gif",
      "width": 33,
      "height": 16
     }
    ]
   },
   "pitch": 19.26,
   "hfov": 39.24
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -73.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0_HS_9_0.png",
      "width": 592,
      "height": 378
     }
    ]
   },
   "pitch": 5.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0DA98C8_C745_7175_41E6_12B41D8E0448",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0DBC8C8_C745_7175_41E7_228A0840F889_0_HS_9_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 5.15,
   "hfov": 27.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 55.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_0_0.png",
      "width": 102,
      "height": 84
     }
    ]
   },
   "pitch": -1.18
  }
 ],
 "id": "overlay_C8302E69_C74F_7137_41E6_1796ADC00AEA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -1.18,
   "hfov": 4.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 100.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_1_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 38.81
  }
 ],
 "id": "overlay_C8301E69_C74F_7137_41B2_53FAA6F5282C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 38.81,
   "hfov": 2.84
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_2_0.png",
      "width": 188,
      "height": 75
     }
    ]
   },
   "pitch": 38.92,
   "yaw": 106.98,
   "hfov": 6.89,
   "distance": 50
  }
 ],
 "id": "overlay_C8300E69_C74F_7137_41E3_CE7E76DD3430",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_2_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 38.92,
   "hfov": 6.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_3_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -58.7
  }
 ],
 "id": "overlay_C831FE69_C74F_7137_41DF_CEC6BFE9CBDD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -58.7,
   "hfov": 4.94
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 9.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0_HS_4_0.png",
      "width": 597,
      "height": 419
     }
    ]
   },
   "pitch": 10.37
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C831EE69_C74F_7137_41DE_3A72E1C2C242",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0_HS_4_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 10.37,
   "hfov": 27.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -38.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 38.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0_HS_5_0.png",
      "width": 912,
      "height": 544
     }
    ]
   },
   "pitch": 26.74
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C831CE69_C74F_7137_41E1_D01DD490C82D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C8303E69_C74F_7137_41E3_77860354A5A8_0_HS_5_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 26.74,
   "hfov": 38.21
  }
 ]
},
{
 "yaw": 36.55,
 "bleaching": 0.7,
 "pitch": 23.68,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D860809A_C742_B115_41DA_79440BD0511E",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -176.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_0_0.png",
      "width": 83,
      "height": 82
     }
    ]
   },
   "pitch": -2.01
  }
 ],
 "id": "overlay_DA71F514_C742_931D_41E6_C211CA866A47",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.01,
   "hfov": 3.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 78.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_1_0.png",
      "width": 90,
      "height": 82
     }
    ]
   },
   "pitch": -1.85
  }
 ],
 "id": "overlay_DA700514_C742_931D_41C8_DB9DBB415852",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.85,
   "hfov": 4.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -154.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_2_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 30.19
  }
 ],
 "id": "overlay_DA702514_C742_931D_41DA_732092ED8A34",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 30.19,
   "hfov": 3.15
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_3_0.png",
      "width": 190,
      "height": 73
     }
    ]
   },
   "pitch": 30.4,
   "yaw": -148.7,
   "hfov": 7.74,
   "distance": 50
  }
 ],
 "id": "overlay_DA704514_C742_931D_41D0_E57B52A268D8",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_3_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 30.4,
   "hfov": 7.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 129.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_4_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 23.06
  }
 ],
 "id": "overlay_DA705514_C742_931D_41D1_38359848AA2F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 23.06,
   "hfov": 3.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_5_0.png",
      "width": 187,
      "height": 71
     }
    ]
   },
   "pitch": 23.34,
   "yaw": 135.43,
   "hfov": 8.09,
   "distance": 50
  }
 ],
 "id": "overlay_DA706514_C742_931D_41E5_BB6483D6608E",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_5_0_map.gif",
      "width": 42,
      "height": 16
     }
    ]
   },
   "pitch": 23.34,
   "hfov": 8.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -64.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 49.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_6_0.png",
      "width": 1350,
      "height": 899
     }
    ]
   },
   "pitch": 38.87
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DA707514_C742_931D_41C7_73C564E55FB9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_6_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": 38.87,
   "hfov": 49.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -61.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_7_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -70.51
  }
 ],
 "id": "overlay_DA709514_C742_931D_41AF_1978438618B5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DA71D514_C742_931D_4147_A1C159C042D8_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -70.51,
   "hfov": 3.17
  }
 ]
},
{
 "yaw": 95.59,
 "bleaching": 0.7,
 "pitch": 38.75,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F7D182_C746_F3F5_41A2_F8B1BE9BAB66",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -147.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_0_0.png",
      "width": 87,
      "height": 111
     }
    ]
   },
   "pitch": -2.01
  }
 ],
 "id": "overlay_C9A4454B_C73E_930B_41E2_A2AD4E003A21",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -2.01,
   "hfov": 4.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 74.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_1_0.png",
      "width": 77,
      "height": 90
     }
    ]
   },
   "pitch": -0.84
  }
 ],
 "id": "overlay_C9A4754B_C73E_930B_41BA_731B488AB09E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -0.84,
   "hfov": 3.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 153.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.78,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_2_0.png",
      "width": 80,
      "height": 94
     }
    ]
   },
   "pitch": -1.15
  }
 ],
 "id": "overlay_C9A4954B_C73E_930B_41E6_86A5E8340761",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -1.15,
   "hfov": 3.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -60.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_3_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 50.35
  }
 ],
 "id": "overlay_C9A4C54B_C73E_930B_41B3_3B4155EE6BCB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 50.35,
   "hfov": 2.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_4_0.png",
      "width": 188,
      "height": 75
     }
    ]
   },
   "pitch": 50.24,
   "yaw": -54.57,
   "hfov": 5.67,
   "distance": 50
  }
 ],
 "id": "overlay_C9A4D54B_C73E_930B_41D7_3DEE322A55C5",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_4_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 50.24,
   "hfov": 5.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 127.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_5_0.png",
      "width": 218,
      "height": 226
     }
    ]
   },
   "pitch": -63.22
  }
 ],
 "id": "overlay_C9A4F54B_C73E_930B_41E4_CD6422F08026",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C9A5B54B_C73E_930B_41E7_CC451AE0B0E6_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -63.22,
   "hfov": 4.62
  }
 ]
},
{
 "yaw": -143.07,
 "bleaching": 0.7,
 "pitch": 25.69,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F62707_C743_F0FB_41D9_77B5D14070E8",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -34.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0_HS_0_0.png",
      "width": 92,
      "height": 72
     }
    ]
   },
   "pitch": -0.15
  }
 ],
 "id": "overlay_DCD5DF4C_C75F_EF0D_41E1_9D2E8212824B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -0.15,
   "hfov": 4.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -91.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_1_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 41.56
  }
 ],
 "id": "overlay_DCD5CF4C_C75F_EF0D_41CF_60EEFDC465BB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 41.56,
   "hfov": 2.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_2_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 41.7,
   "yaw": -85.07,
   "hfov": 6.7,
   "distance": 50
  }
 ],
 "id": "overlay_DCD53F4C_C75F_EF0D_41E7_6E7E4C6E3DA3",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_2_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 41.7,
   "hfov": 6.7
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -38.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_3_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -62.22
  }
 ],
 "id": "overlay_DCD52F4C_C75F_EF0D_41C0_93F30DA95229",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -62.22,
   "hfov": 4.43
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E6241593_C74D_931B_41E0_4DCD2A3ADEB9",
   "pitch": -3.71,
   "yaw": 7.63,
   "hfov": 7.78,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCD51F4C_C75F_EF0D_41E2_DE0C684C0422",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_4_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -3.71,
   "hfov": 7.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_5_0.png",
      "width": 423,
      "height": 311
     }
    ]
   },
   "pitch": -0.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCD50F4C_C75F_EF0D_41E2_9628B37B42A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_5_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -0.5,
   "hfov": 19.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -37.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0_HS_6_0.png",
      "width": 425,
      "height": 269
     }
    ]
   },
   "pitch": 4.36
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCD57F4C_C75F_EF0D_41E4_6C992E40F80C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_0_HS_6_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 4.36,
   "hfov": 19.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 159.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_7_0.png",
      "width": 92,
      "height": 72
     }
    ]
   },
   "pitch": -0.98
  }
 ],
 "id": "overlay_DCD56F4C_C75F_EF0D_41B9_6797C21B6B30",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_7_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -0.98,
   "hfov": 4.32
  }
 ]
},
{
 "yaw": -149.1,
 "bleaching": 0.7,
 "pitch": 33.73,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F6BB7D_C745_770F_41DA_35CFADFFFF32",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -15.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_0_0.png",
      "width": 75,
      "height": 82
     }
    ]
   },
   "pitch": -4.56
  }
 ],
 "id": "overlay_D5A14FB6_C747_AF1D_41E3_1A9A295E7195",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -4.56,
   "hfov": 3.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 164.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_1_0.png",
      "width": 85,
      "height": 79
     }
    ]
   },
   "pitch": 1.23
  }
 ],
 "id": "overlay_D5A17FB6_C747_AF1D_41E1_AD489EB369B6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 1.23,
   "hfov": 3.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 158,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_2_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -70.01
  }
 ],
 "id": "overlay_D5A16FB6_C747_AF1D_41CA_82BCA1DA6317",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D5A15FB6_C747_AF1D_41D5_C1089E76D64A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -70.01,
   "hfov": 3.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 67.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_0_0.png",
      "width": 83,
      "height": 90
     }
    ]
   },
   "pitch": -1.26
  }
 ],
 "id": "overlay_D67DAA82_C74D_B1F5_41E2_05A186946A31",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.26,
   "hfov": 3.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 99.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_1_0.png",
      "width": 56,
      "height": 48
     }
    ]
   },
   "pitch": 0.48
  }
 ],
 "id": "overlay_D67D5A82_C74D_B1F5_419C_4BBE969828C0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_1_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.48,
   "hfov": 2.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 6.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_2_0.png",
      "width": 88,
      "height": 98
     }
    ]
   },
   "pitch": -2.47
  }
 ],
 "id": "overlay_D67D4A82_C74D_B1F5_418B_07C7A5DA16E4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -2.47,
   "hfov": 4.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_3_0.png",
      "width": 88,
      "height": 101
     }
    ]
   },
   "pitch": -0.21
  }
 ],
 "id": "overlay_D67D6A82_C74D_B1F5_41E1_43A6D548C2F1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -0.21,
   "hfov": 4.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 159.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_4_0.png",
      "width": 99,
      "height": 93
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "id": "overlay_D67D1A82_C74D_B1F5_41E1_60C6BB9E06C5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.61,
   "hfov": 4.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -111.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_5_0.png",
      "width": 86,
      "height": 85
     }
    ]
   },
   "pitch": 0.1
  }
 ],
 "id": "overlay_D67D0A82_C74D_B1F5_41D9_80777D5CA5AC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.1,
   "hfov": 4.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -162.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_6_0.png",
      "width": 91,
      "height": 87
     }
    ]
   },
   "pitch": -0.46
  }
 ],
 "id": "overlay_D67D3A82_C74D_B1F5_41D2_51F031D2F38C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.46,
   "hfov": 4.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 135.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_7_0.png",
      "width": 99,
      "height": 87
     }
    ]
   },
   "pitch": 0.2
  }
 ],
 "id": "overlay_D67CDA82_C74D_B1F5_41D9_1D4CFB391DC5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_0_HS_7_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.2,
   "hfov": 4.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 157.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_8_0.png",
      "width": 507,
      "height": 351
     }
    ]
   },
   "pitch": 15.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67CCA82_C74D_B1F5_41E3_4133792E7C78",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_8_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": 15.27,
   "hfov": 22.95
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -156.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_9_0.png",
      "width": 493,
      "height": 271
     }
    ]
   },
   "pitch": 10.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67D8A82_C74D_B1F5_41D0_90096214F9D6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_9_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": 10.68,
   "hfov": 22.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -18.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_13_0.png",
      "width": 619,
      "height": 313
     }
    ]
   },
   "pitch": 12.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67DBA82_C74D_B1F5_41E5_199DE1188AE4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_13_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 12.99,
   "hfov": 28.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -8.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_14_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 12.36
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67DAA82_C74D_B1F5_41B3_B13E2398BECE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_14_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 12.36,
   "hfov": 5.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 161.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_15_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -50.91
  }
 ],
 "id": "overlay_D67D5A82_C74D_B1F5_41DB_2F16624EA513",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -50.91,
   "hfov": 5.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 60.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_17_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 28.31
  }
 ],
 "id": "overlay_D67D7A82_C74D_B1F5_41DE_817E9EED4313",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_17_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 28.31,
   "hfov": 3.21
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_18_0.png",
      "width": 188,
      "height": 76
     }
    ]
   },
   "pitch": 28.38,
   "yaw": 65.66,
   "hfov": 7.78,
   "distance": 50
  }
 ],
 "id": "overlay_D67D6A82_C74D_B1F5_41CF_2AB8F8F4BEEE",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_18_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 28.38,
   "hfov": 7.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_19_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 9.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67D1A82_C74D_B1F5_41D2_49E18DA1D302",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_19_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 9.71,
   "hfov": 20
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -77.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_20_0.png",
      "width": 350,
      "height": 283
     }
    ]
   },
   "pitch": 4.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D67D0A82_C74D_B1F5_41E0_9797930410F4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_20_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 4.67,
   "hfov": 16.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -106.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_21_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 22.43
  }
 ],
 "id": "overlay_D67D3A82_C74D_B1F5_41E0_9B050BEEBB0E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_21_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 22.43,
   "hfov": 3.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_22_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 22.56,
   "yaw": -100.9,
   "hfov": 8.24,
   "distance": 50
  }
 ],
 "id": "overlay_D67D2A82_C74D_B1F5_41D6_033BF82D62C1",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D67DBA82_C74D_B1F5_41AC_8C013E05EC36_1_HS_22_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 22.56,
   "hfov": 8.24
  }
 ]
},
{
 "yaw": 159.65,
 "bleaching": 0.7,
 "pitch": 21.42,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D095AC39_C742_B117_41B8_287A440A9243",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 6.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_2_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 4.07
  }
 ],
 "id": "overlay_4BA35AB3_5B88_6A10_41C7_DF81A8698F54",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 4.07,
   "hfov": 3.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_3_0.png",
      "width": 295,
      "height": 119
     }
    ]
   },
   "pitch": 4.07,
   "yaw": 12.17,
   "hfov": 8.88,
   "distance": 50
  }
 ],
 "id": "overlay_4B706563_5B88_1E37_41B5_E2CD509313DE",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_3_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 4.07,
   "hfov": 8.88
  }
 ]
},
{
 "yaw": 86.04,
 "bleaching": 0.6,
 "pitch": 50.31,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_4B69C705_5B88_3BF0_4192_9DDE6C458C68",
 "bleachingDistance": 1
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 4.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_5_0.png",
      "width": 107,
      "height": 120
     }
    ]
   },
   "pitch": -23.09
  }
 ],
 "id": "overlay_6FAF4760_603B_C810_41A1_920DABA31BE4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_5_0_0_map.gif",
      "width": 15,
      "height": 17
     }
    ]
   },
   "pitch": -23.09,
   "hfov": 2.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_6_0.png",
      "width": 134,
      "height": 91
     }
    ]
   },
   "pitch": -22.7,
   "yaw": 7.71,
   "hfov": 3.77,
   "distance": 50
  }
 ],
 "id": "overlay_71295E46_6039_5810_41C6_7485C8953EBD",
 "data": {
  "label": "Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_6_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -22.7,
   "hfov": 3.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_7_0.png",
      "width": 158,
      "height": 92
     }
    ]
   },
   "pitch": -22.62,
   "yaw": 1.71,
   "hfov": 4.42,
   "distance": 50
  }
 ],
 "id": "overlay_6FDD9F5F_603B_D830_41A9_10896372E034",
 "data": {
  "label": "Jump"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_7_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.62,
   "hfov": 4.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_8_0.png",
      "width": 143,
      "height": 96
     }
    ]
   },
   "pitch": -8.4
  }
 ],
 "id": "overlay_3D967E2E_607B_3810_41CF_EBFA21C68135",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_8_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -8.4,
   "hfov": 4.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_9_0.png",
      "width": 120,
      "height": 101
     }
    ]
   },
   "pitch": -11.19
  }
 ],
 "id": "overlay_3D063AF9_6079_79F0_41D0_ED62DB8C4A99",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_9_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -11.19,
   "hfov": 3.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_10_0.png",
      "width": 93,
      "height": 115
     }
    ]
   },
   "pitch": -7.23
  }
 ],
 "id": "overlay_3DD56808_6079_5810_41B7_B72CF8D1833C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -7.23,
   "hfov": 2.79
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_11_0.png",
      "width": 114,
      "height": 108
     }
    ]
   },
   "pitch": -15.99
  }
 ],
 "id": "overlay_3D544CAE_6076_D810_41BD_8E2C989B4AC3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.99,
   "hfov": 3.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_13_0.png",
      "width": 102,
      "height": 118
     }
    ]
   },
   "pitch": -20.03
  }
 ],
 "id": "overlay_3D446596_6077_C830_41C0_B8C005815543",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -20.03,
   "hfov": 2.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_14_0.png",
      "width": 122,
      "height": 102
     }
    ]
   },
   "pitch": -12.98
  }
 ],
 "id": "overlay_3D799CE9_6077_3810_41D4_C8C86855BE78",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_14_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -12.98,
   "hfov": 3.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_15_0.png",
      "width": 100,
      "height": 100
     }
    ]
   },
   "pitch": -9.4
  }
 ],
 "id": "overlay_3D286F70_6069_38F0_41D3_840857E055E2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.4,
   "hfov": 2.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -175.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_17_0.png",
      "width": 1001,
      "height": 505
     }
    ]
   },
   "pitch": 4.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7415C2F5_6546_DBCE_41AB_899942F3141D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_17_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 4.38,
   "hfov": 29.95
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -161.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_20_0.png",
      "width": 174,
      "height": 139
     }
    ]
   },
   "pitch": 3.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_742E8231_6546_5A46_4181_4FE041EFB54F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_20_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 3.99,
   "hfov": 5.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -34.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_22_0.png",
      "width": 114,
      "height": 108
     }
    ]
   },
   "pitch": -19.61
  }
 ],
 "id": "overlay_D388308D_C11F_060C_41DB_6B827165492F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51C4FDDB_5B78_2E17_41D5_8913B09B99BC_1_HS_22_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -19.61,
   "hfov": 3.24
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -60.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0_HS_0_0.png",
      "width": 96,
      "height": 77
     }
    ]
   },
   "pitch": -5.32
  }
 ],
 "id": "overlay_DE44E80D_C743_B10C_41E4_718756187880",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -5.32,
   "hfov": 4.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -34.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_1_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 54.73
  }
 ],
 "id": "overlay_DE44580D_C743_B10C_41DF_55A8A84872D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 54.73,
   "hfov": 2.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_2_0.png",
      "width": 185,
      "height": 71
     }
    ]
   },
   "pitch": 54.79,
   "yaw": -28.41,
   "hfov": 5.11,
   "distance": 50
  }
 ],
 "id": "overlay_DE44680D_C743_B10C_41D4_E05D43E07EAB",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_2_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 54.79,
   "hfov": 5.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 160.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0_HS_3_0.png",
      "width": 81,
      "height": 87
     }
    ]
   },
   "pitch": -1.8
  }
 ],
 "id": "overlay_DE44080D_C743_B10C_41E1_87BCF63340CF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -1.8,
   "hfov": 3.8
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 115.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_4_0.png",
      "width": 747,
      "height": 370
     }
    ]
   },
   "pitch": -2.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE44380D_C743_B10C_41BF_2637455D52F3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -2.65,
   "hfov": 35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63A8593_C74D_931B_41E6_9473E6C2515D",
   "pitch": -6.08,
   "yaw": 115.48,
   "hfov": 11.92,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE44280D_C743_B10C_41E1_1252A1169792",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_5_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -6.08,
   "hfov": 11.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 175.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_6_0.png",
      "width": 430,
      "height": 318
     }
    ]
   },
   "pitch": -0.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE45D80D_C743_B10C_41B7_1A3C48A46073",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_6_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -0.5,
   "hfov": 20.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63A7593_C74D_931B_41B7_98E47412397C",
   "pitch": -3.31,
   "yaw": 175.8,
   "hfov": 7.78,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE45F80D_C743_B10C_41C1_4D3797AEA221",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_7_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -3.31,
   "hfov": 7.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 119.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_8_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -63.98
  }
 ],
 "id": "overlay_DE45E80D_C743_B10C_41E5_66624580E335",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -63.98,
   "hfov": 4.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -109.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_0_0.png",
      "width": 96,
      "height": 85
     }
    ]
   },
   "pitch": 0.66
  }
 ],
 "id": "overlay_C88D6F01_C74E_B0F7_41E0_673024A20E78",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 0.66,
   "hfov": 4.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_1_0.png",
      "width": 96,
      "height": 87
     }
    ]
   },
   "pitch": -1.3
  }
 ],
 "id": "overlay_C88D9F01_C74E_B0F7_41DB_32EC544CCFBE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.3,
   "hfov": 4.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 54.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_2_0.png",
      "width": 85,
      "height": 94
     }
    ]
   },
   "pitch": 0.01
  }
 ],
 "id": "overlay_C88D8F01_C74E_B0F7_41D5_BD9594CB37A6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.01,
   "hfov": 3.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 31.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_3_0.png",
      "width": 71,
      "height": 65
     }
    ]
   },
   "pitch": -0.03
  }
 ],
 "id": "overlay_C88DBF01_C74E_B0F7_41D4_9BFA3AEA8CE4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.03,
   "hfov": 3.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -34.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_4_0.png",
      "width": 98,
      "height": 92
     }
    ]
   },
   "pitch": 0.76
  }
 ],
 "id": "overlay_C88DDF01_C74E_B0F7_41E3_A037441EF164",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.76,
   "hfov": 4.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 93.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_5_0.png",
      "width": 92,
      "height": 81
     }
    ]
   },
   "pitch": -0.62
  }
 ],
 "id": "overlay_C88DCF01_C74E_B0F7_41D2_D3667597F165",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_5_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -0.62,
   "hfov": 4.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_6_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 22.31
  }
 ],
 "id": "overlay_C88DEF01_C74E_B0F7_41D5_C48C8BA09E01",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_6_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 22.31,
   "hfov": 3.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_7_0.png",
      "width": 188,
      "height": 76
     }
    ]
   },
   "pitch": 22.42,
   "yaw": 7.92,
   "hfov": 8.22,
   "distance": 50
  }
 ],
 "id": "overlay_C88C0F01_C74E_B0F7_41B0_061E098A5C9D",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_7_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 22.42,
   "hfov": 8.22
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 51.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_8_0.png",
      "width": 310,
      "height": 196
     }
    ]
   },
   "pitch": 8.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C3F01_C74E_B0F7_41D2_D6B0CE606693",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_8_0_0_map.gif",
      "width": 25,
      "height": 15
     }
    ]
   },
   "pitch": 8.64,
   "hfov": 14.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 103.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_9_0.png",
      "width": 538,
      "height": 236
     }
    ]
   },
   "pitch": 7.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C5F01_C74E_B0F7_41D7_A858E36D567F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_9_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 7.02,
   "hfov": 25.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -132.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_12_0.png",
      "width": 671,
      "height": 341
     }
    ]
   },
   "pitch": 11.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C4F01_C74E_B0F7_41C3_ABC499C25B47",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_12_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 11.46,
   "hfov": 30.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -121.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_13_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 11.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C7F01_C74E_B0F7_41B6_7A48D254E1F5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_13_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 11.96,
   "hfov": 5.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 51.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_14_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -66.99
  }
 ],
 "id": "overlay_C88C6F01_C74E_B0F7_41E7_DB46E44BDD04",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -66.99,
   "hfov": 3.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 128.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_15_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 7.92
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C9F01_C74E_B0F7_41E7_9B376643A2DD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_15_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 7.92,
   "hfov": 20.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 170.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_16_0.png",
      "width": 350,
      "height": 283
     }
    ]
   },
   "pitch": 5.7
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C88C3F01_C74E_B0F7_41E7_3D73E58F85F5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_16_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 5.7,
   "hfov": 16.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 65.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_17_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 23.15
  }
 ],
 "id": "overlay_C88C2F01_C74E_B0F7_41E6_BE777F168989",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_17_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 23.15,
   "hfov": 3.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_18_0.png",
      "width": 187,
      "height": 75
     }
    ]
   },
   "pitch": 23.28,
   "yaw": 70.89,
   "hfov": 8.09,
   "distance": 50
  }
 ],
 "id": "overlay_C88C5F01_C74E_B0F7_41E8_4F1327333E6C",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_18_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 23.28,
   "hfov": 8.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 114.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_19_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 22.9
  }
 ],
 "id": "overlay_C88C4F01_C74E_B0F7_41DA_82110A76B9FF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_19_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 22.9,
   "hfov": 3.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_20_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 23.01,
   "yaw": 120.48,
   "hfov": 8.17,
   "distance": 50
  }
 ],
 "id": "overlay_C88C7F01_C74E_B0F7_41D1_AC07BC6BFE4E",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_1_HS_20_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 23.01,
   "hfov": 8.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 81.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_21_0.png",
      "width": 105,
      "height": 91
     }
    ]
   },
   "pitch": -0.9
  }
 ],
 "id": "overlay_C88C6F01_C74E_B0F7_41E8_52FCEC3C5C39",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C88D7F01_C74E_B0F7_41E4_906B2DA8FD5A_0_HS_21_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -0.9,
   "hfov": 4.93
  }
 ]
},
{
 "yaw": -140.56,
 "bleaching": 0.7,
 "pitch": 22.92,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0ED5299_C743_7117_41BB_B6D44104EEE0",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -7.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_0_0.png",
      "width": 102,
      "height": 81
     }
    ]
   },
   "pitch": -3.29
  }
 ],
 "id": "overlay_D2B02C0D_C746_910F_41C9_C2AC5219C1D7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_0_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -3.29,
   "hfov": 4.81
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -57.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_1_0.png",
      "width": 88,
      "height": 82
     }
    ]
   },
   "pitch": -1.25
  }
 ],
 "id": "overlay_D2B0EC0D_C746_910F_41E7_2C4B0675025C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 4.15
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -20.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.46,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_2_0.png",
      "width": 95,
      "height": 86
     }
    ]
   },
   "pitch": -1.41
  }
 ],
 "id": "overlay_D2B08C0D_C746_910F_41E5_38A79E1D7F9E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -1.41,
   "hfov": 4.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 98.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_3_0.png",
      "width": 87,
      "height": 73
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "id": "overlay_D2B0AC0D_C746_910F_41E4_21DCC3C0D150",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -2.5,
   "hfov": 4.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -170.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_5_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -64.98
  }
 ],
 "id": "overlay_D2B0BC0D_C746_910F_41E3_D68A48D45F48",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -64.98,
   "hfov": 4.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 46.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_7_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 43.57
  }
 ],
 "id": "overlay_D2B75C0D_C746_910F_41E1_5B38F35847DB",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 43.57,
   "hfov": 2.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Fly Here"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_8_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 43.63,
   "yaw": 52.92,
   "hfov": 6.44,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2B77C0D_C746_910F_41DD_0B35E4B3E6F8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_8_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 43.63,
   "hfov": 6.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -46.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_9_0.png",
      "width": 362,
      "height": 266
     }
    ]
   },
   "pitch": 3.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2B71C0D_C746_910F_41D5_1E5D2A473D2F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2B01C0D_C746_910F_41D4_664FCCB5E087_1_HS_9_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 3.21,
   "hfov": 16.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 145.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_0_0.png",
      "width": 99,
      "height": 88
     }
    ]
   },
   "pitch": -0.01
  }
 ],
 "id": "overlay_C812071B_C74F_BF0B_41D0_358994150A74",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -0.01,
   "hfov": 4.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -114.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_1_0.png",
      "width": 87,
      "height": 96
     }
    ]
   },
   "pitch": 0.54
  }
 ],
 "id": "overlay_C812271B_C74F_BF0B_41E7_2BDC408EACE1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.54,
   "hfov": 4.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 44.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_2_0.png",
      "width": 556,
      "height": 279
     }
    ]
   },
   "pitch": 11.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C813F71B_C74F_BF0B_41E8_9F27A71114FD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_2_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 11.15,
   "hfov": 25.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 54.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_3_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 11.93
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C813E71B_C74F_BF0B_41DA_E61ED694F039",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 11.93,
   "hfov": 5.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -121.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -63.48
  }
 ],
 "id": "overlay_C813971B_C74F_BF0B_41D7_C9FBF0689FC7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -63.48,
   "hfov": 4.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 55.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_5_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 50.01
  }
 ],
 "id": "overlay_C813A71B_C74F_BF0B_41C5_415B02ECCCA2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 50.01,
   "hfov": 2.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_6_0.png",
      "width": 188,
      "height": 75
     }
    ]
   },
   "pitch": 50.17,
   "yaw": 61.16,
   "hfov": 5.7,
   "distance": 50
  }
 ],
 "id": "overlay_C813571B_C74F_BF0B_41DD_017F90189C91",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_6_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 50.17,
   "hfov": 5.7
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -137.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_7_0.png",
      "width": 432,
      "height": 199
     }
    ]
   },
   "pitch": 9.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C813471B_C74F_BF0B_41C2_523188EFD32E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_7_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 9.1,
   "hfov": 20.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -101.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_8_0.png",
      "width": 350,
      "height": 283
     }
    ]
   },
   "pitch": 5.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C813671B_C74F_BF0B_41E2_AF4E439BB3E8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C812171B_C74F_BF0B_41DC_1B08291EF2EE_1_HS_8_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 5.15,
   "hfov": 16.38
  }
 ]
},
{
 "yaw": -52.88,
 "bleaching": 0.7,
 "pitch": 21.17,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F499A5_C743_933C_41D0_5DCB2F00C017",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -137.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_0_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 2.08
  }
 ],
 "id": "overlay_D009C60B_C74C_0C86_41E2_C8590EF8AFBA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 2.08,
   "hfov": 3.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_1_0.png",
      "width": 293,
      "height": 112
     }
    ]
   },
   "pitch": 2.08,
   "yaw": -131.44,
   "hfov": 8.91,
   "distance": 50
  }
 ],
 "id": "overlay_D00A060B_C74C_0C86_41E6_035757952F4C",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -131.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_1_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 2.08,
   "hfov": 8.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -173.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_2_0.png",
      "width": 125,
      "height": 153
     }
    ]
   },
   "pitch": -13.86
  }
 ],
 "id": "overlay_D00A460B_C74C_0C86_41DD_F254029A41E6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -13.86,
   "hfov": 3.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -132.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_5_0.png",
      "width": 138,
      "height": 111
     }
    ]
   },
   "pitch": -10.17
  }
 ],
 "id": "overlay_D00AB60B_C74C_0C86_41D8_0018ECDCCB0A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_5_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -10.17,
   "hfov": 4.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -125.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_6_0.png",
      "width": 108,
      "height": 145
     }
    ]
   },
   "pitch": -16.58
  }
 ],
 "id": "overlay_D00AA60B_C74C_0C86_41D8_F36AC488F429",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -16.58,
   "hfov": 3.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -100.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_7_0.png",
      "width": 117,
      "height": 119
     }
    ]
   },
   "pitch": -20.92
  }
 ],
 "id": "overlay_D00A860B_C74C_0C86_41CA_F399930F4CAF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.92,
   "hfov": 3.28
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -42.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_8_0.png",
      "width": 140,
      "height": 132
     }
    ]
   },
   "pitch": -15.9
  }
 ],
 "id": "overlay_D00AE60B_C74C_0C86_41E3_390B16D4D355",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.9,
   "hfov": 4.06
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 33.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_9_0.png",
      "width": 140,
      "height": 138
     }
    ]
   },
   "pitch": -9.74
  }
 ],
 "id": "overlay_D00AD60C_C74C_0C82_41E4_E2A5C009087B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.74,
   "hfov": 4.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 66.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_10_0.png",
      "width": 134,
      "height": 161
     }
    ]
   },
   "pitch": -22.09
  }
 ],
 "id": "overlay_D00B360C_C74C_0C82_41DF_6B1B0160C311",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -22.09,
   "hfov": 3.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 163.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_11_0.png",
      "width": 146,
      "height": 179
     }
    ]
   },
   "pitch": -14.96
  }
 ],
 "id": "overlay_D00B260C_C74C_0C82_41E5_95842D7893C7",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_11_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -14.96,
   "hfov": 4.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_12_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 7.14
  }
 ],
 "id": "overlay_D00B060C_C74C_0C82_41E8_51129484AFF3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_12_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 7.14,
   "hfov": 3.62
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_13_0.png",
      "width": 295,
      "height": 117
     }
    ]
   },
   "pitch": 7.25,
   "yaw": 3.6,
   "hfov": 8.8,
   "distance": 50
  }
 ],
 "id": "overlay_D00B760C_C74C_0C82_41E4_6074A78A0ED1",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_13_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 7.25,
   "hfov": 8.8
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 173.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_15_0.png",
      "width": 938,
      "height": 561
     }
    ]
   },
   "pitch": -1.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00B460C_C74C_0C82_41E8_67ADAB92834F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_15_0_0_map.gif",
      "width": 26,
      "height": 15
     }
    ]
   },
   "pitch": -1.76,
   "hfov": 28.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E066605B_C34B_329A_41C0_2C163376453B",
   "pitch": -4.9,
   "yaw": 173.86,
   "hfov": 5.24,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00B960C_C74C_0C82_41AC_BA3098CC6C65",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_14_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -4.9,
   "hfov": 5.24
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -125.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_16_0.png",
      "width": 631,
      "height": 375
     }
    ]
   },
   "pitch": -10.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00B860C_C74C_0C82_41D3_4412017666D3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_16_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -10.46,
   "hfov": 18.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E066B05B_C34B_329A_41B5_2FC7B0EFCE4B",
   "pitch": -12.44,
   "yaw": -125.48,
   "hfov": 5.14,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00BF60C_C74C_0C82_41D5_B5E3662EE647",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_17_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -12.44,
   "hfov": 5.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -146.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_18_0.png",
      "width": 673,
      "height": 497
     }
    ]
   },
   "pitch": -14.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00BE60C_C74C_0C82_41E8_C47E53AFBEB4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_18_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.17,
   "hfov": 19.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E067005B_C34B_329A_41E4_C3D29FB9B2A5",
   "pitch": -17.13,
   "yaw": -146.55,
   "hfov": 5.03,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C360C_C74C_0C82_41CE_BD3579F42598",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_19_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -17.13,
   "hfov": 5.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -90.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_20_0.png",
      "width": 788,
      "height": 497
     }
    ]
   },
   "pitch": -20.51
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C060C_C74C_0C82_41C2_E80F5B76D766",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_20_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -20.51,
   "hfov": 22.15
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E067305B_C34B_329A_41C6_714B67597191",
   "pitch": -24.23,
   "yaw": -89.81,
   "hfov": 5.19,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C660C_C74C_0C82_41D9_FA569F504BE0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_21_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -24.23,
   "hfov": 5.19
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -27.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_22_0.png",
      "width": 738,
      "height": 418
     }
    ]
   },
   "pitch": -15.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C560C_C74C_0C82_41D0_F6A21EAC3AD5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_22_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -15.23,
   "hfov": 21.38
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E067805B_C34B_329A_41E7_9B60C790BFB5",
   "pitch": -17.91,
   "yaw": -27.83,
   "hfov": 5.42,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C460C_C74C_0C82_41E6_304F5675E9A0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_23_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -17.91,
   "hfov": 5.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -60.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_24_0.png",
      "width": 1006,
      "height": 506
     }
    ]
   },
   "pitch": 6.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00CA60C_C74C_0C82_41AA_00A900603536",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_24_0_0_map.gif",
      "width": 31,
      "height": 15
     }
    ]
   },
   "pitch": 6.43,
   "hfov": 30
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -66.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_25_0.png",
      "width": 187,
      "height": 155
     }
    ]
   },
   "pitch": 5.39
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00C960C_C74C_0C82_41D4_0291C0AA9ED8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_25_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 5.39,
   "hfov": 5.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_26_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -59.96
  }
 ],
 "id": "overlay_D00CE60C_C74C_0C82_41CC_C5CB45C1F18E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_26_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -59.96,
   "hfov": 4.76
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E067F05B_C34B_329A_41B4_FC1EAF6BB0BE",
   "pitch": -16.85,
   "yaw": 58.44,
   "hfov": 7.46,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D360C_C74C_0C82_4175_417088F10E04",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_28_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -16.85,
   "hfov": 7.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 58.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_29_0.png",
      "width": 661,
      "height": 487
     }
    ]
   },
   "pitch": -13.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D160C_C74C_0C82_41CE_C6FC3A999ED3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_29_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.78,
   "hfov": 19.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_30_0.png",
      "width": 477,
      "height": 361
     }
    ]
   },
   "pitch": -2.32
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D060C_C74C_0C82_41E0_29454635C3F2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_30_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -2.32,
   "hfov": 14.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 12.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.69,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_31_0.png",
      "width": 456,
      "height": 260
     }
    ]
   },
   "pitch": 2.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D760C_C74C_0C82_41DC_7379D25AB9E1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_31_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": 2.04,
   "hfov": 13.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -15.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_32_0.png",
      "width": 548,
      "height": 442
     }
    ]
   },
   "pitch": 1.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D660C_C74C_0C82_41D2_EB06687A38C9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_32_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 1.68,
   "hfov": 16.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -30.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_33_0.png",
      "width": 404,
      "height": 201
     }
    ]
   },
   "pitch": 1.42
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D00D560C_C74C_0C82_41D2_0E1DC199B59B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_33_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 1.42,
   "hfov": 12.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -172.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_34_0.png",
      "width": 128,
      "height": 138
     }
    ]
   },
   "pitch": -6.36
  }
 ],
 "id": "overlay_C113BC9C_E067_EBB3_41E9_188DEE758DB5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_34_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -6.36,
   "hfov": 3.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -159.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_35_0.png",
      "width": 140,
      "height": 128
     }
    ]
   },
   "pitch": -4.56
  }
 ],
 "id": "overlay_C0F89C76_E065_EB7F_41E5_E9E7C0575AA6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_35_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -4.56,
   "hfov": 4.21
  }
 ]
},
{
 "yaw": -110.66,
 "bleaching": 0.7,
 "pitch": 48.8,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F53ECB_C743_B10B_41D2_E38C6C7E11BF",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -121.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_0_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 49.33
  }
 ],
 "id": "overlay_DF7E236B_C742_B70B_41A7_CB5C0B3044D0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 49.33,
   "hfov": 2.38
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_1_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 49.42,
   "yaw": -115.38,
   "hfov": 5.83,
   "distance": 50
  }
 ],
 "id": "overlay_DF7ED36B_C742_B70B_41E4_07ADAABE134B",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_1_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 49.42,
   "hfov": 5.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 62.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_2_0.png",
      "width": 82,
      "height": 88
     }
    ]
   },
   "pitch": 0.99
  }
 ],
 "id": "overlay_DF7EC36B_C742_B70B_41AD_597FDFDE148C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 0.99,
   "hfov": 3.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 152.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_3_0.png",
      "width": 87,
      "height": 97
     }
    ]
   },
   "pitch": -0.5
  }
 ],
 "id": "overlay_DF7E936B_C742_B70B_41E5_F812D7942B57",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -0.5,
   "hfov": 4.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 68.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -62.22
  }
 ],
 "id": "overlay_DF7EB36B_C742_B70B_41E1_23ED13BDBB5D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -62.22,
   "hfov": 4.43
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -41.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0_HS_5_0.png",
      "width": 93,
      "height": 115
     }
    ]
   },
   "pitch": 1.27
  }
 ],
 "id": "overlay_DF7F436B_C742_B70B_41E5_7BAB568B82C5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 1.27,
   "hfov": 4.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 122.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_6_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 29.62
  }
 ],
 "id": "overlay_DF7F736B_C742_B70B_41D0_E22A7AEBE01D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_6_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 29.62,
   "hfov": 3.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_7_0.png",
      "width": 187,
      "height": 72
     }
    ]
   },
   "pitch": 29.72,
   "yaw": 128.41,
   "hfov": 7.64,
   "distance": 50
  }
 ],
 "id": "overlay_DF7F636B_C742_B70B_41E2_33C3FD0CE38F",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DF7E336B_C742_B70B_41D4_93CBF924DB3A_1_HS_7_0_map.gif",
      "width": 41,
      "height": 16
     }
    ]
   },
   "pitch": 29.72,
   "hfov": 7.64
  }
 ]
},
{
 "yaw": 126.99,
 "bleaching": 0.7,
 "pitch": 28.95,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D09114F4_C745_B11C_41E3_6C48DB0E5210",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_0_0.png",
      "width": 103,
      "height": 84
     }
    ]
   },
   "pitch": -0.6
  }
 ],
 "id": "overlay_D2DA6746_C745_BF7D_4190_E3BA31390FCD",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_0_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.6,
   "hfov": 4.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -23.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_1_0.png",
      "width": 94,
      "height": 88
     }
    ]
   },
   "pitch": 0.32
  }
 ],
 "id": "overlay_D2DA1746_C745_BF7D_41DD_15FE2557ECB3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 0.32,
   "hfov": 4.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 92.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0_HS_3_0.png",
      "width": 97,
      "height": 84
     }
    ]
   },
   "pitch": -0.9
  }
 ],
 "id": "overlay_D2DA0746_C745_BF7D_41E2_0793A34A1AB1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_0_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -0.9,
   "hfov": 4.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -177.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_4_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 16.1
  }
 ],
 "id": "overlay_D2DA3746_C745_BF7D_41E4_1D8F52C9C583",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 16.1,
   "hfov": 3.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_5_0.png",
      "width": 191,
      "height": 75
     }
    ]
   },
   "pitch": 16.19,
   "yaw": -171.37,
   "hfov": 8.64,
   "distance": 50
  }
 ],
 "id": "overlay_D2D9D746_C745_BF7D_41D2_80B9F7C20C94",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_5_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 16.19,
   "hfov": 8.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 92.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_6_0.png",
      "width": 759,
      "height": 516
     }
    ]
   },
   "pitch": 16.34
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2D9C746_C745_BF7D_41AD_0345EAD38BB9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_6_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": 16.34,
   "hfov": 34.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 62.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_7_0.png",
      "width": 484,
      "height": 491
     }
    ]
   },
   "pitch": 13.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2D9F746_C745_BF7D_41DB_DAB5E09616B6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.38,
   "hfov": 22.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 48.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_8_0.png",
      "width": 1163,
      "height": 573
     }
    ]
   },
   "pitch": 27.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2DA4746_C745_BF7D_418A_C6E283BD8322",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_8_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 27.59,
   "hfov": 48.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -75.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_9_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 25.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2DA7746_C745_BF7D_41E1_D5E455018776",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_9_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 25.41,
   "hfov": 5.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 95.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_10_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -63.22
  }
 ],
 "id": "overlay_D2DA6746_C745_BF7D_41CF_7D3500CDFC41",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -63.22,
   "hfov": 4.28
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -89.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_12_0.png",
      "width": 571,
      "height": 349
     }
    ]
   },
   "pitch": -0.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2DA0746_C745_BF7D_41E5_1C117BAAF8A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_12_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": -0.13,
   "hfov": 26.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E63EB593_C74D_931B_41E3_B04A6136304D",
   "pitch": -3.75,
   "yaw": -89.63,
   "hfov": 10.35,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2DA3746_C745_BF7D_41E6_CB6117F2E5A5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_13_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -3.75,
   "hfov": 10.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_14_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 40.8
  }
 ],
 "id": "overlay_D2DA2746_C745_BF7D_41D9_CB5A2C10273E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_14_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 40.8,
   "hfov": 2.76
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_15_0.png",
      "width": 189,
      "height": 75
     }
    ]
   },
   "pitch": 40.78,
   "yaw": 3.33,
   "hfov": 6.75,
   "distance": 50
  }
 ],
 "id": "overlay_D2D9D746_C745_BF7D_41DE_BAE89DCF56C9",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_15_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 40.78,
   "hfov": 6.75
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 158.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.46,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_16_0.png",
      "width": 590,
      "height": 360
     }
    ]
   },
   "pitch": 16.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D2D9C746_C745_BF7D_41E0_167592B5C46E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_16_0_0_map.gif",
      "width": 26,
      "height": 16
     }
    ]
   },
   "pitch": 16.95,
   "hfov": 26.46
  }
 ]
},
{
 "yaw": 90.31,
 "bleaching": 0.7,
 "pitch": 25.69,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EB09CA_C745_7375_41E3_3482917120AB",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_0_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 3.75
  }
 ],
 "id": "overlay_4AA661E6_5B88_1631_41D4_9F15F716DC26",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 3.75,
   "hfov": 3.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_1_0.png",
      "width": 298,
      "height": 120
     }
    ]
   },
   "pitch": 3.73,
   "yaw": 6.41,
   "hfov": 8.97,
   "distance": 50
  }
 ],
 "id": "overlay_4AA781E6_5B88_1631_41A0_44696F0CD842",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_1_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 3.73,
   "hfov": 8.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -67.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_19_0.png",
      "width": 679,
      "height": 449
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_05A8D936_606A_F870_41BE_226C2DFDDD73",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_19_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -11.12,
   "hfov": 20.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07F805B_C34B_329A_419A_5D4B3274114C",
   "pitch": -13.7,
   "yaw": -67.09,
   "hfov": 8.07,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_50F3A2A4_5E40_B48C_41C3_AB72A377FECE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_3_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -13.7,
   "hfov": 8.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -61.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_4_0.png",
      "width": 436,
      "height": 309
     }
    ]
   },
   "pitch": 1.28
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_50F8CC50_5E41_5383_41D1_532505F04D00",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_4_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": 1.28,
   "hfov": 13.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07FB05B_C34B_329A_41E6_2544D49B90ED",
   "pitch": -1.4,
   "yaw": -61.67,
   "hfov": 6.52,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_509A3BAA_5E41_5484_4194_C4BED9ED41E1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_5_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -1.4,
   "hfov": 6.52
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -94.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_6_0.png",
      "width": 432,
      "height": 318
     }
    ]
   },
   "pitch": -2.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_50B2DD5E_5E40_ADBC_41D2_A9CB4CE8679D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_6_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -2.6,
   "hfov": 12.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 160.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_8_0.png",
      "width": 116,
      "height": 131
     }
    ]
   },
   "pitch": -8.54
  }
 ],
 "id": "overlay_3EC77F74_6069_78F0_41D6_88E4B9F9161E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -8.54,
   "hfov": 3.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -163.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_9_0.png",
      "width": 135,
      "height": 159
     }
    ]
   },
   "pitch": -9.71
  }
 ],
 "id": "overlay_3FA70EFC_6069_79F0_41D5_DE509F0D7616",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -9.71,
   "hfov": 4.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -151.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_10_0.png",
      "width": 135,
      "height": 177
     }
    ]
   },
   "pitch": -17.13
  }
 ],
 "id": "overlay_3F9600D5_6069_4830_41B4_BE7D7A1FF8F3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -17.13,
   "hfov": 3.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -93.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_11_0.png",
      "width": 153,
      "height": 133
     }
    ]
   },
   "pitch": -30.33
  }
 ],
 "id": "overlay_3FBD8E0C_606B_5817_41A2_403AF9BA08F3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_11_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -30.33,
   "hfov": 3.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 179.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_12_0.png",
      "width": 116,
      "height": 138
     }
    ]
   },
   "pitch": -26.95
  }
 ],
 "id": "overlay_3EED6466_606B_4810_41D7_0460218A7838",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -26.95,
   "hfov": 3.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 144.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_13_0.png",
      "width": 116,
      "height": 144
     }
    ]
   },
   "pitch": -18.68
  }
 ],
 "id": "overlay_3FB8C33F_6069_C870_41BB_EF8E64EF212C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -18.68,
   "hfov": 3.32
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 123.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_14_0.png",
      "width": 113,
      "height": 129
     }
    ]
   },
   "pitch": -11.71
  }
 ],
 "id": "overlay_3E4E4B36_6069_5870_41D6_6E5505C21A6D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_14_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -11.71,
   "hfov": 3.34
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -53.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_15_0.png",
      "width": 129,
      "height": 125
     }
    ]
   },
   "pitch": -27
  }
 ],
 "id": "overlay_3FAC02C5_6077_C810_41D2_EEC5E7E6C56C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -27,
   "hfov": 3.45
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_16_0.png",
      "width": 116,
      "height": 138
     }
    ]
   },
   "pitch": -25.86
  }
 ],
 "id": "overlay_3E6C6BD3_6077_5830_41D5_D0B294D7F48B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_16_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -25.86,
   "hfov": 3.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -53.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_17_0.png",
      "width": 128,
      "height": 109
     }
    ]
   },
   "pitch": -14.02
  }
 ],
 "id": "overlay_3E5906FE_6076_C9F0_41C2_AC0AD95429FF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_17_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -14.02,
   "hfov": 3.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 30.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_22_0.png",
      "width": 450,
      "height": 326
     }
    ]
   },
   "pitch": -15.87
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_05BA1AB7_606F_3870_41C4_C476DFB42D6B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_22_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -15.87,
   "hfov": 12.99
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07D305B_C34B_329A_41C2_8202CD70B019",
   "pitch": -17.76,
   "yaw": 30.94,
   "hfov": 5.49,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_05BA0AB7_606F_3870_41B7_3044407675A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_23_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -17.76,
   "hfov": 5.49
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 20.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_25_0.png",
      "width": 572,
      "height": 334
     }
    ]
   },
   "pitch": -4.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0B9791C4_6069_C810_41D4_587FECF74A34",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_25_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -4.96,
   "hfov": 17.11
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07D605B_C34B_329A_41B5_28892F6FE646",
   "pitch": -6.95,
   "yaw": 20.71,
   "hfov": 5.72,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0A92D314_6069_4830_4193_B9454381505D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_24_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -6.95,
   "hfov": 5.72
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 142.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 42.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_26_0.png",
      "width": 1440,
      "height": 732
     }
    ]
   },
   "pitch": 9.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_75E3B8D7_6542_57C9_41C3_745DE668ADAE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_26_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 9.86,
   "hfov": 42.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07DC05B_C34B_329A_41C6_62D7B7AEE7E0",
   "pitch": -17.39,
   "yaw": -109.15,
   "hfov": 8.59,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_50B2AD5E_5E40_ADBC_41D6_50B3017C9D38",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_7_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -17.39,
   "hfov": 8.59
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 156.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_27_0.png",
      "width": 187,
      "height": 155
     }
    ]
   },
   "pitch": 8.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_75E3A8D7_6542_57C9_41C0_D907C7EBDB9A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_27_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 8.33,
   "hfov": 5.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_29_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -67.25
  }
 ],
 "id": "overlay_704903F4_65C2_F9CF_41C4_A0572258735D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_29_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.25,
   "hfov": 3.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E062305B_C34B_329A_4197_16AA4418B96F",
   "pitch": -5.49,
   "yaw": -94.29,
   "hfov": 8.96,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7CB73E77_6FF9_AEA6_419C_83370F1F472C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_31_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -5.49,
   "hfov": 8.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -109.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_32_0.png",
      "width": 796,
      "height": 506
     }
    ]
   },
   "pitch": -15.03
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7D2F65D7_6FF8_BDE7_41C3_D4DA51D9F810",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_32_0_0_map.gif",
      "width": 25,
      "height": 15
     }
    ]
   },
   "pitch": -15.03,
   "hfov": 23.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_33_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 13.25
  }
 ],
 "id": "overlay_6AD62163_7A48_4ECF_41CF_DD44C2F1BF58",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_33_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 13.25,
   "hfov": 3.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_34_0.png",
      "width": 293,
      "height": 118
     }
    ]
   },
   "pitch": 13.3,
   "yaw": -173.76,
   "hfov": 8.61,
   "distance": 50
  }
 ],
 "id": "overlay_6AD6D163_7A48_4ECF_41D8_F9D72F72A8E9",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_34_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 13.3,
   "hfov": 8.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -25.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_35_0.png",
      "width": 664,
      "height": 349
     }
    ]
   },
   "pitch": 4.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D73F50C4_C6C4_0583_41E2_891C56F1C5EA",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_35_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": 4.12,
   "hfov": 19.89
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 36.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_36_0.png",
      "width": 548,
      "height": 442
     }
    ]
   },
   "pitch": 1.05
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D73F10C5_C6C4_058D_41E6_D00C685EF16D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_36_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 1.05,
   "hfov": 16.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 62.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_37_0.png",
      "width": 486,
      "height": 244
     }
    ]
   },
   "pitch": 0.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D73F20C5_C6C4_058D_4175_468A03EED453",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_37_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 0.53,
   "hfov": 14.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 177.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_38_0.png",
      "width": 130,
      "height": 141
     }
    ]
   },
   "pitch": -12.65
  }
 ],
 "id": "overlay_C8D2CFDE_DF9D_65AC_41B7_ACE45586BC9F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_38_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -12.65,
   "hfov": 3.81
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -122.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_39_0.png",
      "width": 691,
      "height": 469
     }
    ]
   },
   "pitch": -5.84
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C724B809_DFE4_EA95_41EB_08A2E837CFD8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_39_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -5.84,
   "hfov": 20.63
  }
 ]
},
{
 "yaw": 73.23,
 "bleaching": 0.7,
 "pitch": 51.81,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0BC516F_C743_930B_41D0_366409A3BEE9",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 178.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_0_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 1.9
  }
 ],
 "id": "overlay_D0E16F67_C74C_3C8D_41D9_683ACDC41162",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 1.9,
   "hfov": 3.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_1_0.png",
      "width": 297,
      "height": 118
     }
    ]
   },
   "pitch": 1.94,
   "yaw": -175.58,
   "hfov": 8.98,
   "distance": 50
  }
 ],
 "id": "overlay_D0E11F67_C74C_3C8D_41E4_293173FA7813",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_1_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 1.94,
   "hfov": 8.98
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -160.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_2_0.png",
      "width": 99,
      "height": 115
     }
    ]
   },
   "pitch": -8.14
  }
 ],
 "id": "overlay_D0E10F67_C74C_3C8D_41E7_5C13BAD0AB42",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -8.14,
   "hfov": 2.96
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -162.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_3_0.png",
      "width": 104,
      "height": 119
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "id": "overlay_D0E13F67_C74C_3C8D_41D3_0CA8F44A2171",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -15.14,
   "hfov": 3.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 148.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_4_0.png",
      "width": 123,
      "height": 126
     }
    ]
   },
   "pitch": -10.95
  }
 ],
 "id": "overlay_D0E12F67_C74C_3C8D_41C5_DC7484698D84",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.95,
   "hfov": 3.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -154.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_5_0.png",
      "width": 109,
      "height": 148
     }
    ]
   },
   "pitch": -20
  }
 ],
 "id": "overlay_D0E1FF67_C74C_3C8D_41E6_37346E596CFF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -20,
   "hfov": 3.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 99.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_6_0.png",
      "width": 123,
      "height": 132
     }
    ]
   },
   "pitch": -16.71
  }
 ],
 "id": "overlay_D0E1EF67_C74C_3C8D_41DD_4FC48C44A0F8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -16.71,
   "hfov": 3.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 171.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_7_0.png",
      "width": 138,
      "height": 126
     }
    ]
   },
   "pitch": -6.53
  }
 ],
 "id": "overlay_D0E19F67_C74C_3C8D_41E7_0BC4C17F484B",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.53,
   "hfov": 4.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -3.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_8_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 6.04
  }
 ],
 "id": "overlay_D0E1BF67_C74C_3C8D_41B1_58F572C2911A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_8_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 6.04,
   "hfov": 3.63
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_9_0.png",
      "width": 266,
      "height": 116
     }
    ]
   },
   "pitch": 6.23,
   "yaw": 1.89,
   "hfov": 7.97,
   "distance": 50
  }
 ],
 "id": "overlay_D0E1AF67_C74C_3C8D_41E2_DBF1FBDC8825",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_9_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 6.23,
   "hfov": 7.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E060405B_C34B_329A_41DE_F2F0046D02AC",
   "pitch": -15.08,
   "yaw": 47.67,
   "hfov": 8.69,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E26F67_C74C_3C8D_41DB_46DAACFB2112",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_11_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -15.08,
   "hfov": 8.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -139.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_12_0.png",
      "width": 738,
      "height": 418
     }
    ]
   },
   "pitch": -22.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E21F67_C74C_3C8D_41E4_90FB6EFB758B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_12_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -22.27,
   "hfov": 20.51
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E060805B_C34B_329A_41D9_69BD199FC14E",
   "pitch": -24.88,
   "yaw": -140.14,
   "hfov": 5.16,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E23F67_C74C_3C8D_41DD_30D96BC29D66",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_13_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -24.88,
   "hfov": 5.16
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -155.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_14_0.png",
      "width": 684,
      "height": 478
     }
    ]
   },
   "pitch": -12.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E2DF67_C74C_3C8D_41CB_149E350ECF10",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_14_0_0_map.gif",
      "width": 22,
      "height": 15
     }
    ]
   },
   "pitch": -12.06,
   "hfov": 20.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E063605B_C34B_329A_41B6_E81A79A8A3FD",
   "pitch": -14.99,
   "yaw": -154.88,
   "hfov": 5.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E2FF67_C74C_3C8D_41E4_F808FFE5537A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_15_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -14.99,
   "hfov": 5.5
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 40,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_16_0.png",
      "width": 1358,
      "height": 687
     }
    ]
   },
   "pitch": 11.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E29F67_C74C_3C8D_41B2_A2EA9702AF2B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_16_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 11.06,
   "hfov": 40
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -92.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_17_0.png",
      "width": 206,
      "height": 222
     }
    ]
   },
   "pitch": 9.7
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E28F67_C74C_3C8D_41E7_6FBD9356351C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_17_0_0_map.gif",
      "width": 15,
      "height": 17
     }
    ]
   },
   "pitch": 9.7,
   "hfov": 6.1
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 48.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_18_0.png",
      "width": 903,
      "height": 581
     }
    ]
   },
   "pitch": -11.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E35F67_C74C_3C8D_41B5_0574BA736BE7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_18_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -11.21,
   "hfov": 26.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 1.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_20_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -62.33
  }
 ],
 "id": "overlay_D0E34F67_C74C_3C8D_41B4_13B397096895",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_20_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -62.33,
   "hfov": 4.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E063E05B_C34B_329A_41D2_D4794DF14683",
   "pitch": -18.65,
   "yaw": 112.96,
   "hfov": 7.39,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E31F68_C74C_3C83_41CF_00A4317CDB05",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_22_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -18.65,
   "hfov": 7.39
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 113.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_23_0.png",
      "width": 925,
      "height": 653
     }
    ]
   },
   "pitch": -14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E33F68_C74C_3C83_4192_3DC5E6864770",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_23_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -14,
   "hfov": 26.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -169.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_24_0.png",
      "width": 739,
      "height": 564
     }
    ]
   },
   "pitch": -3.97
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E3DF68_C74C_3C83_41E5_83871305956F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_24_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -3.97,
   "hfov": 22.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E060405B_C34B_329A_41D5_41A50EF79507",
   "pitch": -7.4,
   "yaw": -169.18,
   "hfov": 7.73,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E3FF68_C74C_3C83_41C3_5208FC265592",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_25_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -7.4,
   "hfov": 7.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 16.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_26_0.png",
      "width": 676,
      "height": 311
     }
    ]
   },
   "pitch": 0.94
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E3EF68_C74C_3C83_41C2_E33E35846692",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 16.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_26_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 0.94,
   "hfov": 20.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -25.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_27_0.png",
      "width": 548,
      "height": 442
     }
    ]
   },
   "pitch": 0.52
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E38F68_C74C_3C83_41DC_9F7E3EB3BF63",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_27_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.52,
   "hfov": 16.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -39.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_28_0.png",
      "width": 486,
      "height": 243
     }
    ]
   },
   "pitch": 0.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D0E3BF68_C74C_3C83_41E7_8D8221CAD16C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_28_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 0.53,
   "hfov": 14.58
  }
 ]
},
{
 "yaw": -112.42,
 "bleaching": 0.7,
 "pitch": 49.55,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0F73323_C743_B734_41C2_5B4778D836C2",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -85.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_4_0.png",
      "width": 1178,
      "height": 930
     }
    ]
   },
   "pitch": -4.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_48B6ED7B_5B88_2E17_41A2_9516F3EF2AC9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_4_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -4.1,
   "hfov": 35.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_2_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 3.75
  }
 ],
 "id": "overlay_4B789995_5BB8_1613_4195_9282D4B42EF3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 3.75,
   "hfov": 3.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_3_0.png",
      "width": 297,
      "height": 118
     }
    ]
   },
   "pitch": 3.82,
   "yaw": 5.37,
   "hfov": 8.94,
   "distance": 50
  }
 ],
 "id": "overlay_4B787995_5BB8_1613_41D3_6C8FA1D13DEB",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_3_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 3.82,
   "hfov": 8.94
  }
 ]
},
{
 "yaw": 77.25,
 "bleaching": 0.7,
 "pitch": 53.32,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_4B69DFEE_5B88_2A31_41D2_9D1DDC5E3ED4",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_6_0.png",
      "width": 114,
      "height": 96
     }
    ]
   },
   "pitch": -11.19
  }
 ],
 "id": "overlay_3E58CB89_607B_3810_41D2_400659FE1B7F",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_6_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -11.19,
   "hfov": 3.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_7_0.png",
      "width": 101,
      "height": 92
     }
    ]
   },
   "pitch": -8.65
  }
 ],
 "id": "overlay_3FA462DF_607B_C830_41CC_C373249451E3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_7_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.65,
   "hfov": 3.02
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -24.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_8_0.png",
      "width": 114,
      "height": 100
     }
    ]
   },
   "pitch": -17.81
  }
 ],
 "id": "overlay_3FA728C0_607B_5810_41D3_9DCDCDC85C9E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_8_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -17.81,
   "hfov": 3.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -72.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_9_0.png",
      "width": 142,
      "height": 111
     }
    ]
   },
   "pitch": -37.12
  }
 ],
 "id": "overlay_3FA2D59E_607A_C830_41C5_3858FCFE144A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_9_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -37.12,
   "hfov": 3.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -142.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_10_0.png",
      "width": 116,
      "height": 111
     }
    ]
   },
   "pitch": -26.68
  }
 ],
 "id": "overlay_3FAF606D_6079_C810_418C_A9E7CD609BB5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -26.68,
   "hfov": 3.13
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 90.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_11_0.png",
      "width": 131,
      "height": 136
     }
    ]
   },
   "pitch": -29.64
  }
 ],
 "id": "overlay_3FA5A13F_6079_4870_41D7_877E145877D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -29.64,
   "hfov": 3.42
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 83.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_12_0.png",
      "width": 117,
      "height": 120
     }
    ]
   },
   "pitch": -16.15
  }
 ],
 "id": "overlay_3E64A660_607F_4810_41D8_4D3B90051500",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -16.15,
   "hfov": 3.4
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 140.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_13_0.png",
      "width": 129,
      "height": 113
     }
    ]
   },
   "pitch": -19.81
  }
 ],
 "id": "overlay_3E2F8C5F_6079_7830_41C4_62ED4D1F4A35",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_13_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -19.81,
   "hfov": 3.65
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -154.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_14_0.png",
      "width": 111,
      "height": 133
     }
    ]
   },
   "pitch": -19.02
  }
 ],
 "id": "overlay_3E4687EF_6079_C810_418E_783A5A20FDF6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_14_0_0_map.gif",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": -19.02,
   "hfov": 3.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_15_0.png",
      "width": 111,
      "height": 119
     }
    ]
   },
   "pitch": -23.91
  }
 ],
 "id": "overlay_3D003F0E_607B_F810_41D3_BC45DE51A02C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_15_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -23.91,
   "hfov": 3.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -134.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_17_0.png",
      "width": 487,
      "height": 346
     }
    ]
   },
   "pitch": -17.77
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0D04FA99_6029_7830_41C5_CA0CBBFECE15",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_17_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -17.77,
   "hfov": 13.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E078805B_C34B_329A_41B1_463DA6EAFFF6",
   "pitch": -19.82,
   "yaw": -134.63,
   "hfov": 2.08,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_051D608D_6029_4810_41CE_F483D6857033",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_18_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -19.82,
   "hfov": 2.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E078D05B_C34B_329A_41E7_10F805C07A8A",
   "pitch": -9.12,
   "yaw": -84.41,
   "hfov": 15.61,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_06E0227D_602B_48F0_41C0_9700880FA6EC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_19_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -9.12,
   "hfov": 15.61
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E079205B_C34B_329A_41E4_4F2DD66265F7",
   "pitch": -8.25,
   "yaw": -29.88,
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_04B2F307_6029_4810_41D3_EF95EA815664",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_20_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -8.25,
   "hfov": 5.71
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -62.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_23_0.png",
      "width": 636,
      "height": 406
     }
    ]
   },
   "pitch": -4.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0BE51768_6059_4810_41AF_DEE90C508AD0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_23_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -4.13,
   "hfov": 19.04
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E079505B_C34B_329A_41E2_028651596538",
   "pitch": -6.47,
   "yaw": -62.88,
   "hfov": 5.73,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0807CB0E_6056_D810_41C8_54C20D95CA6C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_22_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -6.47,
   "hfov": 5.73
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_26_0.png",
      "width": 450,
      "height": 326
     }
    ]
   },
   "pitch": -8.73
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_18A966BC_6069_4870_41C5_718926537D62",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_26_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -8.73,
   "hfov": 13.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E079B05B_C34B_329A_41D3_179DF0829AB8",
   "pitch": -10.43,
   "yaw": 13.23,
   "hfov": 5.67,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0FF29568_6056_C811_41D5_71296BB406DE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_27_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -10.43,
   "hfov": 5.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -179.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 36.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_28_0.png",
      "width": 1228,
      "height": 618
     }
    ]
   },
   "pitch": -0.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7585BAA6_655E_4A4A_41B4_559940451FA1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_28_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": -0.06,
   "hfov": 36.86
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -165.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_32_0.png",
      "width": 187,
      "height": 155
     }
    ]
   },
   "pitch": -0.54
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_744C45DB_6546_79FA_41D0_99D0C5E68503",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_32_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.54,
   "hfov": 5.64
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_33_0.png",
      "width": 316,
      "height": 320
     }
    ]
   },
   "pitch": -67.25
  }
 ],
 "id": "overlay_71F2592C_65C2_D65E_41A7_45BAF9D9D8F0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_33_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -67.25,
   "hfov": 3.68
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -29.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_21_0.png",
      "width": 589,
      "height": 372
     }
    ]
   },
   "pitch": -6.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_052C6FD8_6056_F830_419D_A6FC708715A8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_21_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": -6.1,
   "hfov": 17.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 12.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_35_0.png",
      "width": 572,
      "height": 334
     }
    ]
   },
   "pitch": -3.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_633499A9_7A02_3912_41D2_F38AEEF57507",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_35_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -3.13,
   "hfov": 17.14
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E07E505B_C34B_329A_41E8_0F6424BC28AE",
   "pitch": -5.09,
   "yaw": 12.11,
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_633489A9_7A02_3912_41C4_2D00D0252120",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_36_0_0_map.gif",
      "width": 48,
      "height": 16
     }
    ]
   },
   "pitch": -5.09,
   "hfov": 5.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 173.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_37_0.png",
      "width": 121,
      "height": 112
     }
    ]
   },
   "pitch": 18.98
  }
 ],
 "id": "overlay_6A8F4FCE_7A48_31D6_41B9_5589F82B7AA0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_37_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 18.98,
   "hfov": 3.45
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_38_0.png",
      "width": 293,
      "height": 118
     }
    ]
   },
   "pitch": 19.11,
   "yaw": 179.06,
   "hfov": 8.36,
   "distance": 50
  }
 ],
 "id": "overlay_6A84AFCF_7A48_31D6_41C5_4BBD1B17E227",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_38_0_map.gif",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": 19.11,
   "hfov": 8.36
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -18.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_39_0.png",
      "width": 676,
      "height": 311
     }
    ]
   },
   "pitch": 3.18
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D44F8B4E_C6C4_049F_41D4_2EFCDAAD5E6F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_39_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": 3.18,
   "hfov": 20.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 28.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_40_0.png",
      "width": 548,
      "height": 442
     }
    ]
   },
   "pitch": 0.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D4B2DD90_C6FC_1F83_41CF_ECAEED1B666E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_40_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.59,
   "hfov": 16.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 50.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_41_0.png",
      "width": 486,
      "height": 243
     }
    ]
   },
   "pitch": 0.52
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D5F6A067_C6C4_048D_41DB_6D0C88C4F6C9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_41_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": 0.52,
   "hfov": 14.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 167.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_42_0.png",
      "width": 130,
      "height": 141
     }
    ]
   },
   "pitch": -39.71
  }
 ],
 "id": "overlay_C9321F84_DFA7_E59C_41DD_C38133E2DD39",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_42_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -39.71,
   "hfov": 3.01
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -175.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_0_0.png",
      "width": 87,
      "height": 76
     }
    ]
   },
   "pitch": -4.64
  }
 ],
 "id": "overlay_D1E6CE13_C745_911B_41DF_CA776FB22533",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_0_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 4.07
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_1_0.png",
      "width": 771,
      "height": 494
     }
    ]
   },
   "pitch": 27.38
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1E63E13_C745_911B_41C9_F9ECD994CC42",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": 27.38,
   "hfov": 32.12
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 148.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 52.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_2_0.png",
      "width": 1167,
      "height": 588
     }
    ]
   },
   "pitch": 15.06
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1E61E13_C745_911B_41E5_897BFF166580",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_2_0_0_map.gif",
      "width": 31,
      "height": 16
     }
    ]
   },
   "pitch": 15.06,
   "hfov": 52.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 163.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_3_0.png",
      "width": 120,
      "height": 99
     }
    ]
   },
   "pitch": 9.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1E67E13_C745_911B_41BD_1BD7FBE6E718",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 9.24,
   "hfov": 5.57
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -12.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -65.99
  }
 ],
 "id": "overlay_D1E65E13_C745_911B_41E0_16DA2E761DE9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -65.99,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 31.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_5_0.png",
      "width": 682,
      "height": 430
     }
    ]
   },
   "pitch": 14.22
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D1E5BE13_C745_911B_41B9_35146BBA931F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_5_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 14.22,
   "hfov": 31.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 164.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_6_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 43.22
  }
 ],
 "id": "overlay_D1E59E13_C745_911B_41E6_0968A200E539",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_6_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 43.22,
   "hfov": 2.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_7_0.png",
      "width": 190,
      "height": 75
     }
    ]
   },
   "pitch": 43.34,
   "yaw": 169.98,
   "hfov": 6.49,
   "distance": 50
  }
 ],
 "id": "overlay_D1E5FE13_C745_911B_41D2_B4996F095CFA",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D1E6FE13_C745_911B_41A0_CFEE0E943D05_1_HS_7_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 43.34,
   "hfov": 6.49
  }
 ]
},
{
 "yaw": -14.95,
 "bleaching": 0.7,
 "pitch": 38.5,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EAFB05_C742_90FF_41BD_D40024A8857B",
 "bleachingDistance": 0.4
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -40.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_0_0.png",
      "width": 79,
      "height": 75
     }
    ]
   },
   "pitch": 0.45
  }
 ],
 "id": "overlay_DCADDF77_C75F_AF1B_41E2_F315E1CAFE59",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.45,
   "hfov": 3.74
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 47.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_1_0.png",
      "width": 77,
      "height": 72
     }
    ]
   },
   "pitch": 37.8
  }
 ],
 "id": "overlay_DCADCF77_C75F_AF1B_41B4_CDC249EBD0C5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 37.8,
   "hfov": 2.88
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_2_0.png",
      "width": 191,
      "height": 75
     }
    ]
   },
   "pitch": 37.89,
   "yaw": 53.3,
   "hfov": 7.08,
   "distance": 50
  }
 ],
 "id": "overlay_DCADEF77_C75F_AF1B_41DC_37256E4DACEF",
 "data": {
  "label": "Fly Here"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_2_0_map.gif",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": 37.89,
   "hfov": 7.08
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 150.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_4_0.png",
      "width": 202,
      "height": 204
     }
    ]
   },
   "pitch": -63.98
  }
 ],
 "id": "overlay_DCAD9F77_C75F_AF1B_41D6_B1DD37857C60",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -63.98,
   "hfov": 4.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 141.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_5_0.png",
      "width": 621,
      "height": 414
     }
    ]
   },
   "pitch": 8.36
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCAD8F77_C75F_AF1B_41CF_CCADBF5BC250",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_5_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": 8.36,
   "hfov": 28.83
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E624E593_C74D_931B_41D2_295A7698F89D",
   "pitch": -6.65,
   "yaw": -87.72,
   "hfov": 13.97,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCAD5F77_C75F_AF1B_41E2_818FADB599E1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_6_0_0_map.gif",
      "width": 30,
      "height": 16
     }
    ]
   },
   "pitch": -6.65,
   "hfov": 13.97
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -87.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_7_0.png",
      "width": 760,
      "height": 506
     }
    ]
   },
   "pitch": -0.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DCAD7F77_C75F_AF1B_41D5_D22B708C152D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_7_0_0_map.gif",
      "width": 24,
      "height": 15
     }
    ]
   },
   "pitch": -0.79,
   "hfov": 35.65
  }
 ]
},
{
 "yaw": 32.28,
 "bleaching": 0.7,
 "pitch": 36.99,
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_D0EBCE9D_C745_910C_41A7_971DE10D33E2",
 "bleachingDistance": 0.4
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_7_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E6276593_C74D_931B_41E2_700F54EEC3E5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DF756B3D_C742_970F_41D6_E16CD8AF28F3_1_HS_10_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E6271593_C74D_931B_41E4_A5338F0B485B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_5_0.png",
   "width": 800,
   "height": 390
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DFA27D92_C74D_7314_41B4_793A040FAF30",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_0_HS_7_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_DFA21D92_C74D_7314_41CD_F7F54B4F3EB2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DAD7387B_C742_910B_41E5_F241B7A59D43_1_HS_10_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E62FB593_C74D_931B_41DB_D761BAE295A9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D95A55B4_C742_931D_41CB_A2B8D6379BBE_1_HS_3_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E62E6593_C74D_931B_41E0_7D3C8BFE5FC9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_2_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E62DB593_C74D_931B_41D6_16E4B683862E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DBB2209A_C745_9115_41C0_285097579EF7_1_HS_4_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E62D4593_C74D_931B_41E1_6677172C974E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D9EEF597_C745_931B_41E7_5644EFCCDB78_1_HS_4_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E62DC593_C74D_931B_41E2_8C3C9329303B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_13_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06A506B_C34B_32BB_41C5_F44E66C269C3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_16_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06AA06B_C34B_32BB_41E5_1B4105B1F80B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_14_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06AF06B_C34B_32BB_41B0_F0F74C3A5A4C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_18_0.png",
   "width": 1200,
   "height": 1440
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06B306B_C34B_32BB_41E3_5B5A4EB3ECBD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_21_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06B706B_C34B_32BB_417F_C54FC2AE1336",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_23_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E06BB06B_C34B_32BB_41D0_4A508C8552DF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_E2478F8E_C359_4E7A_41D4_6BC68F6B8C06_1_HS_25_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E068006B_C34B_32BB_4198_2106C9154301",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_7_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E6393593_C74D_931B_41E0_6D40ACAF8B4B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DE14421A_C742_9115_41E6_1D855630620D_1_HS_10_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E638A593_C74D_931B_41C0_86F7C92D660C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_7_0.png",
   "width": 1200,
   "height": 1440
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E6263593_C74D_931B_41E1_BA4B1CC342F1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DC193806_C75D_90FD_41E5_2A8BE1B7BC09_1_HS_10_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E625C593_C74D_931B_41D8_502AAE47F8B4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DCD5FF4C_C75F_EF0D_41D3_4187ECBCD9AE_1_HS_4_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E6241593_C74D_931B_41E0_4DCD2A3ADEB9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_5_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E63A8593_C74D_931B_41E6_9473E6C2515D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DE44C80D_C743_B10C_41D2_B3E5E5CFEF3A_1_HS_7_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E63A7593_C74D_931B_41B7_98E47412397C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_14_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E066605B_C34B_329A_41C0_2C163376453B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_17_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E066B05B_C34B_329A_41B5_2FC7B0EFCE4B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_19_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E067005B_C34B_329A_41E4_C3D29FB9B2A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_21_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E067305B_C34B_329A_41C6_714B67597191",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_23_0.png",
   "width": 1200,
   "height": 1440
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E067805B_C34B_329A_41E7_9B60C790BFB5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D009D60B_C74C_0C86_41E0_3D3F1B44146D_1_HS_28_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E067F05B_C34B_329A_41B4_FC1EAF6BB0BE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D2DA7746_C745_BF7D_41C4_990DB6D2E2C4_1_HS_13_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E63EB593_C74D_931B_41E3_B04A6136304D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_3_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07F805B_C34B_329A_419A_5D4B3274114C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_5_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07FB05B_C34B_329A_41E6_2544D49B90ED",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_23_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07D305B_C34B_329A_41C2_8202CD70B019",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_24_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07D605B_C34B_329A_41B5_28892F6FE646",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_7_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07DC05B_C34B_329A_41C6_62D7B7AEE7E0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_51330F7B_5B7B_EA17_41D0_EEAF84AE8649_1_HS_31_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E062305B_C34B_329A_4197_16AA4418B96F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_11_0.png",
   "width": 1200,
   "height": 1440
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E060405B_C34B_329A_41DE_F2F0046D02AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_13_0.png",
   "width": 1200,
   "height": 1440
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E060805B_C34B_329A_41D9_69BD199FC14E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_15_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E063605B_C34B_329A_41B6_E81A79A8A3FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_22_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E063E05B_C34B_329A_41D2_D4794DF14683",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D0E14F67_C74C_3C8D_41AC_A118C90935C3_1_HS_25_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E060405B_C34B_329A_41D5_41A50EF79507",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_18_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E078805B_C34B_329A_41B1_463DA6EAFFF6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_19_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E078D05B_C34B_329A_41E7_10F805C07A8A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_20_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E079205B_C34B_329A_41E4_4F2DD66265F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_22_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E079505B_C34B_329A_41E2_028651596538",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_27_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E079B05B_C34B_329A_41D3_179DF0829AB8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_513796F5_5B78_1A13_41B8_5423F09EC40D_1_HS_36_0.png",
   "width": 1200,
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E07E505B_C34B_329A_41E8_0F6424BC28AE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DCAC2F77_C75F_AF1B_41D0_76306183FDFD_1_HS_6_0.png",
   "width": 1200,
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E624E593_C74D_931B_41D2_295A7698F89D",
 "frameDuration": 41
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "class": "Player",
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "shadow": false,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
