/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 45.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 0.0], [15.6, 0.0], [15.7, 0.0], [15.8, 0.0], [15.9, 0.0], [16.0, 0.0], [16.1, 0.0], [16.2, 0.0], [16.3, 0.0], [16.4, 0.0], [16.5, 0.0], [16.6, 0.0], [16.7, 0.0], [16.8, 0.0], [16.9, 0.0], [17.0, 0.0], [17.1, 0.0], [17.2, 0.0], [17.3, 0.0], [17.4, 0.0], [17.5, 0.0], [17.6, 0.0], [17.7, 0.0], [17.8, 0.0], [17.9, 0.0], [18.0, 0.0], [18.1, 0.0], [18.2, 0.0], [18.3, 0.0], [18.4, 0.0], [18.5, 0.0], [18.6, 0.0], [18.7, 0.0], [18.8, 0.0], [18.9, 0.0], [19.0, 0.0], [19.1, 0.0], [19.2, 0.0], [19.3, 0.0], [19.4, 0.0], [19.5, 0.0], [19.6, 0.0], [19.7, 0.0], [19.8, 0.0], [19.9, 0.0], [20.0, 0.0], [20.1, 0.0], [20.2, 0.0], [20.3, 0.0], [20.4, 0.0], [20.5, 0.0], [20.6, 0.0], [20.7, 0.0], [20.8, 0.0], [20.9, 0.0], [21.0, 0.0], [21.1, 0.0], [21.2, 0.0], [21.3, 0.0], [21.4, 0.0], [21.5, 0.0], [21.6, 0.0], [21.7, 0.0], [21.8, 0.0], [21.9, 0.0], [22.0, 0.0], [22.1, 0.0], [22.2, 0.0], [22.3, 0.0], [22.4, 0.0], [22.5, 0.0], [22.6, 0.0], [22.7, 0.0], [22.8, 0.0], [22.9, 0.0], [23.0, 0.0], [23.1, 0.0], [23.2, 0.0], [23.3, 0.0], [23.4, 0.0], [23.5, 0.0], [23.6, 0.0], [23.7, 0.0], [23.8, 0.0], [23.9, 0.0], [24.0, 0.0], [24.1, 0.0], [24.2, 0.0], [24.3, 0.0], [24.4, 0.0], [24.5, 0.0], [24.6, 0.0], [24.7, 0.0], [24.8, 0.0], [24.9, 0.0], [25.0, 0.0], [25.1, 0.0], [25.2, 0.0], [25.3, 0.0], [25.4, 0.0], [25.5, 0.0], [25.6, 0.0], [25.7, 0.0], [25.8, 0.0], [25.9, 0.0], [26.0, 0.0], [26.1, 0.0], [26.2, 0.0], [26.3, 0.0], [26.4, 0.0], [26.5, 0.0], [26.6, 0.0], [26.7, 0.0], [26.8, 0.0], [26.9, 0.0], [27.0, 0.0], [27.1, 0.0], [27.2, 0.0], [27.3, 0.0], [27.4, 0.0], [27.5, 0.0], [27.6, 0.0], [27.7, 0.0], [27.8, 0.0], [27.9, 0.0], [28.0, 0.0], [28.1, 0.0], [28.2, 0.0], [28.3, 0.0], [28.4, 0.0], [28.5, 0.0], [28.6, 0.0], [28.7, 0.0], [28.8, 0.0], [28.9, 0.0], [29.0, 0.0], [29.1, 0.0], [29.2, 0.0], [29.3, 0.0], [29.4, 0.0], [29.5, 0.0], [29.6, 0.0], [29.7, 0.0], [29.8, 0.0], [29.9, 0.0], [30.0, 0.0], [30.1, 0.0], [30.2, 0.0], [30.3, 0.0], [30.4, 0.0], [30.5, 0.0], [30.6, 0.0], [30.7, 0.0], [30.8, 0.0], [30.9, 0.0], [31.0, 0.0], [31.1, 0.0], [31.2, 0.0], [31.3, 0.0], [31.4, 0.0], [31.5, 0.0], [31.6, 0.0], [31.7, 0.0], [31.8, 0.0], [31.9, 0.0], [32.0, 0.0], [32.1, 0.0], [32.2, 0.0], [32.3, 0.0], [32.4, 0.0], [32.5, 0.0], [32.6, 0.0], [32.7, 0.0], [32.8, 0.0], [32.9, 0.0], [33.0, 0.0], [33.1, 0.0], [33.2, 0.0], [33.3, 0.0], [33.4, 0.0], [33.5, 0.0], [33.6, 0.0], [33.7, 0.0], [33.8, 0.0], [33.9, 0.0], [34.0, 0.0], [34.1, 0.0], [34.2, 0.0], [34.3, 0.0], [34.4, 0.0], [34.5, 0.0], [34.6, 0.0], [34.7, 0.0], [34.8, 0.0], [34.9, 0.0], [35.0, 0.0], [35.1, 0.0], [35.2, 0.0], [35.3, 0.0], [35.4, 0.0], [35.5, 0.0], [35.6, 0.0], [35.7, 0.0], [35.8, 0.0], [35.9, 0.0], [36.0, 0.0], [36.1, 0.0], [36.2, 0.0], [36.3, 0.0], [36.4, 0.0], [36.5, 0.0], [36.6, 0.0], [36.7, 0.0], [36.8, 0.0], [36.9, 0.0], [37.0, 0.0], [37.1, 0.0], [37.2, 0.0], [37.3, 0.0], [37.4, 1.0], [37.5, 1.0], [37.6, 1.0], [37.7, 1.0], [37.8, 1.0], [37.9, 1.0], [38.0, 1.0], [38.1, 1.0], [38.2, 1.0], [38.3, 1.0], [38.4, 1.0], [38.5, 1.0], [38.6, 1.0], [38.7, 1.0], [38.8, 1.0], [38.9, 1.0], [39.0, 1.0], [39.1, 1.0], [39.2, 1.0], [39.3, 1.0], [39.4, 1.0], [39.5, 1.0], [39.6, 1.0], [39.7, 1.0], [39.8, 1.0], [39.9, 1.0], [40.0, 1.0], [40.1, 1.0], [40.2, 1.0], [40.3, 1.0], [40.4, 1.0], [40.5, 1.0], [40.6, 1.0], [40.7, 1.0], [40.8, 1.0], [40.9, 1.0], [41.0, 1.0], [41.1, 1.0], [41.2, 1.0], [41.3, 1.0], [41.4, 1.0], [41.5, 1.0], [41.6, 1.0], [41.7, 1.0], [41.8, 1.0], [41.9, 1.0], [42.0, 1.0], [42.1, 1.0], [42.2, 1.0], [42.3, 1.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 1.0], [66.0, 1.0], [66.1, 1.0], [66.2, 1.0], [66.3, 1.0], [66.4, 1.0], [66.5, 1.0], [66.6, 1.0], [66.7, 1.0], [66.8, 1.0], [66.9, 1.0], [67.0, 1.0], [67.1, 1.0], [67.2, 1.0], [67.3, 1.0], [67.4, 1.0], [67.5, 1.0], [67.6, 1.0], [67.7, 1.0], [67.8, 1.0], [67.9, 1.0], [68.0, 1.0], [68.1, 1.0], [68.2, 1.0], [68.3, 1.0], [68.4, 1.0], [68.5, 1.0], [68.6, 1.0], [68.7, 1.0], [68.8, 1.0], [68.9, 1.0], [69.0, 1.0], [69.1, 1.0], [69.2, 1.0], [69.3, 1.0], [69.4, 1.0], [69.5, 1.0], [69.6, 1.0], [69.7, 1.0], [69.8, 1.0], [69.9, 1.0], [70.0, 1.0], [70.1, 1.0], [70.2, 1.0], [70.3, 1.0], [70.4, 1.0], [70.5, 1.0], [70.6, 1.0], [70.7, 1.0], [70.8, 1.0], [70.9, 1.0], [71.0, 1.0], [71.1, 1.0], [71.2, 1.0], [71.3, 1.0], [71.4, 1.0], [71.5, 1.0], [71.6, 1.0], [71.7, 1.0], [71.8, 1.0], [71.9, 1.0], [72.0, 1.0], [72.1, 1.0], [72.2, 1.0], [72.3, 1.0], [72.4, 1.0], [72.5, 1.0], [72.6, 1.0], [72.7, 1.0], [72.8, 1.0], [72.9, 1.0], [73.0, 1.0], [73.1, 1.0], [73.2, 1.0], [73.3, 1.0], [73.4, 1.0], [73.5, 1.0], [73.6, 1.0], [73.7, 1.0], [73.8, 1.0], [73.9, 1.0], [74.0, 1.0], [74.1, 1.0], [74.2, 1.0], [74.3, 1.0], [74.4, 1.0], [74.5, 1.0], [74.6, 1.0], [74.7, 1.0], [74.8, 1.0], [74.9, 1.0], [75.0, 1.0], [75.1, 1.0], [75.2, 1.0], [75.3, 1.0], [75.4, 1.0], [75.5, 1.0], [75.6, 1.0], [75.7, 1.0], [75.8, 1.0], [75.9, 1.0], [76.0, 1.0], [76.1, 1.0], [76.2, 1.0], [76.3, 1.0], [76.4, 1.0], [76.5, 1.0], [76.6, 1.0], [76.7, 1.0], [76.8, 1.0], [76.9, 1.0], [77.0, 1.0], [77.1, 1.0], [77.2, 1.0], [77.3, 1.0], [77.4, 1.0], [77.5, 1.0], [77.6, 1.0], [77.7, 1.0], [77.8, 1.0], [77.9, 1.0], [78.0, 1.0], [78.1, 1.0], [78.2, 1.0], [78.3, 1.0], [78.4, 1.0], [78.5, 1.0], [78.6, 1.0], [78.7, 1.0], [78.8, 1.0], [78.9, 1.0], [79.0, 1.0], [79.1, 1.0], [79.2, 1.0], [79.3, 1.0], [79.4, 1.0], [79.5, 1.0], [79.6, 1.0], [79.7, 1.0], [79.8, 1.0], [79.9, 1.0], [80.0, 1.0], [80.1, 1.0], [80.2, 1.0], [80.3, 1.0], [80.4, 1.0], [80.5, 1.0], [80.6, 1.0], [80.7, 1.0], [80.8, 1.0], [80.9, 1.0], [81.0, 1.0], [81.1, 1.0], [81.2, 1.0], [81.3, 1.0], [81.4, 1.0], [81.5, 1.0], [81.6, 1.0], [81.7, 1.0], [81.8, 1.0], [81.9, 1.0], [82.0, 1.0], [82.1, 1.0], [82.2, 1.0], [82.3, 1.0], [82.4, 1.0], [82.5, 1.0], [82.6, 1.0], [82.7, 1.0], [82.8, 1.0], [82.9, 1.0], [83.0, 1.0], [83.1, 1.0], [83.2, 1.0], [83.3, 1.0], [83.4, 1.0], [83.5, 1.0], [83.6, 1.0], [83.7, 1.0], [83.8, 1.0], [83.9, 1.0], [84.0, 1.0], [84.1, 1.0], [84.2, 1.0], [84.3, 1.0], [84.4, 1.0], [84.5, 1.0], [84.6, 1.0], [84.7, 1.0], [84.8, 1.0], [84.9, 1.0], [85.0, 1.0], [85.1, 1.0], [85.2, 1.0], [85.3, 1.0], [85.4, 1.0], [85.5, 1.0], [85.6, 1.0], [85.7, 1.0], [85.8, 1.0], [85.9, 1.0], [86.0, 1.0], [86.1, 1.0], [86.2, 1.0], [86.3, 1.0], [86.4, 1.0], [86.5, 1.0], [86.6, 1.0], [86.7, 1.0], [86.8, 1.0], [86.9, 1.0], [87.0, 1.0], [87.1, 1.0], [87.2, 1.0], [87.3, 1.0], [87.4, 1.0], [87.5, 1.0], [87.6, 1.0], [87.7, 1.0], [87.8, 1.0], [87.9, 1.0], [88.0, 1.0], [88.1, 1.0], [88.2, 1.0], [88.3, 1.0], [88.4, 1.0], [88.5, 1.0], [88.6, 1.0], [88.7, 1.0], [88.8, 1.0], [88.9, 1.0], [89.0, 1.0], [89.1, 1.0], [89.2, 1.0], [89.3, 1.0], [89.4, 1.0], [89.5, 1.0], [89.6, 1.0], [89.7, 1.0], [89.8, 1.0], [89.9, 1.0], [90.0, 1.0], [90.1, 1.0], [90.2, 1.0], [90.3, 1.0], [90.4, 1.0], [90.5, 1.0], [90.6, 1.0], [90.7, 1.0], [90.8, 1.0], [90.9, 1.0], [91.0, 1.0], [91.1, 1.0], [91.2, 1.0], [91.3, 1.0], [91.4, 1.0], [91.5, 1.0], [91.6, 1.0], [91.7, 1.0], [91.8, 1.0], [91.9, 1.0], [92.0, 1.0], [92.1, 1.0], [92.2, 1.0], [92.3, 1.0], [92.4, 1.0], [92.5, 1.0], [92.6, 1.0], [92.7, 1.0], [92.8, 1.0], [92.9, 1.0], [93.0, 1.0], [93.1, 1.0], [93.2, 1.0], [93.3, 1.0], [93.4, 1.0], [93.5, 1.0], [93.6, 1.0], [93.7, 1.0], [93.8, 1.0], [93.9, 1.0], [94.0, 1.0], [94.1, 1.0], [94.2, 1.0], [94.3, 1.0], [94.4, 1.0], [94.5, 1.0], [94.6, 1.0], [94.7, 1.0], [94.8, 1.0], [94.9, 1.0], [95.0, 1.0], [95.1, 1.0], [95.2, 1.0], [95.3, 1.0], [95.4, 1.0], [95.5, 1.0], [95.6, 1.0], [95.7, 1.0], [95.8, 1.0], [95.9, 1.0], [96.0, 1.0], [96.1, 1.0], [96.2, 1.0], [96.3, 1.0], [96.4, 1.0], [96.5, 1.0], [96.6, 1.0], [96.7, 1.0], [96.8, 1.0], [96.9, 1.0], [97.0, 1.0], [97.1, 1.0], [97.2, 1.0], [97.3, 1.0], [97.4, 1.0], [97.5, 2.0], [97.6, 2.0], [97.7, 2.0], [97.8, 2.0], [97.9, 2.0], [98.0, 2.0], [98.1, 2.0], [98.2, 2.0], [98.3, 2.0], [98.4, 2.0], [98.5, 2.0], [98.6, 2.0], [98.7, 2.0], [98.8, 2.0], [98.9, 2.0], [99.0, 2.0], [99.1, 2.0], [99.2, 3.0], [99.3, 3.0], [99.4, 4.0], [99.5, 4.0], [99.6, 4.0], [99.7, 5.0], [99.8, 5.0], [99.9, 6.0], [100.0, 45.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1734680.0, "minX": 0.0, "maxY": 1734680.0, "series": [{"data": [[0.0, 1734680.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1734680.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1734680.0, "series": [{"data": [[0.0, 1734680.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.9784007137155335, "minX": 1.6610025E12, "maxY": 4.0, "series": [{"data": [[1.66100268E12, 4.0], [1.6610025E12, 3.9784007137155335], [1.6610028E12, 3.999855476187895], [1.66100262E12, 4.0], [1.66100274E12, 4.0], [1.66100256E12, 4.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6610028E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.6735059249667683, "minX": 1.0, "maxY": 1.5135135135135138, "series": [{"data": [[1.0, 1.5135135135135138], [2.0, 1.1400560224089638], [4.0, 0.6735059249667683], [3.0, 1.2272727272727268]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.999181405215928, 0.6737922844559211]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 124587.45, "minX": 1.6610025E12, "maxY": 1397930.9166666667, "series": [{"data": [[1.66100268E12, 1397930.9166666667], [1.6610025E12, 254499.15], [1.6610028E12, 1102471.15], [1.66100262E12, 1396301.7333333334], [1.66100274E12, 1367609.7833333334], [1.66100256E12, 1390995.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66100268E12, 684342.75], [1.6610025E12, 124587.45], [1.6610028E12, 539703.45], [1.66100262E12, 683545.2], [1.66100274E12, 669499.35], [1.66100256E12, 680947.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6610028E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 0.6677456581515693, "minX": 1.6610025E12, "maxY": 0.6952152885382887, "series": [{"data": [[1.66100268E12, 0.6677456581515693], [1.6610025E12, 0.6952152885382887], [1.6610028E12, 0.6776468632913127], [1.66100262E12, 0.6687159093502469], [1.66100274E12, 0.6817229919640705], [1.66100256E12, 0.6701927812968855]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6610028E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.6664975993389196, "minX": 1.6610025E12, "maxY": 0.6930710115665779, "series": [{"data": [[1.66100268E12, 0.6664975993389196], [1.6610025E12, 0.6930710115665779], [1.6610028E12, 0.6762594346950972], [1.66100262E12, 0.6675462719948827], [1.66100274E12, 0.6803278449784803], [1.66100256E12, 0.6689413637873549]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6610028E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6610025E12, "maxY": 4.538980451080721E-4, "series": [{"data": [[1.66100268E12, 8.548348031742767E-6], [1.6610025E12, 4.538980451080721E-4], [1.6610028E12, 0.0], [1.66100262E12, 0.0], [1.66100274E12, 0.0], [1.66100256E12, 8.590966884686208E-6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6610028E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6610025E12, "maxY": 45.0, "series": [{"data": [[1.66100268E12, 18.0], [1.6610025E12, 45.0], [1.6610028E12, 16.0], [1.66100262E12, 17.0], [1.66100274E12, 20.0], [1.66100256E12, 18.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66100268E12, 1.0], [1.6610025E12, 1.0], [1.6610028E12, 1.0], [1.66100262E12, 1.0], [1.66100274E12, 1.0], [1.66100256E12, 1.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66100268E12, 2.0], [1.6610025E12, 2.0], [1.6610028E12, 2.0], [1.66100262E12, 2.0], [1.66100274E12, 2.0], [1.66100256E12, 2.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66100268E12, 1.0], [1.6610025E12, 1.0], [1.6610028E12, 1.0], [1.66100262E12, 1.0], [1.66100274E12, 1.0], [1.66100256E12, 1.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66100268E12, 0.0], [1.6610025E12, 0.0], [1.6610028E12, 0.0], [1.66100262E12, 0.0], [1.66100274E12, 0.0], [1.66100256E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66100268E12, 1.0], [1.6610025E12, 1.0], [1.6610028E12, 1.0], [1.66100262E12, 1.0], [1.66100274E12, 1.0], [1.66100256E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6610028E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 297.0, "maxY": 1.0, "series": [{"data": [[297.0, 1.0], [1428.0, 1.0], [3779.0, 1.0], [4492.0, 1.0], [5050.0, 1.0], [4990.0, 1.0], [4980.0, 1.0], [5112.0, 1.0], [5320.0, 1.0], [5218.0, 1.0], [5202.0, 1.0], [5216.0, 1.0], [5204.0, 1.0], [5244.0, 1.0], [5356.0, 1.0], [5352.0, 1.0], [5154.0, 1.0], [5162.0, 1.0], [5368.0, 1.0], [5372.0, 1.0], [5262.0, 1.0], [5272.0, 1.0], [5122.0, 1.0], [5602.0, 1.0], [5530.0, 1.0], [5532.0, 1.0], [5556.0, 1.0], [5536.0, 1.0], [5566.0, 1.0], [5534.0, 1.0], [5402.0, 1.0], [5392.0, 1.0], [5394.0, 1.0], [5526.0, 1.0], [5512.0, 1.0], [5630.0, 1.0], [5594.0, 1.0], [5600.0, 1.0], [5410.0, 1.0], [5574.0, 1.0], [5608.0, 1.0], [5610.0, 1.0], [5612.0, 1.0], [5490.0, 1.0], [5450.0, 1.0], [5444.0, 1.0], [5452.0, 1.0], [5480.0, 1.0], [5478.0, 1.0], [5502.0, 1.0], [5384.0, 1.0], [5496.0, 1.0], [5826.0, 1.0], [5646.0, 1.0], [5814.0, 1.0], [5816.0, 1.0], [5818.0, 1.0], [5872.0, 1.0], [5712.0, 1.0], [5704.0, 1.0], [5702.0, 1.0], [5706.0, 1.0], [5758.0, 1.0], [5864.0, 1.0], [5856.0, 1.0], [5854.0, 1.0], [5830.0, 1.0], [5840.0, 1.0], [5654.0, 1.0], [5658.0, 1.0], [5684.0, 1.0], [5682.0, 1.0], [5678.0, 1.0], [5672.0, 1.0], [5652.0, 1.0], [5648.0, 1.0], [5766.0, 1.0], [5882.0, 1.0], [5798.0, 1.0], [5784.0, 1.0], [5770.0, 1.0], [5776.0, 1.0], [5948.0, 1.0], [6140.0, 1.0], [6136.0, 1.0], [6066.0, 1.0], [6020.0, 1.0], [6032.0, 1.0], [6048.0, 1.0], [6018.0, 1.0], [6106.0, 1.0], [6112.0, 1.0], [6100.0, 1.0], [6094.0, 1.0], [6092.0, 1.0], [6086.0, 1.0], [6080.0, 1.0], [6134.0, 1.0], [6124.0, 1.0], [5952.0, 1.0], [5968.0, 1.0], [5978.0, 1.0], [5932.0, 1.0], [5928.0, 1.0], [5944.0, 1.0], [5942.0, 1.0], [5946.0, 1.0], [5984.0, 1.0], [6004.0, 1.0], [6000.0, 1.0], [5916.0, 1.0], [6010.0, 1.0], [6012.0, 1.0], [5910.0, 1.0], [5906.0, 1.0], [5982.0, 1.0], [6162.0, 1.0], [6172.0, 1.0], [6250.0, 1.0], [6238.0, 1.0], [6236.0, 1.0], [6230.0, 1.0], [6220.0, 1.0], [6224.0, 1.0], [6262.0, 1.0], [6260.0, 1.0], [6258.0, 1.0], [6270.0, 1.0], [6184.0, 1.0], [6178.0, 1.0], [6180.0, 1.0], [6174.0, 1.0], [6198.0, 1.0], [6194.0, 1.0], [6188.0, 1.0], [6296.0, 1.0], [6282.0, 1.0], [6300.0, 1.0], [6326.0, 1.0], [6278.0, 1.0], [6274.0, 1.0], [6394.0, 1.0], [6358.0, 1.0], [6352.0, 1.0], [6376.0, 1.0], [6390.0, 1.0], [6366.0, 1.0], [6400.0, 1.0], [6522.0, 1.0], [6576.0, 1.0], [4655.0, 1.0], [4775.0, 1.0], [5035.0, 1.0], [5111.0, 1.0], [4911.0, 1.0], [5081.0, 1.0], [5061.0, 1.0], [5229.0, 1.0], [5195.0, 1.0], [5187.0, 1.0], [5225.0, 1.0], [5283.0, 1.0], [5145.0, 1.0], [5325.0, 1.0], [5273.0, 1.0], [5363.0, 1.0], [5369.0, 1.0], [5365.0, 1.0], [5247.0, 1.0], [5629.0, 1.0], [5615.0, 1.0], [5421.0, 1.0], [5531.0, 1.0], [5519.0, 1.0], [5621.0, 1.0], [5631.0, 1.0], [5507.0, 1.0], [5597.0, 1.0], [5573.0, 1.0], [5425.0, 1.0], [5579.0, 1.0], [5581.0, 1.0], [5575.0, 1.0], [5583.0, 1.0], [5591.0, 1.0], [5603.0, 1.0], [5609.0, 1.0], [5385.0, 1.0], [5415.0, 1.0], [5485.0, 1.0], [5477.0, 1.0], [5469.0, 1.0], [5377.0, 1.0], [5843.0, 1.0], [5819.0, 1.0], [5821.0, 1.0], [5817.0, 1.0], [5813.0, 1.0], [5741.0, 1.0], [5711.0, 1.0], [5713.0, 1.0], [5637.0, 1.0], [5743.0, 1.0], [5753.0, 1.0], [5849.0, 1.0], [5867.0, 1.0], [5851.0, 1.0], [5857.0, 1.0], [5661.0, 1.0], [5691.0, 1.0], [5827.0, 1.0], [5665.0, 1.0], [5685.0, 1.0], [5647.0, 1.0], [5811.0, 1.0], [5883.0, 1.0], [5885.0, 1.0], [5879.0, 1.0], [5873.0, 1.0], [5871.0, 1.0], [5791.0, 1.0], [5789.0, 1.0], [5775.0, 1.0], [5761.0, 1.0], [6129.0, 1.0], [6143.0, 1.0], [6139.0, 1.0], [6073.0, 1.0], [6077.0, 1.0], [6061.0, 1.0], [6025.0, 1.0], [6021.0, 1.0], [6041.0, 1.0], [6057.0, 1.0], [6125.0, 1.0], [6127.0, 1.0], [6101.0, 1.0], [6087.0, 1.0], [5945.0, 1.0], [6099.0, 1.0], [5999.0, 1.0], [5973.0, 1.0], [5995.0, 1.0], [5927.0, 1.0], [5919.0, 1.0], [5913.0, 1.0], [5895.0, 1.0], [5899.0, 1.0], [5911.0, 1.0], [5925.0, 1.0], [6177.0, 1.0], [6349.0, 1.0], [6249.0, 1.0], [6247.0, 1.0], [6221.0, 1.0], [6269.0, 1.0], [6261.0, 1.0], [6175.0, 1.0], [6161.0, 1.0], [6199.0, 1.0], [6187.0, 1.0], [6203.0, 1.0], [6309.0, 1.0], [6325.0, 1.0], [6323.0, 1.0], [6331.0, 1.0], [6287.0, 1.0], [6419.0, 1.0], [6581.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6581.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 297.0, "maxY": 1.0, "series": [{"data": [[297.0, 1.0], [1428.0, 1.0], [3779.0, 1.0], [4492.0, 1.0], [5050.0, 1.0], [4990.0, 1.0], [4980.0, 1.0], [5112.0, 1.0], [5320.0, 1.0], [5218.0, 1.0], [5202.0, 1.0], [5216.0, 1.0], [5204.0, 1.0], [5244.0, 1.0], [5356.0, 1.0], [5352.0, 1.0], [5154.0, 1.0], [5162.0, 1.0], [5368.0, 1.0], [5372.0, 1.0], [5262.0, 1.0], [5272.0, 1.0], [5122.0, 1.0], [5602.0, 1.0], [5530.0, 1.0], [5532.0, 1.0], [5556.0, 1.0], [5536.0, 1.0], [5566.0, 1.0], [5534.0, 1.0], [5402.0, 1.0], [5392.0, 1.0], [5394.0, 1.0], [5526.0, 1.0], [5512.0, 1.0], [5630.0, 1.0], [5594.0, 1.0], [5600.0, 1.0], [5410.0, 1.0], [5574.0, 1.0], [5608.0, 1.0], [5610.0, 1.0], [5612.0, 1.0], [5490.0, 1.0], [5450.0, 1.0], [5444.0, 1.0], [5452.0, 1.0], [5480.0, 1.0], [5478.0, 1.0], [5502.0, 1.0], [5384.0, 1.0], [5496.0, 1.0], [5826.0, 1.0], [5646.0, 1.0], [5814.0, 1.0], [5816.0, 1.0], [5818.0, 1.0], [5872.0, 1.0], [5712.0, 1.0], [5704.0, 1.0], [5702.0, 1.0], [5706.0, 1.0], [5758.0, 1.0], [5864.0, 1.0], [5856.0, 1.0], [5854.0, 1.0], [5830.0, 1.0], [5840.0, 1.0], [5654.0, 1.0], [5658.0, 1.0], [5684.0, 1.0], [5682.0, 1.0], [5678.0, 1.0], [5672.0, 1.0], [5652.0, 1.0], [5648.0, 1.0], [5766.0, 1.0], [5882.0, 1.0], [5798.0, 1.0], [5784.0, 1.0], [5770.0, 1.0], [5776.0, 1.0], [5948.0, 1.0], [6140.0, 1.0], [6136.0, 1.0], [6066.0, 1.0], [6020.0, 1.0], [6032.0, 1.0], [6048.0, 1.0], [6018.0, 1.0], [6106.0, 1.0], [6112.0, 1.0], [6100.0, 1.0], [6094.0, 1.0], [6092.0, 1.0], [6086.0, 1.0], [6080.0, 1.0], [6134.0, 1.0], [6124.0, 1.0], [5952.0, 1.0], [5968.0, 1.0], [5978.0, 1.0], [5932.0, 1.0], [5928.0, 1.0], [5944.0, 1.0], [5942.0, 1.0], [5946.0, 1.0], [5984.0, 1.0], [6004.0, 1.0], [6000.0, 1.0], [5916.0, 1.0], [6010.0, 1.0], [6012.0, 1.0], [5910.0, 1.0], [5906.0, 1.0], [5982.0, 1.0], [6162.0, 1.0], [6172.0, 1.0], [6250.0, 1.0], [6238.0, 1.0], [6236.0, 1.0], [6230.0, 1.0], [6220.0, 1.0], [6224.0, 1.0], [6262.0, 1.0], [6260.0, 1.0], [6258.0, 1.0], [6270.0, 1.0], [6184.0, 1.0], [6178.0, 1.0], [6180.0, 1.0], [6174.0, 1.0], [6198.0, 1.0], [6194.0, 1.0], [6188.0, 1.0], [6296.0, 1.0], [6282.0, 1.0], [6300.0, 1.0], [6326.0, 1.0], [6278.0, 1.0], [6274.0, 1.0], [6394.0, 1.0], [6358.0, 1.0], [6352.0, 1.0], [6376.0, 1.0], [6390.0, 1.0], [6366.0, 1.0], [6400.0, 1.0], [6522.0, 1.0], [6576.0, 1.0], [4655.0, 1.0], [4775.0, 1.0], [5035.0, 1.0], [5111.0, 1.0], [4911.0, 1.0], [5081.0, 1.0], [5061.0, 1.0], [5229.0, 1.0], [5195.0, 1.0], [5187.0, 1.0], [5225.0, 1.0], [5283.0, 1.0], [5145.0, 1.0], [5325.0, 1.0], [5273.0, 1.0], [5363.0, 1.0], [5369.0, 1.0], [5365.0, 1.0], [5247.0, 1.0], [5629.0, 1.0], [5615.0, 1.0], [5421.0, 1.0], [5531.0, 1.0], [5519.0, 1.0], [5621.0, 1.0], [5631.0, 1.0], [5507.0, 1.0], [5597.0, 1.0], [5573.0, 1.0], [5425.0, 1.0], [5579.0, 1.0], [5581.0, 1.0], [5575.0, 1.0], [5583.0, 1.0], [5591.0, 1.0], [5603.0, 1.0], [5609.0, 1.0], [5385.0, 1.0], [5415.0, 1.0], [5485.0, 1.0], [5477.0, 1.0], [5469.0, 1.0], [5377.0, 1.0], [5843.0, 1.0], [5819.0, 1.0], [5821.0, 1.0], [5817.0, 1.0], [5813.0, 1.0], [5741.0, 1.0], [5711.0, 1.0], [5713.0, 1.0], [5637.0, 1.0], [5743.0, 1.0], [5753.0, 1.0], [5849.0, 1.0], [5867.0, 1.0], [5851.0, 1.0], [5857.0, 1.0], [5661.0, 1.0], [5691.0, 1.0], [5827.0, 1.0], [5665.0, 1.0], [5685.0, 1.0], [5647.0, 1.0], [5811.0, 1.0], [5883.0, 1.0], [5885.0, 1.0], [5879.0, 1.0], [5873.0, 1.0], [5871.0, 1.0], [5791.0, 1.0], [5789.0, 1.0], [5775.0, 1.0], [5761.0, 1.0], [6129.0, 1.0], [6143.0, 1.0], [6139.0, 1.0], [6073.0, 1.0], [6077.0, 1.0], [6061.0, 1.0], [6025.0, 1.0], [6021.0, 1.0], [6041.0, 1.0], [6057.0, 1.0], [6125.0, 1.0], [6127.0, 1.0], [6101.0, 1.0], [6087.0, 1.0], [5945.0, 1.0], [6099.0, 1.0], [5999.0, 1.0], [5973.0, 1.0], [5995.0, 1.0], [5927.0, 1.0], [5919.0, 1.0], [5913.0, 1.0], [5895.0, 1.0], [5899.0, 1.0], [5911.0, 1.0], [5925.0, 1.0], [6177.0, 1.0], [6349.0, 1.0], [6249.0, 1.0], [6247.0, 1.0], [6221.0, 1.0], [6269.0, 1.0], [6261.0, 1.0], [6175.0, 1.0], [6161.0, 1.0], [6199.0, 1.0], [6187.0, 1.0], [6203.0, 1.0], [6309.0, 1.0], [6325.0, 1.0], [6323.0, 1.0], [6331.0, 1.0], [6287.0, 1.0], [6419.0, 1.0], [6581.0, 1.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6581.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1064.9, "minX": 1.6610025E12, "maxY": 5849.066666666667, "series": [{"data": [[1.66100268E12, 5849.066666666667], [1.6610025E12, 1064.9], [1.6610028E12, 4612.8], [1.66100262E12, 5842.283333333334], [1.66100274E12, 5722.216666666666], [1.66100256E12, 5820.066666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6610028E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1064.85, "minX": 1.6610025E12, "maxY": 5849.083333333333, "series": [{"data": [[1.66100268E12, 5849.083333333333], [1.6610025E12, 1064.85], [1.6610028E12, 4612.85], [1.66100262E12, 5842.266666666666], [1.66100274E12, 5722.216666666666], [1.66100256E12, 5820.066666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6610028E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1064.85, "minX": 1.6610025E12, "maxY": 5849.083333333333, "series": [{"data": [[1.66100268E12, 5849.083333333333], [1.6610025E12, 1064.85], [1.6610028E12, 4612.85], [1.66100262E12, 5842.266666666666], [1.66100274E12, 5722.216666666666], [1.66100256E12, 5820.066666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6610028E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1064.85, "minX": 1.6610025E12, "maxY": 5849.083333333333, "series": [{"data": [[1.66100268E12, 5849.083333333333], [1.6610025E12, 1064.85], [1.6610028E12, 4612.85], [1.66100262E12, 5842.266666666666], [1.66100274E12, 5722.216666666666], [1.66100256E12, 5820.066666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6610028E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

