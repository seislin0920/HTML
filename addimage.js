//Initialize the map 
//chosen geographical coordinates and a zoom level
let zoom = 6.5; // 0 - 18
let center = [23.742197, 120.879237]; // 中心點座標（緯度,精度）
let map = L.map('map').setView(center, zoom);

//add a tile layer to add to our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',// 商用時必須要有版權出處
    zoomControl: true , // 是否秀出 - + 按鈕
}).addTo(map);


/*************************************************************************************************** */

//add something
// let marker = L.marker([25.049492995674367, 121.61888955545967]).addTo(map);
    //註記 bindPopup click 可重複出現
    //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

let polygon = L.polygon([
        [25.05, 121.62],
        [25.06, 121.62],
        [25.06, 121.63],
        [25.05, 121.63]
    ]).addTo(map);
//註記
// let popup = L.popup()
//    .setLatLng([25.049492995674367, 121.61888955545967])
//    .setContent("I am a standalone popup.")
//    .openOn(map);//非addTo,因openOn可在你再次打開新視窗時自動關閉

//listener function
function onMapClick(e) {
    
    alert("You clicked the map at " + e.latlng);
}
//map.on('click', onMapClick);

let popup = L.popup();
function onMapClick1(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString() + ".")
        //toString陣列中的每個元素用逗號串接起來成為一個字串，並回傳該字串
        .openOn(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
    polygon.bindPopup("<br>I am a polygon.");
}
map.on('click', onMapClick1);

//overlay layer

let imageUrl = './geology.png',
  m1 = [25.789446, 122.342059],
  m2 = [21.145936, 118.147584],
  imageBounds = [m1, m2];

L.marker(m1).addTo(map);
L.marker(m2).addTo(map);
L.imageOverlay(imageUrl, imageBounds, {
    opacity : 0.4,
} ).addTo(map);
// L.imageOverlay(imageUrl, imageBounds).bringToFront();
// imageOverlay.setStyle({
//     opacity: 0.5
//   })

