(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const a=s(475),{lightningChart:n,LUT:r,ColorHSV:o,PalettedFill:l,emptyLine:i,AxisScrollStrategies:c,AxisTickStrategies:m,regularColorSteps:u,Themes:d}=a,h=1e3/35,g=n().Dashboard({numberOfColumns:2,numberOfRows:2}).setRowHeight(0,1).setRowHeight(1,2);let p=g.addUIElement().setText("Loading example data ...");fetch(document.head.baseURI+"examples/assets/0913/audio2ch.json").then((e=>e.json())).then((e=>{p.dispose(),p=void 0;const t=g.getTheme(),s=new r({steps:u(0,255,t.examples.spectrogramColorPalette),units:"dB",interpolate:!0});let a=[{name:"Channel 1",data:e.ch1,columnIndex:0},{name:"Channel 2",data:e.ch2,columnIndex:1}];a=a.map((e=>{const t=e.data[0].length,a=g.createChartXY({columnIndex:e.columnIndex,rowIndex:0}).setTitle(`${e.name} | 2D audio spectrogram`);a.getDefaultAxisX().setTickStrategy(m.Time).setScrollStrategy(c.progressive).setInterval({start:-27e3,end:0,stopAxisAfter:!1}),a.getDefaultAxisY().setTitle("Frequency (Hz)");const n=g.createChart3D({columnIndex:e.columnIndex,rowIndex:1}).setTitle(`${e.name} | 3D audio spectrogram`);n.getDefaultAxisX().setTickStrategy(m.Time).setScrollStrategy(c.progressive).setInterval({start:-27e3,end:0,stopAxisAfter:!1}),n.getDefaultAxisY().setTitle("Intensity (dB)").setTickStrategy(m.Numeric,(e=>e.setFormattingFunction((e=>{return(t=e,t/255*70-100).toFixed(0);var t})))),n.getDefaultAxisZ().setTitle("Frequency (Hz)");const r=a.addHeatmapScrollingGridSeries({scrollDimension:"columns",resolution:t,step:{x:h,y:40}}).setFillStyle(new l({lut:s})).setWireframeStyle(i).setDataCleaning({maxDataPointCount:1e4}),o=n.addSurfaceScrollingGridSeries({scrollDimension:"columns",columns:Math.ceil(945),rows:t,step:{x:h,z:40}}).setFillStyle(new l({lut:s,lookUpProperty:"y"})).setWireframeStyle(i);return{...e,chart2D:a,chart3D:n,heatmapSeries2D:r,surfaceSeries3D:o}}));let n=window.performance.now(),o=0;const d=()=>{const e=window.performance.now(),t=Math.floor(35*(e-n)/1e3),s=Math.min(t-o,100);s>0&&(a.forEach(((e,t)=>{const a=[];for(let t=0;t<s;t++){const s=(o+t)%e.data.length,n=e.data[s];a.push(n)}e.heatmapSeries2D.addIntensityValues(a),e.surfaceSeries3D.addValues({yValues:a})})),o+=s),requestAnimationFrame(d)};d()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);