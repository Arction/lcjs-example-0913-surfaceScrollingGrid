(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,LUT:r,ColorHSV:l,PalettedFill:o,emptyLine:i,AxisScrollStrategies:c,AxisTickStrategies:d,regularColorSteps:u,Themes:m}=s,h=1e3/35,g=n().Dashboard({numberOfColumns:2,numberOfRows:2}).setRowHeight(0,1).setRowHeight(1,2);let p=g.addUIElement().setText("Loading example data ...");fetch(document.head.baseURI+"examples/assets/0913/audio2ch.json").then((e=>e.json())).then((e=>{p.dispose(),p=void 0;const t=g.getTheme(),a=new r({steps:u(0,255,t.examples.spectrogramColorPalette),units:"dB",interpolate:!0});let s=[{name:"Channel 1",data:e.ch1,columnIndex:0},{name:"Channel 2",data:e.ch2,columnIndex:1}];s=s.map((e=>{const t=e.data[0].length,s=g.createChartXY({columnIndex:e.columnIndex,rowIndex:0}).setTitle(`${e.name} | 2D audio spectrogram`);s.getDefaultAxisX().setTickStrategy(d.Time).setScrollStrategy(c.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-27e3,stopAxisAfter:!1}))),s.getDefaultAxisY().setTitle("Frequency (Hz)");const n=g.createChart3D({columnIndex:e.columnIndex,rowIndex:1}).setTitle(`${e.name} | 3D audio spectrogram`);n.getDefaultAxisX().setTickStrategy(d.Time).setScrollStrategy(c.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-27e3,stopAxisAfter:!1}))),n.getDefaultAxisY().setTitle("Intensity (dB)").setTickStrategy(d.Numeric,(e=>e.setFormattingFunction((e=>{return(t=e,t/255*70-100).toFixed(0);var t})))),n.getDefaultAxisZ().setTitle("Frequency (Hz)");const r=s.addHeatmapScrollingGridSeries({scrollDimension:"columns",resolution:t,step:{x:h,y:40}}).setFillStyle(new o({lut:a})).setWireframeStyle(i).setDataCleaning({maxDataPointCount:1e4}),l=n.addSurfaceScrollingGridSeries({scrollDimension:"columns",columns:Math.ceil(945),rows:t,step:{x:h,z:40}}).setFillStyle(new o({lut:a,lookUpProperty:"y"})).setWireframeStyle(i);return{...e,chart2D:s,chart3D:n,heatmapSeries2D:r,surfaceSeries3D:l}}));let n=window.performance.now(),l=0;const m=()=>{const e=window.performance.now(),t=Math.floor(35*(e-n)/1e3),a=Math.min(t-l,100);a>0&&(s.forEach(((e,t)=>{const s=[];for(let t=0;t<a;t++){const a=(l+t)%e.data.length,n=e.data[a];s.push(n)}e.heatmapSeries2D.addIntensityValues(s),e.surfaceSeries3D.addValues({yValues:s})})),l+=a),requestAnimationFrame(m)};m()}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);