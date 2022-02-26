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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 34.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 0.0], [15.6, 0.0], [15.7, 0.0], [15.8, 0.0], [15.9, 0.0], [16.0, 0.0], [16.1, 0.0], [16.2, 0.0], [16.3, 0.0], [16.4, 0.0], [16.5, 0.0], [16.6, 0.0], [16.7, 0.0], [16.8, 0.0], [16.9, 0.0], [17.0, 0.0], [17.1, 0.0], [17.2, 0.0], [17.3, 0.0], [17.4, 0.0], [17.5, 0.0], [17.6, 0.0], [17.7, 0.0], [17.8, 0.0], [17.9, 0.0], [18.0, 0.0], [18.1, 0.0], [18.2, 0.0], [18.3, 0.0], [18.4, 0.0], [18.5, 0.0], [18.6, 0.0], [18.7, 0.0], [18.8, 0.0], [18.9, 0.0], [19.0, 0.0], [19.1, 0.0], [19.2, 0.0], [19.3, 0.0], [19.4, 0.0], [19.5, 0.0], [19.6, 0.0], [19.7, 0.0], [19.8, 0.0], [19.9, 0.0], [20.0, 0.0], [20.1, 0.0], [20.2, 0.0], [20.3, 0.0], [20.4, 0.0], [20.5, 0.0], [20.6, 0.0], [20.7, 0.0], [20.8, 0.0], [20.9, 0.0], [21.0, 0.0], [21.1, 0.0], [21.2, 0.0], [21.3, 0.0], [21.4, 0.0], [21.5, 0.0], [21.6, 0.0], [21.7, 0.0], [21.8, 0.0], [21.9, 0.0], [22.0, 0.0], [22.1, 0.0], [22.2, 0.0], [22.3, 0.0], [22.4, 0.0], [22.5, 0.0], [22.6, 0.0], [22.7, 0.0], [22.8, 0.0], [22.9, 0.0], [23.0, 0.0], [23.1, 0.0], [23.2, 0.0], [23.3, 0.0], [23.4, 0.0], [23.5, 0.0], [23.6, 0.0], [23.7, 0.0], [23.8, 0.0], [23.9, 0.0], [24.0, 0.0], [24.1, 0.0], [24.2, 0.0], [24.3, 0.0], [24.4, 0.0], [24.5, 0.0], [24.6, 0.0], [24.7, 0.0], [24.8, 0.0], [24.9, 0.0], [25.0, 0.0], [25.1, 0.0], [25.2, 0.0], [25.3, 0.0], [25.4, 0.0], [25.5, 0.0], [25.6, 0.0], [25.7, 0.0], [25.8, 0.0], [25.9, 0.0], [26.0, 0.0], [26.1, 0.0], [26.2, 0.0], [26.3, 0.0], [26.4, 0.0], [26.5, 0.0], [26.6, 0.0], [26.7, 0.0], [26.8, 0.0], [26.9, 0.0], [27.0, 0.0], [27.1, 0.0], [27.2, 0.0], [27.3, 0.0], [27.4, 0.0], [27.5, 0.0], [27.6, 0.0], [27.7, 0.0], [27.8, 0.0], [27.9, 0.0], [28.0, 0.0], [28.1, 0.0], [28.2, 0.0], [28.3, 0.0], [28.4, 0.0], [28.5, 0.0], [28.6, 0.0], [28.7, 0.0], [28.8, 0.0], [28.9, 0.0], [29.0, 0.0], [29.1, 0.0], [29.2, 0.0], [29.3, 0.0], [29.4, 0.0], [29.5, 0.0], [29.6, 0.0], [29.7, 0.0], [29.8, 0.0], [29.9, 0.0], [30.0, 0.0], [30.1, 0.0], [30.2, 0.0], [30.3, 0.0], [30.4, 0.0], [30.5, 0.0], [30.6, 0.0], [30.7, 0.0], [30.8, 0.0], [30.9, 0.0], [31.0, 0.0], [31.1, 0.0], [31.2, 0.0], [31.3, 0.0], [31.4, 0.0], [31.5, 0.0], [31.6, 0.0], [31.7, 0.0], [31.8, 0.0], [31.9, 0.0], [32.0, 0.0], [32.1, 0.0], [32.2, 0.0], [32.3, 0.0], [32.4, 0.0], [32.5, 0.0], [32.6, 0.0], [32.7, 0.0], [32.8, 0.0], [32.9, 0.0], [33.0, 0.0], [33.1, 0.0], [33.2, 0.0], [33.3, 0.0], [33.4, 0.0], [33.5, 0.0], [33.6, 0.0], [33.7, 0.0], [33.8, 0.0], [33.9, 0.0], [34.0, 0.0], [34.1, 0.0], [34.2, 0.0], [34.3, 0.0], [34.4, 0.0], [34.5, 0.0], [34.6, 0.0], [34.7, 0.0], [34.8, 0.0], [34.9, 0.0], [35.0, 0.0], [35.1, 0.0], [35.2, 0.0], [35.3, 0.0], [35.4, 0.0], [35.5, 0.0], [35.6, 0.0], [35.7, 0.0], [35.8, 0.0], [35.9, 0.0], [36.0, 0.0], [36.1, 0.0], [36.2, 0.0], [36.3, 0.0], [36.4, 0.0], [36.5, 0.0], [36.6, 0.0], [36.7, 0.0], [36.8, 0.0], [36.9, 0.0], [37.0, 0.0], [37.1, 0.0], [37.2, 0.0], [37.3, 0.0], [37.4, 0.0], [37.5, 0.0], [37.6, 0.0], [37.7, 0.0], [37.8, 0.0], [37.9, 0.0], [38.0, 0.0], [38.1, 0.0], [38.2, 0.0], [38.3, 0.0], [38.4, 0.0], [38.5, 0.0], [38.6, 0.0], [38.7, 0.0], [38.8, 0.0], [38.9, 0.0], [39.0, 0.0], [39.1, 0.0], [39.2, 0.0], [39.3, 0.0], [39.4, 0.0], [39.5, 0.0], [39.6, 0.0], [39.7, 0.0], [39.8, 0.0], [39.9, 0.0], [40.0, 0.0], [40.1, 0.0], [40.2, 0.0], [40.3, 0.0], [40.4, 0.0], [40.5, 0.0], [40.6, 0.0], [40.7, 0.0], [40.8, 0.0], [40.9, 0.0], [41.0, 0.0], [41.1, 0.0], [41.2, 0.0], [41.3, 0.0], [41.4, 0.0], [41.5, 0.0], [41.6, 0.0], [41.7, 0.0], [41.8, 0.0], [41.9, 0.0], [42.0, 0.0], [42.1, 0.0], [42.2, 0.0], [42.3, 0.0], [42.4, 0.0], [42.5, 0.0], [42.6, 0.0], [42.7, 0.0], [42.8, 0.0], [42.9, 0.0], [43.0, 0.0], [43.1, 0.0], [43.2, 0.0], [43.3, 0.0], [43.4, 0.0], [43.5, 0.0], [43.6, 0.0], [43.7, 0.0], [43.8, 0.0], [43.9, 0.0], [44.0, 0.0], [44.1, 0.0], [44.2, 0.0], [44.3, 0.0], [44.4, 0.0], [44.5, 0.0], [44.6, 0.0], [44.7, 0.0], [44.8, 0.0], [44.9, 0.0], [45.0, 0.0], [45.1, 0.0], [45.2, 0.0], [45.3, 0.0], [45.4, 0.0], [45.5, 0.0], [45.6, 0.0], [45.7, 0.0], [45.8, 0.0], [45.9, 0.0], [46.0, 0.0], [46.1, 0.0], [46.2, 0.0], [46.3, 0.0], [46.4, 0.0], [46.5, 0.0], [46.6, 0.0], [46.7, 0.0], [46.8, 0.0], [46.9, 0.0], [47.0, 0.0], [47.1, 0.0], [47.2, 0.0], [47.3, 0.0], [47.4, 0.0], [47.5, 0.0], [47.6, 0.0], [47.7, 0.0], [47.8, 0.0], [47.9, 0.0], [48.0, 0.0], [48.1, 0.0], [48.2, 0.0], [48.3, 0.0], [48.4, 0.0], [48.5, 0.0], [48.6, 0.0], [48.7, 0.0], [48.8, 0.0], [48.9, 0.0], [49.0, 0.0], [49.1, 0.0], [49.2, 0.0], [49.3, 0.0], [49.4, 0.0], [49.5, 0.0], [49.6, 0.0], [49.7, 0.0], [49.8, 0.0], [49.9, 0.0], [50.0, 0.0], [50.1, 0.0], [50.2, 0.0], [50.3, 0.0], [50.4, 0.0], [50.5, 0.0], [50.6, 0.0], [50.7, 0.0], [50.8, 0.0], [50.9, 0.0], [51.0, 0.0], [51.1, 0.0], [51.2, 0.0], [51.3, 0.0], [51.4, 0.0], [51.5, 0.0], [51.6, 0.0], [51.7, 0.0], [51.8, 0.0], [51.9, 0.0], [52.0, 0.0], [52.1, 0.0], [52.2, 0.0], [52.3, 0.0], [52.4, 0.0], [52.5, 0.0], [52.6, 0.0], [52.7, 0.0], [52.8, 0.0], [52.9, 0.0], [53.0, 0.0], [53.1, 0.0], [53.2, 0.0], [53.3, 0.0], [53.4, 0.0], [53.5, 0.0], [53.6, 0.0], [53.7, 0.0], [53.8, 0.0], [53.9, 0.0], [54.0, 0.0], [54.1, 0.0], [54.2, 0.0], [54.3, 0.0], [54.4, 0.0], [54.5, 0.0], [54.6, 0.0], [54.7, 0.0], [54.8, 0.0], [54.9, 0.0], [55.0, 0.0], [55.1, 0.0], [55.2, 0.0], [55.3, 0.0], [55.4, 0.0], [55.5, 0.0], [55.6, 0.0], [55.7, 0.0], [55.8, 0.0], [55.9, 0.0], [56.0, 0.0], [56.1, 0.0], [56.2, 0.0], [56.3, 0.0], [56.4, 0.0], [56.5, 0.0], [56.6, 0.0], [56.7, 0.0], [56.8, 0.0], [56.9, 0.0], [57.0, 0.0], [57.1, 0.0], [57.2, 0.0], [57.3, 0.0], [57.4, 0.0], [57.5, 0.0], [57.6, 0.0], [57.7, 0.0], [57.8, 0.0], [57.9, 0.0], [58.0, 0.0], [58.1, 0.0], [58.2, 0.0], [58.3, 0.0], [58.4, 0.0], [58.5, 0.0], [58.6, 0.0], [58.7, 0.0], [58.8, 0.0], [58.9, 0.0], [59.0, 0.0], [59.1, 0.0], [59.2, 0.0], [59.3, 0.0], [59.4, 0.0], [59.5, 0.0], [59.6, 0.0], [59.7, 0.0], [59.8, 0.0], [59.9, 0.0], [60.0, 0.0], [60.1, 0.0], [60.2, 0.0], [60.3, 0.0], [60.4, 0.0], [60.5, 0.0], [60.6, 0.0], [60.7, 0.0], [60.8, 0.0], [60.9, 0.0], [61.0, 0.0], [61.1, 0.0], [61.2, 0.0], [61.3, 0.0], [61.4, 0.0], [61.5, 0.0], [61.6, 0.0], [61.7, 0.0], [61.8, 0.0], [61.9, 0.0], [62.0, 0.0], [62.1, 0.0], [62.2, 0.0], [62.3, 0.0], [62.4, 0.0], [62.5, 0.0], [62.6, 0.0], [62.7, 0.0], [62.8, 0.0], [62.9, 0.0], [63.0, 0.0], [63.1, 0.0], [63.2, 0.0], [63.3, 0.0], [63.4, 0.0], [63.5, 0.0], [63.6, 0.0], [63.7, 0.0], [63.8, 0.0], [63.9, 0.0], [64.0, 0.0], [64.1, 0.0], [64.2, 0.0], [64.3, 0.0], [64.4, 0.0], [64.5, 0.0], [64.6, 0.0], [64.7, 0.0], [64.8, 0.0], [64.9, 0.0], [65.0, 0.0], [65.1, 0.0], [65.2, 0.0], [65.3, 0.0], [65.4, 0.0], [65.5, 0.0], [65.6, 0.0], [65.7, 0.0], [65.8, 0.0], [65.9, 0.0], [66.0, 0.0], [66.1, 0.0], [66.2, 0.0], [66.3, 0.0], [66.4, 0.0], [66.5, 0.0], [66.6, 0.0], [66.7, 0.0], [66.8, 0.0], [66.9, 0.0], [67.0, 0.0], [67.1, 0.0], [67.2, 0.0], [67.3, 0.0], [67.4, 0.0], [67.5, 0.0], [67.6, 0.0], [67.7, 0.0], [67.8, 0.0], [67.9, 0.0], [68.0, 0.0], [68.1, 0.0], [68.2, 0.0], [68.3, 0.0], [68.4, 0.0], [68.5, 0.0], [68.6, 0.0], [68.7, 0.0], [68.8, 0.0], [68.9, 0.0], [69.0, 0.0], [69.1, 0.0], [69.2, 0.0], [69.3, 0.0], [69.4, 0.0], [69.5, 0.0], [69.6, 0.0], [69.7, 0.0], [69.8, 0.0], [69.9, 0.0], [70.0, 0.0], [70.1, 0.0], [70.2, 0.0], [70.3, 0.0], [70.4, 0.0], [70.5, 0.0], [70.6, 0.0], [70.7, 0.0], [70.8, 0.0], [70.9, 0.0], [71.0, 0.0], [71.1, 0.0], [71.2, 0.0], [71.3, 0.0], [71.4, 0.0], [71.5, 0.0], [71.6, 0.0], [71.7, 0.0], [71.8, 0.0], [71.9, 0.0], [72.0, 0.0], [72.1, 0.0], [72.2, 0.0], [72.3, 0.0], [72.4, 0.0], [72.5, 0.0], [72.6, 0.0], [72.7, 0.0], [72.8, 0.0], [72.9, 0.0], [73.0, 0.0], [73.1, 0.0], [73.2, 0.0], [73.3, 0.0], [73.4, 0.0], [73.5, 0.0], [73.6, 0.0], [73.7, 0.0], [73.8, 0.0], [73.9, 0.0], [74.0, 0.0], [74.1, 0.0], [74.2, 0.0], [74.3, 0.0], [74.4, 0.0], [74.5, 0.0], [74.6, 0.0], [74.7, 0.0], [74.8, 0.0], [74.9, 0.0], [75.0, 0.0], [75.1, 0.0], [75.2, 0.0], [75.3, 0.0], [75.4, 0.0], [75.5, 0.0], [75.6, 0.0], [75.7, 0.0], [75.8, 0.0], [75.9, 0.0], [76.0, 0.0], [76.1, 0.0], [76.2, 0.0], [76.3, 0.0], [76.4, 0.0], [76.5, 0.0], [76.6, 0.0], [76.7, 0.0], [76.8, 0.0], [76.9, 0.0], [77.0, 0.0], [77.1, 0.0], [77.2, 0.0], [77.3, 0.0], [77.4, 0.0], [77.5, 0.0], [77.6, 0.0], [77.7, 0.0], [77.8, 0.0], [77.9, 0.0], [78.0, 0.0], [78.1, 0.0], [78.2, 0.0], [78.3, 0.0], [78.4, 0.0], [78.5, 0.0], [78.6, 0.0], [78.7, 0.0], [78.8, 0.0], [78.9, 0.0], [79.0, 0.0], [79.1, 0.0], [79.2, 0.0], [79.3, 0.0], [79.4, 0.0], [79.5, 0.0], [79.6, 0.0], [79.7, 0.0], [79.8, 0.0], [79.9, 0.0], [80.0, 0.0], [80.1, 0.0], [80.2, 0.0], [80.3, 0.0], [80.4, 0.0], [80.5, 0.0], [80.6, 0.0], [80.7, 0.0], [80.8, 0.0], [80.9, 0.0], [81.0, 0.0], [81.1, 0.0], [81.2, 0.0], [81.3, 0.0], [81.4, 0.0], [81.5, 0.0], [81.6, 0.0], [81.7, 0.0], [81.8, 0.0], [81.9, 0.0], [82.0, 0.0], [82.1, 0.0], [82.2, 0.0], [82.3, 0.0], [82.4, 0.0], [82.5, 0.0], [82.6, 0.0], [82.7, 0.0], [82.8, 0.0], [82.9, 0.0], [83.0, 0.0], [83.1, 0.0], [83.2, 0.0], [83.3, 0.0], [83.4, 0.0], [83.5, 0.0], [83.6, 0.0], [83.7, 0.0], [83.8, 0.0], [83.9, 0.0], [84.0, 0.0], [84.1, 0.0], [84.2, 0.0], [84.3, 0.0], [84.4, 0.0], [84.5, 0.0], [84.6, 0.0], [84.7, 0.0], [84.8, 0.0], [84.9, 0.0], [85.0, 0.0], [85.1, 0.0], [85.2, 0.0], [85.3, 0.0], [85.4, 0.0], [85.5, 0.0], [85.6, 0.0], [85.7, 0.0], [85.8, 0.0], [85.9, 0.0], [86.0, 0.0], [86.1, 0.0], [86.2, 0.0], [86.3, 0.0], [86.4, 0.0], [86.5, 0.0], [86.6, 0.0], [86.7, 0.0], [86.8, 0.0], [86.9, 0.0], [87.0, 0.0], [87.1, 0.0], [87.2, 0.0], [87.3, 0.0], [87.4, 0.0], [87.5, 0.0], [87.6, 0.0], [87.7, 0.0], [87.8, 0.0], [87.9, 0.0], [88.0, 0.0], [88.1, 0.0], [88.2, 0.0], [88.3, 0.0], [88.4, 0.0], [88.5, 0.0], [88.6, 0.0], [88.7, 0.0], [88.8, 0.0], [88.9, 0.0], [89.0, 0.0], [89.1, 0.0], [89.2, 0.0], [89.3, 0.0], [89.4, 0.0], [89.5, 0.0], [89.6, 0.0], [89.7, 0.0], [89.8, 0.0], [89.9, 0.0], [90.0, 0.0], [90.1, 0.0], [90.2, 0.0], [90.3, 0.0], [90.4, 0.0], [90.5, 0.0], [90.6, 0.0], [90.7, 0.0], [90.8, 0.0], [90.9, 1.0], [91.0, 1.0], [91.1, 1.0], [91.2, 1.0], [91.3, 1.0], [91.4, 1.0], [91.5, 1.0], [91.6, 1.0], [91.7, 1.0], [91.8, 1.0], [91.9, 1.0], [92.0, 1.0], [92.1, 1.0], [92.2, 1.0], [92.3, 1.0], [92.4, 1.0], [92.5, 1.0], [92.6, 1.0], [92.7, 1.0], [92.8, 1.0], [92.9, 1.0], [93.0, 1.0], [93.1, 1.0], [93.2, 1.0], [93.3, 1.0], [93.4, 1.0], [93.5, 1.0], [93.6, 1.0], [93.7, 1.0], [93.8, 1.0], [93.9, 1.0], [94.0, 1.0], [94.1, 1.0], [94.2, 1.0], [94.3, 1.0], [94.4, 1.0], [94.5, 1.0], [94.6, 1.0], [94.7, 1.0], [94.8, 1.0], [94.9, 1.0], [95.0, 1.0], [95.1, 1.0], [95.2, 1.0], [95.3, 1.0], [95.4, 1.0], [95.5, 1.0], [95.6, 1.0], [95.7, 1.0], [95.8, 1.0], [95.9, 1.0], [96.0, 1.0], [96.1, 1.0], [96.2, 1.0], [96.3, 1.0], [96.4, 1.0], [96.5, 1.0], [96.6, 1.0], [96.7, 1.0], [96.8, 1.0], [96.9, 1.0], [97.0, 1.0], [97.1, 1.0], [97.2, 1.0], [97.3, 1.0], [97.4, 1.0], [97.5, 1.0], [97.6, 1.0], [97.7, 1.0], [97.8, 1.0], [97.9, 1.0], [98.0, 1.0], [98.1, 1.0], [98.2, 1.0], [98.3, 1.0], [98.4, 1.0], [98.5, 1.0], [98.6, 1.0], [98.7, 1.0], [98.8, 1.0], [98.9, 1.0], [99.0, 1.0], [99.1, 1.0], [99.2, 1.0], [99.3, 1.0], [99.4, 1.0], [99.5, 1.0], [99.6, 1.0], [99.7, 1.0], [99.8, 1.0], [99.9, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.1615257E7, "minX": 0.0, "maxY": 1.1615257E7, "series": [{"data": [[0.0, 1.1615257E7]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4.9E-324, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.1615257E7, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1.1615257E7, "series": [{"data": [[0.0, 1.1615257E7]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.9982965584987293, "minX": 1.64585094E12, "maxY": 4.0, "series": [{"data": [[1.64585106E12, 4.0], [1.64585094E12, 3.9982965584987293], [1.64585124E12, 3.9995250268094327], [1.64585112E12, 4.0], [1.64585118E12, 4.0], [1.645851E12, 4.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64585124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.09221671683626587, "minX": 1.0, "maxY": 0.842857142857143, "series": [{"data": [[1.0, 0.842857142857143], [2.0, 0.5413223140495859], [4.0, 0.09221671683626587], [3.0, 0.5774395702775301]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.9997426660467936, 0.09230049752666476]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1321969.35, "minX": 1.64585094E12, "maxY": 5370025.5, "series": [{"data": [[1.64585106E12, 5186772.0], [1.64585094E12, 3522721.5], [1.64585124E12, 1525349.25], [1.64585112E12, 5273772.75], [1.64585118E12, 5255687.25], [1.645851E12, 5370025.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64585106E12, 4495202.4], [1.64585094E12, 3053025.3], [1.64585124E12, 1321969.35], [1.64585112E12, 4570603.05], [1.64585118E12, 4554928.95], [1.645851E12, 4654022.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64585124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 0.08972303762803198, "minX": 1.64585094E12, "maxY": 0.09515703980572793, "series": [{"data": [[1.64585106E12, 0.09336630759940297], [1.64585094E12, 0.09515703980572793], [1.64585124E12, 0.09254749363137509], [1.64585112E12, 0.09192546265858656], [1.64585118E12, 0.0922721857165315], [1.645851E12, 0.08972303762803198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64585124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.08873421550791633, "minX": 1.64585094E12, "maxY": 0.09414851557240611, "series": [{"data": [[1.64585106E12, 0.09237248138148506], [1.64585094E12, 0.09414851557240611], [1.64585124E12, 0.09154591972952857], [1.64585112E12, 0.0909638171269306], [1.64585118E12, 0.09130209374615977], [1.645851E12, 0.08873421550791633]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64585124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64585094E12, "maxY": 1.4690346653860475E-5, "series": [{"data": [[1.64585106E12, 1.7351832700570212E-6], [1.64585094E12, 1.4690346653860475E-5], [1.64585124E12, 0.0], [1.64585112E12, 1.706558175074974E-6], [1.64585118E12, 1.7124306626122523E-6], [1.645851E12, 1.6759696951160012E-6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64585124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.64585094E12, "maxY": 34.0, "series": [{"data": [[1.64585106E12, 11.0], [1.64585094E12, 34.0], [1.64585124E12, 7.0], [1.64585112E12, 7.0], [1.64585118E12, 5.0], [1.645851E12, 12.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64585106E12, 0.0], [1.64585094E12, 0.0], [1.64585124E12, 0.0], [1.64585112E12, 1.0], [1.64585118E12, 0.0], [1.645851E12, 0.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64585106E12, 1.0], [1.64585094E12, 1.0], [1.64585124E12, 1.0], [1.64585112E12, 1.0], [1.64585118E12, 1.0], [1.645851E12, 1.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64585106E12, 1.0], [1.64585094E12, 1.0], [1.64585124E12, 1.0], [1.64585112E12, 1.0], [1.64585118E12, 1.0], [1.645851E12, 1.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64585106E12, 0.0], [1.64585094E12, 0.0], [1.64585124E12, 0.0], [1.64585112E12, 0.0], [1.64585118E12, 0.0], [1.645851E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64585106E12, 0.0], [1.64585094E12, 0.0], [1.64585124E12, 0.0], [1.64585112E12, 0.0], [1.64585118E12, 0.0], [1.645851E12, 0.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64585124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 261.0, "maxY": 1.0, "series": [{"data": [[33319.0, 0.0], [36439.0, 0.0], [35415.0, 0.0], [38231.0, 0.0], [38711.0, 0.0], [37543.0, 0.0], [38583.0, 0.0], [40599.0, 0.0], [38935.0, 0.0], [40215.0, 0.0], [40071.0, 0.0], [40119.0, 0.0], [39527.0, 0.0], [39431.0, 0.0], [40487.0, 0.0], [40567.0, 0.0], [41335.0, 0.0], [31307.0, 0.0], [31963.0, 0.0], [31915.0, 0.0], [32179.0, 0.0], [37622.0, 0.0], [40726.0, 0.0], [40790.0, 0.0], [39222.0, 0.0], [39894.0, 0.0], [39910.0, 0.0], [39606.0, 0.0], [39718.0, 0.0], [40102.0, 0.0], [40438.0, 0.0], [40806.0, 0.0], [40950.0, 0.0], [41062.0, 0.0], [41014.0, 0.0], [41158.0, 0.0], [41590.0, 0.0], [41350.0, 0.0], [38581.0, 0.0], [39189.0, 0.0], [38981.0, 0.0], [40901.0, 0.0], [40005.0, 0.0], [39605.0, 0.0], [40421.0, 0.0], [40501.0, 0.0], [39349.0, 0.0], [40165.0, 0.0], [40037.0, 0.0], [41717.0, 0.0], [41525.0, 0.0], [41285.0, 0.0], [41157.0, 0.0], [32242.0, 0.0], [31850.0, 0.0], [33812.0, 0.0], [36628.0, 0.0], [35780.0, 0.0], [38004.0, 0.0], [40948.0, 0.0], [39460.0, 0.0], [40436.0, 0.0], [40276.0, 0.0], [39972.0, 0.0], [39524.0, 0.0], [40756.0, 0.0], [41044.0, 0.0], [41172.0, 0.0], [41444.0, 0.0], [41124.0, 0.0], [41460.0, 0.0], [261.0, 1.0], [34803.0, 0.0], [34979.0, 0.0], [35235.0, 0.0], [36627.0, 0.0], [37459.0, 0.0], [40067.0, 0.0], [39011.0, 0.0], [39635.0, 0.0], [40867.0, 0.0], [40883.0, 0.0], [39811.0, 0.0], [39043.0, 0.0], [40051.0, 0.0], [41059.0, 0.0], [41171.0, 0.0], [42163.0, 0.0], [41251.0, 0.0], [31561.0, 0.0], [32153.0, 0.0], [37458.0, 0.0], [39634.0, 0.0], [40754.0, 0.0], [40898.0, 0.0], [40914.0, 0.0], [40722.0, 0.0], [41394.0, 0.0], [41058.0, 0.0], [41026.0, 0.0], [41074.0, 0.0], [33937.0, 0.0], [35441.0, 0.0], [37921.0, 0.0], [38625.0, 0.0], [37825.0, 0.0], [38833.0, 0.0], [38817.0, 0.0], [37665.0, 0.0], [40833.0, 0.0], [39617.0, 0.0], [40033.0, 0.0], [40369.0, 0.0], [40241.0, 0.0], [40401.0, 0.0], [40689.0, 0.0], [40785.0, 0.0], [39153.0, 0.0], [39041.0, 0.0], [40193.0, 0.0], [40593.0, 0.0], [41681.0, 0.0], [41713.0, 0.0], [41169.0, 0.0], [41537.0, 0.0], [41137.0, 0.0], [15452.0, 0.0], [30464.0, 0.0], [31728.0, 0.0], [31832.0, 0.0], [31784.0, 0.0], [32896.0, 0.0], [34816.0, 0.0], [36640.0, 0.0], [40640.0, 0.0], [40368.0, 0.0], [39088.0, 0.0], [40208.0, 0.0], [40608.0, 0.0], [39248.0, 0.0], [40544.0, 0.0], [41568.0, 0.0], [41712.0, 0.0], [41360.0, 0.0], [41520.0, 0.0], [41264.0, 0.0], [36879.0, 0.0], [37695.0, 0.0], [38015.0, 0.0], [36975.0, 0.0], [40527.0, 0.0], [40095.0, 0.0], [39711.0, 0.0], [40255.0, 0.0], [39087.0, 0.0], [40143.0, 0.0], [39871.0, 0.0], [40159.0, 0.0], [41215.0, 0.0], [41151.0, 0.0], [41055.0, 0.0], [41439.0, 0.0], [27487.0, 0.0], [31223.0, 0.0], [32191.0, 0.0], [32503.0, 0.0], [32055.0, 0.0], [35934.0, 0.0], [35358.0, 0.0], [35486.0, 0.0], [37598.0, 0.0], [37886.0, 0.0], [38254.0, 0.0], [37806.0, 0.0], [38782.0, 0.0], [39230.0, 0.0], [39742.0, 0.0], [40878.0, 0.0], [40990.0, 0.0], [41262.0, 0.0], [41630.0, 0.0], [36669.0, 0.0], [37581.0, 0.0], [37437.0, 0.0], [38157.0, 0.0], [37549.0, 0.0], [40813.0, 0.0], [40861.0, 0.0], [40045.0, 0.0], [40477.0, 0.0], [40493.0, 0.0], [39837.0, 0.0], [39533.0, 0.0], [39565.0, 0.0], [40429.0, 0.0], [40221.0, 0.0], [40445.0, 0.0], [40749.0, 0.0], [40509.0, 0.0], [40525.0, 0.0], [42509.0, 0.0], [41133.0, 0.0], [41149.0, 0.0], [41437.0, 0.0], [41053.0, 0.0], [41037.0, 0.0], [41645.0, 0.0], [41933.0, 0.0], [27398.0, 0.0], [32758.0, 0.0], [33836.0, 0.0], [33708.0, 0.0], [37212.0, 0.0], [38892.0, 0.0], [37116.0, 0.0], [40092.0, 0.0], [40140.0, 0.0], [40700.0, 0.0], [38940.0, 0.0], [40300.0, 0.0], [40156.0, 0.0], [39244.0, 0.0], [39788.0, 0.0], [40924.0, 0.0], [41292.0, 0.0], [42108.0, 0.0], [41100.0, 0.0], [41324.0, 0.0], [41356.0, 0.0], [32779.0, 0.0], [35771.0, 0.0], [36123.0, 0.0], [35531.0, 0.0], [36571.0, 0.0], [37371.0, 0.0], [39179.0, 0.0], [39339.0, 0.0], [39163.0, 0.0], [40171.0, 0.0], [40747.0, 0.0], [39723.0, 0.0], [39195.0, 0.0], [41275.0, 0.0], [41019.0, 0.0], [31325.0, 0.0], [32589.0, 0.0], [34330.0, 0.0], [36410.0, 0.0], [36842.0, 0.0], [36218.0, 0.0], [38442.0, 0.0], [39994.0, 0.0], [39402.0, 0.0], [39162.0, 0.0], [40634.0, 0.0], [40506.0, 0.0], [40266.0, 0.0], [40218.0, 0.0], [40442.0, 0.0], [39562.0, 0.0], [40410.0, 0.0], [41450.0, 0.0], [41322.0, 0.0], [41658.0, 0.0], [41082.0, 0.0], [41242.0, 0.0], [7373.0, 0.0], [40889.0, 0.0], [40105.0, 0.0], [39433.0, 0.0], [39609.0, 0.0], [40377.0, 0.0], [40697.0, 0.0], [39289.0, 0.0], [41593.0, 0.0], [41097.0, 0.0], [41225.0, 0.0], [30324.0, 0.0], [31628.0, 0.0], [31964.0, 0.0], [34088.0, 0.0], [36328.0, 0.0], [35944.0, 0.0], [39960.0, 0.0], [38920.0, 0.0], [40744.0, 0.0], [39816.0, 0.0], [39992.0, 0.0], [39096.0, 0.0], [41416.0, 0.0], [41160.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42509.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 261.0, "maxY": 1.0, "series": [{"data": [[33319.0, 0.0], [36439.0, 0.0], [35415.0, 0.0], [38231.0, 0.0], [38711.0, 0.0], [37543.0, 0.0], [38583.0, 0.0], [40599.0, 0.0], [38935.0, 0.0], [40215.0, 0.0], [40071.0, 0.0], [40119.0, 0.0], [39527.0, 0.0], [39431.0, 0.0], [40487.0, 0.0], [40567.0, 0.0], [41335.0, 0.0], [31307.0, 0.0], [31963.0, 0.0], [31915.0, 0.0], [32179.0, 0.0], [37622.0, 0.0], [40726.0, 0.0], [40790.0, 0.0], [39222.0, 0.0], [39894.0, 0.0], [39910.0, 0.0], [39606.0, 0.0], [39718.0, 0.0], [40102.0, 0.0], [40438.0, 0.0], [40806.0, 0.0], [40950.0, 0.0], [41062.0, 0.0], [41014.0, 0.0], [41158.0, 0.0], [41590.0, 0.0], [41350.0, 0.0], [38581.0, 0.0], [39189.0, 0.0], [38981.0, 0.0], [40901.0, 0.0], [40005.0, 0.0], [39605.0, 0.0], [40421.0, 0.0], [40501.0, 0.0], [39349.0, 0.0], [40165.0, 0.0], [40037.0, 0.0], [41717.0, 0.0], [41525.0, 0.0], [41285.0, 0.0], [41157.0, 0.0], [32242.0, 0.0], [31850.0, 0.0], [33812.0, 0.0], [36628.0, 0.0], [35780.0, 0.0], [38004.0, 0.0], [40948.0, 0.0], [39460.0, 0.0], [40436.0, 0.0], [40276.0, 0.0], [39972.0, 0.0], [39524.0, 0.0], [40756.0, 0.0], [41044.0, 0.0], [41172.0, 0.0], [41444.0, 0.0], [41124.0, 0.0], [41460.0, 0.0], [261.0, 1.0], [34803.0, 0.0], [34979.0, 0.0], [35235.0, 0.0], [36627.0, 0.0], [37459.0, 0.0], [40067.0, 0.0], [39011.0, 0.0], [39635.0, 0.0], [40867.0, 0.0], [40883.0, 0.0], [39811.0, 0.0], [39043.0, 0.0], [40051.0, 0.0], [41059.0, 0.0], [41171.0, 0.0], [42163.0, 0.0], [41251.0, 0.0], [31561.0, 0.0], [32153.0, 0.0], [37458.0, 0.0], [39634.0, 0.0], [40754.0, 0.0], [40898.0, 0.0], [40914.0, 0.0], [40722.0, 0.0], [41394.0, 0.0], [41058.0, 0.0], [41026.0, 0.0], [41074.0, 0.0], [33937.0, 0.0], [35441.0, 0.0], [37921.0, 0.0], [38625.0, 0.0], [37825.0, 0.0], [38833.0, 0.0], [38817.0, 0.0], [37665.0, 0.0], [40833.0, 0.0], [39617.0, 0.0], [40033.0, 0.0], [40369.0, 0.0], [40241.0, 0.0], [40401.0, 0.0], [40689.0, 0.0], [40785.0, 0.0], [39153.0, 0.0], [39041.0, 0.0], [40193.0, 0.0], [40593.0, 0.0], [41681.0, 0.0], [41713.0, 0.0], [41169.0, 0.0], [41537.0, 0.0], [41137.0, 0.0], [15452.0, 0.0], [30464.0, 0.0], [31728.0, 0.0], [31832.0, 0.0], [31784.0, 0.0], [32896.0, 0.0], [34816.0, 0.0], [36640.0, 0.0], [40640.0, 0.0], [40368.0, 0.0], [39088.0, 0.0], [40208.0, 0.0], [40608.0, 0.0], [39248.0, 0.0], [40544.0, 0.0], [41568.0, 0.0], [41712.0, 0.0], [41360.0, 0.0], [41520.0, 0.0], [41264.0, 0.0], [36879.0, 0.0], [37695.0, 0.0], [38015.0, 0.0], [36975.0, 0.0], [40527.0, 0.0], [40095.0, 0.0], [39711.0, 0.0], [40255.0, 0.0], [39087.0, 0.0], [40143.0, 0.0], [39871.0, 0.0], [40159.0, 0.0], [41215.0, 0.0], [41151.0, 0.0], [41055.0, 0.0], [41439.0, 0.0], [27487.0, 0.0], [31223.0, 0.0], [32191.0, 0.0], [32503.0, 0.0], [32055.0, 0.0], [35934.0, 0.0], [35358.0, 0.0], [35486.0, 0.0], [37598.0, 0.0], [37886.0, 0.0], [38254.0, 0.0], [37806.0, 0.0], [38782.0, 0.0], [39230.0, 0.0], [39742.0, 0.0], [40878.0, 0.0], [40990.0, 0.0], [41262.0, 0.0], [41630.0, 0.0], [36669.0, 0.0], [37581.0, 0.0], [37437.0, 0.0], [38157.0, 0.0], [37549.0, 0.0], [40813.0, 0.0], [40861.0, 0.0], [40045.0, 0.0], [40477.0, 0.0], [40493.0, 0.0], [39837.0, 0.0], [39533.0, 0.0], [39565.0, 0.0], [40429.0, 0.0], [40221.0, 0.0], [40445.0, 0.0], [40749.0, 0.0], [40509.0, 0.0], [40525.0, 0.0], [42509.0, 0.0], [41133.0, 0.0], [41149.0, 0.0], [41437.0, 0.0], [41053.0, 0.0], [41037.0, 0.0], [41645.0, 0.0], [41933.0, 0.0], [27398.0, 0.0], [32758.0, 0.0], [33836.0, 0.0], [33708.0, 0.0], [37212.0, 0.0], [38892.0, 0.0], [37116.0, 0.0], [40092.0, 0.0], [40140.0, 0.0], [40700.0, 0.0], [38940.0, 0.0], [40300.0, 0.0], [40156.0, 0.0], [39244.0, 0.0], [39788.0, 0.0], [40924.0, 0.0], [41292.0, 0.0], [42108.0, 0.0], [41100.0, 0.0], [41324.0, 0.0], [41356.0, 0.0], [32779.0, 0.0], [35771.0, 0.0], [36123.0, 0.0], [35531.0, 0.0], [36571.0, 0.0], [37371.0, 0.0], [39179.0, 0.0], [39339.0, 0.0], [39163.0, 0.0], [40171.0, 0.0], [40747.0, 0.0], [39723.0, 0.0], [39195.0, 0.0], [41275.0, 0.0], [41019.0, 0.0], [31325.0, 0.0], [32589.0, 0.0], [34330.0, 0.0], [36410.0, 0.0], [36842.0, 0.0], [36218.0, 0.0], [38442.0, 0.0], [39994.0, 0.0], [39402.0, 0.0], [39162.0, 0.0], [40634.0, 0.0], [40506.0, 0.0], [40266.0, 0.0], [40218.0, 0.0], [40442.0, 0.0], [39562.0, 0.0], [40410.0, 0.0], [41450.0, 0.0], [41322.0, 0.0], [41658.0, 0.0], [41082.0, 0.0], [41242.0, 0.0], [7373.0, 0.0], [40889.0, 0.0], [40105.0, 0.0], [39433.0, 0.0], [39609.0, 0.0], [40377.0, 0.0], [40697.0, 0.0], [39289.0, 0.0], [41593.0, 0.0], [41097.0, 0.0], [41225.0, 0.0], [30324.0, 0.0], [31628.0, 0.0], [31964.0, 0.0], [34088.0, 0.0], [36328.0, 0.0], [35944.0, 0.0], [39960.0, 0.0], [38920.0, 0.0], [40744.0, 0.0], [39816.0, 0.0], [39992.0, 0.0], [39096.0, 0.0], [41416.0, 0.0], [41160.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42509.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11298.833333333334, "minX": 1.64585094E12, "maxY": 39777.98333333333, "series": [{"data": [[1.64585106E12, 38420.55], [1.64585094E12, 26094.266666666666], [1.64585124E12, 11298.833333333334], [1.64585112E12, 39064.98333333333], [1.64585118E12, 38931.0], [1.645851E12, 39777.98333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64585124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11298.883333333333, "minX": 1.64585094E12, "maxY": 39777.96666666667, "series": [{"data": [[1.64585106E12, 38420.53333333333], [1.64585094E12, 26094.233333333334], [1.64585124E12, 11298.883333333333], [1.64585112E12, 39064.98333333333], [1.64585118E12, 38931.01666666667], [1.645851E12, 39777.96666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64585124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11298.883333333333, "minX": 1.64585094E12, "maxY": 39777.96666666667, "series": [{"data": [[1.64585106E12, 38420.53333333333], [1.64585094E12, 26094.233333333334], [1.64585124E12, 11298.883333333333], [1.64585112E12, 39064.98333333333], [1.64585118E12, 38931.01666666667], [1.645851E12, 39777.96666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64585124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11298.883333333333, "minX": 1.64585094E12, "maxY": 39777.96666666667, "series": [{"data": [[1.64585106E12, 38420.53333333333], [1.64585094E12, 26094.233333333334], [1.64585124E12, 11298.883333333333], [1.64585112E12, 39064.98333333333], [1.64585118E12, 38931.01666666667], [1.645851E12, 39777.96666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64585124E12, "title": "Total Transactions Per Second"}},
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

